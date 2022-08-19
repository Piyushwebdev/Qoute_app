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
import "react-toastify/dist/ReactToastify.css";

const getuser = () => {
  const datas = JSON.parse(localStorage.getItem("users"));
  return datas ? datas : [];
};
function Book() {
  const [users, setUsers] = useState(getuser);
  const [data, setData] = useState({});
  const [tags, setTags] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    fetchRandomQuote();
  }, [users]);

  const addSave = (data) => {
    try {
      toast("Successfuly saved to Bookmarks😍",{position: toast.POSITION.TOP_CENTER});
      setUsers((current) => [...current, data]);
    } catch (error) {
      toast("Not saved 😫");
    }
  };

  const helper = (value) => {
    setTags(value);
    fetchRandomQuote();
  };

  async function fetchRandomQuote() {
    try {
      const str = tags === "" ? "" : `?tags=${tags}`;
      const quoteObject = await axios.get(
        `https://api.quotable.io/random${str}`
      );
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
        <div className="home_body_box">
          <div className="box_qoute">" {data.content} "</div>
          <div className="box_footer">
            <p className="author">{data.author}</p>
            <div className="icon">
              <FavoriteBorderIcon onClick={() => addSave(data)} />
              <ToastContainer />
            </div>
          </div>
        </div>
        <DropdownButton id="dropdown-basic-button" title="Tags">
          <Dropdown.Item href="#/action-1" onClick={() => helper("education")}>
            Education
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => helper("character")}>
            Character
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => helper("technology")}>
            Technology
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => helper("history")}>
            History
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => helper("leadership")}>
            Leadership
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => helper("time")}>
            Time
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => helper("war")}>
            War
          </Dropdown.Item>
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
