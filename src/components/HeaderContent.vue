<template>
  <div class="w-screen ">
    <div
      class="z-0 flex flex-col items-center overflow-hidden justify-evenly max-w-screen-3xl xl:flex-row pt-14 "
    >
      <div class="flex justify-center xl:hidden">
        <img
          class="transform scale-105 cover xl:hidden"
          src="@/assets/tablet/image-hero.png"
          alt=""
        />
      </div>
      <div class="flex">
        <img
          class="hidden transform -translate-x-6 xl:block cover"
          src="@/assets/desktop/image-hero-left.png"
          alt=""
        />

        <div class="max-w-md pt-12 text-center">
          <div class="text-4xl font-black md:text-5xl font-redHat">
            <h1>Group Chat for Everyone</h1>
          </div>
          <div class="px-6 pt-6 leading-6 text-mainGrey">
            <p>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div
              class="flex flex-col items-center justify-center pt-8 md:flex-row"
            >
              <div class="pr-0 md:pr-2">
                <base-button buttonType="primary" buttonSize="large"
                  >Download
                  <span class="text-secondaryBlue">v1.3</span></base-button
                >
              </div>
              <div class="pt-4 md:pt-0">
                <base-button buttonType="secondary" buttonSize="normal"
                  >Download
                  <span class="text-secondaryBlue">v1.3</span></base-button
                >
              </div>
            </div>
          </div>
        </div>

        <img
          class="hidden transform translate-x-6 xl:block cover"
          src="@/assets/desktop/image-hero-right.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex items-center justify-center pt-16 md:pt-20 xl:pt-28">
      <parting-line>01</parting-line>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import PartingLine from "@/components/PartingLine";

export default {
  name: "HeaderContent",
  components: { BaseButton, PartingLine },
};
</script>
