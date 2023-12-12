<template>
  <div class="container">
    <div class="card" data-aos="fade-up" data-aos-duration="750">
      <h2>Северный float <br> представляет</h2>
      <p>Виртуальная одежда для AR и VR</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'YLoader',
})
export default class YLoader extends Vue {

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.card {
  background-color: var(--card-bg-color);
  min-height: 17rem;
  min-width: 30rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card > h2 {
  font-size: 2rem;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  width: 65%;
}

.card > p {
  padding-top: 10px;
  font-size: 1.25rem;
}
</style>
