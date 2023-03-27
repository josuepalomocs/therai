import "./index.css";
import AppWrapper from "./components/Layout/AppWrapper";
import Calendar from "./components/Feature/Calendar/Calendar";
import Divider from "./components/Layout/Divider";

function App() {
  return (
    <AppWrapper>
      <Calendar />
      <Divider />
    </AppWrapper>
  );
}

export default App;
