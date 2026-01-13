<template>
  <div
    ref="dialog"
    class="task-card"
    tabindex="0"
    @click.self="closeDialog"
    @keydown.esc="closeDialog"
  >
    <section class="task-card__wrapper">
      <!--Закрытие задачи-->
      <button class="task-card__close" type="button" @click="closeDialog" />
      <!--Шапка задачи-->
      <div class="task-card__block">
        <div class="task-card__row">
          <!--Наименование задачи-->
          <h1 class="task-card__name task-card__name--min">
            {{ task ? task.title : "" }}
          </h1>
          <!--Кнопка редактирования задачи-->
          <a
            class="task-card__edit"
            @click="
              router.push({
                name: 'TaskEdit',
                params: { id: $route.params.id },
              })
            "
            >Редактировать задачу</a
          >
        </div>
        <!--Дата создания задачи-->
        <p class="task-card__date">{{ useTaskCardDate(task) }}</p>
      </div>
      <!--Участник задачи и срок выполнения-->
      <div class="task-card__block">
        <ul class="task-card__params">
          <!--Участник задачи-->
          <li v-if="task && task.user">
            <div class="task-card__participant">
              <button type="button" class="task-card__user">
                <img :src="getImage(task.user.avatar)" :alt="task.user.name" />
                {{ task.user.name }}
              </button>
            </div>
          </li>
          <!--Срок выполнения-->
          <li v-if="dueDate">
            Срок:
            <button type="button" class="task-card__date-link">
              {{ dueDate }}
            </button>
          </li>
        </ul>
      </div>
      <!--Описание задачи-->

      <!--Дополнительная ссылка-->

      <!--Чек-лист-->

      <!--Метки-->

      <!--Комментарии-->
    </section>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useTaskCardDate } from "@/common/composables";
import { getImage, getReadableDate } from "@/common/helpers";

const router = useRouter();
const route = useRoute();
const dialog = ref(null);

const props = defineProps({
  tasks: {
    type: Array,
    requered: true,
  },
});

const task = computed(() => {
  return props.tasks.find((task) => task.id == route.params.id);
});

const dueDate = computed(() => {
  return getReadableDate(task.value.dueDate || "");
});

onMounted(() => {
  // Фокусируемся на диалоговом окне, чтобы сработала клафиша Esc без дополнительного клика по окну
  dialog.value.focus();
});

const consoleDialog = function () {
  router.push("/");
};
</script>
