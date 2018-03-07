//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        list: [
            {
                id: 1,
                imagePath: "/images/IMG_3522.jpg"
            }, {
                id: 2,
                imagePath: "/images/IMG_3523.jpg"
            }
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        circular: true,

        toView: 'red',
        scrollTop: 0,

        entrance: [
            {
                name: "全部",
                backgroundColor: "green"
            },{
                name: "品牌",
                backgroundColor: "blue"
            },{
                name: "配件",
                backgroundColor: "red"
            },{
                name: "案例",
                backgroundColor: "chocolate"
            },{
                name: "光伏",
                backgroundColor: "orange"
            },{
                name: "空气能",
                backgroundColor: "teal"
            },{
                name: "动态",
                backgroundColor: "coral"
            },
        ]
    },
    onLoad: function () {
    }
});
