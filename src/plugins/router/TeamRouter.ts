// src/router/StaffRoute.ts
import { RouteRecordRaw } from "vue-router";
import MainTeam from "../../view/team/MainTeam.vue";

const staffRoutes: RouteRecordRaw[] = [
  {
    path: "/team/:id?",
    name: "team",
    component: MainTeam,
  },
];

export default staffRoutes;
