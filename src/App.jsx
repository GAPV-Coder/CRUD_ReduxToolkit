import "./App.css";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

function App() {
	return (
		<div className="App">
			<h1>Hello World!</h1>
			<TasksList />
			<TasksForm />
		</div>
	);
}

export default App;
