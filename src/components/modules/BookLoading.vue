<template>
  <div id="load-wraper">
    <div class="load-item">
      <div class="load-book">
        <div class="load-book-page"></div>
      </div>
      <span class="load-item-span textColorDarkBlack mt-3 absolute">Loading</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BookLoading'
}
</script>

<style lang="scss" scoped>
  $clouds:#FC5649;
  $lbk-page-color: rgb(255, 255, 255);
  $lbk-page-color-opacity: rgba(255, 255, 255, 0.8);
  .logoGif {
    max-width: 120px;
    width: 100%;
  }
  #load-wraper {
    width: 100vw;
    height: 100vh;
    background: $lbk-page-color-opacity;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    .load-item {
      z-index: 999;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      margin: 0 auto;
      .load-item-span {
        font-size: 14px;
        &:after {
          margin-left: 3px;
          font-size: 1.2em;
          position: absolute;
          content: "";
          animation: dots 1.5s cubic-bezier(0, 0.39, 1, 0.68) infinite;
        }
      }
    }
  }

  // book
  .load-book {
    position: relative;
    height: 54px;
    width: 68px;
    background: $lbk-page-color;
    border: 3px solid $clouds;
    border-radius: 3px;

    .load-book-page, &:before, &:after{
      position: absolute;
      height: 52px;
      width: 25px;
      background: $lbk-page-color;
      border: 3px solid $clouds;
      border-radius: 3px;
      transform-origin: left;
    }

    &:before, &:after{
      content:'';
    }

    .load-book-page, &:after{
      right: 6px;
      transform:skew(0deg,-16deg);
      border-left: 1px solid $clouds;
    }

    .load-book-page {
      top: -3px;
      border-left-width: 2px;
      animation: page-change .5s linear infinite;
      z-index: 2;
    }

    &:before{
      top: -9px;
      left: 6px;
      transform: skew(0deg,16deg);
    }

    &:after{
      top: -3px;
    }
  }
  @keyframes page-change {
    40% {
      transform: rotateY(80deg) skew(0deg,-30deg);
    }
    80% {
      transform: rotateY(180deg) skew(0deg,-16deg);
    }
    100% {
      transform: rotateY(180deg) skew(0deg,-16deg);
    }
  }

  @keyframes dots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
</style>
