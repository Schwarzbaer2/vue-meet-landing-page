<template>
  <div class="flex justify-center bg-mainWhite">
    <div class="max-w-screen-xl min-h-screen">
      <TheHeader />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style></style>
