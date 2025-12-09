<!-- Компонент счётчика должен отображать текущее значение внутренней переменной, 
 а также давать возможность увеличивать или уменьшать его 
 при взаимодействии с элементами управления. -->
<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span> Current value: {{ count }} </span>
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Для написания кода используем Composition API впесто Options API
// объявление реактивной переменной (аналог data() в Optoipns API)
const count = ref(0);

// МЕТОДЫ

const decrement = () => {
  count.value--;
};

const increment = () => {
  count.value++;
};
</script>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;

  button {
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
}
</style>
