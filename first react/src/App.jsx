
import './App.css'

function App() {
  const currDate=new Date();
  return (
    <div>
      <h1>Hello world</h1>
      <p>the current date is :{currDate.toLocaleDateString()}</p>
    </div>
  );
}

export default App;