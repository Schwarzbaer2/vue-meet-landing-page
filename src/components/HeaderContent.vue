<template>
  <div class="flex flex-col transform scale-105 xl:flex-row pt-14">
    <div class="flex justify-center xl:hidden">
      <img
        class="w-max cover xl:hidden"
        src="@/assets/tablet/image-hero.png"
        alt=""
      />
    </div>
    <div class="justify-center w-screen xl:flex xl:justify-between">
      <img
        class="hidden xl:block cover"
        src="@/assets/desktop/image-hero-left.png"
        alt=""
      />

      <div class="pt-12 text-center">
        <div class="text-4xl font-black font-redHat">
          <h1>Group Chat for Everyone</h1>
        </div>
        <div class="px-6 pt-6 leading-6 text-mainGrey">
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div class="flex justify-center pt-8">
            <div class="pr-2">
              <base-button buttonType="primary" buttonSize="large"
                >Download
                <span class="text-secondaryBlue">v1.3</span></base-button
              >
            </div>
            <div>
              <base-button buttonType="secondary" buttonSize="normal"
                >Download
                <span class="text-secondaryBlue">v1.3</span></base-button
              >
            </div>
          </div>
        </div>
      </div>

      <img
        class="hidden xl:block cover"
        src="@/assets/desktop/image-hero-right.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "HeaderContent",
  components: { BaseButton },
};
</script>

<style></style>
