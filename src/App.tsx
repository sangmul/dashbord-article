import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import AddNew from "./pages/AddNew";
import EditPost from "./pages/EditPost";
import Preview from "./pages/Preview";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/all-posts" />} />
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
};

export default App;