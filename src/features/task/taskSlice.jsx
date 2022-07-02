import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "1",
		title: "Task 1",
		completed: false,
		description: "This is a task"
	},
	{
		id: "2",
		title: "Task 2",
		completed: false,
		description: "This is a task"
	}
];

export const TaskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
		},
		deleteTask: (state, action) => {
			const tasksFound = state.find(task => task.id === action.payload);
			if (tasksFound) {
				state.splice(state.indexOf(tasksFound), 1);
			}
		}
	}
});

export const { addTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;
