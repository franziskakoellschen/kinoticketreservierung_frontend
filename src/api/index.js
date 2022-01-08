import axios from 'axios';

let instance;
if (process.env.REACT_APP_DEPLOYMENT_STAGE === "DEV") {
    instance = axios.create({
        baseURL: 'https://kinoticket-backend-dev.herokuapp.com/',
        timeout: 5000  });
} else if (process.env.REACT_APP_DEPLOYMENT_STAGE === "PROD") {
    instance = axios.create({
        baseURL: 'https://kinoticket-backend-prod.herokuapp.com/',
        timeout: 5000  });
} else {
    instance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 5000  });
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

export const getMoviesBetweenDates = async (date1,date2) => {
    const {data} = await instance.get("/movies/filter/"+date1+"/"+date2);
    console.log(data);
    return data;
  }


export const getFilmShowInformation = async (id) => {
    const {data} = await instance.get("/filmshows/" + id);
    console.log(data);
    return data;
}

export const reserveSeats = async (filmShowSeats, filmShowId) => {
    const {data} = await instance.post("filmshows/" + filmShowId + "/seats",
                                       filmShowSeats);

    return data;
}

export const isUserRegistered = async (email) => {

    // TODO

    return true;
}


export const signIn = async (email, password) => {

    // TODO

    return true;
}

export const getMovieById = async (id) => {
    const {data} = await instance.get("/movies/"+id);
    console.log(data);
    return data;
  }

  export const setBooking = async (bookingDTO) => {
    const answer = await instance.post("/booking" ,
                                       bookingDTO);
    return answer;
}

export const getCoupon = async (id) => {
    const {data} = await instance.get("/coupons/"+id);
    return data;
  }