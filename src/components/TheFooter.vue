<template>
  <footer class="h-auto bg-no-repeat bg-cover ">
    <div
      class="flex flex-col items-center max-w-xs min-w-full px-6 pt-24 text-center xl:max-w-7xl xl:px-40 xl:pb-24 xl:pt-28 xl:items-baseline xl:justify-around xl:flex-row bg-opacity-90 bg-mainBlue text-mainWhite"
    >
      <div class="text-3xl font-black xl:max-w-xs">
        <h3>
          Experience more together
        </h3>
      </div>
      <div class="pt-6 leading-6 xl:pt-0 xl:max-w-xs">
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
      </div>

      <div class="pt-8 pb-16 xl:pt-0 xl:pb-0">
        <base-button buttonType="secondary" buttonSize="large"
          >Download <span class="text-secondaryBlue">v1.3</span></base-button
        >
      </div>
    </div>
  </footer>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "TheFooter",
  components: {
    BaseButton,
  },
};
</script>

<style>
@media (max-width: 768px) {
  footer {
    background-image: url("../assets/mobile/image-footer.jpg");
  }
}
@media (min-width: 768px) and (max-width: 1440px) {
  footer {
    background-image: url("../assets/tablet/image-footer.jpg");
  }
}
@media (min-width: 1440px) {
  footer {
    background-image: url("../assets/desktop/image-footer.jpg");
  }
}
</style>
