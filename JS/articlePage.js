console.log("lancement")

const articlePage= {
    //templage de la section article
    template :`
    <div class="TitreSection-Article">{{$route.params.name}}</div>
    <div class="CategorieArticle"> Catégorie : {{$route.params.categorie}}</div>
    
    <div class="Text-Article" > {{$route.params.texte}}</div>
    <br>
    <div id="auteur">
    <div style="display: inline">  Auteur : {{$route.params.auteur}}</div>
    <a v-bind:href="urls" style="display: inline"> Source </a>
    </div>
    
    <br>
    <br>
    <div class="image-article">
    <img v-bind:src="images" class="img3">
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

