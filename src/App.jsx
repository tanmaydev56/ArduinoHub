import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Application from "./components/Application";
import SuppliesDesc from "./components/SuppliesDesc";
import MaterialsPhotos from "./components/MaterialsPhotos";
import ConnectionsList from "./components/ConnectionsCkt";
import CodePreview from "./components/CodePrieview";
import Summary from "./components/Summary";
import "./App.css";
import BlogDetail from "./pages/BlogDetail";
import Articles from "./pages/Blogpage";
import MainDashboard from "./pages/MainDashboard";
import Circuitdiagram from "./components/Circuitdiagram";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname !== "/" && (
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 absolute left-10 top-20 font-bold mb-4 cursor-pointer text-white rounded-full px-3 py-2 flex items-center"
        >
          ← Back
        </button>
      )}
      <Routes>
        <Route
          path="/articles/lpg-robot"
          element={
            <>
              <Main />
              <Application />
              <SuppliesDesc />
              <MaterialsPhotos />
              <ConnectionsList />
              <Circuitdiagram/>
              <CodePreview />
              <Summary />
            </>
          }
        />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<BlogDetail />} />
        <Route path="/" element={<MainDashboard />} />
      </Routes>
    </>
  );
}

export default App;
