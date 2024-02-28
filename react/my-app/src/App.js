//import App.css from './App.css'
//import styles from "./App.css";
import Form from "./form/Form";
//import Form from "./form/Form";
const App = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}> welcome</h1>
      <h2 style={{ color: "blue", border: "5px solid red" }}>
        welcome to the react class
      </h2>
      <h3 style={style}> React</h3>
      <h4 className="text-green-600 text-7xl"> stylesssss</h4>
      <Form />
    </div>
  );
};

export default App;

const style = {
  color: "red",
  border: `10px solid orange`
};
