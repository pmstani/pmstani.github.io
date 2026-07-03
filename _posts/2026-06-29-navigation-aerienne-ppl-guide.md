---
layout: post
title: "Navigation aérienne pour le PPL : cap, dérive et log de navigation"
description: "Route et cap, déclinaison magnétique, triangle des vitesses, dérive, log de navigation, carte OACI 1:500 000 et cartes VAC : le guide de la navigation au PPL."
date: 2026-06-29
categories: [education]
tags: [ppl, dgac, easa, navigation, cap-derive, log-de-navigation, carte-oaci]
silo: education
pillar: education
related_apps: [ppl, calcular, save-as-pdf, local-weather-yawa, my-agenda-planning]
---

# Navigation aérienne pour le PPL : cap, dérive et log de navigation

La navigation est, pour beaucoup de candidats au PPL(A), la matière la plus intimidante — et pourtant la plus gratifiante une fois maîtrisée. Elle a quelque chose de concret que la réglementation n'a pas : à la fin, on trace un trait sur une carte, on remplit un tableau, et l'avion arrive effectivement là où on l'a prévu. La navigation aérienne, c'est l'art de **savoir où l'on est, où l'on va, et combien de temps et de carburant il faudra pour y arriver**, en composant avec un adversaire invisible et constant : le vent.

Au niveau du PPL, la navigation reste avant tout une navigation **à l'estime (dead reckoning)** et **à vue**, appuyée sur des repères sol et sur des calculs simples que l'on peut réaliser au sol pendant la préparation, puis vérifier en vol. Le GPS existe et rend d'immenses services, mais il vient **en complément** d'une méthode que tout pilote privé doit posséder de manière autonome. C'est cette méthode que l'examen théorique évalue, et c'est elle que ce guide déroule pas à pas.

Pour transformer ces principes en réflexes, l'application [PPL Théorique](/apps/ppl/) propose des cours dédiés à la navigation et des QCM couvrant chaque notion, avec une explication par question. Voyons d'abord la logique d'ensemble, puis chaque brique de calcul.

## Route et cap : la différence fondamentale

La première source de confusion, en navigation, tient à une distinction que l'on ne peut pas se permettre de mélanger : celle entre la **route** et le **cap**.

- La **route** est la trajectoire que l'avion suit **réellement par rapport au sol**, du point de départ vers la destination. C'est le trait que l'on tire sur la carte.
- Le **cap** est la direction vers laquelle **le nez de l'avion est pointé**.

En l'absence de vent, route et cap coïncident. Mais dès qu'il y a du vent de travers, l'avion « glisse » latéralement : pour suivre la route voulue, le pilote doit **pointer le nez légèrement dans le vent**. L'écart entre le cap et la route est la **dérive**. Toute la navigation consiste à calculer, avant le vol, le cap à tenir pour que la route effective corresponde à celle qu'on a tracée.

### Route vraie, route magnétique et déclinaison

À cette première distinction s'en ajoute une seconde, liée au **nord de référence**. Il existe deux nords :

- le **nord vrai (géographique)**, vers lequel pointent les méridiens de la carte ;
- le **nord magnétique**, vers lequel pointe la boussole de l'avion.

L'angle entre les deux s'appelle la **déclinaison magnétique** (ou variation). Elle varie selon le lieu et évolue lentement dans le temps. Comme on trace la route par rapport au nord vrai de la carte, mais qu'on pilote au compas par rapport au nord magnétique, il faut **convertir** :

- **route vraie** → on applique la **déclinaison** → **route magnétique** ;
- **route magnétique** → on applique la **dérive** due au vent → **cap magnétique** à tenir.

Cette chaîne de conversions est au cœur de la navigation au PPL. En comprendre le sens — et non la réciter mécaniquement — évite les erreurs de signe qui envoient l'avion du mauvais côté. La déclinaison figure sur la **carte OACI 1:500 000** et dans les publications officielles ; reportez-vous aux cartes SIA en vigueur pour la valeur applicable à votre région.

## Le triangle des vitesses (triangle des vents)

Le vent agit sur l'avion comme un courant sur un nageur : il déplace l'ensemble sans que le pilote ne le « sente » directement. Pour en tenir compte, la navigation utilise un modèle géométrique élégant : le **triangle des vitesses**, souvent appelé **triangle des vents**.

Ce triangle relie trois vecteurs :

- le **vecteur vent** : direction d'où vient le vent et sa force ;
- le **vecteur air** : le cap et la **vitesse propre (TAS)** de l'avion dans la masse d'air ;
- le **vecteur sol** : la route effective et la **vitesse sol (GS)**, c'est-à-dire le déplacement réel par rapport au sol.

Résoudre le triangle des vitesses, c'est trouver deux inconnues à partir des données connues : typiquement, connaissant la route désirée, la vitesse propre et le vent, on cherche le **cap à tenir** et la **vitesse sol**. Ce calcul se fait traditionnellement avec un **calculateur de navigation circulaire** (le « E6B » et ses équivalents), un ordinateur mécanique que tout candidat apprend à manipuler, ou par estimation mentale pour les corrections rapides en vol.

### Dérive et vitesse sol

Deux résultats sortent de ce triangle et gouvernent tout le vol :

- la **dérive** : l'angle de correction à appliquer au cap pour compenser le vent de travers. Un vent venant de la gauche pousse l'avion vers la droite, donc on corrige en pointant le nez à gauche, et inversement.
- la **vitesse sol (GS)** : elle détermine le **temps de parcours** de chaque branche. Vent de face, la vitesse sol chute et le vol s'allonge ; vent arrière, elle augmente. C'est la vitesse sol, et non la vitesse indiquée, qui commande les estimées et la consommation de carburant sur la distance.

Le vent étant la variable clé de tous ces calculs, sa prévision fait partie intégrante de la préparation. Une application météo grand public comme [Local Weather YaWa](/apps/local-weather-yawa/) donne une première idée des conditions de vent au sol et de leur évolution, en complément des sources aéronautiques officielles (Météo-France, dossiers de vol) qui restent la référence pour la préparation réelle d'un vol. La météo appliquée au PPL est développée dans le guide [Météorologie aéronautique pour le PPL](/blog/education/meteorologie-aeronautique-ppl-guide/).

## Construire un log de navigation

Toute cette théorie se matérialise dans un document unique : le **log de navigation** (ou journal de navigation). C'est le tableau que le pilote prépare au sol et remplit en vol, branche par branche. Un log bien construit contient, pour chaque segment de la route :

- le **repère de départ et d'arrivée** de la branche (points tournants, aérodromes, repères remarquables) ;
- la **route** et le **cap** à tenir ;
- la **distance** de la branche ;
- la **vitesse sol** estimée compte tenu du vent ;
- le **temps de vol** prévu pour la branche ;
- l'**heure estimée d'arrivée (estimée)** au point suivant ;
- la **consommation de carburant** cumulée et le **carburant restant**.

En vol, le pilote **compare** ce qu'il avait prévu à ce qu'il observe : il passe le point tournant à l'heure estimée ou non, il reconnaît ses repères sol ou non. Chaque écart est une information qui permet d'ajuster la suite. C'est le principe de la navigation à l'estime : on part d'une hypothèse calculée, puis on la corrige avec les faits.

### Estimées et repères sol

Les **estimées** sont le cœur battant du log. Une estimée est l'heure à laquelle on prévoit de passer un point donné. La comparer à l'heure réelle de passage permet de détecter immédiatement une dérive de temps — un vent plus fort que prévu, par exemple — et de recalculer les points suivants.

Les **repères sol** sont les points remarquables (villes, cours d'eau, voies ferrées, reliefs, aérodromes) qui jalonnent la route et permettent de **confirmer visuellement** sa position. Bien choisir ses repères à la préparation — des repères francs, non ambigus, espacés régulièrement — fait la différence entre une navigation sereine et une navigation où l'on « se cherche ». Cette lecture de la carte rejoint directement la [réglementation des espaces aériens](/blog/education/reglementation-aerienne-espaces-aeriens-ppl/), puisque les repères choisis doivent tenir compte des zones traversées et de leur statut.

### L'estime (dead reckoning)

La navigation **à l'estime**, ou *dead reckoning*, est la méthode fondamentale : à partir d'un point connu, d'un cap, d'une vitesse sol et d'un temps écoulé, on **déduit** sa position sans aucune aide extérieure. C'est la compétence de base du pilote VFR, celle qui reste disponible quand tout le reste fait défaut. Le GPS la confirme, la carte la vérifie, mais c'est l'estime qui la fonde. Un examen QCM comme celui du PPL teste précisément la capacité à raisonner sur ces relations distance-temps-vitesse.

## Carte OACI 1:500 000 et cartes VAC

La navigation VFR au PPL s'appuie sur deux documents cartographiques complémentaires, tous deux publiés par les organismes officiels français.

- La **carte OACI 1:500 000** est la carte de navigation à vue de référence. À cette échelle, un centimètre représente cinq kilomètres. Elle figure les reliefs, les espaces aériens, les zones à statut particulier, les aérodromes, les fréquences et une multitude de repères. C'est sur elle que l'on trace la route et que l'on prépare le log.
- Les **cartes VAC (Visual Approach Chart)**, publiées par le **SIA**, sont propres à chaque aérodrome. Elles détaillent les circuits de piste, les points de report, les fréquences, les consignes particulières et l'environnement immédiat du terrain.

Savoir passer de l'une à l'autre — planifier la route sur la carte OACI, préparer l'arrivée sur la carte VAC de destination — est une compétence pratique essentielle. Constituer à l'avance le dossier des cartes VAC des aérodromes de départ, de destination et de déroutement fait partie d'une bonne préparation. L'application [Save as PDF](/apps/save-as-pdf/) permet d'enregistrer proprement ces cartes VAC et les pages d'AIP consultées sur le site du SIA, pour les consulter **hors connexion** pendant la préparation, sans dépendre du réseau. Reportez-vous toujours aux cartes SIA en vigueur, car elles sont mises à jour régulièrement.

## Calcul du carburant et de l'autonomie

Une navigation n'est complète que si elle intègre la question la plus vitale : **aurai-je assez de carburant ?** Le calcul repose sur quelques éléments enchaînés :

- la **consommation horaire** de l'avion, dans les conditions de vol prévues ;
- le **temps de vol total**, somme des temps de branche issus du log (donc dépendant de la vitesse sol, donc du vent) ;
- les **réserves réglementaires** et de sécurité, qui s'ajoutent au carburant strictement nécessaire au trajet ;
- une **marge** pour les imprévus : attente, déroutement, vent défavorable.

L'erreur classique consiste à calculer le carburant sur la seule distance sans tenir compte du vent : avec un fort vent de face, le temps de vol s'allonge et la consommation grimpe. C'est encore la **vitesse sol** qui commande. Ces calculs mêlent conversions d'unités et petites opérations qu'il vaut mieux ne pas faire de tête sous pression : une application de calcul comme [Calcular](/apps/calcular/) sécurise les conversions (litres, gallons, temps, distances) et les vérifications rapides pendant la préparation, ce qui réduit le risque d'erreur d'étourderie — un atout aussi bien pour l'entraînement aux QCM que pour la vraie préparation de vol.

## Unités et place du GPS

La navigation aéronautique manie des **unités spécifiques** qu'il faut manipuler couramment :

- les distances en **milles nautiques (NM)** ;
- les vitesses en **nœuds (kt)**, soit des milles nautiques par heure ;
- les altitudes et hauteurs en **pieds (ft)**.

Passer d'une unité à l'autre sans hésiter fait partie du bagage de base. Quant au **GPS**, il occupe aujourd'hui une place importante dans les cockpits, mais la réglementation et la pédagogie du PPL le situent clairement comme un **complément**, non comme un substitut. Le pilote privé doit rester capable de naviguer à l'estime et à la carte, GPS éteint. En pratique, on prépare la navigation « à l'ancienne » avec log et carte, et l'on utilise le GPS pour **confirmer** sa position et **alléger la charge de travail** — jamais pour remplacer la vigilance et le raisonnement.

## Réviser la navigation avec PPL Théorique

La navigation se révise idéalement en **deux temps** : d'abord comprendre chaque relation (route/cap, triangle des vents, distance/temps/vitesse, carburant), puis s'entraîner à répondre vite et juste à des questions qui combinent ces relations. C'est précisément ce que propose [PPL Théorique](/apps/ppl/) :

- des **cours structurés** dédiés à la navigation, parmi les 85 cours originaux, avec recherche, glossaire et marque-pages ;
- des **QCM originaux** couvrant cap, dérive, vitesse sol, log, carburant et unités, parmi les 579 de la banque, **chacun avec une explication** ;
- un **mode entraînement par matière** pour cibler la navigation ;
- un **examen blanc au format DGAC** appliquant la règle des **75 % par matière** ;
- une **révision espacée** et un **mode erreurs** qui reprogramment vos points faibles.

Le tout **100 % hors-ligne**, en **achat unique à vie**, sans abonnement ni publicité, sur iPhone et iPad, avec un tableau de bord « êtes-vous prêt ? » pour suivre votre progression. Pour organiser vos sessions de révision dans le temps, une application d'agenda comme [My Agenda Planning](/apps/my-agenda-planning/) aide à réserver des créneaux réguliers — la régularité étant, en navigation plus qu'ailleurs, la clé de la maîtrise.

{% include blog-cta.html app_slug="ppl" %}

## Pour aller plus loin

La navigation dialogue avec toutes les autres matières du programme :

- pour situer la navigation parmi les neuf matières, consultez le [programme théorique du PPL et les 9 matières EASA](/blog/education/programme-theorique-ppl-9-matieres-easa/) ;
- pour comprendre le vent qui gouverne la dérive, lisez le guide de [météorologie aéronautique pour le PPL](/blog/education/meteorologie-aeronautique-ppl-guide/) ;
- pour intégrer le statut des espaces traversés dans le tracé de route, voyez [réglementation aérienne et espaces aériens pour le PPL](/blog/education/reglementation-aerienne-espaces-aeriens-ppl/) ;
- pour choisir vos outils de préparation, l'article pilier [Meilleures applications pour préparer le PPL théorique](/blog/education/meilleures-applications-ppl-theorique-avion-2026/) fait la synthèse.

Les candidats venus de la plaisance pourront aussi noter que la logique de préparation méthodique se retrouve dans d'autres examens à QCM : les articles [Meilleures applications pour préparer le CRR Maritime](/blog/education/meilleures-applications-crr-vhf-marine-2026/) et [Réviser le CRR avec la répétition espacée (système Leitner)](/blog/education/repetition-espacee-leitner-reviser-crr/) illustrent la même approche appliquée à la radio marine.

## Foire aux questions

### Quelle est la différence entre la route et le cap ?

La **route** est la trajectoire réellement suivie par rapport au sol, celle qu'on trace sur la carte. Le **cap** est la direction vers laquelle pointe le nez de l'avion. Le vent de travers crée un écart entre les deux, la **dérive** : pour tenir la route voulue, on pointe le nez légèrement dans le vent. Sans vent, route et cap coïncident.

### Qu'est-ce que la déclinaison magnétique et pourquoi la corriger ?

La **déclinaison magnétique** est l'angle entre le nord vrai (celui de la carte) et le nord magnétique (celui de la boussole). Comme on trace la route par rapport au nord vrai mais qu'on pilote au compas, il faut convertir la route vraie en route magnétique en appliquant la déclinaison. Sa valeur figure sur la carte OACI 1:500 000 et dans les publications SIA en vigueur.

### À quoi sert le triangle des vitesses ?

Le **triangle des vitesses**, ou triangle des vents, relie le vecteur vent, le vecteur air (cap et vitesse propre) et le vecteur sol (route et vitesse sol). Le résoudre permet de trouver le **cap à tenir** et la **vitesse sol** à partir de la route désirée, de la vitesse propre et du vent. Il se calcule avec un calculateur de navigation circulaire ou par estimation mentale en vol.

### Pourquoi la vitesse sol est-elle si importante ?

Parce que c'est elle, et non la vitesse indiquée, qui détermine le **temps de parcours** de chaque branche, donc les **estimées** et la **consommation de carburant** sur la distance. Un vent de face réduit la vitesse sol et allonge le vol ; un vent arrière l'augmente. Ignorer le vent dans le calcul du carburant est une erreur classique et potentiellement dangereuse.

### Le GPS peut-il remplacer la navigation à l'estime ?

Non. Au PPL, le GPS est un **complément** : il confirme la position et allège la charge de travail, mais le pilote privé doit rester capable de naviguer **à l'estime et à la carte**, GPS éteint. On prépare la navigation avec un log et la carte OACI, puis on utilise le GPS pour vérifier, jamais pour se dispenser du raisonnement.

### Quelles unités faut-il maîtriser en navigation ?

Les **milles nautiques (NM)** pour les distances, les **nœuds (kt)** pour les vitesses et les **pieds (ft)** pour les altitudes et hauteurs. Savoir convertir rapidement entre ces unités, et avec les unités métriques usuelles, fait partie des compétences de base testées à l'examen. Une application de calcul peut sécuriser ces conversions pendant la préparation.

### Comment réviser efficacement la navigation pour l'examen théorique ?

En comprenant d'abord chaque relation (route/cap, triangle des vents, distance-temps-vitesse, carburant), puis en s'entraînant à des QCM qui les combinent. [PPL Théorique](/apps/ppl/) réunit cours, QCM expliqués, entraînement par matière, examen blanc au format DGAC et révision espacée, le tout hors-ligne, pour ancrer durablement ces automatismes.
