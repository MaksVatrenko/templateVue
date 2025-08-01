<template>
  <div class="input">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <input
      :id="id"
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="input__field"
      @input="onInput"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue
  }
)

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: em(10);
  &__label {
    display: block;
    margin-bottom: 0.5rem;
    color: darkGrey;
    font-weight: bold;
  }

  &__field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: white;
    color: black;
    transition: border-color 0.3s;

    &::placeholder {
      color: grey;
    }

    &:focus {
      outline: none;
      border-color: blue;
    }
  }
}
</style>
