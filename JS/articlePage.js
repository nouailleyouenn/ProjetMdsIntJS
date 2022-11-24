console.log("lancement")

const articlePage= {
    //templage de la section article
    template :`
    <div>{{$route.params.name}}</div>
    <div> {{$route.params.categorie}}</div>
    <div> {{$route.params.texte}}</div>
    <div> {{$route.params.auteur}}</div>
    <a v-bind:href="urls"> Source</a>

    <img v-bind:src="images">

    
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

