const Home = {
    //template de la page d'acceuill
    template: `

<div id="TitreSection">
    <div>Home</div>
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
<div id="TableauHome">
<table>
    <tr>
        <td id="ImgHome"><img src="https://www.letelegramme.fr/images/2021/02/08/vannes-beneficie-des-aides-de-l-etat-dans-le-cadre-du-plan_5524054_676x337p.jpg?v=1" /></td>
        <td id="ImgHome"><img src="https://img.20mn.fr/l9O92uPMScSu2sAdrR7m8Sk/1200x768_ville-vannes-annule-defile-fetes-historiques-raison-canicule"/></td>
    </tr>
    <tr>
        <td id="ImgHome"><img src="https://img.20mn.fr/l9O92uPMScSu2sAdrR7m8Sk/1200x768_ville-vannes-annule-defile-fetes-historiques-raison-canicule" /></td>
        <td id="ImgHome"><img src="https://www.bretagne.com/sites/default/files/post/Vannes_S.jpg" /></td>
    </tr>

</table>
</div>
<div id="nomPrenomGroupe">
    Youenn Nouaille / Adonis Manach
</div>



`,
props : {
    articles:{type:Object},


}



    };


