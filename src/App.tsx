import { BrowserRouter as Router } from "react-router-dom";

//Third party
import ChartStyle from "./components/Charts/ChartStyle";

// Internal imports
import { ThemeRoutes } from "./routes";
import { GlobalContext } from "./context/GlobalContext";

//Style
import "./App.css";

export const App = () => {
  return (
    <GlobalContext>
      <div className="app-container">
        <Router>
          <ChartStyle />
          <ThemeRoutes />
        </Router>
      </div>
    </GlobalContext>
  );
};
