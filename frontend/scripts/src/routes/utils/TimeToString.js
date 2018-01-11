module.exports = {
  /**
   * 时间转换
   * @param {date} date  new Date()
   * @returns {string}  "2016年7月29日 17:04"
   * @constructor
   */
  TimeToString: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
    result += date.getFullYear();
    result += "年";
    result += (date.getMonth() + 1);
    result += "月";
    result += date.getDate();
    result += "日";
    result += date.getHours();
    result += ":";
    result += (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
    return result;
  },

  TimeToString2: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
    result += date.getFullYear();
    result += "年";
    result += (date.getMonth() + 1);
    result += "月";
    result += date.getDate();
    result += "日";
    // result += ",";
    result += date.getHours();
    result += "时";
    result += date.getMinutes();
    result += "分";
    return result;
  },

  TimeToString3: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
    result += date.getFullYear();
    result += "-";
    result += (date.getMonth() + 1);
    result += "-";
    result += date.getDate();
    result += " ";
    // result += ",";
    result += date.getHours();
    result += ":";
    result += (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
    result += ":";
    result += (date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds());
    return result;
  },

  TimeToString4: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
    result += date.getFullYear();
    result += "年";
    result += (date.getMonth() + 1);
    result += "月";
    result += date.getDate();
    result += "日";
    result += date.getHours();
    result += ":";
    result += (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
    result += ":";
    result += (date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds());
    return result;
  },
  //获取年、月、日
  TimeToString5: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
    result += date.getFullYear();
    result += "-";
    result += (date.getMonth() + 1);
    result += "-";
    result += date.getDate();
    return result;
  },
  //获取时、分、秒
  TimeToString6: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
  //  result += date.getHours();
    result += (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours());
    result += ":";
    result += (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
    return result;
  },
  //获取昨天的日期
  //获取年、月、日
  TimeToString7: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var result = "";
    result += date.getFullYear();
    result += "-";
    result += (date.getMonth() + 1);
    result += "-";
    result += (date.getDate()-1);
    return result;
  },
  TimeToStringShort: function (date) {
    if (date == undefined || date == null || date == "") return "";
    var currentDate = new Date();
    var result = "";
    if (date.getFullYear() !== currentDate.getFullYear()) {
      result += date.getFullYear();
      result += "年";
    }
    if (!(date.getMonth() == currentDate.getMonth() && date.getDate() == currentDate.getDate())) {
      result += (date.getMonth() + 1);
      result += "月";
      result += date.getDate();
      result += "日";
    }

    result += date.getHours();
    result += ":";
    result += (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
    return result;
  },

  TimeToDate: function (date) {
    if (date == undefined || date == null) return "";
    // if(date==new Date("0999-12-31T16:00:00.000Z")) return "";
    if (date.getFullYear() < 1700) return "";
    var result = "";
    result += date.getFullYear();
    result += "年";
    result += (date.getMonth() + 1);
    result += "月";
    result += date.getDate();
    result += "日";
    return result;
  },

  Today: function () {
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
  },

  Tomorrow: function () {
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0);
  },

  NextDate: function (d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0);
  }

};
