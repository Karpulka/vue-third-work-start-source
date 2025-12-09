<!-- Компонент счётчика должен отображать текущее значение внутренней переменной, 
 а также давать возможность увеличивать или уменьшать его 
 при взаимодействии с элементами управления. -->
<template>
  <div class="counter">
    <counter-button @action="decrement"> - </counter-button>
    <counter-value :value="count" />
    <counter-button @action="increment"> + </counter-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CounterButton from "./CounterButton.vue";
import CounterValue from "./CounterValue.vue";

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
}
</style>
