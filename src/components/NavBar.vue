<template>
<div>
    <div class="nav">
      <div>
      <router-link to="/" class="item">Sandy Streak</router-link>
      </div>
      <div>
        <router-link to="/counter" class="item">Task</router-link>

      </div>
      <div>
      <router-link to="/about" class="item">About</router-link>
      </div>
    </div>
</div>
</template>
<script>
</script>
<style>
   .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
   }
   .item {
    text-decoration: none;
    font-size: 1.5em;
   }
</style>