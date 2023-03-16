var vm = new Vue({
  el: "#app",
  data: {
    players: [
      { name: "Stephen Curry", number: "30", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Curry.jpg", description: "斯蒂芬·库里（Stephen Curry），1988年3月14日出生于美国俄亥俄州阿克伦，美国职业篮球运动员，司职控球后卫，效力于NBA金州勇士队。" },
      { name: "Klay Thompson", number: "1 1", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Klay.jpg", description: "克莱·汤普森(Klay Thompson),1990年2月8日出生于美国加利福尼亚州洛杉矶，美国职业篮球运动员，司职得分后卫，效力于NBA金州勇士队。" },
      { name: "Draymond Green", number: "2 3", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Green.jpg", description: "德雷蒙德·格林（Draymond Green），1990年3月4日出生于美国密歇根州萨吉诺，美国职业篮球运动员，司职大前锋，效力于NBA金州勇士队" },
      { name: "Andrew Wiggins", number: "2 2", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Wiggins.png", description: "安德鲁·威金斯(Andrew Wiggins),1995年2月23日生于加拿大安大略省多伦多，加拿大职业篮球运动员，司职小前锋，效力于NBA金州勇士队。" },
      { name: "Jodan Poole", number: " 3 ", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Poole.png", description: "乔丹·普尔（Jordan Poole），1999年6月19日出生于美国威斯康星州密尔沃基，美国职业篮球运动员，司职得分后卫，效力于NBA金州勇士队。" },
      { name: "Kevin Lonely", number: " 5 ", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Lonely.png", description: "凯文·鲁尼（Kevon Looney），1996年2月6日出生于美国威斯康星州密尔沃基，美国职业篮球运动员，场上司职前锋，效力于NBA金州勇士队。" },
      { name: "Gary Payton", number: " 8 ", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Payton.png", description: "加里·佩顿二世（Gary Payton II），1992年12月1日出生于美国华盛顿州西雅图，美国职业篮球运动员，司职后卫，效力于NBA金州勇士队。" },
      { name: "Jonathan Kuminga", number: "0 0", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/Kuminga.png", description: "乔纳森·库明加(Jonathan Kuminga),2002年10月6日出生于刚果民主共和国，刚果职业篮球运动员，场上司职前锋，效力于NBA金州勇士队。" },
      { name: "Moses  Moody", number: " 4 ", imgUrl: "https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/players/muddy.png", description: "摩西·穆迪(Moses Moody),2002年5月31日出生于美国阿肯色州小石城，美国职业篮球运动员，场上司职得分后卫，效力于NBA金州勇士队。" },
      // {name:"",number:"",imgUrl:"",description:""},

    ]
  }
})
https://warriorsgo.oss-cn-chengdu.aliyuncs.com/img/
// players/Curry.jpg
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
