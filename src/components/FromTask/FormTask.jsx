import './FormTask.css'
import PropTypes from 'prop-types';

const FormTask = ({ handleSubmit, handleInput }) => {
  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <label className="taskForm__text" htmlFor="task">
        Añade una tarea a la lista
      </label>
      <input
        type="text"
        className="taskForm__inputTask"
        id="task"
        name="task"
        placeholder='Introduce una tarea'
        onChange={handleInput}
      />
      <button className="task-form__addTask">Añadir</button>
    </form>
  );
};

FormTask.propTypes = {
  handleSubmit: PropTypes.func,
  handleInput: PropTypes.func
}

export default FormTask;