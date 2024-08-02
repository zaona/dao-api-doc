import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
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

    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '参与编写',
        items: [
          {
            text: '编写指南',
            link: '/example/编写指南'
          }
        ],
      }
    ],

    sidebar: [
      {
        text: '【Arena插件】Chat吉PT',
        link: '/【Arena插件】Chat吉PT/【Arena插件】Chat吉PT'
      }
    ],
  }
})
