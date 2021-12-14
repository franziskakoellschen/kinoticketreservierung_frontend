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

export const  getMovies = async () => {
    const {data} = await instance.get("/movies");
    console.log(data);
    return data;
}

export const getMovieById = async (id) => {
  const {data} = await instance.get("/movies/"+id);
  console.log(data);
  return data;
}

export const getMoviesTest = async () => {
    const {data} = await instance.get("/movies/3");
    return data;
}

export async function getImage(imageId){
  const {data} = await  instance.get("image/2")
    return data;
    /*
    .get(
      'http://localhost:8080/image/2',
      { responseType: 'arraybuffer' },
    )
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      console.log(base64);
      return(base64);
        });*/

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
