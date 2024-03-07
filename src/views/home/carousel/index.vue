<template>
  <div id="carousel">
    <div class="title">
      <p>你好，一起来分享吧！</p>
    </div>
    <div id="banner">
      <div ref="imgListOne" class="img-list img-wrapper">
        <!-- v-for="(item, index) in images" :key="index" -->
        <div
          v-for="(item, index) in imgList"
          :key="index"
          :ref="imgBox"
          class="img-box"
        >
          <img :src="getImageUrl(item)" alt="" />
        </div>
      </div>
    </div>
    <div ref="btnGroup" class="btn-group">
      <button ref="prevBtn" class="prev btn">
        <svg
          t="1697699169633"
          class="icon left"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2341"
          width="48"
          height="48"
        >
          <path
            d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"
            p-id="2342"
            fill="#707070"
          ></path>
        </svg>
      </button>
      <button ref="nextBtn" class="next btn">
        <svg
          t="1697699197183"
          class="icon right"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2687"
          width="32"
          height="32"
        >
          <path
            d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"
            p-id="2688"
            fill="#707070"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";

const imgList = ref([
  "../../../assets/images/1.jpg",
  "../../../assets/images/2.jpg",
  "../../../assets/images/3.jpg",
  "../../../assets/images/4.jpg",
  "../../../assets/images/5.jpg",
  "../../../assets/images/6.jpg",
]);
const imgListOne = ref(null);
let btnGroup = ref(null);
const prevBtn = ref(null);
const nextBtn = ref(null);
let animationTime = 0.5;
const getImageUrl = (item) => {
  return new URL(item, import.meta.url).href;
};
let intervalId = null; // 将定时器变量设为全局变量

// 添加一个定时器，每隔一段时间执行一段代码
const start = () => {
  stop();
  intervalId = setInterval(() => {
    imgList.value.push(imgList.value.shift());
  }, 3000);
};
const stop = () => {
  // 清除定时器
  clearInterval(intervalId);
};

// 点击事件
const cilckFun = (flag) => {
  //下一张 next
  if (flag == "next") {
    imgList.value.push(imgList.value.shift());
  } else {
    imgList.value.unshift(imgList.value.pop());
  }
};

//节流函数
function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    fn.apply(this, arguments);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}

onMounted(async () => {
  await nextTick(); // 等待DOM更新
  // 设置imgListOne动画时间
  imgListOne.value.style.transition = animationTime + "s ease";

  // 设置按钮出现时间
  setTimeout(() => {
    btnGroup.value.style.opacity = "1";
    btnGroup.value.style.bottom = "-12%";
  }, animationTime * 1000);

  nextBtn.value.onclick = throttle(
    () => cilckFun("next"),
    animationTime * 2000
  );

  prevBtn.value.onclick = throttle(
    () => cilckFun("last"),
    animationTime * 2000
  );
  // 添加鼠标悬停和离开事件监听
  imgListOne.value.addEventListener("mouseover", stop);
  imgListOne.value.addEventListener("mouseout", start);
});
</script>

<style scoped>
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}

#carousel {
  --post-spacing: 1.78vw;
  --post-size: 25vw;
  --mask-size: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#carousel {
  font-family: SIMYOU, Arial, sans-serif;
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.title {
  transform: translate(0%, 50%);
}

.title p {
  font-size: 3rem;
  font-weight: 900;
  white-space: nowrap;
}

#banner {
  overflow: hidden;
  position: relative;
  width: 98.9vw;
  height: calc(var(--post-size) / 0.72);
  -webkit-mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
  mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: var(--mask-size);
  mask-size: var(--mask-size);
  top: 10%;
}

#banner .img-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  float: left;
  height: calc(var(--post-size) / 0.72);
  -webkit-transform: translate(13.39vw, 0);
  transform: translate(13.39vw, 0);
  -webkit-animation: admission 1.5s;
  animation: admission 1.5s;
}

#banner .img-wrapper .img-box {
  height: 100%;
  display: inline-block;
  margin-right: var(--post-spacing);
  position: relative;
  cursor: pointer;
}

#banner .img-wrapper .img-box img {
  width: var(--post-size);
  height: 100%;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
}

#banner .img-wrapper .img-box:last-child {
  -webkit-transform: translate(-160.68vw, 0);
  transform: translate(-160.68vw, 0);
}

.btn-group {
  height: 15vh;
  position: absolute;
  left: 50%;
  bottom: 0%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: 1s;
  transition: 1s;
  opacity: 0;
}

.btn-group .btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #171717;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}

.btn-group .btn:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  background-color: #000;
}

.btn-group .btn:hover .icon {
  fill: #fff;
}

.btn-group .btn .icon {
  width: 30px;
  height: 30px;
}

.img-list {
  left: 0;
}

@-webkit-keyframes admission {
  0% {
    -webkit-transform: translate(140vw, 0);
    transform: translate(140vw, 0);
  }
  100% {
    -webkit-transform: translate(13.39vw, 0);
    transform: translate(13.39vw, 0);
  }
}

@keyframes admission {
  0% {
    -webkit-transform: translate(140vw, 0);
    transform: translate(140vw, 0);
  }
  100% {
    -webkit-transform: translate(13.39vw, 0);
    transform: translate(13.39vw, 0);
  }
}
</style>
