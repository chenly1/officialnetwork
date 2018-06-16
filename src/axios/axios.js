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

// export const getWorksDetail= () => {              //获取所有作品列表
//     return axios.get(`${base}/works/detail`,{ })
// }



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

export const getPrizes= (param) => {              //获取所有员工信息
    return axios.get(`${base}/prize`+param,{})
}

export const deletePrize= (ids) => {              //批量删除奖项
    return axios.delete (`${base}/prize`,{data:ids})
}

export const savePrize= (prize) => {              //保存奖项 
    return axios.post (`${base}/prize`,{prize})
}

export const getWorkDetail= (param) => {              //获取作评列表
    return axios.get (`${base}/work/detail`+param,{})
}


export const deleteWork= (ids) => {              //批量删除作评
    return axios.delete (`${base}/work`,{data:ids})
}

export const getWorkImg= (id) => {              //获取单个作品的图片
    return axios.get (`${base}/work/img/`+id,{})
}

export const saveWork= (work) => {              //保存作品
    return axios.post (`${base}/prize`,{work})
}


export const getpublishs= (param) => {              //获取出版物列表
    return axios.get (`${base}/publish/`+param,{})
}

export const deletepublishs= (ids) => {              //获取出版物列表
    return axios.delete (`${base}/publish`,{data:ids})
}

export const savePublish= (param) => {              //获取出版物列表
    return axios.post (`${base}/publish`,{param})
}



export const getCommentsX= (param) => {              //获取评论列表
    return axios.post(`${base}/comments/`+param,{})
}


export const saveComment= (param) => {              //新建更新评论
    return axios.post (`${base}/comment`,{param})
}


export const deleteComments= (ids) => {              //删除评论
    return axios.delete (`${base}/comments`,{data:ids})
}



export const deleteExhibition= (ids) => {              //删除展览
    return axios.delete (`${base}/exhibition`,{data:ids})
}


export const saveExhibition= (param) => {              //更新展览
    return axios.post (`${base}/exhibition`,{param})
}




export const doCommit= (url,param) => {              //表单提交
    return axios.post (url,{param})
}