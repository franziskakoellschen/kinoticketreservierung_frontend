import axios from 'axios';

let instance;
if (process.env.REACT_APP_DEPLOYMENT_STAGE === "DEV") {
    instance = axios.create({
        baseURL: 'https://kinoticket-backend-dev.herokuapp.com/',
        timeout: 1000  });
  } else if (process.env.REACT_APP_DEPLOYMENT_STAGE === "PROD") {
    instance = axios.create({
        baseURL: 'https://kinoticket-backend-prod.herokuapp.com/',
        timeout: 1000  });
} else {
    instance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 1000  });
  }

  export const getTestRequestData = async () => {

    const {data} = await instance.get("/testRequest");
    console.log(data);
    return data;
    
    
    }

