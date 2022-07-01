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
		}
	}
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;
