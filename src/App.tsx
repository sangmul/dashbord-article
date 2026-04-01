import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import AddNew from "./pages/AddNew";
import EditPost from "./pages/EditPost";
import Preview from "./pages/Preview";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/all-posts" />} />
        <Route 
            path="/all-posts" 
            element={
                <Layout>
                <AllPosts />
                </Layout>
            } 
        />
        <Route 
            path="/add-new" 
            element={
                <Layout>
                    <AddNew />
                </Layout>
            } 
        />
        <Route 
            path="/edit/:id" 
            element={
                <Layout>
                    <EditPost />
                </Layout>
            } 
        />
        <Route 
            path="/preview"
            element={
                <Layout>
                    <Preview />
                </Layout>
            } 
        />
      </Routes>
    </Router>
  );
};

export default App;