import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const getuser =()=>{
  const datas = JSON.parse(localStorage.getItem("users"));
  return datas?datas:[];
}
 
function Bookmarks() {
  const [items, setItems] = useState(getuser());
  const [quoteCopied, setQuoteCopied] = useState(false);
  const removeProduct = (index) => {
    console.log(index);
    setItems((current) =>
      current.filter((items) => items._id !== index)
    );
      console.log(items);
      toast('Removed from Bookmarked Section🤧',{position: toast.POSITION.TOP_CENTER});
  }
   //To copy qoute
   function copyQuote(text) {
    navigator.clipboard.writeText(text);
    setQuoteCopied(true);
  }
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <div className="bookmark_bottom">
        {items.map((item) => (
          <div className="home_body_box" key={item._id}>
            <div className="box_qoute">" {item.content} "</div>
            <div className="box_footer">
            <div>
              <ContentCopyIcon className="copyicon" onClick={()=>copyQuote(`${item.content}`-`${item.author}`)} style={{ color: quoteCopied ? 'blue' : 'black' }}/>
              <ToastContainer />
            </div>
            <div className="author">{item.author}</div>
             <div>
             <HighlightOffIcon className="favicon" onClick={()=>removeProduct(item._id)}/>
            </div>
          </div>
       </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
