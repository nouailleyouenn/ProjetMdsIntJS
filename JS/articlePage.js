
const articlePage= {
    //templage de la section article
    template :`
    <div>{{$route.params.name}}</div>
    <div> {{$route.params.categorie}}</div>
    <div> {{$route.params.texte}}</div>
    <div> {{$route.params.auteur}}</div>
    <div> Source : <a>{{$route.params.url}}</a></div>

    <img v-bind:src="image">

    
    `,
    updated(){
        image = $route.params.image
    }
    
}