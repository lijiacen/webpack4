const loaderUtils = require("loader-utils");

module.exports = function(source) {
  console.log("读取loader中options的参数 this.query:" + this.query.name); //读取loader中options的参数
  console.log(loaderUtils.getOptions(this)); //使用loaderUtils获取参数
  //异步loader编写
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace("li", this.query.name);
    callback(null, result);
  }, 1000);
};
