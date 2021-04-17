import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Posts from "../components/Posts.vue";
import Profile from "../components/Profile.vue";
import AboutHome from "../components/AboutHome.vue";
import PostsOther from "../components/PostOther.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: Home, name: "home", alias: "/about/1/posts/1" },
  {
    path: "/about/:id",
    component: About,
    props: true, // 把:id占位符参数传入 组件props
    children: [
      { path: "", component: AboutHome }, // 默认渲染的
      {
        path: "profile",
        component: Profile,
        props: { newsletterPopup: false }, // 直接渲染到组件属性props上
        meta: { requiresAuth: true },
      },
      // { path: "profile", redirect: "/home" },
      // { path: "profile", redirect: { name: "home" } },
      // {
      //   path: "profile",
      //   redirect: (to) => {
      //     // 方法接收 目标路由 作为参数
      //     // return 重定向的 字符串路径/路径对象
      //     console.log(to);
      //     return "/home";
      //   },
      // },
      {
        path: "posts/:name",
        components: { default: Posts, other: PostsOther },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(
    to.matched.some((record) => {
      console.log(record);
      return record.meta.requiresAuth;
    })
  );
  if (
    to.matched.some((record) => {
      console.log(record);
      return record.meta.requiresAuth;
    })
  ) {
    next();
  } else {
    next(); // 确保一定要调用 next()
  }
});

router.onError((err) => {
  console.log(err);
});
export default router;
