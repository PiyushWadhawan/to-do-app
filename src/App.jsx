import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import About from "./pages/About";
import AboutIcon from "./components/AboutIcon";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="background1"></div>
        <div className="background2"></div>
        <div className="outer-container">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <TaskForm />
                    <TaskStats />
                    <TaskList />
                    <AboutIcon />
                  </>
                }
              ></Route>
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
