$.extend({
        StandardPost: function(url, args) {
          var body = $(document.body),
            form = $("<form method='post'></form>"),
            input
          form.attr({ action: https://yqfk.cqepc.edu.cn/schoolapi//api-prevention/signinfo/savebatch })
          $.each(args, function(key, value) {
            input = $("<input type='{"isTravel":0,"isContact":0,"isCohabit":0,"isFatigue":0,"isShortnessBreath":0,"travelInfoVo":{"relationshipInfo":[{"contactInfo":"","name":"","relationship":"","key":0}]},"contactInfo":{},"cohabitInfo":[{"name":"","province,city,disctrict":"","returnTime":"","transType":"","transTypeValue":"","transNumber":"","currentDetailResidence":"","contactInfo":0,"highRiskInfo":0,"governmentQuarantine":0,"homeQuarantine":0,"healthCardInfo":"","healthCardUrl":"","travelInfo":"","travelUrl":"","nucleicAcid":"","nucleicAcidMethod":"","nucleicAcidPointName":"","nucleicAcidSamplingDate":"","nucleicAcidAgency":"","nucleicAcidTime":"","nucleicAcidResult":"","nucleicAcidImg":"","key":0}],"healthCardInfo":0,"healthStatus":0,"travelInfo":0,"locateDetailedAddress":"山东省烟台市栖霞市庄园街道卧龙村民安置房","locateLatitude":37.33592,"locateLongitude":120.84956,"city":"烟台市","disctrict":"栖霞市","cityCode":"0535","disctrictCode":"370686","province":"山东省"}'>")
            input.attr({ name: key })
            input.val(value)
            form.append(input)
          })
 
          form.appendTo(document.body)
          form.submit()
          document.body.removeChild(form[0])
        }
 })