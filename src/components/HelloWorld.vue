<template>
  <div class="pontent">
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
    [Button.name]:Button
  }
}
</script>

<style scoped>

</style>
