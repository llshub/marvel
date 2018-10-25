const express = require('express');
const user = require('./routes/user.js');//导入用户user路由器
const bodyParser=require('body-parser');
//1.构建web服务器
var app=express();
app.listen(3000);
//2.托管静态资源
app.use(express.static('./public'));

//使用body-parser中间件
app.use(bodyParser.urlencoded({
    extended:false
}));
//使用路由器
//把用户路由器掉在到/user下
app.use('/user',user);





