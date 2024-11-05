import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";
import AddCategoryPage from "./pages/AddCategoryPage/AddCategoryPage.jsx";
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage.jsx";
import RoutePage from "./pages/RoutePage/RoutePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <main className="main">
          <Routes>
            <Route path="/" element={<RoutePage />} />
            <Route path="/addcategory" element={<AddCategoryPage />} />
            <Route path="/addtask" element={<AddTaskPage />} />
            <Route path="/:month/:date" element={<HomePage />} />
          </Routes>
        </main>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
