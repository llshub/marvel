//请求数据
$(function(){
    $("#btn").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        if(!uname){
            alert("用户名不能为空！");
            return;
        }
        if(!upwd){
            alert("密码不能为空！");
            return;
        }
        $.ajax({
            url:"http://localhost:3000/user/login",
            type:"post",
            data:{
                uname,
                upwd
            },
            dataType:"json",
            success:function(res){
                if(res=="1"){
                    alert("登录成功，正在跳转主页！");
                    var str="location.href='http://localhost:3000/index.html'";
                    eval(str)
                }
                else{
                    alert("用户名不存在或密码不正确！");
                }
            }
        })
    })
})
//相关函数
/***************获取焦点函数***************/
function unameFocus(){
    $("#s1").html("请输入用户名！");
}
function upwdFocus(){
    $("#s2").html("请输入密码！");
}
/***************失去焦点函数***************/
function unameBlur(){
    if($("#uname").val()==""){
        $("#s1").html("用户名不能为空！");
    }else{
        $("#s1").html("通过！");
    }
}
function upwdBlur(){
    if($("#uname").val() ==""){
        $("#s2").html("密码不能为空！");
    }else{
        $("#s2").html("");
    }
}