import axios from "../configAxios"
export const apiGetProducts = (params) => axios({
    url: "product/getAllProduct/",
    method: "GET",
    params
})