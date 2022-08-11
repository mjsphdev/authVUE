import axios from "axios";

axios.defaults.baseURL = "https://localhost:7237/api/Authentication/"

let refresh = false;
const tokens = {
        AccessToken: sessionStorage.getItem("accessToken"),
        RefreshToken: sessionStorage.getItem("refreshToken")   
    }
axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.status == 401 && !refresh){
        refresh = true
        const {status, data} = await axios.post('refresh-token', tokens, {
            withCredentials: true
        })
        if(status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
            sessionStorage.setItem("accessToken", `${data.accessToken}`)
            sessionStorage.setItem("refreshToken", `${data.refreshToken}`)
            return axios(error.config);
        }
    }
    refresh = false
    return error
});