<template>
  <div class="home">
    <p>this is home component</p>
    <img :src="imgSrc" alt='git'>
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {
      imgSrc: require("@/assets/image/git.jpg")
    };
  }
};
</script>
<style lang="scss">
.home {
  font-size: 40px;
  color: blue;

  img {
    max-width:  200px;
  }
}
</style>



