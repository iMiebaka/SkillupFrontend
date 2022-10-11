import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import {useState} from "react"

function Page() {
  const [siteName, setSiteName] = useState("My Site Updated");
  return (
    <div>
      <Header siteName={siteName} />
      <Body setSiteName={setSiteName} />
      <Footer siteName={siteName} />
    </div>
  );
}

export default Page;
