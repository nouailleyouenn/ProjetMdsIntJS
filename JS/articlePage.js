console.log("lancement")

const articlePage= {
    //templage de la section article
    template :`
    <div id="TitreSection-Article">{{$route.params.name}}</div>
    <div id="CategorieArticle"> Catégorie : {{$route.params.categorie}}</div>
    
    <div id="Text-Article" > {{$route.params.texte}}</div>
    <br>
    <div style="display: inline">  Auteur : {{$route.params.auteur}}</div>
    <a v-bind:href="urls" style="display: inline"> Source </a>
    
    <br>
    <br>
    <div id="image-article">
    <img v-bind:src="images" id="img3">
    </div>
    <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>

    
    `,
    
    updated(){
        console.log("upt")
        this.images = this.$route.params.image
        this.urls=this.$route.params.url
    },

    data(){
        return{
            images : this.$route.params.image,
            urls : this.$route.params.url
        }
    },
   
    
}

