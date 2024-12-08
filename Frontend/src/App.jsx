import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from ReactDOM
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "aos/dist/aos.css";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage"; 
import GalleryPage from "./Pages/GalleryPage";
import ScannerPage from "./Pages/ScannerPage";
import LoginPage from "./Pages/LoginPage"
import HeadquarterLogin from "./Components/HeadquarterLogin";
import StateLogin from "./Components/StateLogin";
import BranchLogin from "./Components/BranchLogin";
import MemberAreaPage from "./Pages/MemberAreaPage";
import CoursesPage from "./Pages/CoursesPage";
import NewsLetterPage from "./Pages/NewsLetterPage";
import AnnalsPage from "./Pages/AnnalsPage";
import ConstitutionPage from "./Pages/ConstitutionPage";
import ActivityPage from "./Pages/ActivityPage";
import GC_MinutesPage from "./Pages/GC_MinutesPage";
import GC_MembersPage from "./Pages/GC_MembersPage";
import SalutationPage from "./Pages/SalutationPage";
import PrayerPage from "./Pages/PrayerPage";
import PastBearersPage from "./Pages/PastBearersPage";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/gallery" element={<GalleryPage />} /> 
          <Route path="/scanner" element={<ScannerPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/headquarter-login" element={<HeadquarterLogin />} />
        <Route path="/state-login" element={<StateLogin />} />
        <Route path="/branch-login" element={<BranchLogin />} />
        <Route path="/member-area" element={<MemberAreaPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/newsletter" element={<NewsLetterPage />} />
        <Route path="/annals" element={<AnnalsPage />} />
        <Route path="/constitution" element={<ConstitutionPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/gc-minutes" element={<GC_MinutesPage />} />
        <Route path="/gc-members" element={<GC_MembersPage />} />

        <Route path="/salutation" element={<SalutationPage />} />
        <Route path="/prayer" element={<PrayerPage />} />
        <Route path="/past-bearers" element={<PastBearersPage />} />




        </Routes>
      </div>
    </Router>
  );
};

// Create the root element
const rootElement = document.getElementById("root");

// Initialize React 18 root and render the App
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
