import axios from "axios";

const key = '2dfec59d398b4191a4eef6840859c24e';

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenre = () => {
    return axiosCreate.get('/genres?key=' + key);
};

export default{
    getGenre
}