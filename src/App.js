import { useState } from "react";


function App() {
  const images = [ 'https://beniciofilho.com.br/wp-content/uploads/2021/08/HEGEL-.png', 'https://s2.glbimg.com/Ofnoic3_-XXqwL7t3gvGxq1oLdE=/e.glbimg.com/og/ed/f/original/2018/05/03/karl-marx.jpg']
  const [imageToShow, setImageToShow] = useState(images[0])
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button
        onClick={() => setCount(count+1)}
      >Count</button>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum ex vel metus eleifend interdum. Nullam ornare id ligula in ornare. Aenean facilisis sit amet lacus in auctor. Sed id nunc lorem. Vestibulum tempor diam a lectus tempor, ut efficitur libero bibendum. Morbi at elit vel quam venenatis pellentesque in nec leo. Cras ut sodales dolor, et ultricies magna. Cras eget enim auctor, commodo dolor pharetra, gravida lacus. Pellentesque purus nisl, fermentum vel nulla non, malesuada facilisis ante. Mauris et nunc neque. Mauris eu lectus ac odio pellentesque faucibus. Sed vitae rhoncus justo. In cursus varius elit, vitae sagittis sapien. Donec malesuada felis erat, quis viverra lorem congue eget.

      Donec condimentum consequat sapien, eu pellentesque felis gravida dictum. Pellentesque ultrices lectus sit amet sem tincidunt finibus. Donec vitae ligula mauris. Aenean erat magna, cursus id efficitur quis, faucibus sit amet leo. Nam hendrerit eu sem et hendrerit. Donec quis arcu congue, fringilla arcu quis, gravida sapien. Curabitur quis pretium nibh, vitae porttitor purus. Aliquam erat volutpat. Praesent tempus quam velit, et tincidunt est mattis sed. Aenean a efficitur dui. Aenean pretium nisl vitae iaculis dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sagittis quis nunc sed pretium. Donec suscipit posuere imperdiet. Donec eget tempus metus, at semper orci. Cras quis viverra justo.
      </p>
      <p>
        Image: 
        <img 
          src={imageToShow} 
          onMouseLeave={() => setImageToShow(images[1] === imageToShow ? images[0] : images[1])}
          alt="HEGEL" 
        />
      </p>
    </div>
  );
}

export default App;
