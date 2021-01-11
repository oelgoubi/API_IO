// Connexion à MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/my_database');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Définition du shéma
var collectionDeMesUtilisateursSchema = new mongoose.Schema({
indice: Int32Array,
temp: Float32Array,
date: Date,
});
var collectionDeMesUtilisateurs = mongoose.model('collectionDeMesUtilisateurs', collectionDeMesUtilisateursSchema );

// Créer un document
var nouvel_utilisateur = new collectionDeMesUtilisateurs({ indice: '1',temp:'12,5', date: '2021-01-11 10:11:58'});
// Enregistrer le nouvel utilisateur dans la base de données MongoDB
nouvel_utilisateur.save(function (err) {
if (err) {
  console.log('Une erreur MongoDB s\'est produite...');
  console.log(err);
}
// Le nouvel utilisateur avec le pseudo "Hercule" a été créé et enregistré.
});

// Chercher des documents
collectionDeMesUtilisateurs.find({ 'indice': '1' }, function (err, utilisateurs) {
if (err) {
  console.log('Une erreur MongoDB s\'est produite...');
  console.log(err);
}
console.log("Voici les utilisateurs que j'ai trouvé :");
console.log(utilisateurs);
})

// Mettre un jour un document
collectionDeMesUtilisateurs.updateOne({ 'indice': '1' }, { 'temp': '15,2' }, function(err, res) {
if (err) {
  console.log('Une erreur MongoDB s\'est produite...');
  console.log(err);
}
// L'utilisateur "Hercule" a été mis à jour et son prénom est maintenant "Jean"
});

// Supprimer un document
collectionDeMesUtilisateurs.deleteOne({ indice: '1' }, function (err) {
if (err) {
  console.log('Une erreur MongoDB s\'est produite...');
  console.log(err);
}
// L'utilisateur "Hercule" a été supprimé
});
