const { runMain } = require("module");

function hooks(params) {
    Java.perform(function() {

        let hooksClass = Java.use("com.cxcrecak.vipcallfun.Calc");

        hooksClass.getString.implementation = function(a){
         console.log("传进来的参数是",a);
         return this.getString(a)
        }
    })

}

function callStaticFun(params) {
    let className = "com.cxcrecak.vipcallfun.Calc";
    let result = "";
    Java.perform(function (params) {
        //主动调用静态方法
        let use = Java.use(className);
        result = use.getString("HELLO");
        console.log(result);
        return result;
    })
}


function Main(){
    hooks();
}
