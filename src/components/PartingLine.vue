<template>
  <div class="flex flex-col items-center justify-center">
    <div class="h-20 border-l border-mainGrey"></div>
    <div
      class="flex items-center justify-center leading-7 border rounded-full font-redHat text-mainGrey w-14 border-mainGrey bg-mainWhite h-14"
    >
      <slot>00</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartingLine",
};
</script>

<style></style>
