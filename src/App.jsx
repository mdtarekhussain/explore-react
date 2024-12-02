import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button click");
  }
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1> React Core Concept</h1>
      <Friends></Friends>
      <Counter></Counter>
      <Users></Users>
      <Team></Team>
      <button onClick={handleClick}>Click</button>
      <button
        onClick={() => {
          alert("third");
        }}
      >
        Third
      </button>
      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        Five
      </button>
    </>
  );
}

export default App;
