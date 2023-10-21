import './App.css';
import { useReducer, useState } from 'react';
import { listReducer, initialState } from './components/ListTask/listReducer';
import List from './components/ListTask/ListTask';
import FormTask from './components/FromTask/FormTask';

function App() {
  /*
    Pasamos  la referencia del archivo donde tenemos el listReducer, así como el estado inicial,
    estos se exportan desde el archivo listReducer.
  */
  const [list, dispatch] = useReducer(listReducer, initialState);
  
  // Usamos un useState para almacenar el contador y el valor del input
  const [value, setValue] = useState({
    modifyCount: 0,
    inputValue: '',
  });
  // Instancia e inicialización de la variable para la acción del reducer
  let action = {};

  // Función para incrementar el contador de modificación.
  const incrementStateCount = () =>
    setValue({
      ...value,
      ['modifyCount']: value.modifyCount + 1,
    });

  // Función para manejar el valor del input
  const handleInput = ({ target }) => {
    setValue({
      modifyCount: 0,
      inputValue: target.value,
    });
  };

  // Función para controlar el envio del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    action = {
      type: 'ADD_TASK',
      payload: value.inputValue,
    };
    // Comprobamos si obtenemos valor en el input para poder hacer la acción de añadir tarea e incrementar el modificador
    if (value.inputValue) {
      incrementStateCount();
      dispatch(action);
    }
  };

  // Función para manejar el borrado de la tarea
  const deleteTask = (id) => {
    incrementStateCount();
    action = {
      type: 'DELETE_TASK',
      payload: id,
    };

    dispatch(action);
  };

  // Función para menejar el reseteo de la lista
  const resetList = () => {
    incrementStateCount();
    action = {
      type: 'RESET_LIST',
    };

    dispatch(action);
  };

  return (
    <main className="main">
      <h1 className="modify-title">
        Modificaciones en la lista: {value.modifyCount}
      </h1>
      {/* Componente encargado de formar el formulario */}
      <FormTask handleSubmit={handleSubmit} handleInput={handleInput} />
      {/* Componente encargado de pintar la lista de tareas */}
      <List listTodo={list} deleteTask={deleteTask} />
      <button className="reset" onClick={resetList}>
        Resetear lista
      </button>
    </main>
  );
}

export default App;
