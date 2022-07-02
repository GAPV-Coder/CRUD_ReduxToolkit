import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/task/taskSlice";

function TasksList() {
	const tasks = useSelector(state => state.tasks);
	console.log(tasks);

	const dispatch = useDispatch();

	const handleDeleteTask = id => {
		dispatch(deleteTask(id));
	};

	return (
		<div>
			{tasks.map(task => (
				<div key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
					<button onClick={() => handleDeleteTask(task.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}

export default TasksList;
