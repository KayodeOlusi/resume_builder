import { Route, Routes } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import SignUp from "./pages/auth";

function App() {
  return (
    <main className="overflow-x-hidden mx-auto mt-4 md:mt-14 md:px-5 lg:max-w-6xl xl:px-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </main>
  );
}

export default App;
