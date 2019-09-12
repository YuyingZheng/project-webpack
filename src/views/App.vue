<template>
    <div>
        <p> this is vue yy</p>
        <Home/>
    </div>
</template>
<script>
import Home from '@/components/Home/Home'
export default {
    name: 'app',

    components: {
        Home
    }
}
</script>
<style lang="scss">
   body {
       display: flex;
       justify-content: center;
   }
</style>



