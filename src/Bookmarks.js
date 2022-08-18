import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Bookmarks() {
  const getuser =()=>{
    const datas = JSON.parse(localStorage.getItem("users"));
    return datas?[]:datas;
  }
  const [items, setItems] = useState([getuser]);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("users"));
    if (items) {
      setItems(datas);
    }
  }, [items]);
  console.log(items);
  return (
    <div>
      <Navbar />
      <div className="bookmark_bottom">
        {items.map((item) => (
          <div className="home_body_box" key={item._id}>
            <div className="box_qoute">{item.content}</div>
            <div className="box_footer">
              <div className="author">{item.author}</div>
              <div className="icon">
                <HighlightOffIcon/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
