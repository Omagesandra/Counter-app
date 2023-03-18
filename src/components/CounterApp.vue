<template>
  <div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <NavBar />
    <div class="container2">
      <h1 class="brand">Sandy Streak</h1>
      <div class="streak">
        <div class="counter">
          <h2>Total: {{ count }}</h2>
        </div>
        <div class="input-segment">
          <label class="label">Today's Tasks:</label>

          <input
            type="number"
            class="input"
            id="Input"
            v-model="value"
            placeholder="Enter Number of Tasks"
          />
          <button class="button" @click="setValue(value)">Set</button>
        </div>
        <div class="segment">
          <button class="set-button" @click="increment">add more task</button>
          <button class="set-button" @click="decrement">achieved a task</button>
        </div>
        <div class="reset">
          <button class="set-button" @click="reset">reset</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useCounter from "@/composables/counter.js";
import NavBar from "./NavBar.vue";
export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();

    let value = "";

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      setValue,
    };
  },
  components: {
    NavBar,
  },
};
</script>
<style>
.container2 {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 300px;
}
.brand {
  text-align: center;
  margin-top: 40px;
}
.streak {
  margin: 20px;
}
.input-segment {
  margin-top: 10px;
}
.label {
  display: block;
  font-weight: bold;
}
.input,
button {
  height: 40px;
  border-radius: 7px;
}
.button {
  margin-left: 10px;
  cursor: pointer;
  margin-top: 10px;
}
.segment {
  margin-top: 10px;
}
.set-button {
  display: block;
  width: 250px;
  text-transform: uppercase;
  margin-top: 5px;

  cursor: pointer;
}
button:active {
  background-color: #09f;
  color: white;
}
</style>
