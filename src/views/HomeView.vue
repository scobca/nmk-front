<template>
  <div class="grid_container">
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

    <div class="hats">
      <y-hats/>
    </div>
  </div>

  <y-arrow-block class="arrow_block"/>

  <div class="texts_block">
    <y-text-card :route="'media'" :header="'Текст 1'"
                 class="text_card animate__animated animate__fadeInLeft"/>
    <y-text-card :route="'media'" :header="'Текст 2'"
                 class="text_card animate__animated animate__delay-1s animate__fadeInLeft"/>
    <y-text-card :route="'media'" :header="'Текст 3'"
                 class="text_card animate__animated animate__delay-2s animate__fadeInLeft"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import YHats from "@/components/YHats.vue";
import YArrowBlock from "@/components/UI/YArrowBlock.vue";
import YTextCard from "@/components/UI/YTextCard.vue";

@Options({
  name: 'HomeView',
  components: {YTextCard, YArrowBlock, YHats},
})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.grid_container {
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.hats {
  display: flex;
  flex-direction: column;
  margin-right: 10vw;
  margin-top: 2rem;
  justify-content: center;
  scale: 130%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-top: 10vh;
}

.texts_block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
}

.text_card {
  scale: 100%;
  transition-duration: .75s;
}

.text_card:hover {
  scale: 105%;
  transition-duration: 0.75s;
}

.card_block {
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 3vw;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--card-bg-color);
  padding: 2rem;
  border-radius: 1.5rem;
  text-align: left;
  min-height: 30vh;
  scale: 100%;
  transition-duration: 0.75s;
}

.card:hover {
  scale: 105%;
  transition-duration: 0.75s;
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
  width: 100%;
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

.arrow_block {
  margin-bottom: 4rem;
}
</style>
