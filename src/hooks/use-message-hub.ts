import { store } from "@/stores/store";
import { setStorageItem } from "@/utils/local-storage";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
  HubConnectionState,
} from "@microsoft/signalr";

class SignalRService {
  private static instance: SignalRService;
  private connection: HubConnection | null = null;
  private isConnected: boolean = false;

  private constructor() {
    // Khởi tạo kết nối ngay khi dịch vụ được tạo
    this.initializeConnection();
  }

  public static getInstance(): SignalRService {
    if (!SignalRService.instance) {
      SignalRService.instance = new SignalRService();
    }
    return SignalRService.instance;
  }

  private async initializeConnection() {
    const userState = store.getState().userSlice.user;
    if (!this.isConnected && userState) {
      const hubUrl = `${process.env.NEXT_PUBLIC_HUB_SERVER}/hub/message-hub?userId=${userState.userId}&role=${userState.roleId}`;
      this.connection = new HubConnectionBuilder()
        .withUrl(hubUrl)
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect()
        .build();

      this.connection.on("receiveMessage", (message) => {
        console.log("Received message: ", message);
        // store.dispatch(addMessage(message)); // Uncomment if you want to dispatch the message
      });

      try {
        await this.connection.start();
        console.log("SignalR Connected");
        this.isConnected = true;
        setStorageItem("signalr_connected", "true");
      } catch (err) {
        console.error("Error while starting connection: ", err);
      }
    }
  }

  public async sendMessageWithStaff(userId: string, content: string) {
    if (this.connection?.state === HubConnectionState.Connected) {
      await this.connection.invoke("SendMessageWithStaffAsync", {
        userId: userId,
        content: content,
      });
    } else {
      console.error("Connection not established. Cannot send message.");
    }
  }

  public async stopConnection() {
    if (this.connection) {
      await this.connection.stop();
      this.isConnected = false;
      setStorageItem("signalr_connected", "false");
      console.log("SignalR Connection stopped");
    }
  }
}

export default SignalRService.getInstance();
