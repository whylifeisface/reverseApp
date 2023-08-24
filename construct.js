// 28课
function getMap() {
    //用js调用java
    Java.perform(function () {
        let map = Java.use("java.util.HashMap").$new();
        map.put("hello", "world")
        let clazz = Java.use("包名");
        let res = clazz.getMap(map);
        console.log(res);
        return res;
})


}
function getList() {
    Java.perform(function () {
        let list = Java.use("java.util.List").$new();
        list.add("hello world")
        let clazz = Java.use("包名");
        let res = clazz.getList(list);
        console.log(res);
        return res;
    })
}

function getStringBuffer() {
    Java.perform(function () {
        let buffer = Java.use("java.lang.StringBuffer").$new();
        buffer.append("hello world")
        let clazz = Java.use("包名");
        let res = clazz.getStringBuffer(buffer);
        console.log(res);
        return res;
    })

}