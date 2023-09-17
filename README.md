# reverseApp

## 抓包
[模拟器fiddler抓包/](https://cloud.tencent.com/developer/article/2220183?areaSource=102001.19&traceId=wnWh95Qli4BjrimDbxPvi)
`
注意事项 安卓版本高 证书不会再自己安装到系统证书要手动移动 

`


Android逆向分析实例(二)-修复输入法回编译后闪退问题
https://blog.csdn.net/qq_42052733/article/details/115822623

脱壳手法 mdex.apk  或者 frida
[相关链接/尘心免费逆向课](https://www.bilibili.com/video/BV1dB4y1W75X/)


medx.apk 需要xpose   edxpose 需要 先刷入 magisk 

雷电模拟器 9.0.31 
要开启root 和 system.vmdk可写入
刷入magisk 失败 只出现`只有一个选择文件并修补` 9.0.55 刷入成功
[雷电模拟器9刷Magisk改真机环境APP过检测](https://www.bilibili.com/video/BV1bs4y1k7Wv/?spm_id_from=333.337.search-card.all.click&vd_source=89339925c834a2bb326d535c7ed230f2)

## EdXposed  如何下载
`
EdXposed Framework
To put it simply, just follow these steps:

1.安装 Magisk v21+
2.在 Magisk 仓库中安装 Riru v23 或更高版本.
3.下载并在恢复模式(Recovery)或经由 Magisk Manager 安装 EdXposed.
4.安装 EdXposed Manager.
5.重启手机.

`


now everything ok  
edxpose 下载完毕模拟器改为oppo真机



app 屡次停止运行 未解决导致我无法脱壳 
等真机把


### frida 脱壳

`frida-ps -Ua 查看当前 app 包名` 
pip 安装 frida-dexdump

1. -d, --deep-search 深度搜索  用时更长.

2. -o OUTPUT, --output OUTPUT  Output folder path, default is './<appname>/'.

`adb  
-s  xx  表示有多个可连接  选中其中之一`


## ddms.bat
    
adb包工具.
    可以用来查看 Log.d等控制台输出

## frida 配置
pc 端.
1. pip install frida-tools #CLI tools.
pip install  # frida binding.
2. npm install frida # Node.js binding.
手机

查看cpu架构
adb shell.
getprop ro.product.cpu.abi #进行端口转发
adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043




 `frida 和手机端frida-server 版本一致` [firda -service-xx-android-arm(x86).xz] -> data/local/tempt/ 权限9.
shell -> su -> cd data/local/tempt/ -> ./frida  .
 ` 手机版 shell 之后su失败 p19 frida专题`

 [frida官网](https://frida.re/docs/frida-ps)


  frida-ps -U
 frida-ps -Ua
  frida-ps -Uai

  ## frida 两种模式

### 主动调用实例对象的方法
1. 重新new 一个
2. 获取内存中的对象
``` js
function callFun(){
    let hookClassName = "com.cxcrecak.vipcallfun.callFun";
    let callResStr = "";
    Java.perform(function(){
        Java.choose(hookClassName,{
            onMatch: function(inclass){
                console.log("hi ","\n\t")
                // inclass 相当于类 
                callResStr = inclass.getStringA("how are you");

            },
            onComplete: function(){
                console.log("bye ","\n\t")

            }
        })
        return callResStr;
    })
}


function callFunNew(){
    let hookClassName = "com.cxcrecak.vipcallfun.callFun";
    let callResStr = "";
    Java.perform(function(){
        let cls = Java.use(hookClassName);
        let obj = cls.$new();
        callResStr = obj.getStringA("hello");
        return callResStr;
    })
}

```
内存中的类和函数
获取内存中加载的类 enumerateLoadedClasses


获取类中的所有方法 getDeclaredMethods

[对象转换](./reserverObject.js)


```
magisk 下载成功  fastboot 有问题
=======
>>>>>>> a9dfae7db0dc593e1a8bc40d5a1dea2f5c71b8dc
