import axios from "axios";
let base='/api'

export const getSummaryData=(param)=>{
return axios.post(`${base}/Summary`,{})
}

export const getWorksData=(param)=>{
    return axios.post(`${base}/Works`,{})
    }
