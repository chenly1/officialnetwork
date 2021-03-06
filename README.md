# 后台接口文档

##### 1.获取概述页面数据

###### 1.1获取简介信息

|            URI            | METHOD |
| :-----------------------: | :----: |
| /api/summary/introduction |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作完成",
    "data":{"introduction":"xxxxx"
          ,"img":"xxx"},
  }   
}
```

###### 1.2获取合伙人列表

|          URI          | METHOD |
| :-------------------: | :----: |
| /api/summary/ partner |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
         "partner":[[{"name":"刘怡春","experience":[ "1969年出生于山东海阳",
                 "1991年获同济大学建筑系建筑学学士学位",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1997年获同济大学建筑系建筑学硕士学位",
                 "1997～2000年就职于同济大学建筑设计研究院，任建筑师、主任建筑师",
                 "2001年在上海与陈屹峰、庄慎共同创立大舍建筑设计事务所",
                 "2001年至今任大舍建筑设计事务所合伙人、主持建筑师"]},
                  {"name":"陈启峰","experience":[ "1969年出生于山东海阳",
                 "1991年获同济大学建筑系建筑学学士学位",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1997年获同济大学建筑系建筑学硕士学位",
                 "1997～2000年就职于同济大学建筑设计研究院，任建筑师、主任建筑师",
                 "2001年在上海与陈屹峰、庄慎共同创立大舍建筑设计事务所", //合伙人每两个人为一组
                 "2001年至今任大舍建筑设计事务所合伙人、主持建筑师"]}]],  //根据什么两个人分一组待定
         "img":"xxx"        
    }
}
```

###### 1.3获取团队信息

|        URI        | METHOD |
| :---------------: | :----: |
| /api/summary/team |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
      "team":[{ "title":"助理合伙人",
      "member":[ { "name":"高林",
      "experience":["1982年出生于上海",
   "2006年毕业于同济大学建筑系，获建筑学学士学位",
   "2007年大学生志愿者，服务于西藏建设厅城建规划设计处",
   "2008年加入大舍建筑设计事务所"]},
		{"name":"王龙海",
"experience":["1983年出生于河北",
"2007年毕业于同济大学建筑系，获建筑学学士学位",
"2007年加入大舍建筑设计事务所"]}
		]}],
    "img":"xxx"
    }
}
```

###### 1.4获取奖项列表

|        URI         | METHOD |
| :----------------: | :----: |
| api/summary/ prize |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "prize":[
          { "year":"2012年","content":"“螺旋艺廊”获“2012 WA中国建筑奖”入围奖"} 
        ],
        "img":"xxx"
    }
}
```



##### 2.获取作品页面信息

######      2.1获取作品列表

|    URI     | METHOD |
| :--------: | :----: |
| /api/works |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
    "works":[ { "id":"1","img":"xxx", "name":"龙美术馆（西岸馆）",  "type":"建成", "years":"2011-2014"},
 {  "id":"2","img":"xxx","name":"青浦青少年活动中心 " ,"type":" 建成 ", "years":"2009-2012"}]
    }
} 
```

######   2.2获取单个作品

|       URI       | METHOD |
| :-------------: | :----: |
| /api/works/{id} |  GET   |

**参数**

URI参数

参数id作品唯一标识，用以获取作品

GET参数

无

**返回值**

```json
{   code:"2000",
    message:"操作成功",
   "data":{
    "work":{
      "name":"龙美术馆（西岸馆）",
      "address":"上海徐汇区龙腾大道",
      "area":"33007平方米",
      "desTime":"2011.11-2012.7",
      "overTime":"2014.3",
      "img":["xxx"],
    }}
}
```

##### 3.媒体页面数据

###### 3.1获取作品中出版年份列表

|             URI             | METHOD |
| :-------------------------: | :----: |
| /api/media/publish/yearlist |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "yearList":[2010,2009,2008,2007,2006,2005,2004,2003,2002]
    }
}
```

###### 3.2获取某年出版列表

|            URI            | METHOD |
| :-----------------------: | :----: |
| /api/media/publish/{year} |  GET   |

**参数**

URI参数

参数year查询条件获取该年的作品列表

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "publish":[
            {"img":"xxx",content:"xxxx"},
]
        }
    }
}
```

###### 3.3获取评论列表

|         URI          | METHOD |
| :------------------: | :----: |
| /api/media/ comments |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "commentList":[
            {"id":1,"content":"xxx","img":"xxx"}
        ]
    }
}
```

###### 3.4获取某个评论文章

|           URI            | METHOD |
| :----------------------: | :----: |
| /api/media/comments/{id} |  GET   |

**参数**

URI参数

| 参数名 |             用途             |
| :----: | :--------------------------: |
|   id   | 评论文章的唯一标识，筛选条件 |

GET参数

无

**返回值**

```JSON
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "comment":{
        "title":"我是你哥",
        "content":"xxxx",
        "author":"王芳济"
        }
    }
}
```

###### 3.5获取展览列表

|          URI          | METHOD |
| :-------------------: | :----: |
| api/media/ exhibition |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "exhibitions":[{"year":"2002年","content":"“都市营造”2002上海双年展，上海美术馆","img":"xxx"},
          {"year":"2003年","content":" “那么，中国呢？”当代中国艺术展 ，法国巴黎蓬皮杜中心","img":"xxx"}]
    }
}
```

##### 4.获取记事页面信息

###### 4.1获取记事年份列表

|        URI        | METHOD |
| :---------------: | :----: |
| api/memo/yearlist |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "yearList":[2010,2009,2008,2007,2006,2005,2004,2003,2002,2001]
    }
}
```

###### 4.2获取单年记事

|      URI      | METHOD |
| :-----------: | :----: |
| api/memo/{id} |  GET   |

**参数**

URI参数

| 参数名 |           用途           |
| :----: | :----------------------: |
|   id   | 记事的唯一标识，筛选条件 |

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
    "memo":{
    "img":"xxx",content:"xxxxx"
}
}
}
```

##### 5.获取联系我们信息

|     URI      | METHOD |
| :----------: | :----: |
| /api/contact |  GET   |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "contact":{
            "img":"xxxxxx",
         "contex"t:[{"label":"地址","text":"上海市徐汇区龙腾大道2555号16栋"},
                  {"label":"邮编","text":"200232"},
                  {"label":"电话","text":"(8621) 64278928"},
                  {"label":"传真","text":"(8621) 64278928"},
                  {"label":"工程联络信箱","text":" deshaus@126.com"},
                  {"label":"商务媒体信箱","text":" info@deshaus.com"},
                  {"label":"招聘实习信箱","text":" deshaus.sh@163.com"}]
        }
    }
}
```

## 新增部分接口

##### 1.后台登陆

|        URI        | METHOD |
| :---------------: | :----: |
| /api/ works/login |  POST  |

**参数**

URI参数

无

POST参数

|  参数名  | 示例  | 必须 |
| :------: | :---: | :--: |
|   user   | admin | true |
| password | admin | true |

**返回值**

```json
{
    "code":2000,
    "message":"登陆成功"
}


{
    "code":3000,
    "message":"登陆失败"
}
```

##### 2.图片上传

|   URI    | METHOD |
| :------: | :----: |
| /api/img |  POST  |

**参数**

URI参数

无

POST参数

文件域

**返回值**

```json
{
    "code":2000,
    "message":"上传成功",
    "url":"xxxxx";
    
}
```

##### 3.上传简介

|            URI            | METHOD |
| :-----------------------: | :----: |
| /api/summary/introduction |  POST  |

**参数**

URI参数

无

POST参数

|    参数名    |     示例     |
| :----------: | :----------: |
| introduction | wwwwwwwwwwww |

**返回值**

```json
{
    "code":2000,
     "message":"上传成功"
}
```

##### 4.获取职员列表

|    URI    | METHOD |
| :-------: | :----: |
| api/staff |  GET   |

**参数**

URI参数

|  参数名   |   描述   | 必须 |
| :-------: | :------: | :--: |
|  pageNum  |   页码   | true |
| pageCount | 单页个数 | true |

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    data:{
        "staff":[
                {   ID:1,
                    RZSJ: "2017-10-01",
                    YGXM: "马德华",
                    YGZW: "会员",

                }, {
                    ID:2,
                    RZSJ: "2017-10-01",
                    YGXM: "刘德华",
                    YGZW: "会员",
                }, {
                    ID:3,
                    RZSJ: "2017-10-01",
                    YGXM: "何青哲",
                    YGZW: "会员",
                }],
        "total":20
    }
}
```

##### 5.删除员工

|    URI    | METHOD |
| :-------: | :----: |
| api/staff | DELETE |

**参数**

URI参数

无

DELETE参数

| 参数名 |  描述  |    示例     | 必须 |
| :----: | :----: | :---------: | :--: |
|  ids   | 删除id | [1,2,3,4,5] | true |

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

##### 6.更新员工

|    URI    | METHOD |
| :-------: | :----: |
| api/staff |  POST  |

**参数**

URI参数

无

POST参数

```json
{
    "staff":{"baseinfo"：{
                    "ID":1,                 //通过有无ID判断是更新还是新建
                    "RZSJ": "2017-10-01",
                    "YGXM": "马德华",
                    "YGZW": "会员"}
    
               "exinfo":[{"SJ":"1993-01-12","ex":"顶顶顶顶"}，{"SJ":"1993-01-12","ex":"顶顶顶顶"}]
        
    }
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
    //
    "code":2000,
    "message":"操作失败"
}
```

##### 7.删除奖项 

|    URI    | METHOD |
| :-------: | :----: |
| api/prize | DELETE |

**参数**

URI参数

无

DELETE参数

```json
{
    "ids":[1,2,3,4,5]
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

##### 8.获取奖项列表

|    URI    | METHOD |
| :-------: | :----: |
| api/prize |  GET   |

**参数**

URI参数

|  参数名   |   描述   | 必须 |
| :-------: | :------: | :--: |
|  pageNum  |   页码   | true |
| pageCount | 单页个数 | true |

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "data":{
        "staff":[
                {
                    "ID":1,
                    "HJNF":"2019年8月",
                    "HJJX":"马德华段对"
                   
                }, {
                  "ID":2,
                    "HJNF":"2019年9月",
                    "HJJX":"肝泥碾将"
                }, {
                  "ID":3,
                    "HJNF":"2019年10月",
                    "HJJX":"阿里巴巴将"
                }],
        "total":20
    }
}
```
##### 9.更新员工

|    URI    | METHOD |
| :-------: | :----: |
| api/prize |  POST  |

**参数**

URI参数

无

POST参数

```json
{
  "prize":{
                  "ID":3,    //通过有无ID判断更新
                    "HJNF":"2019年10月",
                    "HJJX":"阿里巴巴将"
                }
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
    //
    "code":2000,
    "message":"操作失败"
}
```

##### 10.删除作评 

|   URI    | METHOD |
| :------: | :----: |
| api/work | DELETE |

**参数**

URI参数

无

DELETE参数

```json
{
    "ids":[1,2,3,4,5]
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

##### 11.获取作品列表

| URI              | METHOD |
| ---------------- | ------ |
| api/works/detail | GET    |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"，
    "data":{
            "works":[
                {
                    ID:1,
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

                },   {
                    ID:1,
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

                },   {
                    ID:1,
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

                }]
}
}
```

##### 12.获取单个作品的图片列表

| URI               | METHOD |
| ----------------- | ------ |
| api/work/img/{id} | GET    |

**参数**

URI参数

id

GET参数

无

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"，
    "img":[
     {"id":1,"name":"kkk.jpg","url":"pppp"},
     {"id":2,"name":"kkk.jpg","url":"pppp"},
     {"id":3,"name":"kkk.jpg","url":"pppp"}
    ]
}
```

##### 13.新建或更新

| URI      | METHD |
| -------- | ----- |
| api/work | POST  |

**参数**

URI参数

无

POST参数

```json
{
    "work":{
        {
                    ID:1,
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

              
    }
    
    
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
     id:"xxx"
}
```

##### 14.获取出版列表

| URI      | METHOD |
| -------- | ------ |
| api/push | GET    |

**参数**

URI参数

无

GET参数

无

**返回值**

```json
{    "code":2000,
      message:"操作成功",
    "publish":[{
                    ID:1,
                    CBNF:'龙美术馆（西岸馆）1',
                    CBMS:'建成',
                    IMG:'https://www.baidu.com/img/bd_logo1.png',

                },   {
                    ID:2,
                    CBNF:'龙美术馆（西岸馆）2',
                    CBMS:'建成',
                    IMG:'https://www.baidu.com/img/bd_logo1.png',

                },   
                {
                    ID:3,
                    CBNF:'龙美术馆（西岸馆）3',
                    CBMS:'建成',
                    IMG:'https://www.baidu.com/img/bd_logo1.png',

                }]
}
```

##### 15.删除出版

| URI          | METHOD |
| ------------ | ------ |
| api/publishs | DELETE |

**参数**

URI参数

无

DELETE参数

```json
{
    "id":[1,2,3,4,5]
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

##### 16.新建或更新出版物

| URI         | METHOD |
| ----------- | ------ |
| api/publish | POST   |

**参数**

URI参数

无

POST参数

```json
{
    "publish":{
          ID:1,     //根据有无id
          CBNF:'龙美术馆（西岸馆）1',
          CBMS:'建成',
    }
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "id":"xxx"
}
```

##### 17.删除评论

|     URI      | METHOD |
| :----------: | :----: |
| api/comments | DELETE |

**参数**

URI参数

无

DELETE参数

```json
{
    
    "id":[1,2,3,4,5]
    
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

##### 18.更新或新建评论

|     URI     | METHOD |
| :---------: | :----: |
| api/comment |  POST  |

**参数**

URI参数

无

POST参数

无

**返回值**

```json
{
    "comment":{
                    "ID":1,
                    "PLBT":"《漂浮三连宅》",
                    "PLNN":"33333333333333333333333333333333"
    }
}
```

##### 19.删除展览

| URI            | METHOD |
| -------------- | ------ |
| api/exhibition | DELETE |

**参数**

URI参数

无

DELETE参数

```json
{
    "id":[1,2,3,4,5]
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

##### 20.更新或新建评论

|      URI       | METHOD |
| :------------: | :----: |
| api/exhibition |  POST  |

**参数**

URI参数

无

POST参数

```json
{
    "exhibition":{
                    "ID":1,
                    "ZLNF":'龙美术馆（西岸馆）1',
                    "ZLMC":'建成'
    }
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功",
    "id":"xxx
}
```

##### 21.删除某年记事

|       URI       | METHOD |
| :-------------: | :----: |
| api/memo/{year} | DELETE |

**参数**

URI参数

year

DELETE参数

无

**返回值**

```json
{"code":2000,
"message":"操作成功"}
```

##### 22.更新，新建某年记事

|   URI    | METHOD |
| :------: | :----: |
| api/memo |  POST  |

**参数**

URI参数

无

POST参数

```json
{
    "memo":{
        "year":2009,
        "content":"xxxxxxxxxxxxxx"
    }
}
```

**返回值**

```json
{
    "code":2000,
    "message":"操作成功"
}
```

