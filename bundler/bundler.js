const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

//模块分析
const moduleAnalyser = filename => {
  //读取入口文件
  const content = fs.readFileSync(filename, "utf-8");
  //使用@babel/parser method parse 分析,得到抽象语法树，可以很好表现当前代码, 可以找到声明语句
  const ast = parser.parse(content, {
    sourceType: "module"
  });
  console.log(ast.program.body);

  const dependencies = {};

  //使用@babel/traverse 对代码分析,对抽象语法树分析，找到需要的内容
  traverse(ast, {
    ImportDeclaration({ node }) {
      //路径装换
      const dirname =
        "./" + path.join(path.dirname(filename), node.source.value);
      dependencies[node.source.value] = dirname;
    }
  });
  //使用babel编译，转化为浏览器上可以运行的代码
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  });
  return {
    filename,
    dependencies,
    code
  };
};

console.log(moduleAnalyser("./bundler/src/index.js"));
