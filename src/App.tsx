import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ContactList from "./Components/ContactList";
import Charts from "./Components/Charts";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <Toaster />
      <div className="flex">
        <Navbar />
        <div className="w-[100%] h-[100vh] max-h-[100vh] border-solid overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/form" element={<Form />} />
            <Route path="/edit/:id" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
