import HomePage from "../pages/HomePage";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../pages/RegisterPage')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/LoginPage')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../pages/BlogPage')
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        component: () => import('../pages/BlogSinglePage')
    },
    {
        path: '/pages/:id',
        name: 'Page',
        component: () => import('../pages/CustomPage')
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: () => import('../pages/PricingPage')
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld2')
    // }
]
