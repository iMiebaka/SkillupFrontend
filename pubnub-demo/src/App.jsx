import React, { useState, useEffect } from "react";
import PubNub from "pubnub";
import { PubNubProvider, usePubNub } from "pubnub-react";

import {
  // Chat,
  MessageList,
  MessageInput,
  ChannelList,
  MemberList,
} from "@pubnub/react-chat-components";

const pubnub = new PubNub({
  publishKey: import.meta.env.VITE_publishKey,
  subscribeKey: import.meta.env.VITE_subscribeKey,
  uuid: import.meta.env.VITE_uuid,
});


function App() {
  return (
    <PubNubProvider client={pubnub}>
      <Chat {...{ currentChannel, theme }}>
        <MessageList />
        <MessageInput />
      </Chat>
    </PubNubProvider>
  );
}

export default App;
