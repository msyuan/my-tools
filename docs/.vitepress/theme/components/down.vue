<template>
    <div class="ui-down-header">
      <div class="title">下载我的工具客户端</div>
      <div class="info">版本号：1.0.0｜ 更新时间：2024-07-07</div>
    </div>
    <div class="ui-down-file">
      <div class="item">
        <img class="img" src="../../../public/window.png" alt="windows">
        <p class="info">windows版（仅支持Win 10 及以上系统）</p>
        <a class="btn" download="../../../public/window.png" href="../../../public/window.png">点击下载</a>
      </div>
    </div>
</template>
<style lang="scss">

  /** 修改掉默认样式 **/
  .down-layout {
    .VPContent {
      background: linear-gradient(180deg, #aefee9 0%, #e2faf2 45%, #f5faf8 100%);
    }
  }
  .ui-down-header {
    width: 100%;
    text-align: center;
    .title {
      font-size: 40px;
      font-weight: bold;
      padding-top: 70px;
    }
    .info {
      padding-top: 20px;
      color: #888;
    }
  }
  .ui-down-file {
    width: 800px;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    .item {
      width: 50%;
      height: 250px;
      border-radius: 12px;
      background-color: #fff;
      column-gap: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img {
        width: 100px;
        height: 100px;
        display: block;
        padding-top: 30px;
      }
      .info {
        margin-top: 10px;
      }
      .btn {
        width: 180px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        border-radius: 8px;
        background: var(--vp-c-brand-1);
        margin-top: 30px;
      }
      .btn:hover {
        filter: brightness(1.1) !important;
      }
    }
  }
</style>