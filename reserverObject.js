function gerMaps(){
    Java.perform(function(){
        Java.openClassFile("/data/local/tmp/fastjson.dex").load()
        let fastJson = Java.use("com.alibaba.fastjson.JSONObject");
        let clazz = Java.use("com.cxcrecak.var.exp");
        let res  =  clazz.gerMaps("world");
        console.log(fastJson.toJSONString(res));
        return res;

    })
}