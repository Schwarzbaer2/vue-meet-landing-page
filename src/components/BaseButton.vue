<template>
  <button
    class="block font-black leading-7 text-white transition duration-700 ease-in-out rounded-full focus:outline-none font-redHat"
    :class="[
      {
        'bg-mainBlue  hover:bg-tertiaryBlue': buttonType === 'primary',
      },
      {
        'bg-mainPurple hover:bg-mainLavender': buttonType === 'secondary',
      },
      {
        'px-7 py-5': buttonSize === 'normal',
      },
      {
        'px-12 py-5': buttonSize === 'large',
      },
    ]"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true,
    },
    buttonSize: {
      type: String,
      required: true,
    },
  },
};
</script>
