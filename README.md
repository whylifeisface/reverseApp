# reverseApp
Android逆向分析实例(二)-修复输入法回编译后闪退问题
https://blog.csdn.net/qq_42052733/article/details/115822623

脱壳手法 mdex.apk  或者 frida
[相关链接](https://www.bilibili.com/video/BV1dB4y1W75X/)

medx.apk 需要xpose   edxpose 需要 先刷入 magisk 

雷电模拟器 9.0.31 
要开启root 和 system.vmdk可写入
刷入magisk 失败 只出现`只有一个选择文件并修补` 9.0.55 刷入成功
[雷电模拟器9刷Magisk改真机环境APP过检测](https://www.bilibili.com/video/BV1bs4y1k7Wv/?spm_id_from=333.337.search-card.all.click&vd_source=89339925c834a2bb326d535c7ed230f2)

## EdXposed  如何下载
`
 EdXposed Framework
To put it simply, just follow these steps:

安装 Magisk v21+
在 Magisk 仓库中安装 Riru v23 或更高版本.
下载并在恢复模式(Recovery)或经由 Magisk Manager 安装 EdXposed.
安装 EdXposed Manager.
重启手机.
完成 :)
更多详细信息，请查阅:
`


now everything ok  
edxpose 下载完毕模拟器改为oppo真机