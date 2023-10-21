// Estado inicial de la lista
export const initialState = [
  {
    id: 1697181253454,
    description: 'Recoger la cocina',
    done: false,
  },
  {
    id: 1697181253459,
    description: 'Limpiar el coche',
    done: false,
  },
];

// Logica del reducer, recibe 2 parametros es estado inicializado al estado inicial y la acción
export const listReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'ADD_TASK': { // Caso para añadir tarea
              return [
                ...state,
                {
                  id: new Date().getTime(),
                  description: action.payload,
                  done: false,
                },
              ];
        }
        case 'DELETE_TASK': { // Caso para borrar tarea
            return state.filter((task) => task.id !== action.payload);
        }
        case 'RESET_LIST': { // Caso para resetar la lista
            return [...initialState]
        }
        default: // Caso por defecto
            return [...state];
    }
}