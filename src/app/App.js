import { useState } from "react";
import Title from "./components/Title";
import TextBox from "./components/TextBox";
import './App.css';


function App() {
  const images = [ 'https://beniciofilho.com.br/wp-content/uploads/2021/08/HEGEL-.png', 'https://s2.glbimg.com/Ofnoic3_-XXqwL7t3gvGxq1oLdE=/e.glbimg.com/og/ed/f/original/2018/05/03/karl-marx.jpg']
  const [imageToShow, setImageToShow] = useState(images[0])
  const [count, setCount] = useState(0)

  return (
    <div 
      className="App"
      style={{
        textAlign: 'center',
      }}
    >
      <Title />
      <TextBox />
    </div>
  );
}

export default App;
