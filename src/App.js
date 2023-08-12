import logo from './logo.svg';
import './App.css';
import SignIn from "./component/login";
function App() {
  const style = {
    marginTop: '150px', // You can adjust the value as needed
  };
  return (
    <div className="App" style={style}>
      <SignIn />
    </div>
  );
}

export default App;
