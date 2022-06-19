import { BrowserRouter} from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import { Home } from "./views/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
