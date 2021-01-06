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
    },
    {
        path: '/services/geolocation',
        name: 'Geolocation',
        component: () => import('../pages/GeolocationPage')
    },
    {
        path: '/set-your-goals/weight-goals',
        name: 'WeightGoal',
        component: () => import('../pages/WeightGoalPage')
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: () => import('../pages/AboutPage')
    },
    {
        path: '/terms',
        name: 'TermsPage',
        component: () => import('../pages/TermsPage')
    }
]
