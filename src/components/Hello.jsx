import React from "react";

const Hello = () => {
  const studentData = {
    username: "bisen_tejas",
    rollNo: 60,
    Year: 4,
    Dept: "CSE",
  };

  const name = "bisen_tejas";
  const add = (x, y) => x + y; // Modern ES6 High Order Function
  const link = "https://www.pexels.com/";
  const imgUrl =
    "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <h1> Hello :{name}</h1>
      <h2> Sum is : {add(10, 20)}</h2>
      <img src={imgUrl} alt=" Img Not Found" width={300} />
      <button> Click Me</button>
      <a href={link}> Go to Pexel.com</a>

      <h1> {studentData.username}</h1>
      <h1> {studentData.rollNo}</h1>
      <h1> {studentData.Year}</h1>
      <h1> {studentData.Dept}</h1>
    </>
  );
};

export default Hello;
