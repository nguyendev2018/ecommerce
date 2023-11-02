import axios from "../configAxios";
export const GetAllCategories = () =>{
    return axios({
        url : '/category',
        method : 'GET'
    })
}