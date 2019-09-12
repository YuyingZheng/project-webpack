<template>
  <div class="home">
    <p>this is project A home page</p>
    <img :src="imgSrc" alt='Y'>
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {
      imgSrc: require("@/projectA/assets/image/Y.png")
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



