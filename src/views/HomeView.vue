<template>
  <div class="container">
    <div class="card_block">
      <div class="card">
        <p class="card_header">AR / VR -</p>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

        <div class="button">
          <p class="button_text">Подробнее об этом</p>
          <img src="@/assets/svg/right-arrow.svg" alt="" class="img">
        </div>
      </div>

      <div class="card">
        <p class="card_header">AR / VR -</p>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

        <div class="button">
          <p class="button_text">Как это можно реализовать?</p>
          <img src="@/assets/svg/right-arrow.svg" alt="" class="img">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'HomeView',
})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.container {
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-top: 10vh;
}

.card_block {
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 3vw;
}

.card {
  background-color: var(--card-bg-color);
  padding: 1rem;
  border-radius: 1.5rem;
  text-align: left;
}

.card_header {
  font-size: 2rem;
  font-weight: 600;
}

.card_text {
  font-size: 1.25rem;
  width: 70%;
  font-weight: 500;
}

.button {
  width: 90%;
  font-size: 1.25rem;
  background-color: var(--card-button-color);
  margin-top: 2rem;
  padding: .5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.img {
  height: 1.75rem;
}
</style>
