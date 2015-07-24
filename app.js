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
      game: "The Game",
      support: "Faq",
      community: "Community",
      get: "<u>Try now!</u>",
      greenlight: "Greenlit us",
      doc: "doc"
    },
    headline: {
      greenlight: "We're now live on Steam Greenlight™ !<br>Please come to see us and give us some feedbacks :-)<br><a href='http://steamcommunity.com/sharedfiles/filedetails/?id=482273269'>check our page!</a>",
      competitive: "Try the beta <em>now</em>!<br> Get it on <a href='http://get.voidclash.com'>http://get.voidclash.com</a>",
      user_friendly: "A full featured and simple <strong>user-friendly</strong> interface",
      guns: "A <strong>badass</strong>, gun system !"
    },
    news: {
      title: "<strong>Discover</strong> the game"
    },
    concept: {
      title: "<strong>game</strong> overview",
      description: "Void Clash is a fast-paced, online and competitive arena shooter. Pilot a ship in top down view and overcome your enemies in explosives arena fights.<br>Void Clash allows you to fully customize your game. You can modify the game physics, create your own weapons and maps... play the way you want!",
      gameplay: {
        title: "An innovative gameplay",
        description: "Highly focused on your skill and teamwork, the gameplay will bring you into intense fights in arenas. Managing your inertia, <br>energy and anticipating your enemy's moves will be the key to victory."
      },
      guns: {
        title: "A badass weapon system",
        description: "The game allows you to choose between five weapon categories entirely customizable using more than ten parameters: You can modify the impact damage, the range, the energy cost and more !"
      },
      team: {
        title: "Work with your teammates",
        description: "The teamplay is as important as your skill when you take part in a team battle.<br>Your team and yourself need to define and adapt the optimal strategies to defeat the opponent's team."
      },
      mods: {
        title: "Which game mode ?",
        description: "Are you are a flag stealer, or a serial shooter ?<br>No problem, you can find what is the best for you among six available game modes!"
      },
      matchmaking: {
        title: "Use matchmaking, or not!",
        description: "Competitor or simply casual gamer, you will be able to find the type of game you want: <br>Arcade games for fun or Ranked matches for seasoned players."
      },
      user_friendly: {
        title: "Improve the game",
        description: "Feel free to be a part of the community development by creating and sharing your own maps and weapons."
      }
    },
    modes: {
      title: "<strong>flag stealer</strong> or a serial shooter ?",
      description: "Ruler of the galaxy, Killer or Flag stealer, you can choose which mode is your favorite.<br>Paired to all those modes, you can enable the Horde mode to make the game funnier (and harder) !",
      ctf: {
        title: "Capture The Flag",
        description: "You are fighting in the arena with your team. Your target is to steal and bring back the opponent's flag to your base!"
      },
      ffa: {
        title: "Free For All",
        description: "In the arena, your are alone against everyone. Kill a maximum amount of players and protect yourself from enemies' attacks ! The more enemies you kill, the best your score is."
      },
      horde: {
        title: "Horde",
        description: "Like in the FFA mode, you are alone except this time, tones of spacecrafts are comming by wave to erradicate your life ! When you die in this mod, your respawn will be the next round. <strong>You can active this mod in every others mod !</strong>"
      },
      koth: {
        title: "King Of The Hill",
        description: "Everyone is fighting to control a specific area and to keep it safe from opponents. The longer you control the areas, the best your score is."
      },
      svr: {
        title: "Survivor",
        description: "Be the last fighter in the arena!"
      },
      tdm: {
        title: "Team Deathmatch",
        description: "With the help of your teammates, destroy the enemy's fleet!"
      },
      tsvr: {
        title: "Team Survivor",
        description: "Be the last team fighting in the arena!"
      }
    },
    weapon: {
      title: "<strong>The badass</strong> weapon system",
      description: {
        first: "⤷ <strong>Create your own weapons</strong> and <strong>totally customize them</strong> with more than <em>ten parameters</em> !",
        second: "⤷ Choose between <strong>five weapon categories</strong> including the totally <strong>crazy <u>Gravity</u> weapon</strong> !"
      },
      subtitle: "<strong>Which kind of killer are you ?</strong>",
      bomb: {
        title: "Bomb",
        description: "Someone who wants to destroy an entire fleet ? <br>Manage the detonation to strike the other team."
      },
      bullet: {
        title: "Bullet",
        description: "It represents all kind of weapons you can use to harass your enemy.<br>A machine gun or a sniper can be your friend to win."
      },
      gravity: {
        title: "Gravity Field",
        description: "Gravity Fields are big issues for your opponents ! They can change the laws of physics, deal damages and drain the energy."
      },
      shield: {
        title: "Shield",
        description: "Shields are your guardian angels !<br> They allow you to absorb enemy shots, fix your hull and give you speed boosts."
      },
      turret: {
        title: "Turret",
        description: "Turrets are dreadful for your enemy !<br>It locks your enemy's position to shoot accurately."
      }
    },
    newsletter: {
      title: "STAY TUNED #VOIDCLASH"
    },
    footer: {
      lm : "Legal Mentions",
      pp: "Privacy Policy"
    },
    faq: {
      title: "Even a <strong>space gangster</strong> may need help !",
      basics: {
        title: "Basics",
        n1: {
          question: "What is Void Clash ?",
          description: "Void Clash is a fast-paced, online and competitive top down arena shooter. It brings you an innovative gameplay mixing several concepts from the video gameís world. Controlling a spacecraft, you have to defeat your enemies during incredible arena fights. Void Clash is also giving you a fully customizable game ! <br><br>Void Clash is released on the Steam Greenlight™ platform. You can reach the page by following the link: <a href='http://bit.ly/1I4UdSB'>http://bit.ly/1I4UdSB</a>"
        },
        n2: {
          question: "Void Clash's beta is available ?",
          description: "Yes, VoidClash's beta is now available for <strong>Windows</strong> and <strong>Linux</strong> platform. <br>You can try the beta for free by following the link: <a href='http://get.voidclash.com'>http://get.voidclash.com/</a> "
        },
        n3: {
          question: "How does Steam Greenlight&#8482; work ?",
          description: "Steam Greenlight™ is a platform is a platform that allows active Steam users to vote on indie titles they wish to see showcased on the store. Once submitted, thousands of users will view and possibly vote or comment on the game."
        },
        n4: {
          question: "How can I help Void Clash getting greenlit ?",
          description: "If you like our work, you can help us in various ways: <br> - First, you can vote for Void Clash on Greenlight™ <br> - You can also bring us some feedbacks about the game <br> - Finally, you can share it to your friends"
        },
        n5: {
          question: "Which are the minimal requirements to play ?",
          description: "answer"
        },
        n6: {
          question: "How can I install Void Clash on my computer ?",
          description: "Once you get Void Clash from our download platform, depending on your operating system, you can process the following procedure : <br><br>On Windows, go into your download folder or where you put the downloaded Void Clash installer. Then execute 'Install Void Clash.msi' and follow the setup instructions."
        },
        n7: {
          question: "Which are the Void Clash game's components ?",
          description: "Void Clash is composed of 4 elements: <br><br> - The launcher <br> - The game client <br> - The map editor <br> - The sharing platform"
        },
        n8: {
          question: "How can I unistall Void Clash on my computer ?",
          description: "Depending on your operating system, you can process the following procedure : <br><br> - On windows, Go into '<strong>C:</strong> > <strong>Program Files</strong> > <strong>Void Clash</strong>'. Then execute 'Unistall.exe' and follow the instructions. <br> Or you can open your <strong>Control Panel</strong>, then go into <strong>Program & Functionnality</strong> and finnaly right click on Void Clash and select '<strong>Unistall</strong>'. "
        }
      },

      launcher: {
        title: "The Launcher",
        n1: {
          question: "What is the Launcher ?",
          description: "The Launcher is the central point of the Void Clash game. It allows you to execute many operations such as find a server, launch a ranked game, set up your game preferences and more."
        },
        n2: {
          question: "How to find a server ?",
          description: "Void Clash allows you to quickly find a server to join a custom game. You simply have to click on the server list icon to open the server list. Now you can browse the list and choose a server to connect on. Filters are available in order to simplify your research."
        },
        n3: {
          question: "The MatchMaking system",
          description: "answer"
        },
        n4: {
          question: "How can I select my game settings ?",
          description: "To change your game settings, click on the settings icon. You should find all the options you want to set up."
        },
        n5: {
          question: "How to start a matchmaking game session ?",
          description: "To start a ranked game, click on the main fight icon. It will find opponents that have the same level."
        },
        n6: {
          question: "How start an offline game session ?",
          description: "answer"
        }
      },

      game: {
        title: "The Game",
        n1: {
          question: "How to play ?",
          description: "In order to drive your spacecraft, by default you can use the keyboard key Z, Q, S D. Of course it depends on your settings and your keyboard. To shoot, use the left and right click of your mouse."
        },
        n2: {
          question: "How to select a weapon ?",
          description: "To select or change a weapon, press ESC to open the game menu. Then select the Weapon menu and choose between the main and the secondary weapon. You can also press the 'B' key to open the weapon selection menu."
        },
        n3: {
          question: "How create and edit a new weapon ?",
          description: "All weapons informations are available in the documentation: <a href='http://www.voidclash.com/documentation/#weapon'>http://www.voidclash.com/documentation/</a>."
        },
        n4: {
          question: "How to change the server map ?",
          description: "Before changing a map, you have to authenticate yourself using the command : <br><strong>/auth <em>serverpassword</em></strong> <br><br>Then press ESC and select the Server Administration menu. You should see the change map button."
        },
        n5: {
          question: "How to change the server game mode ?",
          description: "Before changing a game mode, you have to authenticate yourself with the server using the command : <br><strong>/auth <em>serverpassword</em></strong> <br><br>Then press ESC and select the Server Administration menu. You should see the change mode button."
        }
      },

      mapeditor: {
        title: "The Map Editor",
        n1: {
          question: "How to start the map editor ?",
          description: "You can start the map editor from the launcher by clicking on its icon."
        },
        n2: {
          question: "How to create a new map ?",
          description: "To create a new map, click on the create icon in the topbar."
        },
        n3: {
          question: "How to edit an existing map ?",
          description: "To edit a map, click on the open icon and select the map."
        },
        n4: {
          question: "Map editor's functions",
          description: "answer"
        },
        n5: {
          question: "How to live testing a map ?",
          description: "answer"
        },
        n6: {
          question: "How to save a map ?",
          description: "To save a map, click on the save icon in the topbar. You can chose to save the map with a new name."
        }
      },

      hostserver: {
        title: "Host a server",
        n1: {
          question: "How to install a server ?",
          description: "answer"
        },
        n2: {
          question: "Basics features",
          description: "answer"
        },
        n3: {
          question: "How to tweak parameters ?",
          description: "answer"
        },
        n4: {
          question: "How to add new weapon on the server ?",
          description: "answer"
        },
        n5: {
          question: "My server is online but I can't connect to it",
          description: "<strong>Warning</strong>: Ports are often closed on a router to help prevent unauthorized access to your home network. Opening any additional ports on your router may decrease the overall security of your network. <br><br><strong>Note:</strong>In some situations it may be a firewall on your computer or router that is blocking access. Try temporarily disabling your firewall to make sure this is not the cause of your problems. <br><br><ol><li>To use port forwarding first determine the local IP address of the computer.</li><li>Open your router configuration.</li><li>Once in the router configuration locate the port forwarding settings, often in a section such as Applications & Gaming or Port forwarding.</li></ol><br>In single port forwarding you have different fields that need to be completed. Enter the Externet Port and Internet Port enter the port you want to open in both of these fields, so here it is <strong>13747</strong>. Next is the Protocol, which is <strong>UDP</strong>. Next is the To IP address, which is the <strong>IP address</strong> of the computer or networking device this port is being forwarded to on the network. Finally, once all these values have been configured check the Enabled box and click the Save Changes button"
        }
      },

      sharingplatform: {
        title: "Sharing Plarform",
        n1: {
          question: "What is the Sharing Platform ?",
          description: "answer"
        },
        n2: {
          question: "How works the Steam&#8482; authentification ?",
          description: "answer"
        },
        n3: {
          question: "Login & Logout",
          description: "answer"
        },
        n4: {
          question: "How can I share my configuration file ?",
          description: "answer"
        },
        n5: {
          question: "How can I share a new map ?",
          description: "answer"
        },
        n6: {
          question: "How can I rate existing maps and/or configuration files ?",
          description: "answer"
        }
      }
    }
  });

$translateProvider.translations('fr', {
  lang: {
    fr: "fr",
    en: "en",
  },
  nav: {
    game: "Le jeu",
    support: "Faq",
    community: "Communauté",
    get: "<u>Essayez la beta!</u>",
    greenlight: "Greenlight",
    doc: "doc"
  },
  headline: {
    greenlight: "On est maintenant sur Steam Greenlight™ ! <br>Venez nous apporter votre avis sur le jeu :-)",
    competitive: "Un shoot'em up complètement <br><strong>fou</strong>, <strong>en ligne</strong> et <strong>compétitif</strong>.",
    user_friendly: "Une interface complète et <strong>intuitive</strong>.",
    guns: "Découvrez le système d'arme totallement <strong>badass</strong> !",
  },
  news: {
    title: "<strong>Découvrez</strong> le jeu"
  },
  concept: {
    title: "<strong>Aperçu</strong> du jeu",
    description: "Void Clash est un arena shooter en ligne, nerveux et compétitif. Il apporte un mélange innovant de différents concept du jeu vidéo. En contrôlant un vaisseau vu de dessus, combattez vos ennemis dans des arènes aux bataille explosives.<br>Void Clash vous propose également la possibilité de personnaliser totalement votre jeu ! Les joueurs peuvent créer leurs propres arènes et configurer la maniabilité du vaisseau ainsi que ses armes. Le jeu vous offre une progression interessante et motivante à travers un univers compétitif et communautaire !",
    gameplay: {
      title: "Un gameplay innovant",
      description: "Très concentré sur le skill individuel et le travail d'équipe, le gameplay de Void Clash vous imerge dans d'intenses batailles où gérer vos déplacement, votre énergie et la stratégie adverse définiront l'issue du combat !"
    },
    guns: {
      title: "Une infinité d'armes",
      description: "Le jeu vous permet de choisir entre cinq catégories d'armes entièrement personnalisables. Paramétrez les effets d'impact, la portée, le coût en énérgie et beaucoup plus ! Ou choisissez de jouer avec une configuration équilibrée par la communauté."
    },
    team: {
      title: "Travaillez en équipe",
      description: "Le jeu en équipe est aussi important que votre skill lorsque vous prenez part à la bataille.<br>Votre équipe et vous même devez définir et adapter la stratégie optimale pour battre l'équipe adverse."
    },
    mods: {
      title: "Quel mode de jeu ?",
      description: "Êtes-vous un voleur de drapeau, ou un serial shooter ?<br> Retrouvez votre style de jeu préféré à travers les six modes disponible."
    },
    matchmaking: {
      title: "Le matchmaking",
      description: "Compétiteur ou simple joueur occasionnel, Choisissez le type de partie qui vous corresponds : <br>Partie rapide pour le fun ou Partie classée pour les joueurs chevronnés."
    },
    user_friendly: {
      title: "Améliorez Void Clash !",
      description: "Devenez membre à part entière de la communauté en proposant vos propres cartes et vos propres configurations d'armes !"
    }
  },
  modes: {
    title: "<strong>Voleur</strong> ou <strong>serial killer</strong> ?",
    description: "Maître de la galaxie, Tueur ou Voleur de drapeau, vous pourrez choisir quel mode est votre favoris. En plus de ces modes, vous pourrez à tout moment activer la horde pour rendre le jeu plus fun (et surtout plus difficile) !",
    ctf: {
      title: "Capture de drapeau",
      description: "Battez-vous dans une arène avec votre équipe. Votre but est de voler et rapporter le drapeau ennemi dans votre base. Organisez votre équipe pour organiser le votre !"
    },
    ffa: {
      title: "Chacun pour soi",
      description: "Vous êtes seul contre tous. Votre objectif est d'éliminer le maximum de vos adversaires tout en évitant de se faire tuer ! Plus vous tuez d'ennemis, meilleur sera votre score."
    },
    horde: {
      title: "Horde",
      description: "Similaire au mode libre, vous êtes seul contre tous. Seulement cette fois-ci, des hordes de vaisseaux arrivent pour tenter de vous réduire à néant. Attention si vous mourrez, vous ré-apparaitrez au prochain round. <strong>Vous pouvez activer le mode horde dans n'importe quel autre type de partie !</strong>"
    },
    koth: {
      title: "Roi de la colline",
      description: "Conquérissez avec votre équipe les différentes zones de captures disposées dans l'arène. L'équipe qui tient ces zones le plus longtemps remporte la partie !"
    },
    svr: {
      title: "Survivor",
      description: "Soyez le dernier survivant de la bataille !"
    },
    tdm: {
      title: "Match à mort par équipe",
      description: "Avec l'aide de votre équipe, faites le plus de victime dans le temps imparti !"
    },
    tsvr: {
      title: "Survivor en équipe",
      description: "Soyez la dernière équipe en lice dans la bataille !"
    }
  },
  weapon: {
    title: "Un système d'armes <strong>badass</strong>",
    description: {
      first: "⤷ <strong>Creez vos armes</strong> et <strong>customisez-les de a à z</strong> avec plus d'une <em>dizaine</em> de paramètres configurables !",
      second: "⤷ Vous avez le choix parmis <strong>cinq catégories d'armes</strong> dont les incroyables <strong>zones de <u>gravité</u></strong> !"
    },
    subtitle: "<strong>Quel genre de dégénéré êtes-vous ?</strong>",
    bomb: {
      title: "Bombe",
      description: "Une envie de décimer une flotte entière ? <br>En calculant bien votre coup, faites un strike dans les rangs ennemis !"
    },
    bullet: {
      title: "Bullet",
      description: "Harrassez vos ennemis ou détruisez les en un seul coup: Sniper ou simple mitraillette seront vos alliés dans la victoire."
    },
    gravity: {
      title: "Champs de gravité",
      description: "Les champs de gravité sont des zones dangeureuses pour vos enemmis ! Ils jouent avec la physique, cause des dommages et draine l'energie."
    },
    shield: {
      title: "Shield",
      description: "Les boucliers sont vos anges gardiens !<br> Ils vous permettent d'absorber des dégats, régénerer de la vie ou même vous de donner un court bonus de vitesse."
    },
    turret: {
      title: "Tourelle",
      description: "Les tourelles sont redoubtables !<br>Elleq ciblent et verrouillent vos ennemis afin de les pulvériser dès qu'ils entrent dans leurs champs d'action !"
    }
  },
  newsletter: {
    title: "RESTEZ CONNECTÉ #VOIDCLASH"
  },
  footer: {
    lm : "Mentions Légales",
    pp: "Confidentialité"
  },
  faq: {
    title: "Même un <strong>bandit de l'espace</strong> peut avoir besoin d'aide !",
    basics: {
      title: "Les Bases",
      n1: {
        question: "Qu'est ce que Void Clash ?",
        description: "réponse"
      }
    }
  }
});

$translateProvider.preferredLanguage('en');
});
