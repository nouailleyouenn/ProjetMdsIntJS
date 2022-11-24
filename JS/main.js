


//Tableau des articles
const articlesList = {
    
    articles : [
        { name: "Paris", categorie: "Ville Connu", texte: "aris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré", auteur: "Youenn", url: "https://fr.wikipedia.org/wiki/Paris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" },
        { name: "na2", categorie: "na2", texte: "na2", auteur: "na2", url: "na2", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png" }
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




