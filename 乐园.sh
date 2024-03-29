curl --request POST \
  --url https://yqfk.cqepc.edu.cn/schoolapi//api-prevention/signinfo/savebatch \
  --header 'Accept: */*' \
  --header 'Accept-Encoding: gzip, deflate' \
  --header 'Accept-Language: zh-CN,zh' \
  --header 'Authorization: Bearer 2144f8ca-baaa-44d6-81fa-437c1bb3d77c' \
  --header 'Connection: keep-alive' \
  --header 'Content-Length: 979' \
  --header 'Content-Type: application/json' \
  --header 'Host: yqfk.cqepc.edu.cn' \
  --header 'Sec-Fetch-Dest: empty' \
  --header 'Sec-Fetch-Mode: cors' \
  --header 'Sec-Fetch-Site: cross-site' \
  --header 'content-type: application/json' \
  --header 'referer: https://servicewechat.com/wx949a64a04ad423d3/32/page-frame.html' \
  --header 'user-agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6364' \
  --header 'xweb_xhr: 1' \
  --data '{
    "isTravel": 0,
    "isContact": 0,
    "isCohabit": 0,
    "isFatigue": 0,
    "isShortnessBreath": 0,
    "travelInfoVo": {
        "relationshipInfo": [
            {
                "contactInfo": "",
                "name": "",
                "relationship": "",
                "key": 0
            }
        ]
    },
    "contactInfo": {},
    "cohabitInfo": [
        {
            "name": "",
            "province,city,disctrict": "",
            "returnTime": "",
            "transType": "",
            "transTypeValue": "",
            "transNumber": "",
            "currentDetailResidence": "",
            "contactInfo": 0,
            "highRiskInfo": 0,
            "governmentQuarantine": 0,
            "homeQuarantine": 0,
            "healthCardInfo": "",
            "healthCardUrl": "",
            "travelInfo": "",
            "travelUrl": "",
            "nucleicAcid": "",
            "nucleicAcidMethod": "",
            "nucleicAcidPointName": "",
            "nucleicAcidSamplingDate": "",
            "nucleicAcidAgency": "",
            "nucleicAcidTime": "",
            "nucleicAcidResult": "",
            "nucleicAcidImg": "",
            "key": 0
        }
    ],
    "healthCardInfo": 0,
    "healthStatus": 0,
    "travelInfo": 0,
    "locateDetailedAddress": "山东省烟台市栖霞市庄园街道卧龙村民安置房",
    "locateLatitude": 37.33592,
    "locateLongitude": 120.84956,
    "city": "烟台市",
    "disctrict": "栖霞市",
    "cityCode": "0535",
    "disctrictCode": "370686",
    "province": "山东省"
}'