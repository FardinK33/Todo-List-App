import { createSlice, nanoid } from "@reduxjs/toolkit";

const tempData = [
    {
        id: -4,
        task: "Type and Press Enter to Add ToDo",
        isEditing: false,
        isCompleted: false
    },
    {
        id: -3,
        isCompleted: false,
        isEditing: false,
        task: "<- Click here to Mark as Done",
    },
    {
        id: -2,
        isCompleted: false,
        isEditing: false,
        task: "Click on 1st button to Edit Task ->",
    },
    {
        id: -1,
        isCompleted: false,
        isEditing: false,
        task: "Click on 2nd button to Delete Task ->",
    }
]

const initialState = {
    todoList : [
        {
            listID: 0,
            listTitle: "Personal",
            listData: tempData
        },
        {
            listID: 1,
            listTitle: "Bussiness",
            listData: tempData
        }
    ],
    isEditing: false,
    currListID: 0
}

export const todoSlice = createSlice({
    name:"todoList",
    initialState,
    reducers: {

        // Todo Item Reducers
        addTodo: (state, action) => {
            const task = {
                id: nanoid(),
                ...action.payload
            }

            let taskList = state.todoList[state.currListID].listData;

            const len = taskList.length;
            if (len === 0 || taskList[len-1].id < 0) {
                taskList = [task];
            } else {
                taskList = [...taskList, task];
            }

            state.todoList[state.currListID].listData = taskList;
        },

        updateTodo: (state, action) => {
            state.isEditing = false;
            const listId = state.currListID;
            const id = action.payload.id;

            state.todoList[listId].listData.forEach(todo => {
                if (todo.id === id) {
                    todo.isEditing = !todo.isEditing;
                    todo.task = action.payload.task;
                }
            })
        },
        
        deleteTodo : (state, action) => {
            const listID = state.currListID;
            const taskID = action.payload.id;
            
            state.todoList[listID].listData =
             state.todoList[listID].listData.filter((task) => task.id !== taskID);
        },

        // Reducer to Change isEditing State of a Todo Item so that an input can be shown to update the Todo's Text
        changeEdit: (state, action) => {
            state.isEditing = true;
            const listId = state.currListID;
            const id = action.payload.id;

            state.todoList[listId].listData.forEach(todo => {
                if (todo.id === id) {
                    todo.isEditing = !todo.isEditing;
                }
            })
        },

        // Todo List Reducers
        addList: (state, action) => {
            const newList = {
                listID: state.todoList.length,
                listTitle: action.payload,
                listData: tempData
            }

            state.todoList.push(newList);
        },
        
        updateList: (state, action) => {
            const id = state.currListID;
            state.todoList.forEach(list => {
                if (list.listID === id) {
                    todo.listTitle = action.payload;
                }
            })
        },

        deleteList: (state, action) => {
            state.todoList = state.todoList.filter(list => list.listID !== state.currListID);
        },

        // Reducers to Change Current List State
        decrease: (state, action) => {
            if (state.currListID == 0) return;
            state.currListID -= 1;
        },
        increase: (state, action) => {
            if (state.currListID >= action.payload) return;
            
            state.currListID += 1;
        }
    }
});

export const {addTodo, deleteTodo, addList, deleteList, changeEdit, updateTodo, decrease, increase} = todoSlice.actions;

export default todoSlice.reducer;