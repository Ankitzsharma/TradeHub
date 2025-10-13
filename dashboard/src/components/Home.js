import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import AuthGate from "./AuthGate";

const Home = () => {
  return (
    <AuthGate>
      <TopBar />
      <Dashboard />
    </AuthGate>
  );
};

export default Home;