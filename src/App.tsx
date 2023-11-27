import { BrowserRouter as Router } from "react-router-dom";

//Third party
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import ChartStyle from "./components/Charts/ChartStyle";

// Internal imports
import { ThemeRoutes } from "./routes";
import { GlobalContext } from "./context/GlobalContext";

//Style
import "./App.css";

Chart.register(CategoryScale);
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
