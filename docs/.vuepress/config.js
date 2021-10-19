module.exports = {
    theme: 'reco',
    
    themeConfig: {
      noFoundPageByTencent: false
    },
    title: "Haruka的博客",
    description: "计算机真好。",
    dest: "public",
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "/favicon.ico"
        }
      ],
      [
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no"
        }
      ]
    ],
    theme: "reco",
    themeConfig: {
      nav: [
        {
          text: "Home",
          link: "/",
          icon: "reco-home"
        },
        {
          text: "TimeLine",
          link: "/timeline/",
          icon: "reco-date"
        },
/*         {
          "text": "Github",
          "icon": "reco-github",
          "link": "https://github.com/HarukaChen",
        }, */
        {
          text: "About",
          icon: "reco-account",
          link: "/others/about"
        }
      ],
      type: "blog",
      blogConfig: {
        category: {
          location: 3,
          text: "Category"
        },
        tag: {
          location: 4,
          text: "Tag"
        }
      },
      friendLink: [
        {
          title: "Zoe",
          desc: "和Haruka同一天出生的朋友的博客",
          link: "https://zoe0104.github.io/github.io/",
          logo: "/friendLink/zoe.png"
        },
        {
          title: "Feliks",
          desc: "当代社恐青年程序员的Bilibili Page",
          link: "https://space.bilibili.com/44799291",
          logo: "/friendLink/feliks.png"
        }
      ],
      logo: "/logo.png",
      search: true,
      searchMaxSuggestions: 10,
      lastUpdated: "Last Updated",
      author: "Haruka",
      authorAvatar: "/avatar.png",
      startYear: "2020"
    },
    markdown: {
      lineNumbers: true
    },
    plugins: [
      "vuepress-plugin-nuggets-style-copy",
      '@maginapp/vuepress-plugin-katex',
    ]
  }