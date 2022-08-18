import "./App.css";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Bookmarks from "./Bookmarks";
import Book from "./Book";

function App() {
 
  return (
    <div className="home">
     <BrowserRouter>
      <Routes>
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/" element={<Book/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
