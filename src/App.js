import "./App.css";
import React from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Bookmarks from "./Bookmarks";
import Book from "./Book";
const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

function App() {
  return (
    <div className="home">
     <BrowserRouter>
      <Routes>
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/" element={<Book/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
