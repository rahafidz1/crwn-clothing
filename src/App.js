import "./App.css";
import Homepage from "../src/pages/homepage/homepage.component";


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <Route exact path="/" component={Homepage}></Route>
      <Route path="/hats" component={HatsPage}></Route> */}
      <Homepage/>
    </div>
  );
}

export default App;
