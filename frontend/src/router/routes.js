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
      {
        path: "/tasks/create",
        name: "TaskCreate",
        component: () => import("../views/TaskCreate.vue"),
        meta: { layout: "AppLayoutMain" },
      },
      // {
      //   path: "/tasks/:id/edit",
      //   name: "TaskEdit",
      //   component: () => import("../views/TaskEdit.vue"),
      //   meta: { layout: "AppLayoutMain" },
      // },
    ],
  },
];

/** Обратите внимание, что мы добавили маршрут TaskView как дочерний к маршруту HomeView.
 * Чтобы маршрут был отрисован, нужно добавить router-view в компонент HomeView.vue.
 */
