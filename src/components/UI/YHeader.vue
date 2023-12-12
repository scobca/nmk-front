<template>
  <div class="container">
    <div class="block">
      <router-link to="/" class="button">Тексты</router-link>
    </div>
    <div class="block">
      <router-link to="/" class="button">Модели</router-link>
    </div>
    <div class="block">
      <router-link to="/" class="button">Медиа</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'YHeader',
})
export default class YHeader extends Vue {

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 2.5rem;
  width: 90vw;
  margin-top: 1rem;
  border-radius: 1rem;
  background-color: var(--header-bg-color);
  font-size: 1.25rem;
  font-weight: 500;
}

.block {
  scale: 100%;
  transition-duration: 0.3s;
}

.block:hover {
  scale: 105%;
  transition-duration: 0.3s;
}
</style>
