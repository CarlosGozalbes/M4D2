
import './App.css';
import ' bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <Latest-Release/>
      <MyFooter/>
    </div>
  );
}

export default App;
