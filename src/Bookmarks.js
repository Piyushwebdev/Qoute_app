import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const getuser =()=>{
  const datas = JSON.parse(localStorage.getItem("users"));
  return datas?datas:[];
}
function Bookmarks() {

  const [items, setItems] = useState(getuser());
  const removeProduct = (index) => {
    console.log(index);
    setItems((current) =>
      current.filter((items) => items._id !== index)
    );
      console.log(items);
  }
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <Navbar />
      <div className="bookmark_bottom">
        {items.map((item) => (
          <div className="home_body_box" key={item._id}>
            <div className="box_qoute">" {item.content} "</div>
            <div className="box_footer">
              <p className="author">{item.author}</p>
              <div className="icon">
                <HighlightOffIcon onClick={()=>removeProduct(item._id)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
