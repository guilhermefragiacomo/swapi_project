import axios from "axios";

const blogFecth = axios.create({
    baseURL: "https://swapi.dev/api/",
    headers: {
        "Content-Type" : "/people/?page=1",
},
});

export default blogFecth;