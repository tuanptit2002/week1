import {createRouter, createWebHistory} from "vue-router";
import pageProduct from "@/components/view/Body/product/pageProduct.vue";
import bodyHome from "@/components/view/Body/BodyHome.vue";
import bodyProducts from "@/components/view/Body/BodyProducts.vue";
import ratingReviews from "@/components/view/Body/product/ratingReviews.vue";
import cartProduct from "@/components/view/cart/cartProduct.vue";
import login from "@/components/view/login/login.vue";
import payment from "@/components/view/payment/payment.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component:bodyHome},
        {path:'/detail', component: pageProduct, children:[{path:'/review-rating', component: ratingReviews}]},
        {path:'/cart', component: cartProduct},
        {path:'/products', component: bodyProducts},
        {path:'/login', component: login},
        {path:'/payment', component: payment},
    ]
})
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default router;
