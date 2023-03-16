// 主页vue框架
var vm = new Vue({
    el: "#app",
    data: {
        musicUrl: "https://music.163.com/outchain/player?type=2&id=1329664405&auto=0&height=66",
        video:{index:0, poster:'https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/poster/poster-1.png',src:'https://warriorsgo.oss-cn-chengdu.aliyuncs.com/vdo/warriorsGO.mp4'},
        news: [
            { title: " 勇士三连败！人心散了，队伍不好带。球队老板已经明确的表态..", date: "2023-3-10", url: "https://fans.sports.qq.com/post.htm?id=1759953827798188072&mid=62#1_allWithElite" },
            { title: "勇士夺冠游行7大亮点！库里再现晚安手势 克莱船长搞笑热舞！", date: "2022-6-21", url: "https://new.qq.com/rain/a/20220621A00NZ300" },
            { title: "勇士夺冠游行日程出炉！全长1.67公里，耗时160分钟", date: "2022-6-19", url: "https://www.163.com/dy/article/HA35ILQ80552NV18.html" },
            { title: " 相谈甚欢！前美国总统奥巴马电话祝贺库里获得总冠军斩获FMVP", date: "2022-6-18", url: "https://new.qq.com/omn/20220618/20220618V01AM600.html" },
            { title: "库里狂轰34＋7＋7！恭喜勇士队成功夺冠，格林准三双，塔图姆拉胯", date: "2022-6-17", url: "https://new.qq.com/omn/20220617/20220617A03TT400.html" },
            { title: "攻占天王山！勇士G5五佳球：普尔超远压哨三分 维金斯暴扣炸筐!", date: "2022-6-14", url: "https://new.qq.com/omn/20220614/20220614V042JL00.html" },
            { title: " 官网更新FMVP排名！霍福德居首布朗第二 库里第四塔图姆未进前五", date: "2022-6-4", url: "https://www.sohu.com/a/554061309_121350645" },
            { title: " NBA总决赛 勇士vs凯尔特人 今日开打！门票售价再创新高，最贵单价超8万美元", date: "2022-6-3", url: "https://www.sohu.com/a/554061309_121350645" },
            { title: " 西决G5大赚2657万美元！勇士笑了，独行侠笑了，肖华也笑了", date: "2022-5-28", url: "https://new.qq.com/omn/20220527/20220527A07ZVH00.html" },
            { title: "提前恭喜勇士重返总决赛！西决3-0独行侠，维金斯惊天隔扣东契奇", date: "2022-5-23", url: "https://www.thepaper.cn/newsDetail_forward_18221873" },
            { title: "勇士西决开门红，经过灰熊的洗礼，这支球队真成冠军球队了", date: "2022-5-19", url: "https://new.qq.com/omn/20220519/20220519A0CO2T00.html" },
            { title: " 狄龙追加禁赛，小佩顿赛季报销！库里愤恨发声，他本该大放异彩", date: "2022-5-4", url: "https://www.163.com/dy/article/H6HM0TKE0552ZEBO.html" },
        ],
        gameList: [
            { order: 'G1', team: ["凯尔特人", "勇士"], date: "2022-6-3 9:00" },
            { order: 'G2', team: ["凯尔特人", "勇士"], date: "2022-6-6 8:00" },
            { order: 'G3', team: ["勇士", "凯尔特人"], date: "2022-6-9 9:00" },
            { order: 'G4', team: ["勇士", "凯尔特人"], date: "2022-6-11 9:00" },
            { order: 'G5', team: ["勇士", "凯尔特人"], date: "2022-6-14 9:00" },
            { order: 'G6', team: ["勇士", "凯尔特人"], date: "2022-6-17 9:00" },
            { order: 'G7', team: ["凯尔特人", "勇士"], date: "2022-6-20 8:00" }
        ],
        players: [{ site: "腾讯体育", link: "https://nba.stats.qq.com/schedule" },
        { site: "央视体育", link: "https://tv.cctv.com/live/cctv5/" },
        { site: "24直播吧", link: "http://m.24zhiboba.com/" },
        { site: "热狗直播", link: "https://jxcxgk.com/list/NBA/" },
        { site: "93直播", link: "http://m.93ty.vip/#/" },
        { site: "优直播", link: "https://www.yoozhibo.net/lanqiu/nba/" },
        { site: "9球直播", link: "https://www.99zbwang.com/class/basketball/" },
        { site: "直播App", link: "pages/appList.html" }
        ],
        videos:[
            {index:0,poster:"https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/poster/poster-1.png",src:"https://warriorsgo.oss-cn-chengdu.aliyuncs.com/vdo/warriorsGO.mp4"},
            {index:1,poster:'https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/poster/poster-2.jpg',src:'https://warriorsgo.oss-cn-chengdu.aliyuncs.com/vdo/GetTheChampion.mp4'}
        ],
    },
    methods: {
        // 视频切换
        toPrev: function () {
            this.video.index<0?this.video = this.videos[this.video.index-1]:alert('First One')
        },
        toNext: function () {
            this.video.index+1<this.videos.length?this.video = this.videos[this.video.index+1]:alert("Last One!")
        }
    }
})










//轮播图
let left = document.querySelector(".button-left")
let right = document.querySelector(".button-right")
let min = document.querySelectorAll(".min")
let images = document.querySelector(".images")
// 我们先设置一个index用来计算和控制图片的位置，再设置一个time作为定时器
let index = 0
let time
// 在这里我们先创建一个position为复用函数，作用就是结合index来定义当前图片的位置的
function position() {
    images.style.left = (index * -100) + "%"
}
// 然后我们创建一个复用函数add为加函数，如果当前图片的位置值index大于等于当前图片数量的话，就说明超出了计算范围，所以得清零，如若不然index就加一
function add() {
    if (index >= min.length - 1) {
        index = 0
    } else {
        index++
    }
}
// 反之desc为减函数，如果当前图片的位置值index小于1了，那么他的值就反弹到最顶端，也就是轮播图的最后面，如若不然index就减一
function desc() {
    if (index < 1) {
        index = min.length - 1
    } else {
        index--
    }
}
// 创建一个timer来当做复用时间的函数，，每隔3秒钟index就加一，然后加入增加add函数和desc函数来判断一下，再加入定位函数
function timer() {
    time = setInterval(() => {
        index++
        desc()
        add()
        position()
    }, 3000)
}
// 接下来我们设置一下按钮，left为左边的按钮，因为点击时图片会反方向倒退，所以我们套入desc减函数进去，顺便定位一下
// 当然，点击的时候我们必须先把定时器给停掉再重新执行一遍，不然会在你点击下一张图片时，定时器倒计时一到也跟着生效，这样子就会连跳两张图片了
left.addEventListener("click", () => {
    desc()
    position()
    clearInterval(time)
    timer()
})
// 右边的按钮和左边也是差不多
right.addEventListener("click", () => {
    add()
    position()
    clearInterval(time)
    timer()
})
// 在弄好左右两个按钮的时候，我们还需要生效下面的小图片按钮，
// 首先我们先遍历一遍，然后获取当前点击的那个小图片按钮的值并赋值给index，这样子就可以随之跳转
for (let i = 0; i < min.length; i++) {
    min[i].addEventListener("click", () => {
        index = i
        position()
        clearInterval(time)
        timer()
    })
}
// 最后的最后我们将定时器开起来，这样子图片就可以自动轮播啦，如果还不明白多练几遍就会了，将其理解进去，吸取精华所在，反复咀嚼，加油，感谢你的观看，我们下期再见
timer()
