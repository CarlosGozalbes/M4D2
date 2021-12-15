
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome.jsx'
import LatestRelease from './components/LatestRelease.jsx'
import MyFooter from './components/MyFooter.jsx'


function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
