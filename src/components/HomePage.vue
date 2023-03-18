<template>
  <div>
    <NavBar />
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="container">
      <h1>Sandy Streak</h1>
      <p class="paragraph">
        Here to help you keep your streak in achieving your goals.
      </p>
      <a href="./counter" class="link">Get Started <span>&#8594;</span></a>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<style>
body {
  margin: 0;
}
.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}
.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}
.bg3 {
  animation-duration: 5s;
}
.container {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  left: 50%;
  padding: 7vmin;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  font-family: "Pacifico", cursive;
  font-weight: bolder;
}
p {
  font-family: "Pacifico", cursive;
  font-style: italic;
  margin: 15px 0 10px, 0;
}
.link {
  text-decoration: none;
  margin-top: 30px;
  font-family: "Pacifico", cursive;
  cursor: pointer;
}
@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
