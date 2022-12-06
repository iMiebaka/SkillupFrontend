import { PubNubProvider, usePubNub } from "pubnub-react";
import { useEffect, useState } from "react";

function Chat() {
  const pubnub = usePubNub();
  const [channels] = useState(["awesome-channel"]);
  const [messages, addMessage] = useState([]);
  const [message, setMessage] = useState("");
  const handleMessage = (event) => {
    const message = event.message;
    if (typeof message === "string" || message.hasOwnProperty("text")) {
      const text = message.text || message;
      addMessage((messages) => [...messages, text]);
    }
  };

  const sendMessage = (message) => {
    if (message) {
      pubnub
        .publish({ channel: channels[0], message })
        .then(() => setMessage(""));
    }
  };

  useEffect(() => {
    pubnub.addListener({ message: handleMessage });
    pubnub.subscribe({ channels });
  }, [pubnub, channels]);

  return <div>Chat</div>;
}

export default Chat;
