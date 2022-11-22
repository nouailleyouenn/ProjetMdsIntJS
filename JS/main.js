


//Tableau des articles
const articlesList = {
    
    articles : [
        { name: "na", categorie: "na", texte: "na", auteur: "na", url: "na", image: "na" },
        { name: "na2", categorie: "na2", texte: "na2", auteur: "na2", url: "na2", image: "na2" }
    ]
}
    
//Creation de la page 
    const app = Vue.createApp({
        data() {
            return {
                
            };
    
        },
        methods:{
            addarticle(TheArticle){
                articlesList.articles.push(NewArticle) //ajout du nouvel article
            },
            
    
            
    
        },
        props : {
            
        }
    })


//routes
const routes =[
    { path: '/', component: Home, props : articlesList,//cehmin de la page Home
    children:[
        {
            path:':id/:name/:categorie/:texte/:auteur/:url/:image',
            name:'articleDesc',
            component : articlePage,
            props : articlesList,
            
        }//chemin de la page article
    ]}, 
    { path: '/create', component: creation }, //chemin de la page de création d'articles
    
    
]


//Initialisation de vue router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})






app.use(router)
app.mount("#app")




