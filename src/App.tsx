import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseStateComponent from "./UseStateComponent";

function App() {
  return (
    <div>
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
