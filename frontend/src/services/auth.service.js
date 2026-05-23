import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

export const signin = async (username, password) => {
    const response = await axios.post(API_URL + "signin", { username, password });
    return response.data;
};