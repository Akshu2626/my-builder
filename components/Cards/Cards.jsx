import React, { useState } from "react";
import { jsx } from "react/jsx-runtime";

const Cards = () => {
  const [user, setUser] = useState([]);
  const fetchedData = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/products`);
      const res = await data.json();
      setUser(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  fetchedData();

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        width: "100vw",
        height: "max-content",
        backgroundColor: "white",
        padding: "15px",
      }}
    >
      {user?.products?.map((e) => {
        return (
          <div
            style={{
              width: "max-content",
              height: "max-content",
              padding: "20px",
              backgroundColor: "black",
            }}
          >
            <p> {e.id} </p>
            <p> {e.title} </p>
            <p> {e.price} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
