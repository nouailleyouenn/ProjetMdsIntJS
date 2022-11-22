
/*const Home = {

    /*
    data() {
        return {
            articles: [
                { name: "na", catégorie: "na", texte: "na", auteur: "na", url: "na", image: "na" },
                { name: "na2", catégorie: "na2", texte: "na2", auteur: "na2", url: "na2", image: "na2" }
            ]
        }

    },
    methods:{
        formsubmitted(article){
            this.articles.push(article)
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
    methods: {
    onSubmit(){
        if (this.name=="")  {
            alert("Nom manquant ! merci de vérifier les informations.")
        }
        else if (this.categorie=="") {
            alert("Catégorie manquante ! merci de vérifier les informations.")
        }
        else if (!this.text){
            alert("Texte manquant ! merci de vérifier les informations.")
        }
        else if (!this.auteur){
            alert("Auteur manquant ! merci de vérifier les informations.")
        }
        else { 
        NewArticle = {name: this.name, categorie: this.categorie, text: this.text, auteur: this.auteur, url: this.url, image: this.image  }
        this.$emit('formsubmitted', NewArticle)
        this.name=''
        this.categorie=''
        this.text=''
        this.auteur=''
        this.url=''
        this.image=''
        }
    }
  
   
},
    template: `

<div>
    creation
</div>

<form @submit.prevent="onSubmit" class="CreateForm">
            <h3>Creer un article</h3>
            <label for="name">Nom:</label>
                <input id="name" v-model="name">
            <label for="categorie">Catégorie :</label>
                <select v-model="categorie" id="categorie">
                    <option value="">--Choisir une catégorie--</option>
                    <option value="news">News</option>
                    <option value="images">Images</option>
                    <option value="monde">Monde</option>
                    <option value="blog">Blog</option>
                </select>   
            <label for="text" >Texte :</label>
                <textarea id="text" v-model="text"></textarea>
            <label for="auteur" >Texte :</label>
                <textarea id="auteur" v-model="auteur"></textarea>
            <label for="url" >Url source :</label>
                <textarea id="url" v-model="url"></textarea>
            <label for="image" >Image Url :</label>
                <textarea id="image" v-model="image"></textarea>
            <input class="button" type="submit" value="Valider"  >
        </form>

`}



*/
/*
const ArticlesListe = {
    data() {
        return {
            articles: [
                { name: "na", categorie: "na", text: "na", auteur: "na", url: "na", image: "na" },
                { name: "na2", categorie: "na2", text: "na2", auteur: "na2", url: "na2", image: "na2" }
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
*/
/*
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
    },
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






*/


const articlesList = {
    
    articles : [
        { name: "na", catégorie: "na", texte: "na", auteur: "na", url: "na", image: "na" },
        { name: "na2", catégorie: "na2", texte: "na2", auteur: "na2", url: "na2", image: "na2" }
    ]
}
    

    const app = Vue.createApp({
        data() {
            return {
                
            };
    
        },
        methods:{
            addarticle(TheArticle){
                //console.log(articlesList[articles])
                console.log("test2")
                console.log(TheArticle," in the main")
                /*for (i=0,i<articlesList.length,i++){
                    if(articlesList[i]){
                        this.articlesList.push(NewArticle)
                    }
                }*/
                articlesList.articles.push(NewArticle)
                console.log(articlesList)
            },
            formsubmitted(article){
                this.articles.push(article)
                
            },
    
            
    
        },
        props : {
            
        }
    })



const routes =[
    { path: '/', component: Home, props : articlesList,
    children:[
        {
            path:':name',
            name:'articleDesc',
            component : articlePage,
        }
    ]}, //chemin de la page d'acceuil
    { path: '/articles', component: Articles }, //chemin de la page artciles
    { path: '/create', component: creation }, //chemin de la page de création d'articles
    //{path: '/listeArticles',component:ArticlesListe}  //chemin de la page de l'affichage d'articles
    
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})






app.use(router)
app.mount("#app")




