import axios from "../configAxios";

export const apiGetCategories = () => axios({
    url: "productCategory/getCategory/",
    method: "get",
})