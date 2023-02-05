import React from "react";
import Header from "../components/defaultLayout/Header";
import Sidebar from "../components/defaultLayout/Sidebar";
import RC4com from "../components/RC4com";

const RC4 = () => {
  return (
    <div className="container h-screen xl:max-w-screen-xl mx-auto flex flex-col gap-4">
      <Header></Header>
      <main className="w-full h-full flex flex-col md:flex-row gap-4">
        <Sidebar></Sidebar>
        <RC4com></RC4com>
      </main>
    </div>
  );
};

export default RC4;
