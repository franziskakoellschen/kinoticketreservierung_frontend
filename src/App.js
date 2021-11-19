import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function onButtonClick() {
  alert(process.env.DEPLOYMENT_STAGE);
  var backendUrl;
  if (process.env.DEPLOYMENT_STAGE == "DEV") {
    backendUrl = "https://kinoticket-backend-dev.herokuapp.com/";
  } else if (process.env.DEPLOYMENT_STAGE == "PROD") {
    backendUrl = "https://kinoticket-backend-prod.herokuapp.com/";
  } else {
    backendUrl = "http://localhost:8080/";
  }

  axios.get(backendUrl + "testRequest")
  .then(function (response) {
    alert("Requested URL was: " + backendUrl  + "\nResponse data: " + response.data);
  })
  .catch(function (error) {
    alert(error);
  });

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. :-)
        </p>
        <button onClick={onButtonClick}>Trigger backend</button>
      </header>
    </div>
  );
}

export default App;
