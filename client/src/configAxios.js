import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
  });

// Add a request interceptor
// Trước khi gửi api lên serveg thì thực thi code trong return
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
// Trước khi nhận được code thì thực thi đoạn code trong return 
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.data;
  });
  export default instance; 