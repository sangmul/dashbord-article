import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard Article</h1>
      <main>{children}</main>
    </div>
  );
};

export default Layout;