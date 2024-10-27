"use client";

import SignalRService from "@/hooks/use-message-hub";
import { closeMessageUser } from "@/stores/difference-slice";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { SendHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { HubConnectionBuilder } from "@microsoft/signalr";

const messages = [
  { index: 0 },
  { index: 0 },
  { index: 1 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 1 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 1 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 1 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 0 },
  { index: 1 },
  { index: 0 },
  { index: 0 },
];

export default function Message({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();
  const differenceState = useAppSelector((state) => state.differenceSlice);
  const userState = useAppSelector((state) => state.userSlice);
  const [connection, setConnection] = useState<any>(null);
  const [textMessage, setTextMessage] = useState<string>("");

  const createConnection = async () => {
    const hubUrl = `${process.env.NEXT_PUBLIC_HUB_SERVER}/hub/message-hub?userId=${userState.user?.userId}&role=${userState.user?.roleId}`;
    const newConnection = new HubConnectionBuilder()
      .withUrl(hubUrl)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  };

  useEffect(() => {
    createConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          connection.on("onError", (message: string) => {
            console.log(message);
          });

          connection.on("onSuccess", (message: string) => {
            console.log(message);
          });
        })
        .catch();
    }
  }, [connection]);

  const handleCloseMessage = () => {
    dispatch(closeMessageUser());
  };

  const handleSendMessage = async () => {
    if (!connection) return;

    try {
      // const message = "Hello from client!";
      // await connection.sendMessageWithChatBotAsync(
      //   userState.user?.userId || "",
      //   textMessage
      // );
      await connection.send("SendMessageWithChatBotAsync", {
        userId: userState.user?.userId || "",
        content: textMessage,
      });
      console.log("Message sent:", textMessage);
    } catch (err) {
      console.log("Error sending message:", err);
    }
  };

  const messageYourBox = (index: number, isLastInGroup: boolean) => {
    return (
      <div
        className={`py-2 flex gap-x-3 items-start ${
          index === 0 ? "justify-start" : "justify-end"
        }`}
      >
        {index === 0 && !isLastInGroup ? (
          <figure className="flex-shrink-0 rounded-full overflow-hidden w-10 h-10">
            <img
              src={"/images/meo1.jpg"}
              width={100}
              height={100}
              alt="avatar"
            />
          </figure>
        ) : (
          <figure className="flex-shrink-0 rounded-full overflow-hidden w-10 h-10 opacity-0">
            <img
              src={"/images/meo1.jpg"}
              width={100}
              height={100}
              alt="avatar"
            />
          </figure>
        )}
        <div className="w-max flex items-center px-2 py-1 min-h-8 rounded-xl bg-slate-200 max-w-[80%]">
          <p className="text-[14px] font-sans">
            {
              "What the fuckWhat the fuckWhat the fuckWhat the fuckWhat the fuckWhat the fuckWhat the fuckWhat the fuckWhat the fuckWhat the fuck"
            }
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {differenceState.message.openMessageUser && (
        <div className="fixed bottom-5 right-5 z-50">
          <div className="w-[50vw] h-[80vh] bg-white rounded-lg shadow-box-shadown flex flex-col">
            <header className="h-[10%] flex justify-between items-center px-5 py-5 border-b">
              <div className="flex items-center">
                <figure className="border w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center p-2 cursor-pointer">
                  <div
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "30px",
                      height: "30px",
                    }}
                    className="flex items-center justify-between"
                  >
                    <img
                      src={"/images/cat.png"}
                      width={170}
                      height={170}
                      alt="avatar"
                    />
                  </div>
                </figure>
                <h4 className="text-base font-bold ml-2">Assistant</h4>
              </div>
              <div>
                <button
                  onClick={handleCloseMessage}
                  type="button"
                  className="py-2 px-2 rounded-sm hover:bg-gray-300"
                >
                  <span>
                    <X className="w-6 h-6" />
                  </span>
                </button>
              </div>
            </header>
            <main className="h-[80%] px-2 bg-orange-400 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {messages.map((msg, i) => {
                const isLastInGroup =
                  i > 0 && messages[i - 1].index === 0 && msg.index === 0;
                return messageYourBox(msg.index, isLastInGroup);
              })}
            </main>
            <footer className="h-[20%] px-2 py-6 flex flex-col gap-y-2">
              <div className="relative">
                <Input
                  placeholder="Enter the chat content"
                  type="text"
                  value={textMessage}
                  onChange={(e) => setTextMessage(e.target.value)}
                  className="border border-gray-400 rounded-3xl pr-14 py-6 focus-visible:ring-0 focus-visible:border-gray-700"
                />
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className={`absolute top-1/2 right-5 -translate-y-1/2 rounded-full py-2 px-2 bg-blue-600 ${
                    textMessage !== "" ? "opacity-1 " : "opacity-30"
                  } `}
                >
                  <span>
                    <SendHorizontal className="text-white" />
                  </span>
                </button>
              </div>
              <h3 className="text-center text-[15px]">
                Integrating artificial intelligence and information for
                reference
              </h3>
            </footer>
          </div>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
