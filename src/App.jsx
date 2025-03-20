import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/todo-app/" element={<Home />} />
        <Route path="/todo-app/tasks" element={<Tasks />} />
        <Route path="/todo-app/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
