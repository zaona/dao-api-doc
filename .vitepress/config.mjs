import AutoNav from "vite-plugin-vitepress-auto-nav";
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  vite: {
    plugins: [
      AutoNav({
        pattern: "**.md",
        itemsSetting: {
          "API/新手入门": { sort : 0 },
          "API/🌍游戏世界": { sort : 1 },
          "API/🧱游戏方块": { sort : 2 },
          "API/🏠游戏模型实体": { sort : 3 },
          "API/🕺游戏模型动作": { sort : 4 },
          "API/👤游戏玩家": { sort : 5 },
          "API/🖼️游戏用户界面": { sort : 6 },
          "API/📈游戏数据存储": { sort : 7 },
          "API/🔗游戏外部数据请求": { sort : 8 },
          "API/🟰游戏数学": { sort : 9 },
          "API/动画对象": { sort : 10 },
          "API/音乐对象": { sort : 11 },
          "API/事件监听": { sort : 12 },
          "API/第三方插件API": { sort : 13 },
          "API": { sort : 14 },
          "【Arena插件】Chat吉PT": { sort : 15 },
          "参与编写": { sort : 16 },
        },
      })
    ],
  },
  srcDir: 'docs',
  cleanUrls: true,
  lang: 'zh',
  title: "岛3API文档",
  description: "",
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    outline: {
      level: [1, 2],
      label: '大纲',
    },
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // editLink: {
    //   pattern: 'https://github.com/xxx/xxx/edit/main/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },

    // nav: [
    //   {
    //     text: '首页',
    //     link: '/'
    //   },
    //   {
    //     text: '参与编写',
    //     items: [
    //       {
    //         text: '编写指南',
    //         link: '/example/编写指南'
    //       }
    //     ],
    //   }
    // ],
  }
})
