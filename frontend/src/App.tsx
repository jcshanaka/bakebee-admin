import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import DailySalesTablePage from "./pages/Financial/DailySalesTablePage";
import BasicDataPage from "./pages/BasicData/BasicDataPage";


// Simple NotFound component for fallback route
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
  </div>
);

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Financial Management */}
            <Route
              path="/financial/daily-sales"
              element={<DailySalesTablePage />}
            />

            {/* Basic Data */}
            <Route path="/basic-data" element={<BasicDataPage />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
