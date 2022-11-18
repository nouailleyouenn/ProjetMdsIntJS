
const Home = {
    data() {
        return {
            articles: [
                { name: "na", catégorie: "na", texte: "na", auteur: "na", url: "na", image: "na" },
                { name: "na2", catégorie: "na2", texte: "na2", auteur: "na2", url: "na2", image: "na2" }
            ]
        }

    },
    template: `

<div>
    Home
</div>
<div id="listeArticlesHome">
    <ul>
    <li v-for="article in articles">
        {{article.name}}
    </li>
    </ul>
</div>
<div id="nomPrenomGroupe">
    Youenn Nouaille / Adonis Manach
</div>
<div id="descEncyclo">
    bref descriptions
</div>

`}

const Articles = {
    template: `

<div>
    Articles
</div>

`}

const creation = {
    template: `

<div>
    creation
</div>

`}





const ArticlesListe = {
    data() {
        return {
            articles: [
                { name: "na", catégorie: "na", texte: "na", auteur: "na", url: "na", image: "na" },
                { name: "na2", catégorie: "na2", texte: "na2", auteur: "na2", url: "na2", image: "na2" }
            ]
        }

    },
    template: `
    <div>
    <ul>
    <li v-for="article in articles">
        {{article.name}}
    </li>
    </ul>
    </div>
    
    
    
    
    
    
    `
}


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
    { path: '/', component: Home }, //chemin de la page d'acceuil
    { path: '/articles', component: Articles }, //chemin de la page artciles
    { path: '/create', component: creation }, //chemin de la page de création d'articles
    {path: '/listeArticles',component:ArticlesListe}  //chemin de la page de l'affichage d'articles
]







const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({})

app.use(router)
app.mount("#app")