import "./App.css";
import Pricing from "./Components/Pricing/pricing";
import Toggle from "./Components/Utils/Toggle";

function App() {
  return (
    <>
      <Toggle></Toggle>
      <div className="mx-auto my-8 max-w-5xl xs:px-2 sm:px-8">
        <Pricing></Pricing>
      </div>
    </>
  );
}

export default App;
