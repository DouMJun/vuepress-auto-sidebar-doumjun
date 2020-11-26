# vuepress-auto-sidebar-doumjun

帮助你快速创建侧边栏:

## 如何使用：
- 第一步：
  下载
  ```js
  npm install vuepress-auto-sidebar-doumjun
  ```
- 第二步：
  在config.js文件中引入
  ```js
  //config.js
  const autosidebar = require('vuepress-auto-sidebar-doumjun')
  ```
- 第三步：
  在`themeconfig`中使用
  ```js
  //config.js
  themeConfig: {
    ...
    sidebar: {
        '/guide/BLOG/': [
          {
            title: '博客',//此处写标题
            children: autosidebar('/guide/BLOG/')//向autosidebar传入文档所在文件夹的路径
          }
        ]
    }
    ...
  }
  ```
- 第四步：
  打包查看效果
  ```js
  npm run docs:dev
  ```
## 效果预览：
[https://doumjun.github.io/vuepress.blog/guide/BLOG/](https://doumjun.github.io/vuepress.blog/guide/BLOG/)

github：[https://github.com/DouMJun/vuepress-auto-sidebar-doumjun](https://github.com/DouMJun/vuepress-auto-sidebar-doumjun)
欢迎提问和讨论.
  