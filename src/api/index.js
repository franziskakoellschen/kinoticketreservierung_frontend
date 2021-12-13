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

export const getMovies = async () => {
    const {data} = await instance.get("/movies");
    console.log(data);
    return data;
}

export const getFilmShowSeats = async (id) => {
    const {data} = await instance.get("/filmshows/" + id +"/seats");
    console.log(data);
    return data;
}

export const reserveSeats = async (seats, filmShowId) => {
    console.log(seats)
    const {data} = await instance.post("filmshows/" + filmShowId + "/seats", seats);
    return data;
}

export const isUserRegistered = async (email) => {

    // TODO

    //const {data} = await instance.get("/user")
    //console.log(data);
    return true;
}


export const signIn = async (email, password) => {

    // TODO

    //const {data} = await instance.get("/user")
    //console.log(data);
    return true;
}
