export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "/:id",
        name: "TaskView",
        component: () => import("../views/TaskView.vue"),
        meta: { layout: "AppLayoutMain" },
      },
    ],
  },
];

/** Обратите внимание, что мы добавили маршрут TaskView как дочерний к маршруту HomeView.
 * Чтобы маршрут был отрисован, нужно добавить router-view в компонент HomeView.vue.
 */
