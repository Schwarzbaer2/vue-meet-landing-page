<template>
  <main>
    <MainGallery />
    <MainContent />
  </main>
</template>

<script>
import MainGallery from "@/components/MainGallery";
import MainContent from "@/components/MainContent";
export default {
  name: "TheMain",
  components: {
    MainGallery,
    MainContent,
  },
};
</script>

<style></style>
