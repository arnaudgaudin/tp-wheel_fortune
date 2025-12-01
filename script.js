//jeu de données aléatoire pour chaque partie
//généré aléatoirement car j'ai pété
const wordGroups = [
  ["chat", "pomme", "livre", "jouet"],
  ["soleil", "piano", "crayon", "ombre"],
  ["lampe", "chaise", "boite", "vernis"],
  ["table", "verre", "orange", "tasse"],
  ["porte", "nez", "plume", "main"],
  ["crabe", "singe", "banane", "fruit"],
  ["mer", "plage", "bateau", "vague"],
  ["lapin", "fromage", "clone", "carte"],
  ["rouge", "bleu", "vert", "noir"],
  ["arbre", "plante", "branche", "tronc"],
  ["nuage", "pluie", "orage", "vent"],
  ["route", "voiture", "pneu", "moteur"],
  ["salon", "canape", "tapis", "lampe"],
  ["classe", "ecole", "eleve", "cours"],
  ["balle", "sport", "tennis", "match"],
  ["cuivre", "fer", "acier", "metal"],
  ["tigre", "zebre", "cheval", "lion"],
  ["glace", "sucre", "dessert", "gout"],
  ["frigo", "four", "bol", "couteau"],
  ["minute", "seconde", "heure", "temps"],
  ["riviere", "lac", "source", "eau"],
  ["bouteille", "verre", "eau", "bouchon"],
  ["pierre", "caillou", "roche", "galet"],
  ["pomme", "raisin", "poire", "melon"],
  ["brosse", "savon", "serviette", "peigne"],
  ["papier", "stylo", "gomme", "feuille"],
  ["chien", "niche", "collier", "laisse"],
  ["poisson", "requin", "algue", "corail"],
  ["veste", "pantalon", "chaussure", "chemise"],
  ["bureau", "lampe", "clavier", "souris"],
  ["garcon", "fille", "ami", "groupe"],
  ["hiver", "neige", "vent", "froid"],
  ["ete", "chaleur", "plage", "soleil"],
  ["automne", "feuille", "vent", "brume"],
  ["printemps", "fleur", "herbe", "terre"],
  ["cafe", "sucre", "tasse", "grain"],
  ["riz", "poulet", "salade", "bol"],
  ["velours", "soie", "coton", "laine"],
  ["montre", "bracelet", "bijou", "or"],
  ["couteau", "fourchette", "assiette", "verre"],
  ["film", "acteur", "scene", "camera"],
  ["radio", "musique", "chant", "rythme"],
  ["danse", "theatre", "opera", "scene"],
  ["equipe", "match", "score", "but"],
  ["circuit", "moteur", "huile", "cable"],
  ["lion", "panthere", "tigre", "fauve"],
  ["jardin", "terre", "fleur", "herbe"],
  ["tomate", "carotte", "poireau", "salade"],
  ["cactus", "desert", "sable", "roche"],
  ["robot", "laser", "module", "servo"],
  ["avion", "pilote", "aile", "vol"],
  ["bus", "train", "metro", "rail"],
  ["argent", "billet", "piece", "banque"],
  ["magie", "carte", "tour", "trick"],
  ["combat", "epee", "bouclier", "arme"],
  ["toile", "peinture", "couleur", "pinceau"],
  ["village", "ville", "route", "rue"],
  ["plante", "herbe", "grain", "terre"],
  ["foudre", "orage", "flash", "tonnerre"],
  ["coeur", "tete", "dos", "corps"],
  ["chemin", "route", "piste", "trace"],
  ["harpe", "flute", "drum", "piano"],
  ["brique", "mur", "porte", "toit"],
  ["gazon", "terrain", "ballon", "but"],
  ["ventre", "bras", "jambe", "dos"],
  ["cercle", "triangle", "carre", "forme"],
  ["compte", "nombre", "chiffre", "total"],
  ["minute", "heure", "jour", "temps"],
  ["roman", "histoire", "auteur", "livre"],
  ["verre", "bocal", "bouteille", "flacon"],
  ["couteau", "planche", "bol", "cuisine"],
  ["poivre", "sel", "epice", "arome"],
  ["galet", "sable", "roche", "pierre"],
  ["mer", "vague", "ecume", "surf"],
  ["hache", "epee", "bouclier", "arme"],
  ["crayon", "papier", "livre", "stylo"],
  ["grenouille", "tetard", "mare", "eau"],
  ["maison", "porte", "toit", "muret"],
  ["lampe", "lumiere", "bougie", "flamme"],
  ["coussin", "plaid", "sofa", "canape"],
  ["robot", "piston", "vis", "ecrou"],
  ["ravin", "colline", "montagne", "vallee"],
  ["canyon", "pierre", "falaise", "roche"],
  ["garage", "voiture", "outil", "cle"],
  ["nuit", "etoile", "lune", "ombre"],
  ["midi", "soir", "matin", "jour"],
  ["bijou", "or", "argent", "perle"],
  ["piano", "harpe", "lyre", "corde"],
  ["fruit", "melon", "pomme", "kiwi"],
  ["chocolat", "bonbon", "gateau", "sucre"],
  ["ballon", "but", "score", "match"],
  ["valise", "carte", "route", "voyage"],
  ["cable", "prise", "lampe", "fil"],
  ["chaud", "froid", "tiede", "vif"],
  ["mousse", "foret", "arbre", "bois"],
  ["dragon", "flamme", "ecaille", "vol"],
  ["pierre", "marbre", "granit", "roc"],
  ["argent", "caisse", "banque", "fonds"],
  ["souffle", "voix", "rire", "cri"],
  ["tic", "tac", "minuterie", "tempo"],
  ["navire", "voile", "cap", "pont"],
  ["nuage", "ciel", "vent", "air"]
];

//jeu de donnée sélectionné (initialisé ici pour accès global)
let wordsMerged = "";

//sélection globale du jeu
const wheelfortune = document.getElementById('wheelfortune');

//sélection du conteneur des boxes
const boxesContainer = wheelfortune.querySelector('.boxes');
//sélection de tous les boites
const boxes = boxesContainer.querySelectorAll('.box');

//sélection du conteneur de l'alphabet
const alphabetContainer = wheelfortune.querySelector('.alphabet');
//sélection de tous les boutons à lettre
const letterBtns = alphabetContainer.querySelectorAll('button');

//initialisation de la partie
const initGame = () => {
  //sélection d'un jeu de donnée de façon aléatoire pour remplir le tableau
  const indexWords = Math.floor(Math.random() * wordGroups.length);
  const words = wordGroups[indexWords];

  //on mélange les mots en une seule strings et on l'affecte à la variable globale
  //on s'en servira ensuite pour éliminer les lettres cliquées par l'alphabet
  wordsMerged = words.join('');

  //configuration des lignes
  const rows = [
    12, // ligne 1
    14, // ligne 2
    14, // ligne 3
    12  // ligne 4
  ];

  //on attribue le premier mot à la première ligne, le second à la seconde, etc...
  const wordDisplay = words.map((word, index) => {
      //recupération du nombre de colonnes disponibles
      const rowCols = rows[index];
      //nombre de "trous" restant à remplir
      const gaps = (rowCols - word.length);
      //création d'un nombre aléatoire pour débuter le mot
      const start = Math.floor(Math.random() * gaps);
      //nombre de colonnes vides à la fin de la colonne
      const remaining = rowCols - word.length - start;
      //création d'un tableau contenant les lettres vide ou pas pour la ligne courante
      const splittedWords = [];

      //ajout des cases vides en début de ligne
      if(start > 0) {
        for (let s_i = 0; s_i < start; s_i++) {
          splittedWords.push('');
        }
      }

      //ajout des lettres du mot dans le tableau
      word.split("").forEach(letter => {
        splittedWords.push(letter);
      });

      //ajout des cases vides en fin de ligne
      if(remaining > 0) {
        for (let r_i = 0; r_i < remaining; r_i++) {
          splittedWords.push('');
        }
      }

      return splittedWords;
    }
  );

  //ajout des lettres à l'interface
  let wordCounter = 0;
  wordDisplay.forEach((letters) => {
    letters.forEach(letter => {

      //sélection de la box correspondante
      const box = boxes[wordCounter];
      //ajout de la lettre à l'intérieur
      box.textContent = `${letter}`;

      //ajout de la lettre en tant que paramètre data pour récupération via event
      if(letter) box.dataset.letter = letter;

      //ajout d'un listener custom sur la lettre pour déclencher son apparition
      box.addEventListener('chosen', letterChosen);

      //incrémentation du compteur
      wordCounter++;
    });
  });

  //gestion des événements sur tous les boutons
  letterBtns.forEach((letterBtn) => {
    letterBtn.addEventListener('click', letterClick);
  });

  //gestion des événement globaux sur le jeu
  wheelfortune.addEventListener('letterGuess', overallScore);
}

//fonction déclenchée sur chacune des lettres choisies
const letterChosen = (event) => {
  const letterNode = event.target;
  const letter = letterNode.dataset.letter;
  console.log('letterChosen', letter);
  
  //ajout de la classe active à la lettre
  letterNode.classList.add('active');

  //suppression de la lettre de la variable globale
  wordsMerged = wordsMerged.replaceAll(letter, "");
}

//fonction déclenchée sur les boutons de lettre
const letterClick = (event) => {
  const btnNode = event.target;
  const letter = btnNode.value;
  //sélection de la lettre correspondante (si elle existe)
  const letterNodes = boxesContainer.querySelectorAll(`.box[data-letter=${letter}]`);

  //déclenchement événement custom sur chacune des lettres choisies
  const eventChosen = new Event("chosen");
  letterNodes.forEach((letterNode) => {
    letterNode.dispatchEvent(eventChosen);
  });

  //une fois qu'un bouton a été utilisé on le désastive
  btnNode.disabled = true;
  
  //déclenchement d'un événement global sur le jeu pour le suivi du score
  wheelfortune.dispatchEvent(new Event("letterGuess"));
}

//fonction déclenchée à chaque essai pour suivi du score global
const overallScore = (event) => {
  console.log('overallScore', event);
  
  console.log('wordsMerged', wordsMerged);

  //nombre de lettre restant à trouver dans les mots
  const remainingLetters = wordsMerged.length;
  console.log('remainingLetters', remainingLetters);
}

initGame();