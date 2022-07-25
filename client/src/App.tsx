import './App.css';
import axios from 'axios';

function App() {
  const fetchedFact =async()=> {
    const fetchedFact = await axios.get(`http://localhost:3000/api/test`)
  console.log(fetchedFact.data)}

  fetchedFact()
  return (
    <div className="App">

    </div>
  );
}

export default App;
