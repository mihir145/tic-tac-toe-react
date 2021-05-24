import React, { useState } from "react";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setisCross] = useState(false);
  const [winMessage, setwinMessage] = useState("");

  const changeItem = (itemnumber) => {
    if (winMessage) {
      return alert(winMessage);
    }

    if (itemArray[itemnumber] === "empty") {
      itemArray[itemnumber] = isCross ? "cross" : "circle";
      setisCross(!isCross);
    } else {
      return alert("position already filled!");
    }

    checkIsWinner();
  };
  const reloadGame = () => {
    setisCross(false);
    setwinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setwinMessage(`${itemArray[0]} is winner!`);
      return alert(`${itemArray[0]} is winner!`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setwinMessage(`${itemArray[3]} is winner!`);
      return alert(`${itemArray[3]} is winner!`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setwinMessage(`${itemArray[6]} is winner!`);
      return alert(`${itemArray[6]} is winner!`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setwinMessage(`${itemArray[0]} is winner!`);
      return alert(`${itemArray[0]} is winner!`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setwinMessage(`${itemArray[1]} is winner!`);
      return alert(`${itemArray[1]} is winner!`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setwinMessage(`${itemArray[2]} is winner!`);
      return alert(`${itemArray[2]} is winner!`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setwinMessage(`${itemArray[0]} is winner!`);
      return alert(`${itemArray[0]} is winner!`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setwinMessage(`${itemArray[2]} is winner!`);
      return alert(`${itemArray[2]} is winner!`);
    }
  };

  return (
    <div className="main_container">
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="game_container">
        {itemArray.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                changeItem(index);
              }}
            >
              {item === "circle" && <i class="fa fa-circle"></i>}
              {item === "cross" && <i class="fa fa-close"></i>}
              {item === "empty" && <i class="fa fa-edit"></i>}
            </div>
          );
        })}
        <button
          style={{
            flex: 1,
            background: "#6f00ed",
            border: "none",
            padding: 10,
            color: "white",
            fontSize: 20,
            cursor: "pointer",
            marginTop: 20,
            borderRadius: 10,
          }}
          onClick={reloadGame}
        >
          reset game
        </button>
        <br />
      </div>
    </div>
  );
};

export default App;
