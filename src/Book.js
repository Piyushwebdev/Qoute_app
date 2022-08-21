import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard"; 

const getuser = () => {
  const datas = JSON.parse(localStorage.getItem("users"));
  return datas ? datas : [];
};
function Book() {
  const [users, setUsers] = useState(getuser);
  const [data, setData] = useState({});
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [quoteCopied, setQuoteCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    fetchRandomQuote();
    fecthTags();
  }, [users]);

  async function fecthTags() {
    try {
      const response = await axios.get("https://api.quotable.io/tags");
      setTags(response.data);
    } catch (error) {
      console.log(error);
      toast("Something is wrong");
    }
  }
  console.log(tags);
  console.log(typeof tags);
  const addSave = (data) => {
    try {
      toast("Successfuly saved to Bookmarks😍", {
        position: toast.POSITION.TOP_CENTER,
      });
      setUsers((current) => [...current, data]);
    } catch (error) {
      toast("Not saved 😫");
    }
  };

  const helper = (value) => {
    setTags(value);
    fetchRandomQuote();
  };
  //To copy qoute
  function copyQuote(text) {
    copy(text);
    toast("Copied Succesfully!");
    setQuoteCopied(true);
  }
  
  async function fetchRandomQuote() {
    try {
      const str = tag === "" ? "" : `?tag=${tag}`;
      const quoteObject = await axios.get(
        `https://api.quotable.io/random${str}`
      );
      setQuoteCopied(false);
      setData(quoteObject.data);
    } catch (error) {
      console.log(error);
      toast("Something is wrong");
    }
  }
  return (
    <div>
      <Navbar />
      <div className="home_body">
        <h2 className="head">Qoute of the day👀</h2>
        <div className="home_body_box">
          <div className="box_qoute">" {data.content} "</div>
          <div className="box_footer">
          <div>
              <ContentCopyIcon className="copyicon" onClick={()=>copyQuote(`${data.content}-${data.author}`)} style={{ color: quoteCopied ? 'blue' : 'black' }}/>
              <ToastContainer />
          </div>
            <div className="author">{data.author}</div>
             <div>
              <FavoriteBorderIcon className="favicon" onClick={() => addSave(data)} />
              </div>
          </div>
        </div>
        <DropdownButton id="dropdown-basic-button" title="Tags">
          {tags.map((tag) => (
            <Dropdown.Item
              href="#/action-1"
              onClick={() => helper(`${tag.name}`)}
            >
              {tag.name.toUpperCase()}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Button
          className="next_button"
          variant="dark"
          onClick={fetchRandomQuote}
        >
          Next Quote
        </Button>
      </div>
    </div>
  );
}

export default Book;
