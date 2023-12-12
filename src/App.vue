<template>
<div class="app_container">
  <YHeader/>
  <router-view/>
</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import YHeader from "@/components/UI/YHeader.vue";

@Options({
  name: 'App',
  components: {
    YHeader,
  }
})
export default class App extends Vue {

}
</script>

<style scoped>
.app_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
