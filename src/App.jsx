import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

function App() {
	return (
		<div className="bg-zinc-900 h-screen text-white">
			<div className="flex items-center justify-center h-full">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<TasksList />} />
						<Route path="/create-task" element={<TasksForm />} />
						<Route path="/edit-task/:id" element={<TasksForm />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
