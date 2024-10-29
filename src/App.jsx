// import "./App.css";
import DaisyNav from "./components/daisynav/DaisyNav";
import CreatNav from "./components/creatNav/CreatNav";
import PriceCards from "./components/priceCard/PriceCards";
import LineCharts from "./components/lineCharts/LineCharts";
import BarChart from "./components/barChart/BarChart";

function App() {
  return (
    <>
      <CreatNav></CreatNav>
      {/* <DaisyNav></DaisyNav> */}
      <PriceCards></PriceCards>
      <LineCharts></LineCharts>
      <BarChart></BarChart>
    </>
  );
}

export default App;
