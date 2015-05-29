var app = angular.module("app", ["pascalprecht.translate"]);

app.controller("IndexCtrl", function($scope, $http, $translate) {

  $scope.lang = {
    value: 'en',
    set: function (val) {
      this.value = val;
      $translate.use(val);
    },
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
      greenlight: "Greenlit us"
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
      koth: {
        title: "King Of The Hill",
        description: "Everyone is fighting to occup a specific map zone and keep it safe from opponents attacks. The team who keep more longer the zone whitin the round time won !"
      },
      svr: {
        title: "Survivor",
        description: "Like in the FFA mod, you are fighting against others except if someone die, he will respawn at the next round. There will be only one left at the end !"
      },
      tdm: {
        title: "Team Deathmatch",
        description: "Probably the most known mod on the earth and in the void arena, the goal is the same : Kill and kill again until the round's end. Keep in mind that your score is made with your kill and death ratio !"
      },
      tsvr: {
        title: "Team Survivor",
        description: "Like in the FFA mod, you are fighting against the opponents team except if someone die, he will respawn at the next round. There will be only one left at the end !"
      }
    },
    weapon: {
      title: "<strong>The badass</strong> weapon system",
      description: {
        first: "⤷ <strong>Create your weapons</strong> and <strong>totally customize them</strong> with more than <em>ten parameters</em> !",
        second: "⤷ Choose between <strong>six weapon categories</strong> including the totally <strong>crazy <u>Engine</u> weapon</strong> !"
      },
      subtitle: "<strong>Which kind of killer are you ?</strong>",
      bomb: {
        title: "Bomb",
        description: "Someone wants to destroy an entire fleet ? <br>By optimising some other parameters, you will be able to strike in the opponent base !"
      },
      bullet: {
        title: "Bullet",
        description: "It represent all kind of weapons you can use to harass your enemy.<br>A machine gun or a sniper can be your friends to win."
      },
      engine: {
        title: "Engine",
        description: "Engine weapons are your peace-keeper !<br> They allow you to absorb enemy shots, regenere life and give you more speed."
      },
      rocket: {
        title: "Rocket",
        description: "What could be better than a missile to disperse your opponent's remains in the void ? <br><br>Where you run it, it will explode !"
      },
      turret: {
        title: "Turret",
        description: "Turrets are redoubtable for your enemy !<br>It targets and locks your enemy's position and then fire them when it is possible."
      },
      zone: {
        title: "Zone",
        description: " Zone"
      }
    },
    newsletter: {
      title: "STAY CONNECTED #VOIDCLASHGAME"
    },
    footer: {
      lm : "Legal Mentions",
      pp: "Privacy Policy"
    }

  });

  $translateProvider.translations('fr', {
    lang: {
      fr: "fr",
      en: "en",
    },
    nav: {
      game: "Jeu",
      news: "Actualités",
      community: "Communauté",
      greenlight: "Greenlight"
    },
    headline: {
      greenlight: "Rejoignez nous et aidez nous à conquérir <strong>Greenlight</strong> !",
      competitive: "Un shoot'em up complètement <br><strong>fou</strong>, <strong>en ligne</strong> et <strong>compétitif</strong>.",
      user_friendly: "Une interface complète et <strong>intuitive</strong>.",
      guns: "Découvrez le système d'arme totallement <strong>badass</strong> !",
    },
    news: {
      title: "<strong>Quoi de neuf ?</strong> "
    },
    concept: {
      title: "<strong>Le jeu</strong> en aperçu",
      description: "Void Clash est un shoot'em up arena rapide, en ligne et compétitif. Ca vous apporte un mélange innovant de différents concept du jeu vidéo. En controllant un vaisseau vu de dessus, vous devez battre vos ennemies pendant d'incroyables combats en arènes.<br>Void Clash vous offre aussi une totale possibilité de personnalisation ! Les joueurs peuvent créer leur propre arène et configurer leurs vaisseaux ainsi que leurs armes. Le jeu vous offre une progression interessante et motivante dans un univers compétitif et intéractif !",
      gameplay: {
        title: "Un gameplay innovant",
        description: "Très concentré sur le skill individuel et le travail d'équipe, le nouveau gameplay de Void Clash vous imergera dans d'intenses batailles dans l'arène où gérer votre inertie, votre énergie et anticiper les mouvements de vos ennemis feront  parti de votre guerre !"
      },
      guns: {
        title: "Une infinité d'armes",
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
        title: "Le matchmaking",
        description: "Compétiteur ou simple joueur casuel, vous serez capable de trouver le type de partie que vous voulez : <br>Jeux d'arcade ou Jeux classés avec le système de matchmaking."
      },
      user_friendly: {
        title: "Une interface simple",
        description: "Void Clash comprend une interface de jeu complète, avec un launcher qui intègre la SDK Steam, <br>un client de jeu et un éditeur de carte."
      }
    },
    modes: {
      title: "<strong>Voleur</strong> ou <strong>serial killer</strong> ?",
      description: "Roi de la galaxie, Tueur ou Voleur de drapeau, vous pourrez choisir quel mode est votre préféré. Associé avec tous ces modes, vous pourrez activer le mode Horde pour rendre le jeu plus drôle (et plus dur) !",
      ctf: {
        title: "Capture de drapeau",
        description: "Vous vous battez dans une arène au coeur de l'espace avec votre équipe entière. Votre but est de voler et rapporter le drapeau ennemi votre base."
      },
      ffa: {
        title: "Libre",
        description: "Vous êtes seul contre tous. Votre objectif est d'éliminer le maximum de vos adversaires tout en évitant de se faire tuer ! Votre score sera calculé en fonction de votre ratio joueurs tués et morts."
      },
      horde: {
        title: "Horde",
        description: "Similaire au mode libre, vous êtes seul contre tous. Seulement cette fois-ci, des hordes de vaisseaux arrivent pour tenter de vous réduire à néant. Attention si vous mourrez, vous ré-apparaitrez au prochain round. <strong>Vous pouvez activer le mode horde dans n'importe quel autre type de partie !</strong>"
      },
      koth: {
        title: "King Of The Hill",
        description: "Tout le monde combat avec son équipe pour occuper et conquérir une zone spéciale de l'arène. L'équipe qui tient cette zone le plus longtemps dans le temps imparti remporte la partie !"
      },
      svr: {
        title: "Survivor",
        description: "Similaire au mode libre, vous êtes seul contre tous. Seulement cette fois-ci, lorsque qu'un joueur meurt, il ré-apparait au round suivant. Il n'en restera qu'un !"
      },
      tdm: {
        title: "Match à mort par équipe",
        description: "Sûrement le mode favoris des joueurs acidus, ici le but est le même : Détruire, tuer encore et encore jusqu'à la fin du round ! Votre score sera calculé en fonction de votre ratio joueurs tués et morts."
      },
      tsvr: {
        title: "Survivor en équipe",
        description: "Vous êtes accompagné de votre équipe contre vos adversaires. Seulement cette fois-ci, lorsque qu'un joueur meurt, il ré-apparait au round suivant. Il n'en restera qu'un !"
      }
    },
    weapon: {
      title: "Un système d'arme <strong>badass</strong>",
      description: {
        first: "⤷ <strong>Creez vos armes</strong> et <strong>customisez-les de a à z</strong> avec plus d'une <em>dizaine</em> de paramètres!",
        second: "⤷ Vous avez le choix parmis <strong>six catégories d'armes</strong> dont l'incroyable <strong>arme <u>moteur</u></strong> !"
      },
      subtitle: "<strong>Quel genre de dégénéré êtes-vous ?</strong>",
      bomb: {
        title: "Bombe",
        description: "Une envie de décimer une flotte entre ? <br>En optimisant ses paramètres, vous pourrez frapper au coeur de la base ennemie !"
      },
      bullet: {
        title: "Balle",
        description: "L'expression feu nourris prend tout son sens avec ces armes !<br> Sniper ou simple mitraillette seront vos alliés dans la victoire."
      },
      engine: {
        title: "Moteur",
        description: "Les moteurs sont vos anges gardiens !<br> Ils vous permettent d'absorber des dégats, régénerer de la vie ou même vous donner de la vitesse."
      },
      rocket: {
        title: "Rocket",
        description: "Quoi de mieux qu'un missile pour disperser votre adversaire dans l'espace ? <br>Là où vous l'enverrez, elle explosera !"
      },
      turret: {
        title: "Tourelle",
        description: "Les tourelles sont redoubtable !<br>Elle cible et verrouille vos ennemis afin de les pulvériser dès qu'ils entre dans leurs champs d'action !"
      },
      zone: {
        title: "Zone",
        description: " Zone"
      }
    },
    newsletter: {
      title: "RESTEZ CONNECTÉ #VOIDCLASHGAME"
    },
    footer: {
      lm : "Mentions Légales",
      pp: "Confidentialité"
    }
  });

  $translateProvider.preferredLanguage('en');
});
