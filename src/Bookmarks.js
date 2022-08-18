import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import "./App.css"

function Bookmarks({}) {
  const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('users'));
  if (items) {
   setItems(items);
  }
}, []);
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Bookmarks