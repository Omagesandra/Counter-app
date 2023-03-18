<template>
  <div>
    <div class="not-found">
      <h3>Oops!</h3>
      <p class="para">404 - PAGE NOT FOUND</p>
      <p class="para1">
        The page you are looking for might have been removed had its name
        changed or its temporarily unavailable.
      </p>
      <p class="para2">Go to <router-link to="/">Home</router-link></p>
    </div>
  </div>
</template>
<style>
.not-found {
  left: 50%;
  padding: 7vmin;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
}
h3 {
  font-size: 5em;
}
</style>
