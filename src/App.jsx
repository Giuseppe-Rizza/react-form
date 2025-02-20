import { useState } from 'react'
import './App.css'

// Creo array
const transports = ["plane", "car", "bike", "underground", "motorbike", "ship"];

function App() {

  const [listTransports, setListTransports] = useState(transports);
  const [newTransport, setNewTransport] = useState('');

  const addTransport = e => {
    event.preventDefault();
    const updatedList = [...listTransports, newTransport];
    setListTransports(updatedList);
    setNewTransport("");
  }

  return (
    <>
      <form onSubmit={addTransport}>
        <input type="text" value={newTransport}
          onChange={e => { setNewTransport(e.target.value) }} />
        <button>Submit</button>
      </form>

    </>
  )
}

export default App