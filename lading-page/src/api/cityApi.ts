import axiosClient from './axiosClient';
import { getAllCity } from '../constant/ApiConstant';


const productApi = {
    getAll: () => {
        const url = getAllCity;
        return axiosClient.get(url);
    },

    get: (id: any) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;