import './App.css';

function App() {
  const imgUrl = "https://wavebrowser.com/wp-content/uploads/2021/02/WaveLogo-text-White-45x225-1.png";
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgUrl} className="App-logo" alt="logo" />
        <p>
          Wave Browser is the best browser
        </p>
      </header>
    </div>
  );
}

export default App;
