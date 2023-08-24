import "./App.css";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
function App() {
  return <div className="App">
      <LifeCyclesCDU />
      <Counter1 />
      <Counter2/>
  </div>;
}

export default App;
/*import React, { useState } from "react";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";


const App = () => {

// Using useState hooks for defining state
const [counter1, setCounter1] = useState(0);

const increase1 = () => {
	setCounter1(counter1 + 1);
};
const [counter2, setCounter2] = useState(0);

const increase2 = () => {
	setCounter2(counter2 + 1);
};
	
return (
	<div className="container">
	<div>
		<Counter1 value={counter1} onClick={increase1} />
	</div>
	<div>
		<Counter2 value={counter2} onClick={increase2} />
	</div>
	</div>
);
};

export default App;*/
