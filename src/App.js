import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuPage from "./pages/MenuPage";
import IngredientDetailPage from "./pages/IngredientDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/ingredient/:id" element={<IngredientDetailPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
export default App;
