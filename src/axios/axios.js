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

export const getWorksDetail= () => {              //获取所有作品列表
    return axios.get(`${base}/works/detail`,{ })
}


export const getWork= (id) => {              //获取所有作品信息
    return axios.get(`${base}/works/`+id,{ })
}

export const getPublishyearlist= () => {              //获取媒体页年列表
    return axios.get(`${base}/media/publish/yearlist`,{ })
}

export const getPublish= (year) => {              //获取某年的出版物
    return axios.get(`${base}/media/publish/`+year,{ })
}

export const getComments= () => {              //获取评论列表
    return axios.get(`${base}/media/comments`,{ })
}

export const getComment= (id) => {              //获取某个评论详情
    return axios.get(`${base}/media/comments/`+id,{ })
}

export const getExhibition= () => {              //获取展览列表
    return axios.get(`${base}/media/exhibition`,{ })
}

export const getMemoyearlist= () => {              //获取记事年列表
    return axios.get(`${base}/memo/yearlist`,{ })
}

export const getMemo= (year) => {              //获取记事年列表
    return axios.get(`${base}/memo/`+year,{})
}
export const getContact= () => {              //获取联系方式
    return axios.get(`${base}/contact`,{})
}


export const getStaff= (param) => {              //获取所有员工信息
    return axios.get(`${base}/staff`+param,{})
}


export const deleteStaff= (ids) => {              //批量删除
    return axios.delete(`${base}/staff`,{data:ids})
}

export const saveStaff= (staff) => {              //保存
    return axios.post (`${base}/staff`,{staff})
}

export const deletePrize= (ids) => {              //批量删除奖项
    return axios.delete (`${base}/prize`,{ids})
}

export const savePrize= (prize) => {              //保存奖项 
    return axios.post (`${base}/prize`,{prize})
}


export const deleteWork= (ids) => {              //批量删除奖项
    return axios.delete (`${base}/prize`,{ids})
}

export const saveWork= (work) => {              //保存奖项 
    return axios.post (`${base}/prize`,{work})
}
export const removeImg= (id) => {              //保存奖项 
    return axios.delete (`${base}/`+id)
}

export const doCommit= (url,param) => {              //表单提交
    return axios.post (url,{param})
}