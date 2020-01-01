//初始化
var lasttime=0;
var soft_id;
var version;
var isreg = -1;
var code;
var msg;
function mian_init(soft_id,version){
    soft_id = soft_id;
    version = version;

}

//注册
function tw_reg(codes){
    if (codes==""){
        //注册码为空
        msg = "注册码为空";
        return false;
    }
    cid=getComputerid()
    if(cid==""){
        //没有获取到设备码
        msg = "没有获取到设备码";
        return false;
    }
    param = {"o":"0","si":softid,"ver":version,"c":code,"ci":cid,"ip":getIp(),"time":getTime() };
    code  = codes ;
    isreg = requests(param,false);
    return isreg;

}

//推荐人
function tw_recommend(list){
if (isArray(list)){
    codes=list[0];//自己的注册码
    recommendcode=list[1];//别人的注册码
    if (code==""){
        //注册码为空
        msg = "注册码为空";
        return false;
    }
    cid=getComputerid()
    if(cid==""){
        //没有获取到设备码
        msg = "没有获取到设备码";
        return false;
    }
    var code = codes;
    param = {"o":"5","si":softid,"ver":version,"c":code,"ci":cid,"rm":recommendcode,"time":getTime() };
    isreg = requests(param,false);
    return isreg;

}else{
    msg = "邀请参数错误";
    return false;
}
}

//解绑
function tw_unbind(code){
    code = code;
    if (code==""){
        //注册码为空
        msg = "注册码为空";
        return false;
    }
    cid=getComputerid()
    if(cid==""){
        //没有获取到设备码
        msg = "没有获取到设备码";
        return false;
    }
    param = {"o":"1","si":softid,"ver":version,"c":code,"ci":cid,"ip":getIp(),"time":getTime() };
    isreg = requests(param,false);
    return isreg;
}

function tw_try(){
    cid=getComputerid()
    if(cid==""){
        //没有获取到设备码
        msg = "没有获取到设备码";
        return false;
    }
    param = {"o":"3","si":softid,"ver":version,"ci":cid,"ip":getIp(),"time":getTime() };
    isreg = requests(param,false);
    return isreg;
}

//验证码检验
function tw_check(code){
    code = code;
    now_time = getTime();
    if (now_time-lasttime<50){
        msg ="验证频率不能小于1分钟"
        lasttime = getTime();
        return fasle
    }
    lasttime = getTime();
    cid=getComputerid()
    if(cid==""){
        //没有获取到设备码
        msg = "没有获取到设备码";
        return false;
    }
    param = {"si":softid,"ver":version,"c":code,"ci":cid,"k":token,"time":getTime() };
    isreg = requests(param,false);
    return isreg;  
}

//验证码下线
function tw_offline(){
    code = getCode();
    cid=getComputerid()
    if(cid==""){
        //没有获取到设备码
        msg = "没有获取到设备码";
        return false;
    }
    code = code;
    param = {"o":"4","si":softid,"ver":version,"c":code,"ci":cid,"k":token,"time":getTime()};
    isreg = requests(param,false);
}

//不懂易语言
function tw_getmsg(msg){
    msg = msg;
    if(msg){
        return msg;
    }else{
        false;
    }
}

//不懂易语言
function tw_isreg(isreg){
    return isreg;
}



//请求加密的封装
function requests(param,check){
    console.log(param);
}

function getComputerid(){
    //预留获取运行的设备的id，自行解决。
    //这里js获取六篮球全球唯一id
  bow_id =  navigator.userAgent;
 console.log("浏览器标识：",bow_id)
 return bow_id;

}

function getIp(){
    //预留获取Ip
    return "12.321.12.123"
}

//获取时间戳
function getTime(){
    return  Date.parse(new Date());
}

//判断是否为数组
function isArray(obj) { 
    return Object.prototype.toString.call(obj) === '[object Array]';   
  }

//读取本地缓存激活码
function getCode(){
    return "12342fawer";
}


    