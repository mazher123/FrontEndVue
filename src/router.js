import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
// import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistation from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
//import UserAuth from './pages/auth/UserAuth.vue';

import Landing from './pages/home/Landing.vue';
import ProductList from './pages/home/ProductList.vue';
import AddProduct from './pages/home/AddProduct.vue';
import EditProduct from './pages/home/EditProduct.vue';
//import UserAuth from './pages/auth/UserAuth.vue';
//import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing },
        { path: '/products', component: ProductList },
        { path: '/add-product', component: AddProduct },
        { path: '/products/:id', component: EditProduct },

        //{ path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

// router.beforeEach(function(to, _, next) {
//     if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//         next('/auth');
//     } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//         next('/coaches');
//     } else {
//         next();
//     }
// });

export default router;