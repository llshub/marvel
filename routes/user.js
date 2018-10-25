const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//在路由器下添加路由
//1.用户登录
router.post('/login',(req,res)=>{
  //获取浏览器请求的数据
  var obj=req.body;
  var $uname=obj.uname;
  var $upwd=obj.upwd;
  //执行判断是否登录成功——用户名和密码同时正确
  //查询数据，查询的结果中，要有对应的记录
  var sql='SELECT * FROM user WHERE uname=? AND upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	//返回一个数组
	if(result.length>0){
	  res.write("1");
	}else{
	  res.write("0");
	}
	res.end();
  });
});
//2.用户注册
router.post('/register',(req,res)=>{
    var obj=req.body;
    var $uname=obj.uname;
    if($uname==""){
        res.send("用户名不能为空！");
        return;
    }
    var $upwd=obj.upwd;
    if($upwd==""){
        res.send("密码不能为空！");
        return;
    }
    var $email=obj.email;
    if($email==""){
        res.send("邮箱不能为空！");
        return;
    }
    var $phone=obj.phone;
    if($phone==""){
        res.send("电话号码不能为空！");
        return;
    }
    var sql="INSERT INTO user VALUES(null,?,?,?,?)"
    pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:"register success"});
        }else{
            res.send({code:301,msg:"register error"});
        }
    });
});
//判断是否存在用户名
router.get('/selectUname',(req,res)=>{
    var $uname=req.query.uname;
    var sql = 'SELECT * FROM user WHERE uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
             res.send('1');
        }else{
             res.send('0');
        }
    });
});

module.exports=router;

