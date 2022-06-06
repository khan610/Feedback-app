import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

export default App;
