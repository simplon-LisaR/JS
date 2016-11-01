var gestionnaireContact = {
  contacts:[],
  ajouteContact:function( nom, prenom, mail ){
    console.log('ajoute');
    //  créer un objet nouveauContact avec les valeurs transmises
    var nouveauContact = {
      mail:mail,
      nom:nom,
      prenom:prenom
    };

    //  ajoute nouveauConact à contacts
    this.contacts.push(nouveauContact);
    console.log(this.contacts);

  }
}
