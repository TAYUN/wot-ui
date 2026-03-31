import { defineConfig } from 'vitepress'
import { getDocsComponentNavItems, getDocsComponentSidebar } from '../../../src/config/component-catalog'

const componentNavItems = getDocsComponentNavItems('en-US')
const componentSidebar = getDocsComponentSidebar('en-US')

export default defineConfig({
  lang: 'en-US',
  description: 'A uni-app component library based on wot-design',
  themeConfig: {
    lastUpdated: {
      text: 'Last Updated'
    },
    editLink: {
      pattern: 'https://github.com/Moonofweisheng/wot-design-uni/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      {
        text: 'Guide',
        activeMatch: '/guide/',
        items: [
          {
            text: 'Basics',
            items: [
              {
                text: 'Introduction',
                link: '/en-US/guide/introduction',
              },
              {
                text: 'Design',
                link: '/en-US/guide/design',
              },
              {
                text: 'Quick Start',
                link: '/en-US/guide/quick-use',
              }
            ]
          },
          {
            text: 'Advanced',
            items: [
              {
                text: 'Custom Style',
                link: '/en-US/guide/custom-style',
              },
              {
                text: 'Custom Theme',
                link: '/en-US/guide/custom-theme',
              },
              {
                text: 'Dark Mode',
                link: '/en-US/guide/dark-mode',
              },
              {
                text: 'Internationalization',
                link: '/en-US/guide/locale',
              },
              {
                text: 'CLI',
                link: '/en-US/guide/cli',
              },
              {
                text: 'Templates',
                link: '/en-US/guide/templates',
              },
              {
                text: 'Common Problems',
                link: '/en-US/guide/common-problems',
              }
            ]
          },
          {
            text: 'AI',
            items: [
              {
                text: 'llms.txt',
                link: '/en-US/guide/llms-txt',
              },
              {
                text: 'Skills',
                link: '/en-US/guide/skills',
              }
            ]
          },
          {
            text: 'Others',
            items: [
              {
                text: 'Changelog',
                link: '/en-US/guide/changelog',
              },
              {
                text: 'Join Group',
                link: '/en-US/guide/join-group',
              },
              {
                text: '⭐ Cases',
                link: '/en-US/guide/cases',
              }
            ]
          }
        ]
      },
      {
        text: 'Components',
        activeMatch: '/component/',
        items: componentNavItems
      },
      { text: '🥤Buy Me a Coffee', link: '/en-US/reward/reward', activeMatch: '/reward/' },
      { text: 'Blog', link: 'https://blog.wot-ui.cn/about' },
      {
        text: 'Templates', items: [
          { text: 'Quick Start Template wot-starter', link: 'https://starter.wot-ui.cn/' },
          { text: 'vitesse-uni-app', link: 'https://vitesse-docs.netlify.app/' },
          { text: 'wot-starter-retail', link: 'https://github.com/wot-ui/wot-starter-retail' },
          { text: 'unibest', link: 'https://unibest.tech/' },
        ]
      },
      {
        text: 'Resources', items: [
          { text: 'Quick Start Template', link: 'https://starter.wot-ui.cn/' },
          { text: 'VS Code IntelliSense Plugin', link: 'https://marketplace.visualstudio.com/items?itemName=wot-ui.wot-ui-intellisense' },
          { text: 'Vue3 uni-app Router', link: 'https://moonofweisheng.github.io/uni-mini-router/' },
          { text: 'Mini Program CI Tool', link: 'https://github.com/Moonofweisheng/uni-mini-ci' },
          { text: 'Uni Helper', link: 'https://uni-helper.js.org/' },
          { text: 'uni-ku', link: 'https://github.com/uni-ku' },
        ]
      },
    ],
    sidebar: {
      '/en-US/guide/': [
        {
          text: 'Basics',
          items: [
            {
              text: 'Introduction',
              link: '/en-US/guide/introduction',
            },
            {
              text: 'Design',
              link: '/en-US/guide/design',
            },
            {
              text: 'Quick Start',
              link: '/en-US/guide/quick-use',
            }
          ]
        },
        {
          text: 'Advanced',
          items: [
            {
              text: 'Custom Style',
              link: '/en-US/guide/custom-style',
            },
            {
              text: 'Custom Theme',
              link: '/en-US/guide/custom-theme',
            },
            {
              text: 'Dark Mode',
              link: '/en-US/guide/dark-mode',
            },
            {
              text: 'Internationalization',
              link: '/en-US/guide/locale',
            },
            {
              text: 'CLI',
              link: '/en-US/guide/cli',
            },
            {
              text: 'Templates',
              link: '/en-US/guide/templates',
            },
            {
              text: 'Common Problems',
              link: '/en-US/guide/common-problems',
            }
          ]
        },
        {
          text: 'AI',
          items: [
            {
              text: 'llms.txt',
              link: '/en-US/guide/llms-txt',
            },
            {
              text: 'Skills',
              link: '/en-US/guide/skills',
            }
          ]
        },
        {
          text: 'Others',
          items: [
            {
              text: 'Changelog',
              link: '/en-US/guide/changelog',
            },
            {
              text: 'Join Group',
              link: '/en-US/guide/join-group',
            },
            {
              text: '⭐ Cases',
              link: '/en-US/guide/cases',
            }
          ]
        }
      ],
      '/en-US/reward/': [
        {
          text: '🥤Buy Me a Coffee',
          link: '/en-US/reward/reward',
        },
        {
          text: 'Donor List',
          link: '/en-US/reward/donor',
        },
        // 赞助渠道
        {
          text: 'Sponsor',
          link: '/reward/sponsor',
        }
      ],
      '/en-US/component/': componentSidebar
    }
  }
})
