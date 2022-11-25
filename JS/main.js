


//Tableau des articles
const articlesList = {
    
    articles : [
        { name: "Paris", categorie: "Ville Connu", texte: "Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré", auteur: "Youenn", url: "https://fr.wikipedia.org/wiki/Paris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" },
        { name: "Bordeaux", categorie: "Ville Connu", texte: "Bordeaux, au cœur de la région viticole, est une ville portuaire située sur la Garonne, dans le sud-ouest de la France. Elle est réputée pour la cathédrale gothique de Saint-André, ses manoirs construits aux XVIIIe et XIXe siècles, ainsi que ses musées d'art comme le musée des Beaux-Arts de Bordeaux. Les jardins publics suivent les courbes des quais qui longent le fleuve. La place de la Bourse, au centre de laquelle trône la fontaine des Trois Grâces, se reflète dans le miroir d'eau.", auteur: "Adonis", url: "https://fr.wikipedia.org/wiki/Bordeaux", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bordeaux_Place_de_la_Bourse_de_nuit.jpg/1920px-Bordeaux_Place_de_la_Bourse_de_nuit.jpg" }
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




