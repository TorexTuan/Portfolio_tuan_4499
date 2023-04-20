<template>
  <div 
    class=" dark:text-white rounded-lg flex-center 
    p-3 text-center cursor-pointer box box-shadow-light dark:box-shadow-dark 
    transition-all_500_ease relative overflow-hidden"
    @click="clickOnMenu($event)"
  >
    {{ menu }}
  </div>
</template>

<style>
.ripple {
  position: absolute;
  opacity: .2;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: rippleAnimate .5s linear;
}

@keyframes rippleAnimate {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 400px;
    height: 400px; 
  }
}
</style>

<script>
export default {
  props: {
    menu: {
      type: String,
      default: ""
    }
  },
  data() {
    return {

    }
  },
  methods: {
    clickOnMenu(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      const existingRipple = document.querySelector('.ripple');

      if(existingRipple) {
        existingRipple.remove();
      }
      
      let ripples = document.createElement('span');
      ripples.className = 'ripple dark:bg-white bg-slate-400';
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      e.target.appendChild(ripples);

    }
  }
}
</script>