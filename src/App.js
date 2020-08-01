import React from "react";
import "./styles.css";

const item = {
  description: "travel to Manali",
  link: "https://sandeepachetan.com/things-to-do-manali/"
};

function WishItem() {
  const wishItemStyle = {
    background: "#efefef",
    border: "1px solid black",
    padding: "10px",
    marginTop: "5px"
  };
  return (
    <div style={wishItemStyle}>
      <span> {item.description} </span>
      <a href={item.link}> Visit</a>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Sushmita's Travel Destination List</h1>
      <h2>Sushmita's Travel List</h2>
      <WishItem />
    </div>
  );
}
