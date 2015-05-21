var app = angular.module("app", ["pascalprecht.translate"]);

app.controller("IndexCtrl", function($scope, $http, $translate) {

  $scope.changeLang = function (lang) {
    $translate.use(lang);
  };

  $scope.submitEmail = function () {
    $http.post("https://voidclash.herokuapp.com/mails", {
      email: $scope.form.email
    }).success(function (response) {
      $scope.form.hide = true;
    }).error(function (response) {
      $scope.form.hide = false;
    });
  };

  (function () {

  })();
});


app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    lang: {
      fr: "fr",
      en: "en",
    },
    nav: {
      game: "Game",
      news: "News",
      community: "Community",
      support: "Support",
      greenlight: "Greenlight us"
    },
    headline: {
      greenlight: "Join us and help us to be <strong>Greenlit</strong> !",
      competitive: "A <strong>fast-paced</strong>, <strong>online</strong> and<br /> <strong>competitive</strong> shoot'em up arena.",
      user_friendly: "A full featured and simple <strong>user-friendly</strong> interface",
      guns: "A <strong>badass</strong>, gun system !"
    },
    news: {
      title: "<strong>Last News</strong> on the blog"
    },
    concept: {
      title: "<strong>the game</strong> overview",
      description: "Void Clash is a fast-paced, online and competitive shoot'em up arena. It brings you an innovative gameplay mixing several concepts from the video game’s world.<br>Controlling a spacecraft with a top view, you have to defeat your enemies during incredible arena fights.<br>Void Clash is also giving you a full game element customization ! Players can create their own arena and to setup all their spacecraft, including weapons.<br>Void Clash gives you quicly a lot of fun and allows you to progress in an interactive and competitive universe !",
      gameplay: {
        title: "An innovative gameplay",
        description: "Highly focused on player skills and team work, <br>the new Void Clash gameplay will bring you into intense fights in the arena where managing your inertia, <br>your energy and anticipate your enemy's moves will be part of your war !"
      },
      guns: {
        title: "A badass gun system",
        description: "The game allows you to browse between six weapon categories entirely customisable using more than ten parameters as modify the impact damage, the range and many more !"
      },
      team: {
        title: "Work with your team",
        description: "The team play is as important as your skill when you take part in a team battle.<br>Your team and yourself need to define and adapt the optimal strategies to defeat the opponents team."
      },
      mods: {
        title: "Which game mod ?",
        description: "Maybe you are a flag stealer, or a serial shooter ?<br>No matter, you can find what describe the best your style with six game mods available, solo or multiplayer !"
      },
      matchmaking: {
        title: "A matchmaking system",
        description: "Competitor or simply casual gamer, you will be able to find the type of game you want : <br>Arcades games or Ranked matches with the matchmaking tool."
      },
      user_friendly: {
        title: "User-friendly Interface",
        description: "Void Clash own a full game interface, including a launcher paired with the Steam SDK, <br>a game client and a map editor."
      }
    },
    modes: {
      title: "<strong>flag stealer</strong> or a serial shooter ?",
      description: "King of the galaxy, Killer or Flag stealer, you can choose which mod is your favorite.<br>Paired to all those mods, you can enable the Horde mod to make the game more funny (and harder) !",
      ctf: {
        title: "Capture The Flag",
        description: "You are fighting in the void arena with your entire team. Your target is to steal and bring back the opponent flag into your team base."
      },
      ffa: {
        title: "Free For All",
        description: "In the void arena, your are alone against others. You have to kill a maximum amount of player and protect yourself from others attack ! Don't forget the best score is calculated with the kill and death ratio."
      },
      horde: {
        title: "Horde",
        description: "Like in the FFA mod, you are alone except this time, tones of spacecrafts are comming by wave to erradicate your life ! When you die in this mod, your respawn will be the next round. <strong>You can active this mod in every others mod !</strong>"
      },
    }
  });

  $translateProvider.translations('fr', {
    lang: {
      fr: "fr",
      en: "en",
    },
    nav: {
      game: "Jeu",
      news: "Nouveautés",
      community: "Communauté",
      support: "Support",
      greenlight: "Greenlightez nous"
    },
    headline: {
      greenlight: "Rejoignez nous et aidez nous à être <strong>Greenlighté</strong> !",
      competitive: "Un shoot'em up arena <strong>rapide</strong>, <strong>en ligne</strong> et<br /> <strong>compétitif</strong>.",
      user_friendly: "Une interface complète et <strong>intuitive</strong>.",
      guns: "Un système d'arme <strong>badass</strong> !",
    },
    news: {
      title: "<strong>Dernières nouveautées</strong> sur le blog"
    },
    concept: {
      title: "<strong>Le jeu</strong> aperçu",
      description: "Void Clash est un shoot'em up arena rapide, en ligne et compétitif. Ca vous apporte un mélange innovant de différents concept du jeu vidéo.<br>En controllant un vaisseau vu de dessus, vous devez battre vos ennemies pendant d'incroyables combats en arènes.<br>Void Clash vous offre aussi une totale possibilité de personnalisation ! Les joueurs peuvent créer leur propre arène et configurer leurs vaisseaux ainsi que leurs armes.<br>Void Clash vous offre une progression interessante et motivante dans un univers compétitif et intéractif !",
      gameplay: {
        title: "Un gameplay innovant",
        description: "Très concentré sur le skill individuel et le travail d'équipe, <br> le nouveau gameplay de Void Clash vous imergera dans d'intenses batailles dans l'arène où gérer votre inertie, <br>votre énergie et anticiper les mouvements de vos ennemis feront  parti de votre guerre !"
      },
      guns: {
        title: "Un système d'arme babass",
        description: "Le jeu vous permet de choisir entre six catégories d'arme entièrement personnalisable avec plus de dix paramètres à modifier comme les dégats d'impact, la portée, et beaucoup plus !"
      },
      team: {
        title: "Travaillez en équipe",
        description: "Le jeu en équipe est aussi important que votre skill lorsque vous prenez part à la bataille.<br>Votre équipe et vous même devez définir et adapter la stratégie optimale pour battre l'équipe adverse."
      },
      mods: {
        title: "Quel mode de jeu ?",
        description: "Peut être que vous être un voleur de drapeau, ou un serial tireur ?<br>Peut importe, vous pouvez trouver ce qui décrit le mieux votre style avec six modes de jeu disponibles, seul ou à plusieurs !"
      },
      matchmaking: {
        title: "Un système de matchmaking",
        description: "Compétiteur ou simple joueur casuel, vous serez capable de trouver le type de partie que vous voulez : <br>Jeux d'arcade ou Jeux classés avec le système de matchmaking."
      },
      user_friendly: {
        title: "Interface intuitive",
        description: "Void Clash comprend une interface de jeu complète, avec un launcher qui intègre la SDK Steam, <br>un client de jeu et un éditeur de carte."
      }
    },
    modes: {
      title: "<strong>Voleur de drapeau</strong> ou serial tireur ?",
      description: "Roi de la galaxie, Tueur ou Voleur de drapeau, vous pourrez choisir quel mode est votre préféré.<br>Associé avec tous ces modes, vous pourrez activer le mode Horde pour rendre le jeu plus drôle (et plus dur) !",
      ctf: {
        title: "Capture de drapeau",
        description: "Vous vous battez dans une arène de vide avec votre équipe entière. Votre but est de voler et rapporter le drapeau ennemi dans la base de votre équipe."
      },
      ffa: {
        title: "Free For All",
        description: "In the void arena, your are alone against others. You have to kill a maximum amount of player and protect yourself from others attack ! Don't forget the best score is calculated with the kill and death ratio."
      },
      horde: {
        title: "Horde",
        description: "Like in the FFA mod, you are alone except this time, tones of spacecrafts are comming by wave to erradicate your life ! When you die in this mod, your respawn will be the next round. <strong>You can active this mod in every others mod !</strong>"
      },
    }
  });

  $translateProvider.preferredLanguage('en');
});