var vm = new Vue({
    el: "#app",
    data: {
        msg1: "",
        msg2: "",
        user: {
            phoneNum: null,
            password: null
        },
        datainfo: {
            phoneNum: '13088889999',
            password: '123456'
        }
    },
    methods: {
        login: function () {
            // 输入验证
            if (this.user.phoneNum == null || this.user.password == null) {
                this.msg1 = "请输入手机号和密码！"
            } else if (this.user.phoneNum == ' ' || this.user.password == ' ') {
                this.msg1 = "不能输入空格!"
            } else if (isNaN(this.user.phoneNum)) {
                this.msg1 = "手机号检测到非法字符！"
            } else if (isNaN(this.user.password)) {
                this.msg1 = "密码仅允许6位数字！"

            }
            // 密码验证
            else {
                if (this.user.phoneNum == this.datainfo.phoneNum && this.user.password == this.datainfo.password) {
                    this.msg1 = "登陆成功";
                    setTimeout(function () { window.location.href = "../index.html"; }, 1000)
                } else {
                    this.msg1 = '密码错误'
                }
            }
        }
    }
})


let button = document.querySelector('.button')
let ball = document.querySelector('.ball')
let bottom = document.querySelector('.bottom')
let off = document.querySelector('.off')
let on = document.querySelector('.on')
let index = 0
button.addEventListener('click', () => {
    if (index == 0) {
        index = 1
        ball.style.left = 61 + '%'
        on.style.opacity = 1
        off.style.opacity = 0.5
        bottom.style.transform = "rotateY(180deg)"
    } else {
        index = 0
        ball.style.left = 0 + '%'
        on.style.opacity = 0.5
        off.style.opacity = 1
        bottom.style.transform = "rotateY(0)"
    }
})
