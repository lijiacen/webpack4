const loaderUtils = require("loader-utils");

module.exports = function(source) {
  console.log("读取loader中options的参数 this.query:" + this.query.name); //读取loader中options的参数
  console.log(loaderUtils.getOptions(this)); //使用loaderUtils获取参数
  //return source.replace("li", "lijiacen");

  //使用callback 想传递源代码，同时传递sourcemap一些信息，用callback取代return的方式
  const result = source.replace("li", this.query.name);
  this.callback(null, result);
};
