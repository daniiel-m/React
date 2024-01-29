import { useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { RootState } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useSelector((state: RootState) => state.tasks);
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
