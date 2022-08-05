import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Posts from "./pages/Posts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/new" element={<CreatePost />} />
          <Route path="/edit/:post_id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
