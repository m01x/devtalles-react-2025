/**
 * 
 * Notas del moix:
 * 
 * Un reducer es una funcion que SIEMPRE RETORNA un objeto, recibe acciones y estados.
 * El reducer, siempre retorna el tipo de dato del estado.
 * @returns 
 */

import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

//A fer le gusta definir las acciones como un tipo.., nos aconseja que sean objetos.., en estos objetos puedes enviar las acciones que requieras, mas lo que necesiten
//estas acciones para trabajar (payload)
export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }


// * Nuestro esquema de validacion con Zod, para que evaluemos si alguien modifico el localStorage
const TodoScheme = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateScheme = z.object({
    todos: z.array(TodoScheme),
    length: z.number(),
    completed: z.number(),
    pending: z.number()
});

export const getTasksInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('task-state');

    if (!localStorageState) {
        return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0
        }    
    }

    //Validamos mediante Zod
    const result = TaskStateScheme.safeParse( JSON.parse(localStorageState) );
    if(result.error) {
        console.log(result.error)
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        };
    }
        return result.data;
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    /**
     * Esto puede ser tambien un early return, pero SIEMRPE DEBE DEVOLVER UN NUEVO ESTADO, O EL ESTADO ANTERIOR!!!!
     */
    switch (action.type) {

        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }
            //! NO MUTAR EL STATE -> state.todos.push(newTodo) !!!, hagalo bien...
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            };
        }

        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter(todo => todo.id !== action.payload);

            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: currentTodos.filter(todo => todo.completed).length,
                pending: currentTodos.filter(todo => !todo.completed).length
            };
        }

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }

                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length
            }
        }
        default:
            return state;
    }
}