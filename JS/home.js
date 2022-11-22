const Home = {
    //template de la page d'acceuill
    template: `

<div>
    Home
</div>
<div id="listeArticlesHome" v-on="ListeArticles">
    <ul>
    <li v-for="article in articles" >
        <router-link :to="{name:'articleDesc',params:{id:articles.indexOf(article),name:article.name,categorie:article.categorie,texte:article.texte,auteur:article.auteur,url:article.url,image:article.image}}">{{article.name}}</router-link>
    </li>
    </ul>
</div>
<div>
<router-view></router-view>
</div>
<div id="nomPrenomGroupe">
    Youenn Nouaille / Adonis Manach
</div>
<div id="descEncyclo">
    bref descriptions
</div>


`,
props : {
    articles:{type:Object},


}



    };


