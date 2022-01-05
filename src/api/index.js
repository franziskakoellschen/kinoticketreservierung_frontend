import axios from 'axios';
import authHeader from './auth-header';

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

export const isUserRegistered = async (username) => {
    const response = await instance.post(
        "/auth/isUserRegistered", {username: username}, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}

export const login = async (username, password, setUser) => {
    console.log(localStorage.getItem('user'))
    await instance.post("/auth/signin", {
        username,
        password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    });
}

export const logout = (setUser) => {
    localStorage.removeItem("user");
    setUser()
}

export const register = async (username, email, password) => {
    await instance.post("/auth/signup", {
        username,
        email,
        password
    })
}

// test requests
export const getPublicContent = async () => {
    const {data} = await instance.get("/test/all");
    console.log(data);
    return data;
}
export const getUserContent = async () => {
    const {data} = await instance.get("/test/user", {headers: authHeader()});
    console.log(data);
    return data;
}
export const getAdminContent = async () => {
    const {data} = await instance.get("/test/admin", {headers: authHeader()});
    console.log(data);
    return data;
}
// end of test requests

export const getTestRequestData = async () => {
    const {data} = await instance.get("/testRequest");
    console.log(data);
    return data;
}

export const getMovies = async () => {
    const {data} = await instance.get("/movies", {headers: authHeader()});
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