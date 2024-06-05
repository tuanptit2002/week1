import {createRouter, createWebHistory} from "vue-router";
import pageProduct from "@/components/view/Body/product/pageProduct.vue";
import bodyHome from "@/components/view/Body/BodyHome.vue";
import bodyProducts from "@/components/view/Body/BodyProducts.vue";
import ratingReviews from "@/components/view/Body/product/ratingReviews.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component:bodyHome},
        {path:'/detail', component: pageProduct, children:[{path:'/review-rating', component: ratingReviews}]},

        {path:'/products', component: bodyProducts},

    ]
})

export default router;