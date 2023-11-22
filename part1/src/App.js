import './App.css';
import Message from './Message';

const Description = () => {
  return <p>This is the app of fullstack bootcamp course</p>
}

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
        <Message color='red' msg='Estamos trabajando en el Bootcamp :)' />

        <Message color='blue' msg='Estamos trabajando en el Bootcamp :)' />
        <br />
        <Description />
      </div>
    </>
  );
}

export default App;
