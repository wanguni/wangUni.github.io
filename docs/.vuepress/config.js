module.exports = {
    title: "Universe's Blog",
    keywords: 'Universe blog',
    description: "Welcome to my universe",
    repo: 'https://github.com/WangUni/wangUni.github.io',
    base: '/', // 本地运行需要注释（发布时候使用）
    theme: 'reco-ls',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],

    ],
    lastUpdated: 'Last Updated',
    themeConfig: {
        logo: '/img/portrait.jpg',
        type: 'blog',
        author: 'YuZhou',
        authorAvatar: '/img/portrait.jpg',
        modePicker: false,
        startYear: '2020',
        subSidebar: 'auto',
        lastUpdated: 'Last Updated',
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
        ],
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            },
            socialLinks: [ // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/WangUni' }
            ]
        },
        valineConfig: {
            appId: 'dnY20G2hJaf1K4GSyzb5cb5c-gzGzoHsz',
            appKey: 'FoBlPtlb4Dttee9H480Te4J8',
            avatar: 'mp',
            placeholder: 'Please leave a message'
        },
        codeTheme: 'okaidia',
        friendLink: [{
                title: 'CRM',
                desc: 'test',
                logo: "/img/M.jpg",
                link: 'https://myhtest.maoye.cn/'
            },
            {
                title: 'maoM',
                desc: 'test',
                logo: '/img/M.jpg',
                link: 'https://makeuptest.maoye.cn/#/login'
            }
        ]
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [ //使用插件
        [
            'vuepress-plugin-pagation', {

            }
        ],
        // [
        //     "@vuepress-reco/vuepress-plugin-kan-ban-niang",
        //     {
        //         theme: ["blackCat"],
        //         clean: true,
        //         messageStyle: {
        //             right: '0px',
        //             bottom: '0px'
        //         },
        //         modelStyle: {
        //             right: '0',
        //             bottom: '-40px',
        //             opacity: '0.9'
        //         }
        //     }
        // ],
        [
            "import", {
                "libraryName": "vue-canvas-effect",
                "libraryDirectory": "src/components"
            }
        ]
        // ["sakura", { //页面樱花插件
        //     num: 30, // 默认数量
        //     show: true,
        //     zIndex: 2,
        //     img: {
        //         replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        //         httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
        //     }
        // }]
    ],
}