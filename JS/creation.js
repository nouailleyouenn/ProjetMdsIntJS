const creation= {
    data(){
        return{
            name:'',categorie:'',text:'',auteur:'',url:'',image:''
        }
    },


    //template de la page creation et du formulaire
        template: `
    
    
    
    <form @submit.prevent="onSubmit" class="global-form">
                <div class="TitreSection">
                <h3>Creer un article</h3>
                </div>
                <div class="form-nom">
                <input class="name" v-model="name" placeholder="Name">
                </div>
                <div class="form-catégorie">
                <select v-model="categorie" id="categorie">
                    <option value="">--Choisir une catégorie--</option>
                    <option value="news">News</option>
                    <option value="images">Images</option>
                    <option value="monde">Monde</option>
                    <option value="blog">Blog</option>
                    <option value="Ville Connue">Ville Connue</option>
                </select>
                </div>
                <div class="form-Texte">
                <textarea id="text" v-model="text" placeholder="Texte"></textarea>
                </div>
                <div class="form-auteur">
                <textarea id="auteur" v-model="auteur" placeholder="Auteur"></textarea>
                </div>
                <div class="form-url-source">
                <textarea id="url" v-model="url" placeholder="Url source"></textarea>
                </div>
                <div class="form-url-image">
                <textarea id="image" v-model="image" placeholder="url image"></textarea>
                </div>
                <div class="button-valider-div">
                <input class="button-valider" type="submit" value="Valider"  >
                </div>
            </form>
    
    `,
    methods: {
        //method pour l'envoie du formulaire
        onSubmit(){
            if (!this.name)  {
                alert("Nom manquant ! merci de vérifier les informations.")
            }
            else if (!this.categorie) {
                alert("Catégorie manquante ! merci de vérifier les informations.")
            }
            else if (!this.text){
                alert("Texte manquant ! merci de vérifier les informations.")
            }
            else if (!this.auteur){
                alert("Auteur manquant ! merci de vérifier les informations.")
            }
            else { 
            if (this.url=="") {
                this.url="http://aucunesourcehehe.com/"
                console.log("test url")
            }
            else if (this.url==undefined) {
                this.url="http://aucunesourcehehe.com/"
                console.log("test url")
            }
            if (this.image==""){
                this.image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png"
                console.log("test image")
            }
            else if(this.image==undefined) {
                this.image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png"
                console.log("test image")
            }
            
            NewArticle = {name: this.name, categorie: this.categorie, texte: this.text, auteur: this.auteur, url: this.url, image: this.image  }//creation du nouvel article
            this.$emit("add-article",NewArticle )//envoie de l'article
            alert("form envoyé")
            this.name=""
            this.categorie=""
            this.text=""
            this.auteur=""
            this.url=""
            this.image=""
            }
        }
      
       
    },




}
