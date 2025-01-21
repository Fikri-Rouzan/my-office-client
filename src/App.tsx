import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import BookOffice from "./pages/BookOffice";
import CityDetails from "./pages/CityDetails";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office/:slug" element={<Details />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
