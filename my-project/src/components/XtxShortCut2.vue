<template>
  <div class="shortcut">
    <div class="wrapper">
      <ul>
        <li><a href="#" class="login">请先登录</a></li>
        <li><a href="#">免费注册</a></li>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">会员中心</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">在线客服</a></li>
        <li>
          <a href="#"><span class="iconfont icon-mobile-phone"></span>手机版</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon-mobile-phone {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 5px;
}
.shortcut {
  height: 52px;
  background-color: #333;
  line-height: 52px;
}
.shortcut .wrapper {
  display: flex;
  justify-content: flex-end;
}
.shortcut ul {
  display: flex;
}
/* .shortcut ul li{

} */
.shortcut ul li a {
  color: #fff;
  padding: 0 15px;
  border-right: 1px solid #fff;
  font-size: 14px;
  line-height: 14px;
}
.shortcut .login {
  color: #5eb69c;
}
</style>
