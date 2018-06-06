import axios from "axios";
let base = '/api'

export const getIntroduction = () => {         //获取简介信息
return axios.get(`${base}/summary/introduction`,{ });
}

export const getPartner = () => {              //获取合伙人信息
    return axios.get(`${base}/summary/partner`,{ })
    }

export const getTeam = () => {              //获取团队信息
        return axios.get(`${base}/summary/team`,{ })
        }

export const getPrize= () => {              //获取获取将信息
     return axios.get(`${base}/summary/prize`,{ })
 }

 export const getWorks= () => {              //获取所有作品信息
    return axios.get(`${base}/works`,{ })
}

export const getWork= (id) => {              //获取所有作品信息
    return axios.get(`${base}/works/`+id,{ })
}

export const getPublishyearlist= () => {              //获取媒体页年列表
    return axios.get(`${base}/publish/yeaList`,{ })
}

export const getPublish= (year) => {              //获取某年的出版物
    return axios.get(`${base}/publish/`+year,{ })
}

export const getComments= () => {              //获取评论列表
    return axios.get(`${base}/publish/comments`,{ })
}

export const getComment= (id) => {              //获取某个评论详情
    return axios.get(`${base}/publish/comments/`+id,{ })
}

export const getExhibition= () => {              //获取展览列表
    return axios.get(`${base}/publish/exhibition`,{ })
}

export const getMemoyearlist= () => {              //获取记事年列表
    return axios.get(`${base}/memo/yeaList`,{ })
}

export const getMemo= (year) => {              //获取记事年列表
    return axios.get(`${base}/memo/`+year,{})
}
export const getContact= () => {              //获取联系方式
    return axios.get(`${base}/contact`,{})
}