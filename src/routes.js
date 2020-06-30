import Results from "@/components/Pages/Results.vue";
import NotFound from "@/components/Pages/NotFound.vue";
export const routes = [
  { path: "", name: "Index", redirect: "/people/Luke Skywalker" },
  {
    path: "/NotFound",
    name: "NotFound",
    component: NotFound
  },
  {
    path: `/:categ/:query?`,
    name: Results,
    component: Results
  }
];
