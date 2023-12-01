import axios from "axios";

const commentFecth = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type" : "application/json",
},
});

export default commentFecth;