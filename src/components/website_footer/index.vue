<template>
  <footer id="newsletter">
    <div class="container">
      <div class="row">
        <div class="text">
          <div class="section-heading">
            <h4>加入我们的邮件列表，接收信息和最新趋势</h4>
          </div>
        </div>
        <div class="inputForm">
          <form id="search" action="#" method="GET">
            <el-row :gutter="20">
              <el-col :span="12"
                ><fieldset>
                  <input
                    type="address"
                    name="address"
                    placeholder="邮箱地址..."
                    autocomplete="on"
                    required
                    class="email"
                  /></fieldset
              ></el-col>
              <el-col :span="12"
                ><fieldset>
                  <button type="submit" class="main-button">
                    立即订阅
                  </button></fieldset
              ></el-col>
            </el-row>
          </form>
        </div>
      </div>
      <div class="info">
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="footer-widget">
              <h4>联系我们</h4>
              <p>广东省广州市大学城外环东路280号</p>
              <p><a href="#">020-39352027</a></p>
              <p><a href="http://www.gdpu.edu.cn">gdpu.edu.cn</a></p>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="footer-widget">
              <h4>关于我们</h4>
              <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">关于</a></li>
                <li><a href="#">邮件</a></li>
                <li><a href="#">微博</a></li>
              </ul>
              <ul>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">关于我们</a></li>
              </ul>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="footer-widget">
              <h4>扩展链接</h4>
              <ul>
                <li><a href="http://www.gdpu.edu.cn">广东药科大学</a></li>
                <li>
                  <a href="https://www.gdpu.edu.cn/info/1013/2078.htm"
                    >中山校区</a
                  >
                </li>
                <li>
                  <a href="https://yyxxgc.gdpu.edu.cn/">医药信息工程学院</a>
                </li>
                <li>
                  <a href="https://jwc.gdpu.edu.cn/zyml/31.pdf">数字媒体技术</a>
                </li>
                <li><a href="https://zsb.gdpu.edu.cn/">本科招生</a></li>
              </ul>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="footer-widget">
              <h4>关于我们学校</h4>
              <div class="logo">
                <img src="../../assets/images/unLogo.png" alt="" />
              </div>
              <p>
                广东药科大学将遵循“以药为主、医药结合、多学科协调发展”的办学方针。
              </p>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="copyright-text">
        <p>
          Copyright © 2024 广东药科大学 保留所有权利<br />
          数字媒体技术
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped>
footer {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 60px;
  background-color: #1781b5;
  background-color: #222;
  /* background: linear-gradient(to right, #f44336, #9c27b0, #03a9f4, #2196f3); */
}
.container {
  margin: 0 auto;
  max-width: 1320px;
}
footer .section-heading {
  margin-bottom: 45px;
}
footer .section-heading h4 {
  line-height: 45px;
  color: #fff;
  margin-left: 13%;
  margin-right: 13%;
  text-align: center;
}
footer .inputForm {
  margin: 0 25%;
}
footer .inputForm #search {
  margin-bottom: 80px;
}

footer .inputForm #search input {
  font-size: 15px;
  color: #fff;
  outline: none;
  height: 46px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  width: 100%;
}
footer .inputForm #search input::placeholder {
  color: #fff;
}
footer .inputForm #search button {
  height: 46px;
  border-radius: 23px;
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 14px;
  color: #fff;
  width: 100%;
  transition: all 0.5s;
}
footer .inputForm #search button:hover {
  background-color: #fff;
  color: #222;
  cursor: pointer;
}
footer .footer-widget .logo img {
  max-width: 96px;
  margin-bottom: 30px;
}
footer .footer-widget h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 30px;
}

footer .footer-widget p {
  margin-bottom: 15px;
  color: #fff;
}

footer .footer-widget p a {
  color: #fff;
}

footer .footer-widget ul {
  display: inline;
  max-width: 45%;
  float: left;
  margin-right: 10%;
}

footer .footer-widget ul li {
  margin-bottom: 10px;
}
footer .footer-widget ul li a {
  font-size: 15px;
  color: #fff;
  transition: all 0.3s;
}
footer .footer-widget ul li:hover {
  opacity: 0.75;
}
footer .copyright-text p {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0px;
  color: #fff;
  line-height: 1.3;
}

footer .copyright-text p a {
  color: #fff;
  transition: all 0.5s;
}
footer .copyright-text p a:hover {
  opacity: 0.75;
  color: #fff;
}
</style>
