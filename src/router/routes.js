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
        name: 'BlogPage',
        component: () => import('../pages/BlogSinglePage')
    },
    {
        path: '/blog/category/:category',
        name: 'BlogCategoryPage',
        component: () => import('../pages/BlogCategoryPage')
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
        path: '/set-your-goals/workout-routines',
        name: 'WorkoutRoutines',
        component: () => import('../pages/WorkoutRoutinePage')
    },
    {
        path: '/set-your-goals/nutrition-goals',
        name: 'NutritionGoal',
        component: () => import('../pages/NutritionGoalPage')
    },
    {
      path: '/set-your-goals/nutrition-goals/:id',
      name: 'SingleNutritionGoal',
      component: () => import('../pages/NutritionSinglePage')
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
    },
    {
        path: '/payment',
        name: 'PaymentPage',
        component: () => import('../pages/PaymentPage')
    },
    {
        path: '/success',
        name: 'SuccessPage',
        component: () => import('../pages/SuccessPage')
    },
    {
        path: '/cancel',
        name: 'CancelPage',
        component: () => import('../pages/CancelPage')
    },
    {
        path: '/search',
        name: 'SearchPage',
        component: () => import('../pages/SearchPage')
    }
    ]
