<template>
  <div class="textarea">
    <label v-if="label" :for="id" class="textarea__label">{{ label }}</label>
    <textarea
      :id="id"
      v-model="textareaValue"
      :placeholder="placeholder"
      class="textarea__field"
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
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const textareaValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    textareaValue.value = newValue
  }
)

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.textarea {
  display: flex;
  flex-direction: column;
  gap: em(10);
  &__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  &__field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: white;
    color: darkgrey;
    resize: vertical;
    min-height: 100px;
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
