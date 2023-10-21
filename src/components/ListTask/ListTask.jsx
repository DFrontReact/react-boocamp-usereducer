import './ListTask.css'
import PropTypes from 'prop-types';

const List = ({ listTodo, deleteTask }) => {
  return (
    <>
      <h2 className="titleList-task">Lista de tareas</h2>
      <ul className="listTask">
        {listTodo &&
          listTodo.map(({ id, description }, index) => (
            <div className="task" key={index}>
              <li className="task__item" key={id}>
                {description}
              </li>
              <button className="task__delete" onClick={() => deleteTask(id)}>
                Borrar
              </button>
            </div>
          ))}
      </ul>
    </>
  );
};

List.proptypes = {
  listTodo: PropTypes.array,
  deleteTask: PropTypes.func
}

export default List;
