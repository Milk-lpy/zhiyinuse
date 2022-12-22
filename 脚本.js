
/**
 * 重庆电专校园打卡脚本
 *
 */

const url = "https://yqfk.cqepc.edu.cn/schoolapi//api-prevention/signinfo/savebatch/";
const method = "POST";
const headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6364"};
const data = {"isTravel":0,"isContact":0,"isCohabit":0,"isFatigue":0,"isShortnessBreath":0,"travelInfoVo":{"relationshipInfo":[{"contactInfo":"","name":"","relationship":"","key":0}]},"contactInfo":{},"cohabitInfo":[{"name":"","province,city,disctrict":"","returnTime":"","transType":"","transTypeValue":"","transNumber":"","currentDetailResidence":"","contactInfo":0,"highRiskInfo":0,"governmentQuarantine":0,"homeQuarantine":0,"healthCardInfo":"","healthCardUrl":"","travelInfo":"","travelUrl":"","nucleicAcid":"","nucleicAcidMethod":"","nucleicAcidPointName":"","nucleicAcidSamplingDate":"","nucleicAcidAgency":"","nucleicAcidTime":"","nucleicAcidResult":"","nucleicAcidImg":"","key":0}],"healthCardInfo":0,"healthStatus":0,"travelInfo":0,"locateDetailedAddress":"山东省烟台市栖霞市庄园街道卧龙村民安置房","locateLatitude":37.33592,"locateLongitude":120.84956,"city":"烟台市","disctrict":"栖霞市","cityCode":"0535","disctrictCode":"370686","province":"山东省"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
