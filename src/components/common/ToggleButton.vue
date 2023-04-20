<template>
  <div 
    class="toggle-bar"
    :class="{ 'bg-white': isToggle }"
    @click="toggle()"
    >
      <slot name="theme" :isToggle="isToggle"></slot>
    </div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isToggle: false
    }
  },
  methods: {
    toggle() {
      this.isToggle = !this.isToggle;
      this.$emit('toggle', this.isToggle)
    },
  },
  watch: {
    initialValue(value) {
      console.log('value', value)
      this.isToggle = value;
    }
  }  
}
</script>
