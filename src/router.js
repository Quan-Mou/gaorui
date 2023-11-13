import { createRouter,createWebHistory } from "vue-router";




const routes = [
    {
        name:"login",
        path:"/login",
        component: () => import("./views/Login.vue")
    },
    {
        name:"home",
        path:"/",
        component: () => import("./views/Home.vue")
    },
    {
        name:"signup",
        path:"/signup",
        component:() => import("./views/Regsiter.vue")
    },
    {
        name:"columnDetail",
        path:"/column/:id",
        component: () => import("./components/ColumnDetail.vue")
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router