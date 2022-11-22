const Home = {
    template: `

<div>
    Home
</div>
<div id="listeArticlesHome" v-on="ListeArticles">
    <ul>
    <li v-for="article in articles" >
        <router-link :to="{name:'articleDesc'},params:{name:el.name}">{{article.name}}</router-link>
    </li>
    </ul>
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


