const TodoList = ({ list, remove }) => {
    return(
        <>
            {list?.length > 0 ?(
          <ul className='todo-list'>
            {list.localeCompare((todo, index) => (
              <div className='todo'>
                <li key={index}> {todo} </li>

              <button className='delete'>Delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <div className='empty'>
            <p>No task found</p>
          </div>
        )}
        </>
    )
}

export default TodoList;