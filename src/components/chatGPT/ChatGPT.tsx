import { useState, ReactElement } from "react";
import "./chatGPT.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MessageType } from "@chatscope/chat-ui-kit-react";
import dotenv from 'dotenv';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";



interface ChatMessage {
  message: string;
  sentTime?: string;
  sender: string;
}

function ChatGPT(): ReactElement {
  dotenv.config();

  // Lấy giá trị của biến môi trường REACT_APP_API_KEY
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [chat, setChat] = useState("hiddenChat");
  const [app, setApp] = useState("hiddenApp");

  const showChat = () => {
    setChat(chat === "hiddenChat" ? "chat" : "hiddenChat");
    setApp(app === "hiddenApp" ? "app" : "hiddenApp");
  };
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSend = async (message: string): Promise<void> => {
    const newMessage: ChatMessage = {
      message,
      sender: "user",
    };

    const newMessages: ChatMessage[] = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: ChatMessage[]): Promise<void> {

    let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
            role = "assistant";
        } else {
            role = "user";
        }
        return { role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to
    // determine how we want chatGPT to act.
    const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "Explain things like you're talking to a software professional with 2 years of experience." },
            ...apiMessages,
        ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
    })
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            setMessages([
                ...chatMessages,
                {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT",
                },
            ]);
            setIsTyping(false);
        })
        .catch((error) => {
            console.error("Error processing message to ChatGPT:", error);
            setIsTyping(false);
        });
}


  const [msgType, setMsgType] = useState<MessageType>("text"); 

  const messageType = (sender: string): MessageType => {
    return sender === "user" ? "text" : "custom";
  };
  
  const direction = (sender: string) =>{
    return sender === "user" ? 'incoming': 'outgoing';
  };

  return (
    <div
      className={app}
      style={{
        position: "fixed",
        minWidth: "100px",
        bottom: 0,
        right: 0,
      }}
    >
      <div>
        <div className="chatHeader">
          <div className="chatGPT" onClick={showChat}>
            Chat GPT
          </div>
          {chat === "chat" && (
            <button className="closeChat" onClick={showChat}>
              x
            </button>
          )}
        </div>
        <MainContainer id={chat}>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return (
                  <Message model={{direction: (message.sender === "user") ? "outgoing" : "incoming" , position:'normal'}}  key={i} type={messageType(message.sender)}>
                    <Message.TextContent>{message.message}</Message.TextContent>
                  </Message>
                );
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default ChatGPT;
