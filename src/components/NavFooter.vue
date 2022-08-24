//底部导航
<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../static/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/u/1343480" target="_blank">张杨</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/113.html" target="_blank"
        >Vue仿小米项目</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/236.html" target="_blank"
        >React项目</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/343.html" target="_blank"
        >静态页面</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/392.html" target="_blank"
        >uniapp项目</a
      >
    </div>
    <div class="copyright">
      Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>


