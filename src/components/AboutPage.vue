<template>
  <div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <NavBar />
    <div class="container3">
      <h1>Sandy Streak</h1>
      <div class="parag">
        <p class="paragraph">
          Sandy Streak is an app that help you plan your day.
        </p>
        <p class="paragraph">
          Getting started by filling in the number of task you have for the day,
          you can also add more number of tasks and when a task has been
          achieved, click achieved task and the number of task is being reduced
        </p>
        <p class="paragraph">Sandy Streak is here to make your day easy.</p>
      </div>
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
.container3 {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 33 c0px;
  width: 300px;
}
.parag {
  margin: 10px;
}
</style>
