import './assets/css/styles.css';
import './assets/ionicons/css/ionicons.min.css';
import Header from "./components/Header/Header";
import Budget from './components/Budget/Budget'
import { GlobalProvider } from "../src/contex/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Budget />
      </GlobalProvider>
    </>
  );
}

export default App;
