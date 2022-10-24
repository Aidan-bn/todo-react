import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>TO DO APP WITH REACT</h2>

        <div className='input-content'>
          <input type='text' name='todo' placeholder='Create todo item'></input>
          <button className='add-button'>Add To List</button>
        </div>
      </header>
    </div>
  );
}

export default App;
