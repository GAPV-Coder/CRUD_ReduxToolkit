import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";

function TasksForm() {
	const [tasks, setTasks] = useState({
		title: "",
		description: ""
	});

	const dispatch = useDispatch();

	const handleChange = e => {
		setTasks({
			...tasks,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			addTask({
				...tasks,
				id: uuid()
			})
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="title"
				type="text"
				placeholder="title"
				onChange={handleChange}
			/>
			<textarea
				name="description"
				placeholder="description"
				onChange={handleChange}
			/>
			<button type="submit">Add Task</button>
		</form>
	);
}

export default TasksForm;
