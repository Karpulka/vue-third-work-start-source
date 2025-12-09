<!-- Компонент счётчика должен отображать текущее значение внутренней переменной, 
 а также давать возможность увеличивать или уменьшать его 
 при взаимодействии с элементами управления. -->
<template>
  <button class="counter-button" @click="$emit('action')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(["action"]);
</script>

<style scoped lang="scss">
.counter-button {
  margin: 0 10px;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background: #dd0000;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ff0000;
  }
}
</style>
