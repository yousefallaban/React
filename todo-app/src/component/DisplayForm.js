import React from 'react';

//Icons
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';


export default class DisplayForm extends React.Component {
  
  render() {
    
    const {
      todo,
      isDone,
      handelCheck,
      handelDeleteItem,
      handelEditItem,
      description
    } = this.props;
    return (
      <div key={todo.id}>
        <input type="checkbox"
          onChange={() => handelCheck(todo)}
          defaultChecked={isDone} />
        <span className={isDone ? 'isCompleted' : ''}>
          {description}
        </span>
        <button title="Remove todo" className="btnDelete"
          onClick={() => handelDeleteItem(todo)}>
          <FaTrash />
        </button>
        <button title="Edit todo" className="btnEdit"
          onClick={handelEditItem}>
          <FaPencil />
        </button>
        <span className="deadline">
          <strong>{todo.deadline}</strong>
        </span>
      </div>
    );
  }
}
