import './App.css';
import { useState } from 'react';
import List from './components/ListTask/ListTask';
import FormTask from './components/FromTask/FormTask';

function App() {

 const initialState = [
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
  
  // Usamos un useState para almacenar el contador y el valor del input
  const [value, setValue] = useState({
    modifyCount: 0,
    inputValue: '',
  });
  
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
  };

  // Función para manejar el borrado de la tarea
  const deleteTask = (id) => {
    incrementStateCount();
  };

  // Función para menejar el reseteo de la lista
  const resetList = () => {
    incrementStateCount();
  };

  return (
    <main className="main">
      <h1 className="modify-title">
        Modificaciones en la lista: {value.modifyCount}
      </h1>
      {/* Componente encargado de formar el formulario */}
      <FormTask handleSubmit={handleSubmit} handleInput={handleInput} />
      {/* Componente encargado de pintar la lista de tareas */}
      <List listTodo={initialState} deleteTask={deleteTask} />
      <button className="reset" onClick={resetList}>
        Resetear lista
      </button>
    </main>
  );
}

export default App;
