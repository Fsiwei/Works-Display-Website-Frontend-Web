<template>
  <div id="carousel">
    <div class="title">
      <p>你好，一起来分享吧！</p>
    </div>
    <!-- <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item :ref="imgBox" v-for="(item,index) in imgList" :key="index">
        <img :src="getImageUrl(index+1)" alt="">
      </el-carousel-item>
    </el-carousel> -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";

const imgList = [
  "../../../assets/images/1.jpg",
  "../../../assets/images/2.jpg",
  "../../../assets/images/3.jpg",
  "../../../assets/images/4.jpg",
  "../../../assets/images/5.jpg",
  "../../../assets/images/6.jpg",
];

const getImageUrl = (code) => {
  return new URL(`../../../assets/images/${code}.jpg`, import.meta.url).href;
};

// let imgListOne = ref(null);
// // let imgBox = ref([]);
// // // 获取图片类数组，并将其转化为数组
// // let imgBoxList = Array.prototype.slice.call(
// //   imgBox
// //   //   document.querySelectorAll(".img-list .img-box")
// // );

// // let i = ref(0);
// // 获取图片类数组，并将其转化为数组
// let imgBoxList = [];
// const imgBox = (el) => {
//   imgBoxList.push(el);
// };
// const imgBoxCount = imgBoxList.length;
// const root = document.documentElement;
// const carousel = document.querySelector("#carousel");
// let btnGroup = ref(null);
// const prevBtn = ref(null);
// const nextBtn = ref(null);
// const lastImgBox = document.getElementById("last-img-box");

// // 获取--post-spacing和--post-size的值
// const postSpacing = Number(
//   getComputedStyle(root).getPropertyValue("--post-spacing").replace("vw", "")
// );
// const postSize = Number(
//   getComputedStyle(root).getPropertyValue("--post-size").replace("vw", "")
// );

// // 根据图片的数量动态获取img-list的宽度
// let imgListLength = (postSize + postSpacing) * imgBoxCount;
// // console.log(imgListLength);
// // 根据图片的数量动态获取img-box的宽度
// const imgBoxLength = postSize + postSpacing;

// // let index = 0;
// let index = ref(0);
// let imgIndex = 1;
// let indexOne = 1;
// let timer = null;
// let animationTime = 0.5;
// // 初始化数组中元素的的顺序，将最后一张图片放在第一位与html部分图片展示位置一致
// // imgBoxList.unshift(imgBoxList.pop());
// console.log(imgBoxList, "imgBoxList.value");
// // console.log(imgBoxList.value.msg, "imgBoxList.value.msg");
// console.log(imgBoxCount, "imgBoxCount");
// const getImageUrl = (code) => {
//   return new URL(`../../../assets/images/${code}.jpg`, import.meta.url).href;
// };
// // 点击事件
// function cilckFun(flag) {
//   console.log("cilckFun");
//   //下一张 next
//   if (flag == "next") {
//     console.log(index);
//     index--;
//     imgIndex++;
//     console.log(index);
//     // 因为右边没有显示的图片比较多，所以可以直接先整体向左移动
//     imgListOne.value.style.left = imgBoxLength * index + "vw";
//     console.log(imgListOne.value.style.left);
//     setTimeout(function () {
//       imgListOne.value.style.transition = "none";
//       // 当点击下一个累计达到图片数量时，相当于要回到原点，则重置变量和位置
//       if (Math.abs(index) == imgBoxCount) {
//         index = 0;
//         imgListOne.value.style.left = 0;
//         imgBoxList.forEach((item) => {
//           if (item.id == "last-img-box") {
//             item.style.transform = `translateX(-160.68vw)`;
//           } else {
//             item.style.transform = "none";
//           }
//         });
//       } else {
//         console.log("--------else--------");
//         console.log(imgBoxList, "imgBoxList.value");
//         console.log(imgBoxCount, "imgBoxCount");
//         // 当第一张图片为last-img-box时，说明已经跑完了一轮，则将其放在最后的位置，初始状态其为-160.68vw
//         if (imgIndex == 5) {
//           // lastImgBox.style.transition = "none";
//           // lastImgBox.style.transform = "translateX(0px)";
//           imgBoxList.value.style.transition = "none";
//           console.log(
//             imgBoxList.value.style.transition,
//             "imgBoxList.value.style.transition"
//           );
//           imgBoxList.value.style.transform = "translateX(0px)";
//           console.log(
//             imgBoxList.value.style.transform,
//             "imgBoxList.value.style.transform"
//           );
//           console.log("if");
//         } else if (imgIndex >= 0) {
//           console.log(imgIndex, "imgIndex");
//           if (imgIndex == 2) {
//             // 这种情况是为了解决在点击完第last，再点击next时造成的bug问题，其实就是回退，再点击last之前
//             // 没有加transform属性，点击last以后则添加了transform属性，再次点击next按钮后应该不加transform
//             imgBoxList[imgBoxList.length - 1].style.transform = "none";
//             console.log("else if");
//             console.log(
//               imgBoxList[imgBoxList.length - 1],
//               "imgBoxList[imgBoxList.length-1]"
//             );
//             console.log(
//               imgBoxList[imgBoxList.length - 1].style.transform,
//               "imgBoxList[imgBoxList.length-1].style.transform"
//             );
//           } else {
//             // 这种情况是为了解决在点击完第last，再点击next时造成的bug问题，其实就是回退，再点击last之前
//             // 没有加transform属性，点击last以后则添加了transform属性，再次点击next按钮后应该不加transform
//             imgBoxList[0].style.transform = "none";
//             console.log("else if");
//             console.log(imgBoxList[0], "imgBoxList[0]");
//             console.log(
//               imgBoxList[0].style.transform,
//               "imgBoxList[0].style.transform"
//             );
//           }
//         } else {
//           // 正常情况下，点击next，则将最左侧的图片移到最后
//           imgBoxList[0].style.transform = "translateX(160.68vw)";
//           console.log("else");
//           console.log(imgIndex, "imgIndex");
//         }
//       }
//       // 模拟移动情况，将最左侧的图片（元素）移动到最后
//       imgList.push(imgList.shift());
//       console.log(imgList, "imgList");
//       console.log(imgBoxList, "imgBoxList.value");
//     }, animationTime * 1000);
//   } else {
//     // 上一张 last
//     index++;
//     imgIndex--;
//     console.log(index);
//     // 模拟移动情况，把最右侧的图片（元素）移动到最前
//     imgBoxList.unshift(imgBoxList.pop());
//     // 因为左侧图片只会有一张，所以需要先移动图片到左侧，再进行imgListOne的移到
//     if (imgBoxList[0].id == "last-img-box" && index != 0) {
//       // 当第一张图片为last-img-box时，说明已经跑完了一轮，此时相对于一开始的位置为-321.36vw
//       imgBoxList[0].style.transform = "translateX(-321.36vw)";
//     } else if (index < 0) {
//       // 这种情况与点击next按钮出现的回退现象一致
//       imgBoxList[0].style.transform = "none";
//     } else {
//       // 正常情况下，点击last，则将最右侧的图片移到最前
//       imgBoxList[0].style.transform = "translateX(-160.68vw)";
//     }
//     imgListOne.value.style.left = imgBoxLength * index + "vw";
//     lastImgBox.style.transition = "none";
//     // 当点击下一个累计达到图片数量时，相当于要回到原点，则重置变量和位置
//     if (Math.abs(index) == imgBoxCount) {
//       index = 0;
//       setTimeout(function () {
//         imgListOne.value.style.transition = "none";
//         imgListOne.value.style.left = 0;
//         imgBoxList.forEach((item) => {
//           if (item.id == "last-img-box") {
//             item.style.transform = "translateX(-160.68vw)";
//           } else {
//             item.style.transform = "none";
//           }
//         });
//       }, animationTime * 1000);
//     }
//   }
//   imgListOne.value.style.transition = animationTime + "s ease";
// }

// //节流函数
// function throttle(fn, delay) {
//   return function () {
//     if (timer) {
//       return;
//     }
//     fn.apply(this, arguments);
//     timer = setTimeout(() => {
//       timer = null;
//     }, delay);
//   };
// }

// onMounted(() => {
//   console.log(imgBoxList);
//   console.log(imgBoxCount);
//   // 设置imgListOne动画时间
//   imgListOne.value.style.transition = animationTime + "s ease";
//   // 设置按钮出现时间
//   setTimeout(() => {
//     btnGroup.value.style.opacity = "1";
//     btnGroup.value.style.bottom = "-12%";
//   }, animationTime * 1000);

//   nextBtn.value.onclick = throttle(
//     () => cilckFun("next"),
//     animationTime * 1000
//   );
//   prevBtn.value.onclick = throttle(
//     () => cilckFun("last"),
//     animationTime * 1000
//   );
// });
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
