
const Home = { template: '<div>Home</div>' }
const Articles={template:'<div>Articles</div>'}
const creation={template:'<div>creation</div>'}








const routes = [
    /*{ path: '/', component: Home },
    {
        path: '/products', component: ProductsList,
        children: [
            {
                path: ':id',
                component: ProductsDetails
            }
        ],
    },*/
    {path:'/', component:Home}, //chemin de la page d'acceuil
    {path:'/articles',component:Articles}, //chemin de la page artciles
    {path:'/create',component:creation} //chemin de la page de création d'articles
]







const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({})

app.use(router)
app.mount("#app")