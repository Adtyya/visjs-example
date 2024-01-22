import React, { useEffect } from "react";
import { Timeline, DataSet } from "vis-timeline/standalone";

const App = () => {
  useEffect(() => {
    // create data and a Timeline
    const container = document.getElementById("visualization");

    const itemsData = [
      { id: 1, content: "item 1", start: "2013-04-20" },
      { id: 2, content: "<span>item 2</span>", start: "2013-04-14" },
      {
        id: 3,
        content: '<div><span class="large">item 3</span></div>',
        start: "2013-04-18",
      },
      {
        id: 4,
        content: 'item <span class="large">4</span>',
        start: "2013-04-16",
        end: "2013-04-19",
      },
      {
        id: 5,
        content:
          '<div>item 5<br><img src="https://logowik.com/content/uploads/images/upwork9617.logowik.com.webp" style="width: 48px; height: 48px;" />',
        start: "2013-04-25",
        style: {
          maxWidth: "50px",
          maxHeight: "50px",
          objectFit: "contain",
        },
      },
      {
        id: 6,
        content:
          'item6<br><img src="https://logowik.com/content/uploads/images/upwork9617.logowik.com.webp" className="image" />',
        start: "2013-04-27",
        style: {
          maxWidth: "50px",
          maxHeight: "50px",
          objectFit: "contain",
        },
      },
      {
        id: 7,
        content:
          'item7<br><a href="https://visjs.org" target="_blank">click here</a>',
        start: "2013-04-21",
      },
    ];

    const items = new DataSet(itemsData);
    const options = {};
    const timeline = new Timeline(container, items, options);

    // Membersihkan instance timeline saat komponen unmount
    return () => {
      if (timeline) {
        timeline.destroy();
      }
    };
  }, []);

  return <div id="visualization" />;
};

export default App;
