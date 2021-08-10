// Components
import ColorPicker from "./ColorPicker";
import Footer from "./Footer";

//azucar sintactico: JSX => JS + HTML/XML

function App() {

  return (
    <div className="App">
      <header className="App-header">

      </header>
      
          <ColorPicker />
       
     

      <footer className="bg-light d-flex justify-content-center align-items-center py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
