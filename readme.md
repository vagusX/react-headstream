React Headstream

This is a project named React Headstream

We build it base on Ant Design

Tools:

React, Webpack, Babel 6

Features

Hot Module Replacement based on babel-plugin-react-transform

CSS Modules in ` client ` folder based on CSS Modules and use css-loader

Override part styles in Ant Design (rewrite the `custome.less` partly in styles)

Features

Hot Module Replacement based on babel-plugin-react-transform

CSS Modules in ` client ` folder based on CSS Modules and use css-loader

Override part styles in Ant Design

And one more thing

We have a tool to init a new project ` Tapas-init `

Dev

bash
```
npm i
npm run start
```

Build
```
npm run build
```

Ant Design version: 0.10.4

关于`./client/styles`文件夹

Copied from ant-design sources folders

`./themes/default/index.less` 文件下定义了Antd Design的less变量，
override.less是我写的覆盖部分，下方一堆 `!important` 请勿采用，仅作示例

需要定制Ant Design时，
可以直接copy从npm安装ant design后的styles文件夹，然后直接修改其中的less文件即可。

antd模块采用了babel-plugin-antd插件编译，
避免直接`import`时，该项目`lib/index.js`里面直接引用了全部编译好的css，
会导致打包两份css文件。
