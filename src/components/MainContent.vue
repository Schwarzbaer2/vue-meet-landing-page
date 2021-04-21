<template>
  <article>
    <div class="flex justify-center">
      <div
        class="flex flex-col max-w-xl px-6 pt-16 text-center xl:pt-20 md:pt-12 font-redHat"
      >
        <div
          class="font-black leading-6 tracking-widest uppercase text-mainBlue"
        >
          <p>
            Built for modern use
          </p>
        </div>

        <div
          class="pt-6 text-3xl font-black leading-9 md:text-4xl text-mainDark"
        >
          <h2>
            Smarter meetings, all in one place
          </h2>
        </div>

        <div class="pt-8 leading-6 text-mainGrey">
          <p>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
        <div class="pt-16 transform translate-y-7">
          <parting-line>02</parting-line>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import PartingLine from "@/components/PartingLine";

export default {
  name: "MainContent",
  components: {
    PartingLine,
  },
};
</script>

<style></style>
