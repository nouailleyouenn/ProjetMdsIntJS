const creation= {
    methods: {
        //method pour l'envoie du formulaire
        onSubmit(){
            if (this.name=="")  {
                alert("Nom manquant ! merci de vérifier les informations.")
            }
            else if (this.categorie=="") {
                alert("Catégorie manquante ! merci de vérifier les informations.")
            }
            else if (!this.text){
                alert("Texte manquant ! merci de vérifier les informations.")
            }
            else if (!this.auteur){
                alert("Auteur manquant ! merci de vérifier les informations.")
            }
            else { 
            NewArticle = {name: this.name, categorie: this.categorie, texte: this.text, auteur: this.auteur, url: this.url, image: this.image  }//creation du nouvel article
            this.$emit("add-article",NewArticle )//envoie de l'article
            this.name=''
            this.categorie=''
            this.text=''
            this.auteur=''
            this.url=''
            this.image=''
            }
        }
      
       
    },


    //template de la page creation et du formulaire
        template: `
    
    <div>
        creation
    </div>
    
    <form @submit.prevent="onSubmit" class="CreateForm">
                <h3>Creer un article</h3>
                <label for="name">Nom:</label>
                    <input id="name" v-model="name">
                <label for="categorie">Catégorie :</label>
                    <select v-model="categorie" id="categorie">
                        <option value="">--Choisir une catégorie--</option>
                        <option value="news">News</option>
                        <option value="images">Images</option>
                        <option value="monde">Monde</option>
                        <option value="blog">Blog</option>
                    </select>   
                <label for="text" >Texte :</label>
                    <textarea id="text" v-model="text"></textarea>
                <label for="auteur" >Auteur :</label>
                    <textarea id="auteur" v-model="auteur"></textarea>
                <label for="url" >Url source :</label>
                    <textarea id="url" v-model="url"></textarea>
                <label for="image" >Image Url :</label>
                    <textarea id="image" v-model="image"></textarea>
                <input class="button" type="submit" value="Valider"  >
            </form>
    
    `}
