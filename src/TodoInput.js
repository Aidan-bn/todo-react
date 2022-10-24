
const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className='input-content'>
          <input 
          type='text' 
          name='todo' 
          placeholder='Create todo item'
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          />
          <button className='add-button' onClick={addTodo}>Add To List</button>
        </div>
    );
};
export default TodoInput;