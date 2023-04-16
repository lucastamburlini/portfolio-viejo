import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { dataTabs } from "../data/data.js";
import "../styles/main.scss";

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Tabs
      id="about"
      className="tabs container"
      defaultIndex={activeIndex}
      onSelect={handleTabClick}
    >
      <TabList className="tabList">
        {dataTabs.map((tab, index) => {
          const isSelected = activeIndex === index;
          return (
            <Tab key={tab.id}>
              <a href={`#${tab.id}`} onClick={(e) => e.preventDefault()}>
                {tab.title}
              </a>
              {isSelected && <div className="tabList-selected" />}
            </Tab>
          );
        })}
      </TabList>
      {dataTabs.map((tab, index) => {
        return (
          <TabPanel key={tab.id} hidden={activeIndex !== index}>
            <div className="tabPanel">{tab.content}</div>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default Main;
