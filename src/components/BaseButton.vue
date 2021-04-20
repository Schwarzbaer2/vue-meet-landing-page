<template>
  <button
    class="block px-12 py-5 font-black leading-7 text-white transition duration-700 ease-in-out focus:outline-none rounded-3xl font-redHat"
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
