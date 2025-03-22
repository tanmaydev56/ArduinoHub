import { BrowserRouter as Router, Routes, Route,  useParams, useNavigate } from "react-router-dom";
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

function App() {
  // const { slug } = useParams();
  const navigate = useNavigate();
  return (
    
      <>
      <Navbar />
      <Routes>
        <Route
          path="/articles/lpg-robot"
          element={
            <>
              <button onClick={() => navigate(-1)} className=" bg-blue-600 absolute left-10 top-20 font-bold mb-4 cursor-pointer text-white rounded-full px-3 py-2 flex items-center">
        ← Back
      </button>
              <Main />
              <Application />
              <SuppliesDesc />
              <MaterialsPhotos />
              <ConnectionsList />
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
