import React from "react";
import s from "./Main.module.css";
import db from "../../db/db.json";

// function declaration
function Main({ data }) {
  console.log(data);
  const { one, two, three } = data;
  return (
    <main className={s.main}>
      <h1>Hello world!</h1>
      <h2>MAIN</h2>
      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ul>
    </main>
  );
}
export default Main;
