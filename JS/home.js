const Home = {
    template: `

<div>
    Home
</div>
<div id="listeArticlesHome" v-on="ListeArticles">
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


`,
props : {
    articles:{type:Object},


}



    };


