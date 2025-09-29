import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header       from "./Components/Header";
import Footer       from "./Components/Footer";
import DocsPage     from "./docs/docs";
import LandingPage  from "./LandingPage";
import AboutPage    from "./Products/Company/AboutPage";
import Careers      from "./Products/Company/Careers";
import Workspaces   from "./Products/Core Features/Workspaces";
import Comms        from "./Products/Core Features/comms";
import Pass         from "./Products/Core Features/pass";
import ContactPage  from "./Products/Contact";
import PricingPage  from "./Products/Pricing";
import AuthPage     from "./Products/auth";
import Dashboard    from "./Products/Dashboard";
import PrivateRoute from "./Products/PrivateRoute";
import WhoWeAre     from "./Resources/Mission/whoweare";

const App = () => (
  <Router>
    <Header />

    <Routes>
      {/* public routes */}
      <Route path="/"            element={<LandingPage />} />
      <Route path="/about"       element={<AboutPage />} />
      <Route path="/careers"     element={<Careers />} />
      <Route path="/workspaces"  element={<Workspaces />} />
      <Route path="/comms"       element={<Comms />} />
      <Route path="/pass"        element={<Pass />} />
      <Route path="/docs"        element={<DocsPage />} />
      <Route path="/contact"     element={<ContactPage />} />
      <Route path="/pricing"     element={<PricingPage />} />
      <Route path="/whoweare"    element={<WhoWeAre />} />

      {/* auth */}
      <Route path="/auth"        element={<AuthPage />} />

      {/* protected */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* catch-all */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>

    <Footer />
  </Router>
);

export default App;
