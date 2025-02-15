"use client";
import Image from "next/image";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TabsButton from "./Components/Tabs/TabsButton";
import { useState } from "react";
import TabsContentContainer from "./Components/Tabs/TabsContentContainer";


export default function Home() {

  const [tabsLabel, setTabsLAbel] = useState([
    { id: "music", label: "Music", isActive: true },
    { id: "videos", label: "Videos", isActive: false },
    { id: "games", label: "Games", isActive: false },
    { id: "sports", label: "Sports", isActive: false },
  ]);

  const [contentContainer, setContentContainer] = useState([
    { id: "music-container", isActive: true, background: "bg-green-500" },
    { id: "videos-container", isActive: false, background: "bg-blue-500" },
    { id: "games-container",  isActive: false, background: "bg-yellow-500" },
    { id: "sports-container", isActive: false,  background: "bg-orange-500" },
  ]);

  const [data, setData] = useState([
    { id: 1, title: "parokya 1" },
    { id: 2, title: "parokya 2" },
    { id: 3, title: "parokya 3" },
    { id: 4, title: "parokya 4" },
    { id: 5, title: "parokya 5" },
    { id: 6, title: "parokya 6" },
    { id: 7, title: "parokya 7" },
    { id: 8, title: "parokya 8" },
    { id: 9, title: "parokya 9" },
    { id: 10, title: "parokya 10" },
    { id: 11, title: "parokya 5" },
    { id: 12, title: "parokya 6" },
    { id: 13, title: "parokya 7" },
    { id: 14, title: "parokya 8" },
    { id: 15, title: "parokya 9" },
  ]);

  const changeActiveTab = (id) => {
    setTabsLAbel((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isActive: tab.id === id,
      }))
    );
  
    setContentContainer((prevContent) =>
      prevContent.map((content) => ({
        ...content,
        isActive: content.id === `${id}-container`, 
      }))
    );
  };
  


  return (
    <div className="items-center justify-items-center flex flex-col w-screen size-fit p-0 bg-white">
      <Header/>
      <main className="min-h-[80%] size-fit w-full border-2 border-black flex flex-col">
        <TabsButton
          tabProperties={tabsLabel}
          tabOnClick={changeActiveTab}
        />
        <TabsContentContainer
          containerProperties={contentContainer}
          contentData={data}
        />
      </main>
      <Footer/>
    </div>
  );
}
