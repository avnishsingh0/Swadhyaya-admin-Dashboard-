import { BrowserRouter as Router } from "react-router-dom";

//Third party

// Internal imports
import { ThemeRoutes } from "./routes";

//Style
import "./App.css";
import { GlobalContext } from "./context/GlobalContext";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
function App() {
  return (
    <GlobalContext>
      <div className="app-container">
        <Router>
          <ThemeRoutes />
        </Router>
      </div>
    </GlobalContext>
  );
}

export default App;
