import axios from "axios";

const key = 'your key';

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenre = () => {
    return axiosCreate.get('/genres?key=' + key);
};

export default{
    getGenre
}