// ============= EXERCICE : Bibliothèque 📚 ============================= //
/*6. Gestion d'une biblio

- Parcours chaque section de la bibliothèque.
- Pour chaque section, affiche dans la console :
    - Le nom de la section
    - Les titres des livres disponibles uniquement

Bonus (facultatif) : compte combien de livres disponibles il y a au total.

Exemple de sortie attendue :
Section : Romans
- 1984

Section : Science
- Brève Histoire du Temps
- Cosmos

Total de livres disponibles : 3 */

// const bibliotheque = {
//     nom: "Bibliothèque Centrale",
//     ville: "Jodoigne",
//     ouvert: true,
//     sections: [
//         {
//             nom: "Romans",
//             livres: [
//                 { titre: "1984", auteur: "George Orwell", dispo: true },
//                 { titre: "Le Meilleur des Mondes", auteur: "Aldous Huxley", dispo: false },
//             ],
//         },
//         {
//             nom: "Science",
//             livres: [
//                 { titre: "Brève Histoire du Temps", auteur: "Stephen Hawking", dispo: true },
//                 { titre: "Cosmos", auteur: "Carl Sagan", dispo: true },
//             ],
//         },
//     ],
// };

// let livresDispo = 0;
// bibliotheque.sections.forEach((section) => {
//     console.log(`Section : ${section.nom}`);

//     section.livres.forEach((livre) =>{
//         if(livre.dispo === true){
//             console.log(` - ${livre.titre} | Livre de ${livre.auteur}`);
//             livresDispo++;
//         }
//     });
// });
// console.log(`il y a ${livresDispo} livres disponibles`);


// =============== EXERCICE : médiathèque 🎞️ ======================== //
// const mediatheque = {
//     nom: "Médiathèque Municipale",
//     ville: "Namur",
//     ouvert: true,
//     categories: [
//         {
//             nom: "Science-fiction",
//             films: [
//                 { titre: "Interstellar", realisateur: "Christopher Nolan", dispo: true },
//                 { titre: "Blade Runner", realisateur: "Ridley Scott", dispo: false },
//             ],
//         },
//         {
//             nom: "Animation",
//             films: [
//                 { titre: "Le Voyage de Chihiro", realisateur: "Hayao Miyazaki", dispo: true },
//                 { titre: "Toy Story", realisateur: "John Lasseter", dispo: true },
//             ],
//         },
//     ],
// };

// let filmsDispo = 0
// mediatheque.categories.forEach((categorie) => {
//     console.log(`Catégorie : ${categorie.nom} `)
//     categorie.films.forEach((film) => {
//         if(film.dispo){
//             console.log(` - ${film.titre} (${film.realisateur})`);
//             filmsDispo++;
//         }
//     });
// });
// console.log(`Il y a ${filmsDispo} films disponibles`);


/* ===============EXERCICE : Gestion de commandes 🛒========================================
🧱 Contexte :
Vous allez développer une mini-application de gestion de commandes dans laquelle l'utilisateur peut saisir :
    - un nom d'article
    - un prix
    - une quantité

Chaque commande sera enregistrée dans un tableau d’objets.
À chaque ajout, la commande s’affiche, et un total général est mis à jour dynamiquement.

🛠️ Contraintes techniques :
    - Utiliser une classe Commande avec les propriétés suivantes : name, price, quantity.
    - Ajouter une méthode totalPrice() pour calculer le prix total d’une commande.
    - Créer une méthode display() qui retourne une chaîne à afficher dans l’interface.
    - Toutes les commandes doivent être stockées dans un tableau global.
    - Afficher chaque commande à l’ajout.
    - Mettre à jour un total général (somme de toutes les commandes).
    - Utiliser addEventListener sur un bouton pour valider l’ajout.

📐 Structure HTML attendue :
Prévoir :
    - Trois champs d’input (nom, prix, quantité)
    - Un bouton pour ajouter une commande
    - Un conteneur pour afficher les commandes
    - Un élément pour afficher le total global

🧠 Bonus possibles :
    - Gérer les cas où un champ est vide.
    - Ajouter un bouton pour supprimer une commande.
    - Afficher un message si aucune commande n’a été ajoutée.
    - Ajouter une date ou un horodatage à chaque commande.

🧠 Compétences visées :
    - Créer une classe JavaScript avec un constructeur et des méthodes.
    - Instancier des objets à partir d'une classe.
    - Manipuler le DOM pour afficher dynamiquement des données.
    - Gérer les événements utilisateur (clic).
    - Utiliser des tableaux pour stocker des objets.
    - Utiliser reduce() pour calculer un total global.*/

const inputNom = document.querySelector("#name");
const inputPrix = document.querySelector("#price");
const inputQuantite = document.querySelector("#quantity");

const addBtn = document.querySelector(".btn-add");
const totalBox = document.querySelector(".total-commandes");
const displayBox = document.querySelector(".liste-commandes");

const commandes = [];

class Commande {
    constructor (name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    afficheCommande (){
        return `${this.name} x ${this.quantity} | Total = ${this.price*this.quantity}`
    }
}

function resetForm(){
    inputNom.value = "";
    inputPrix.value = "";
    inputQuantite.value = "";
}

function displayList(){
    displayBox.innerHTML = "";
    commandes.forEach((item) =>{
        const itemBox = document.createElement("p");

        itemBox.innerHTML = item.afficheCommande() + " €";
        displayBox.append(itemBox);
    });
}

function displayTotal(){
    totalBox.innerHTML = "";
    const totalDue = document.createElement("p");

    let totalPrice = 0;

    commandes.forEach((item)=>{
        totalPrice += item.price * item.quantity;
        totalDue.innerHTML = totalPrice+" €";
        totalBox.append(totalDue);
    });
}

addBtn.addEventListener("click", function (e){
    e.preventDefault();

    const itemName = inputNom.value;
    const itemPrice = Number(inputPrix.value);
    const itemQuantity = Number(inputQuantite.value);

    if (itemName && itemPrice && itemQuantity) {
        const newCommande = new Commande(itemName, itemPrice, itemQuantity);

        commandes.push(newCommande);
        displayList();
        displayTotal();
    }
    resetForm();
});



