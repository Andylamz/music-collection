import "./App.css";
function App({ children }) {
  return (
    <div className="appContainer">
      <header>
        <div className="background">
          <span className="title">Music Collection</span>
        </div>
      </header>
      <div className="bodyContainer">{children}</div>
    </div>
  );
}

export default App;
