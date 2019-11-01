class CopyRightWebpackPlugin {
  constructor(options) {
    console.log(options);
    console.log("plugin used");
  }
  //apply函数接收一个compiler，webpack的一个实例. Compiler Hooks
  apply(compiler) {
    //emit时刻(异步)
    compiler.hooks.emit.tapAsync(
      "CopyRightWebpackPlugin",
      (compilation, cb) => {
        console.log(compilation.assets);
        //在/dist文件夹下生成一个copyright.txt文件
        compilation.assets["copyright.txt"] = {
          source: function() {
            return "copyright by li";
          },
          size: function() {
            return 15;
          }
        };
        cb();
      }
    );

    //complite时刻（同步）
    compiler.hooks.compile.tap("CopyRightWebpackPlugin", compilation => {
      debugger;
      console.log(compilation);
    });
  }
}

module.exports = CopyRightWebpackPlugin;
