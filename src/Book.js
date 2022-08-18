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

function Book() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
  const [tags, setTags] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    fetchRandomQuote();
  }, [users]);

  const localSet=(id)=>{
    setUsers(current => [...current, id]);
  }
  
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
    }
  }
  return (
    <div>
      <Navbar />
      <div className="home_body">
        <div className="home_body_box">
          <div className="box_qoute">{data.content}</div>
          <div className="box_footer">
            <div className="author">{data.author}</div>
            <div className="icon">
              <FavoriteBorderIcon onClick={() => localSet(data._id)} />
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
