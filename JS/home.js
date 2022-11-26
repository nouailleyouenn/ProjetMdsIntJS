const Home = {
    //template de la page d'acceuill
    template: `

<div class="TitreSection">
    <div>Home</div>
</div>
<div class="listeArticlesHome" v-on="ListeArticles">
    <ul>
    <li v-for="article in articles" >
        <router-link :to="{name:'articleDesc',params:{id:articles.indexOf(article),name:article.name,categorie:article.categorie,texte:article.texte,auteur:article.auteur,url:article.url,image:article.image}}">{{article.name}}</router-link>
    </li>
    </ul>
</div>
<div>
<router-view></router-view>
</div>
<div class="TableauHome">
<table>
    <tr>
        <td class="ImgHome"><img src="https://www.letelegramme.fr/images/2021/02/08/vannes-beneficie-des-aides-de-l-etat-dans-le-cadre-du-plan_5524054_676x337p.jpg?v=1" class="img2"/></td>
        <td class="ImgHome"><img src="https://img.20mn.fr/l9O92uPMScSu2sAdrR7m8Sk/1200x768_ville-vannes-annule-defile-fetes-historiques-raison-canicule" class="img2"/></td>
    </tr>
    <tr>
        <td class="ImgHome"><img src="https://img.20mn.fr/l9O92uPMScSu2sAdrR7m8Sk/1200x768_ville-vannes-annule-defile-fetes-historiques-raison-canicule" class="img2"/></td>
        <td class="ImgHome"><img src="https://www.bretagne.com/sites/default/files/post/Vannes_S.jpg" class="img2" /></td>
    </tr>

</table>
</div>
<br><br><br><br><br>
<div class="nomPrenomGroupeContainer">
    <div class="nomPrenomGroupe"> Youenn Nouaille / Adonis Manach </div>
</div>



`,
props : {
    articles:{type:Object},


}



    };


