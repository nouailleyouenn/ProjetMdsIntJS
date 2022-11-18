export default {    
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