import { useGlobalContext } from "./context";
import QuoteBox from "./QuoteBox";

function App() {
  const { color } = useGlobalContext();
  return (
    <div id="wrapper" style={{ background: `${color}` }}>
      <QuoteBox />
    </div>
  );
}

export default App;
