import NavBar from './components/navbar/NavBar';
import Form from "./components/form/Form";
import Inventory from "./components/inventory/Inventory";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
          <Form />
          <Inventory />
      </header>
    </div>
  );
}

export default App;
