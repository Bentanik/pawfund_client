"use client";

import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/stores/store";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SendHorizontal, X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

const array: number[] = Array.from({ length: 100 }, (_, index) => index);

export default function MessageComponent() {
    const differentState = useAppSelector((state) => state.differenceSlice);
    const [textMessage, setTextMessage] = useState<string>("");
    const [connection, setConnection] = useState<any>(null);
    const [messages, setMessages] = useState<API.TMessage[]>([]);
    const [userNeedSupports, setUserNeedSupports] = useState<
        API.TGetUserNeedSupport[]
    >([]);
    const [infoParner, setInfoParner] =
        useState<API.TGetUserNeedSupport | null>(null);

    const userState = useAppSelector((state) => state.userSlice);

    const createConnection = async () => {
        const hubUrl = `${process.env.NEXT_PUBLIC_HUB_SERVER}/hub/message-hub?userId=${userState.user?.userId}&role=${userState.user?.roleId}`;
        const newConnection = new HubConnectionBuilder()
            .withUrl(hubUrl)
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    };

    useEffect(() => {
        const handleFetchConnection = async () => {
            if (userState.user !== null) {
                await createConnection();
            }
        };
        handleFetchConnection();
    }, [userState]);

    const handleFetchUserNeedSupport = async () => {
        await connection.send("GetListUserNeedSupport");
    };

    useEffect(() => {
        if (connection && userState?.user !== null) {
            connection
                .start()
                .then(() => {
                    handleFetchUserNeedSupport();
                    connection.on("onError", (message: string) => {
                        console.log(message);
                    });

                    connection.on("onSuccess", (message: string) => {
                        console.log(message);
                    });

                    connection.on(
                        "onReceiveMessageUser",
                        (message: TResponseDataHub<API.TMessage>) => {
                            handleFetchUserNeedSupport();
                            if (
                                infoParner?.UserId ==
                                message.Value.Data.SenderId
                            ) {
                                setMessages((prev) => [
                                    ...prev,
                                    message.Value.Data,
                                ]);
                            }
                        }
                    );
                    connection.on(
                        "onGetListUserNeedSupport",
                        (
                            message: TResponseDataHub<API.TGetUserNeedSupport[]>
                        ) => {
                            if (message.Value.Data?.length > 0)
                                setUserNeedSupports(message.Value.Data);
                            else setUserNeedSupports([]);
                        }
                    );
                    connection.on(
                        "onGetMessagesSenderAsync",
                        (message: TResponseDataHub<API.TMessage[]>) => {
                            setMessages(message.Value.Data);
                        }
                    );
                })
                .catch();
        }
    }, [connection]);

    const handleSendMessage = async () => {
        if (!connection) return;

        try {
            await connection.send("SendMessageWithMemberAsync", {
                userId: infoParner?.UserId || "",
                content: textMessage,
            });
            setMessages((prev) => [
                ...prev,
                {
                    SenderId: userState.user?.userId,
                    Content: textMessage,
                    ReceiverId: infoParner?.UserId,
                },
            ]);
            handleFetchUserNeedSupport();
            setTextMessage("");
        } catch (err) {
            console.log("Error sending message:", err);
        }
    };

    const messageYourBox = (
        item: API.TMessage,
        isLastInGroup: boolean,
        isFirstInGroup: boolean,
        index: number
    ) => {
        const isCurrentUserMessage = userState.user?.userId === item.SenderId;

        return (
            <div
                key={index}
                className={`py-2 flex gap-x-3 items-start ${
                    isCurrentUserMessage ? "justify-end" : "justify-start"
                }`}
            >
                {isFirstInGroup && !isCurrentUserMessage && (
                    <figure className="flex-shrink-0 rounded-full overflow-hidden w-10 h-10 border border-gray-300">
                        <img
                            src={infoParner?.User.CropAvatarUrl}
                            width={100}
                            height={100}
                            alt="avatar"
                        />
                    </figure>
                )}
                {!isFirstInGroup && !isCurrentUserMessage && (
                    <figure className="flex-shrink-0 rounded-full overflow-hidden w-10 h-10 border border-gray-300 opacity-0">
                        <img
                            src={infoParner?.User.CropAvatarUrl}
                            width={100}
                            height={100}
                            alt="avatar"
                        />
                    </figure>
                )}
                <div
                    className={`w-max flex items-center px-2 py-1 min-h-8 rounded-xl max-w-[80%] ${
                        isCurrentUserMessage ? "bg-blue-200" : "bg-slate-200"
                    }`}
                >
                    <p className="text-[14px] font-sans">
                        {item.Content || "No content available"}
                    </p>
                </div>
            </div>
        );
    };

    const renderMessages = (messages: API.TMessage[]) => {
        return messages.map((message, index) => {
            const isFirstInGroup =
                index === 0 ||
                (messages[index - 1].SenderId !== message.SenderId &&
                    messages[index - 1].ReceiverId !== message.ReceiverId);

            return messageYourBox(message, false, isFirstInGroup, index);
        });
    };

    useEffect(() => {
        if (infoParner?.UserId !== "") {
        }
    }, [infoParner?.UserId]);

    const handleFetchMessages = async (senderId: string) => {
        if (!connection) return;

        try {
            await connection.send("GetMessagesSenderIdAsync", senderId);
        } catch (err) {
            console.log("Error sending message:", err);
        }
    };

    const handleChangeUserMessage = (partnerId: string, index: number) => {
        setInfoParner(userNeedSupports[index]);
        handleFetchMessages(partnerId);
    };

    const cardUser = (item: API.TGetUserNeedSupport, index: number) => {
        return (
            <div
                key={index}
                className="select-none px-2 py-2 rounded-xl cursor-pointer hover:bg-[#0000001a] overflow-hidden"
                onClick={() => handleChangeUserMessage(item.UserId, index)}
            >
                <div className="flex items-center gap-x-4">
                    <figure className="rounded-full border border-zinc-300 w-14 h-14 flex items-center justify-center hover:bg-[#0000001a]">
                        <img
                            id="avatarButton"
                            className="w-9 h-9 rounded-full cursor-pointer"
                            src={item.User.CropAvatarUrl}
                            alt="user"
                        />
                    </figure>
                    <section className="flex flex-col gap-y-1">
                        <h3 className="text-base font-sans font-semibold">
                            {item.User.LastName + " " + item.User.FirstName}
                        </h3>
                        <p
                            className={`text-[14px] font-sans font-[400] truncate w-[200px] ${
                                item.Read === false && "!font-semibold"
                            }`}
                        >
                            {item.Content}
                        </p>
                    </section>
                </div>
            </div>
        );
    };

    const renderListUsers = () => {
        return userNeedSupports?.map((item, index) => {
            return cardUser(item, index);
        });
    };

    const handleCloseMessageUser = () => {
        setInfoParner(null);
        setTextMessage("");
        setMessages([]);
    };

    return (
        <div
            className={`fixed ${
                differentState.staff.openSidebar ? "w-[95%]" : "w-[77%]"
            }  h-[85%]`}
        >
            <div className="flex items-start relative h-full ">
                <div className="basis-1/3 h-full border-2 border-r-[1px] rounded-r-none rounded-lg overflow-hidden">
                    <div className="border-b-2">
                        <header className="px-3 h-[60px] flex items-center">
                            <div className="flex items-center">
                                <h3 className="text-xl font-semibold">
                                    New message
                                </h3>
                            </div>
                        </header>
                    </div>
                    <main className="pt-2 px-3 pb-[80px] overflow-y-auto h-[95%] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        {renderListUsers()}
                    </main>
                </div>
                <div className="flex-1 border-2 border-l-[1px] rounded-l-none rounded-lg h-full">
                    {infoParner?.UserId === undefined ||
                    infoParner?.UserId === null ? (
                        <div className="flex items-center justify-center h-full">
                            <h4 className="text-3xl">Please select user</h4>
                        </div>
                    ) : (
                        <Fragment>
                            <div className="border-b-2">
                                <header className=" px-4 h-[60px] flex items-center justify-between">
                                    <div className="flex items-center gap-x-4">
                                        <figure className="rounded-full border border-zinc-300 overflow-hidden w-[50px] h-[50px] flex items-center justify-center hover:bg-teal-400">
                                            <img
                                                id="avatarButton"
                                                className="w-9 h-9 rounded-full cursor-pointer"
                                                src={
                                                    infoParner.User
                                                        .CropAvatarUrl
                                                }
                                                alt="user"
                                            />
                                        </figure>
                                        <h3 className="text-base font-sans font-semibold">
                                            {infoParner.User.LastName +
                                                " " +
                                                infoParner.User.FirstName}
                                        </h3>
                                    </div>
                                    <div>
                                        <div
                                            className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 cursor-pointer"
                                            onClick={handleCloseMessageUser}
                                        >
                                            <X />
                                        </div>
                                    </div>
                                </header>
                            </div>
                            <div className="h-[80%] px-4 py-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                {renderMessages(messages)}
                            </div>
                            <div className="px-2 h-[10%] flex items-center w-full border-t-2">
                                <div className="w-full relative">
                                    <Input
                                        placeholder="Enter the chat content"
                                        type="text"
                                        value={textMessage}
                                        onChange={(e) =>
                                            setTextMessage(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                handleSendMessage();
                                            }
                                        }}
                                        className="border border-gray-400 rounded-3xl pr-14 py-6 focus-visible:ring-0 focus-visible:border-gray-700"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleSendMessage}
                                        className={`absolute top-1/2 right-5 -translate-y-1/2 rounded-full py-2 px-2 bg-blue-600 ${
                                            textMessage !== ""
                                                ? "opacity-1 "
                                                : "opacity-30"
                                        } `}
                                    >
                                        <span>
                                            <SendHorizontal className="text-white" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
}
