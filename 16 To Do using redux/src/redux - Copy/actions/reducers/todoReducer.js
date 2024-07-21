import { ADD_Todo, TOGGLE_TODO } from "../todoActions";

const initialState = {
    todos: []
}

export function todoReducer(state=initialState, action){

    switch(action.type){
        case ADD_Todo:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i) => {
                    if(i == action.index){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}