<template>
  <div :class="rowclass ? rowclass : ' w-full'">
    <label v-if="label" :class="{ required: required }"
           class="mb-2 ml-5  block text-base font-normal text-Dark">{{ label }}</label>
    <input
        v-model="value"
        :autocomplete="autocomplete"
        :class="inputclass ? inputclass : 'h-10 w-3/4 rounded-xl border-2 border-Graydarker'"
        :placeholder="placeholder"
        :tabindex=" tabindex"
        :type="type"
        class=" pl-3"
    />
  </div>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  name: "inputTag",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "null",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    autocomplete: {
      type: String,
      default: "on",
    },
    tabindex: {
      type: String,
      default: "1",
    },
    rowclass: {
      type: String,
      default: null,
    },
    inputclass: {
      type: String,
      default: "",
    },
  },
})

</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
