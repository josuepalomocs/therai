import "./index.css";
import AppWrapper from "./components/Layout/AppWrapper";
import Calendar from "./components/Feature/Calendar/Calendar";
import Divider from "./components/Layout/Divider";
import Journal from "./components/Feature/Journal/Journal";

function App() {
  return (
    <AppWrapper>
      <Calendar />
      <Divider />
      <Journal />
    </AppWrapper>
  );
}

export default App;
