const $ = new Env("芜湖");
let option = {
    url: "https://yqfk.cqepc.edu.cn/schoolapi//api-prevention/signinfo/savebatch/", // URL，必须
    headers: { // 请求头，可选
        "Host": "yqfk.cqepc.edu.cn"
        "Connection": "keep-alive"
        "Content-Length": "979"
        "Authorization": "Bearer 2144f8ca-baaa-44d6-81fa-437c1bb3d77c"
        "referer": "https://servicewechat.com/wx949a64a04ad423d3/32/page-frame.html"
        "xweb_xhr": "1"
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6364"
        "Content-Type": "application/json"
        "Accept": "*/*"
        "Sec-Fetch-Site": "cross-site"
        "Sec-Fetch-Mode": "cors"
        "Sec-Fetch-Dest": "empty"
        "Accept-Encoding": "gzip, deflate, br"
        "Accept-Language": "zh-CN,zh"
    },
    body: `{"isTravel":0,"isContact":0,"isCohabit":0,"isFatigue":0,"isShortnessBreath":0,"travelInfoVo":{"relationshipInfo":[{"contactInfo":"","name":"","relationship":"","key":0}]},"contactInfo":{},"cohabitInfo":[{"name":"","province,city,disctrict":"","returnTime":"","transType":"","transTypeValue":"","transNumber":"","currentDetailResidence":"","contactInfo":0,"highRiskInfo":0,"governmentQuarantine":0,"homeQuarantine":0,"healthCardInfo":"","healthCardUrl":"","travelInfo":"","travelUrl":"","nucleicAcid":"","nucleicAcidMethod":"","nucleicAcidPointName":"","nucleicAcidSamplingDate":"","nucleicAcidAgency":"","nucleicAcidTime":"","nucleicAcidResult":"","nucleicAcidImg":"","key":0}],"healthCardInfo":0,"healthStatus":0,"travelInfo":0,"locateDetailedAddress":"山东省烟台市栖霞市庄园街道卧龙村民安置房","locateLatitude":37.33592,"locateLongitude":120.84956,"city":"烟台市","disctrict":"栖霞市","cityCode":"0535","disctrictCode":"370686","province":"山东省"}` // 请求体，POST等方法必须，字符串或对象
}

let result = await $.http.post(URL<String> or options<Object>).then(response => response.body)
let result = await $.http.put(URL<String> or options<Object>).then(response => {
    $.log(JSON.stringify(response.headers));
    return response.body
})