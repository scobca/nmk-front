<template>
  <div class="wrapper ">
    <img src="../../assets/svg/arrow-down-transparent.svg" alt="" class="image">
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'YArrowBlock',
})
export default class YArrowBlock extends Vue {

}
</script>

<style scoped>
.wrapper {
  background-color: var(--card-bg-color);
  width: 30vw;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 100%;
  transition-duration: 0.75s;
  animation: fadeInUp;
  animation-duration: 1s;
}

.wrapper:hover {
  scale: 110%;
  transition-duration: 0.75s;
}

.image {
  height: 1.25rem;
}
</style>
