---
layout: post
title: "Canaux VHF marine : guide complet des fréquences pour la plaisance"
description: "Guide complet du plan de canaux VHF marine 2026 : canal 16, canal 70 ASN, canaux inter-ships, canaux portuaires, simplex et duplex, splits internationaux. Indispensable pour le CRR et la pratique en mer."
date: 2026-04-19
categories: [education]
tags: [canaux-vhf, vhf-marine, frequences, canal-16, canal-70, crr, simplex, duplex, plaisance]
silo: education
pillar: education
related_apps: [crr, save-as-pdf, local-weather-yawa, the-done-list]
---

# Canaux VHF marine : guide complet des fréquences pour la plaisance

Le plan de canaux **VHF marine** (156-162 MHz) est l'une des notions les plus denses du programme du **Certificat Restreint de Radiotéléphoniste (CRR)** — et l'une de celles qui offrent le plus de questions pièges. Le candidat doit non seulement connaître les canaux les plus emblématiques (16, 70, 6, 8, 13, 67, 72, 77), mais aussi distinguer **simplex et duplex**, comprendre les **splits internationaux** (différences entre plans US, international et canadien), et identifier les **usages interdits** sur certains canaux.

Pour le plaisancier en mer, ces connaissances ne sont pas théoriques : utiliser le mauvais canal pour un appel routine, parler sur le canal 70, ouvrir une conversation longue sur le canal 16, ou se tromper de canal sur une marina étrangère sont autant d'infractions courantes — et autant de sources de tension avec les autorités côtières et les autres usagers.

Ce guide passe en revue, de manière structurée, l'ensemble du plan de canaux VHF marine tel qu'il est utile à un titulaire du CRR exploitant une station de plaisance.

## Le contexte : la bande VHF marine

La bande VHF marine est définie par l'Union Internationale des Télécommunications (UIT) dans la **Recommandation UIT-R M.1084** et le **Règlement des Radiocommunications**. Elle s'étend de **156 MHz à 162 MHz**, avec un pas de 25 kHz entre les canaux. Cela donne théoriquement environ 240 canaux possibles, dont 56 sont attribués aux services maritimes mobiles dans le plan international.

Quelques caractéristiques essentielles :

- **Mode** : modulation de fréquence (FM)
- **Polarisation** : verticale
- **Portée typique** : 15 à 50 milles nautiques selon la propagation, l'antenne, l'altitude des antennes (un effet de courbure terrestre limite naturellement la portée VHF, environ équivalent à la portée optique).
- **Puissance maximale** : 25 watts pour une VHF fixe, 6 watts pour une VHF portable (souvent commutable à 1 watt pour économiser la batterie et éviter les brouillages à courte distance).

La VHF marine ne se propage pas en ondes ionosphériques (contrairement à la HF) : elle est essentiellement **« optique »**, c'est-à-dire dépendante de la ligne de visée entre antennes. C'est pour cela que les antennes VHF sont placées le plus haut possible (en tête de mât pour les voiliers, sur l'arceau ou le toit pour les bateaux à moteur).

Pour comprendre comment se positionne le CRR au sein du SMDSM : [ASN / DSC sur la VHF marine : guide complet pour le CRR](/blog/education/asn-dsc-guide-complet-vhf-marine/).

## Simplex vs duplex : la distinction fondamentale

Avant de lister les canaux, il faut maîtriser la distinction **simplex / duplex**, régulièrement testée à l'examen.

### Simplex

Un canal **simplex** utilise **une seule fréquence** pour l'émission et la réception. Conséquence : à un instant donné, **une seule station peut parler**, l'autre écoute. C'est la communication « à tour de rôle », d'où l'usage des termes de procédure (« À VOUS », « TERMINÉ »).

Tous les canaux d'inter-navires (ship-to-ship) sont **simplex**. Le canal 16 est **simplex**.

### Duplex

Un canal **duplex** utilise **deux fréquences distinctes** : une pour l'émission du navire (vers la côte) et une pour la réception (depuis la côte). Cela permet une communication simultanée dans les deux sens, comme une conversation téléphonique ordinaire.

Les canaux duplex sont historiquement utilisés pour les **liaisons avec les stations côtières publiques** (services de correspondance publique, désormais largement obsolètes en France suite à la fermeture du service par France Télécom). Ils ne sont pas utilisés pour les communications inter-navires, et un opérateur de plaisance ne les utilisera quasiment jamais en pratique.

Le manuel ANFR 2025 conserve néanmoins ces notions car le RR UIT en fait une distinction structurelle. Pour le CRR : sachez identifier qu'un canal est simplex (la grande majorité de ceux que vous utiliserez) ou duplex (rares, héritage des correspondances publiques).

### Semi-duplex

Un canal **semi-duplex** combine deux fréquences mais l'utilisateur ne parle qu'à tour de rôle (le matériel est duplex, l'usage opérationnel est simplex). C'est une nuance technique rarement testée.

## Les canaux universels à connaître absolument

### Canal 16 — détresse, urgence, sécurité, appel

- **Fréquence** : 156,800 MHz
- **Mode** : simplex
- **Usage** : détresse, urgence, sécurité, appel initial (en cours de remplacement par l'ASN sur le canal 70)
- **Veille** : obligatoire pour toutes les VHF marines en service

C'est **le** canal incontournable. Tout ce qui concerne MAYDAY, PAN-PAN, SÉCURITÉ passe par le canal 16. Pour le détail des procédures : [Procédures de détresse VHF : MAYDAY, PAN-PAN et SÉCURITÉ expliquées](/blog/education/procedures-detresse-vhf-mayday-pan-pan-securite/).

**Restrictions** : pas de conversation longue, pas de bavardage, pas de communication commerciale. Une fois le contact établi sur le canal 16, basculez immédiatement sur un canal de travail (inter-ships ou portuaire selon le contexte).

### Canal 70 — ASN exclusivement

- **Fréquence** : 156,525 MHz
- **Mode** : simplex (pour le data ASN)
- **Usage** : exclusivement Appel Sélectif Numérique (ASN/DSC)
- **Voix INTERDITE**

C'est l'autre canal critique. Le canal 70 est **exclusivement réservé** aux échanges numériques ASN. **Toute transmission vocale sur le canal 70 est interdite** par le RR UIT. Cette règle est régulièrement testée à l'examen : un piège classique consiste à proposer « le canal 70 est utilisé pour les appels de routine vocaux ». Réponse : **faux**, c'est exclusivement DSC.

Pour le détail : [ASN / DSC sur la VHF marine : guide complet pour le CRR](/blog/education/asn-dsc-guide-complet-vhf-marine/).

## Les canaux inter-navires (ship-to-ship)

Une fois le contact établi, vous basculez sur un canal inter-navires pour la conversation. Les canaux principaux :

- **Canal 6** (156,300 MHz) — inter-navires, simplex. Souvent utilisé pour les communications entre navires de plaisance et de pêche, et historiquement pour la coordination SAR (search and rescue).
- **Canal 8** (156,400 MHz) — inter-navires, simplex.
- **Canal 72** (156,625 MHz) — inter-navires, simplex. Très utilisé en plaisance dans certains pays (France, Royaume-Uni).
- **Canal 77** (156,875 MHz) — inter-navires, simplex.
- **Canal 13** (156,650 MHz) — inter-navires, **bridge-to-bridge** (pont-à-pont). Utilisé pour les manœuvres de navigation entre navires (« je m'engage dans la passe », « je vous croise par tribord »). À faible puissance recommandée (1 W).
- **Canal 15** (156,750 MHz) — inter-navires/communications internes au bord, **1 W maximum**.
- **Canal 17** (156,850 MHz) — inter-navires/communications internes au bord, **1 W maximum**.

Pour la plupart des sorties plaisance en France, vos canaux de travail seront le **canal 72** ou le **canal 77** (parfois le 6 ou le 8), selon les habitudes locales.

## Les canaux portuaires et de service

Les canaux **portuaires** sont attribués par les autorités portuaires et varient selon les ports. Le candidat CRR doit connaître quelques familles :

- **Canaux 9, 10, 11, 12, 14, 67, 68, 71, 73, 74** — canaux d'opérations portuaires et de mouvement de navires, attribués localement par les capitaineries. Avant d'utiliser un canal portuaire, vérifiez les instructions nautiques de la zone (publications SHOM, guides nautiques, instructions du port d'accueil).
- **Canal 9** — canal d'appel alternatif au canal 16 dans certains pays (notamment aux États-Unis, où il est utilisé pour les appels de routine entre plaisanciers afin de soulager le canal 16).
- **Canal 67** — utilisé par le **Coastguard britannique** pour les communications opérationnelles après contact initial sur 16. Important si vous naviguez au Royaume-Uni.
- **Canal 80** — canal des marinas au Royaume-Uni.

### Bulletins météorologiques

Les CROSS français diffusent des **bulletins météorologiques** sur des canaux spécifiques selon les zones (canaux 79, 80, ou autres dépendant du CROSS et de la zone géographique). Ces diffusions sont annoncées préalablement sur le canal 16. Consultez les instructions nautiques pour la zone que vous fréquentez. Pour préparer vos sorties avec une météo locale fiable avant d'embarquer : [Local Weather Yawa](/apps/local-weather-yawa/).

{% include blog-cta.html app_slug="crr" %}

## Les splits internationaux : USA, international, Canada

L'un des points les plus subtils du programme CRR concerne les **différences de plan** entre régions du monde.

### Plan international (UIT)

C'est le plan standard, utilisé en Europe (France, Espagne, Royaume-Uni, Italie, Grèce, etc.), en Méditerranée, dans les Caraïbes francophones, et globalement partout sauf États-Unis et certaines zones Canada. Les canaux sont numérotés de 1 à 28 et de 60 à 88 selon le RR UIT.

### Plan USA

Les États-Unis ont conservé un plan partiellement différent, notamment pour préserver des canaux en simplex là où le plan international les définit en duplex. Concrètement, certains canaux ont des fréquences **différentes** ou des usages **différents** entre USA et international. Les VHF modernes proposent une commutation USA / INTL (parfois Canada) accessible via le menu.

Si vous traversez l'Atlantique vers les Antilles, ou si vous utilisez votre VHF aux Bermudes, en Caraïbes anglophones ou aux États-Unis, **vérifiez le réglage USA/INTL** de votre VHF.

### Plan Canada

Le Canada a également ses spécificités, notamment liées aux usages des Grands Lacs et de la côte Pacifique. Une VHF avec mode Canada commute automatiquement les fréquences attribuées différemment.

À l'examen CRR, ce thème apparaît principalement sous la forme : « le plan USA et le plan international diffèrent sur certains canaux » — répondre **vrai** sans hésiter.

## Puissance d'émission : haute (25 W) et basse (1 W)

Une autre notion régulièrement testée : la **commutation haute/basse puissance**.

- **Haute puissance** : jusqu'à 25 W pour une VHF fixe, 6 W pour une VHF portable. Utilisée pour les communications longue distance (côte, navires éloignés, alertes de détresse).
- **Basse puissance** : 1 W. Utilisée pour les communications **à courte distance** afin de :
  - Éviter le brouillage des stations éloignées sur le même canal
  - Préserver l'autonomie de batterie d'une VHF portable
  - Respecter les régulations sur certains canaux (canaux 13, 15, 17 imposent 1 W max par défaut)

Utiliser systématiquement la haute puissance pour des conversations entre voiliers à 2 milles est un mauvais usage : cela brouille des stations à 30 milles et consomme de l'énergie inutilement.

À l'examen CRR : sachez identifier les canaux à 1 W obligatoire (13, 15, 17) et le principe « basse puissance par défaut, haute puissance si nécessaire ».

## Les usages interdits

Le RR UIT et la réglementation ANFR interdisent strictement :

- **Communications privées non liées à la sécurité ou à la conduite du navire** sur les canaux marins. La VHF marine n'est pas un service de chat. Utiliser la VHF pour bavarder de sujets personnels longuement est en infraction.
- **Communications commerciales** non autorisées (vente, publicité, tractations commerciales hors agences maritimes).
- **Brouillages volontaires** : couper la parole, perturber un message, transmettre du bruit délibéré.
- **Émissions sur des canaux non autorisés** : utiliser un canal réservé aux services portuaires sans autorisation, ou un canal duplex côtier sans correspondant officiel.
- **Voix sur le canal 70** (déjà mentionné).
- **Test sauvage de l'ASN** sans procédure formelle avec une station côtière équipée pour répondre.
- **Usage de la VHF terrestre** : la VHF marine ne s'utilise pas en mer pour des communications terrestres (entre voitures, entre randonneurs sur côte). Pour cela, il existe la PMR446 (446 MHz, sans licence en Europe) ou les communications terrestres encadrées (radioamateurs, etc.).

Ces interdictions sont régulièrement testées dans la catégorie « Réglementation » du CRR.

## Tableau récapitulatif des canaux clés à mémoriser

| Canal | Fréquence (MHz) | Mode | Usage |
|-------|----------------|------|-------|
| 6 | 156,300 | Simplex | Inter-navires, SAR |
| 8 | 156,400 | Simplex | Inter-navires |
| 9 | 156,450 | Simplex | Appel alternatif (USA) / opérations portuaires |
| 13 | 156,650 | Simplex | Bridge-to-bridge, 1 W |
| 15 | 156,750 | Simplex | Communications internes au bord, 1 W |
| 16 | 156,800 | Simplex | **Détresse, urgence, sécurité, appel** |
| 17 | 156,850 | Simplex | Communications internes au bord, 1 W |
| 67 | 156,375 | Simplex | Coastguard UK / inter-navires |
| 70 | 156,525 | Simplex (data) | **ASN exclusivement, voix interdite** |
| 72 | 156,625 | Simplex | Inter-navires (très utilisé en plaisance FR/UK) |
| 77 | 156,875 | Simplex | Inter-navires |
| 80 | 157,025 | Duplex | Marinas (UK) |

Cette liste n'est pas exhaustive : le manuel ANFR liste l'ensemble des canaux et leurs attributions. Mais ces 12 canaux sont le socle minimum à maîtriser pour le CRR.

## Mémoriser les canaux avec CRR Maritime

Les fréquences et usages de canaux sont typiquement le genre de contenu qui se prête mal à la lecture passive — et idéalement à la **répétition espacée**. [CRR Maritime](/apps/crr/) propose :

- **Leçon dédiée** au plan de canaux VHF marine.
- **Flashcards Leitner** pour mémoriser les fréquences et les usages — chaque canal est une carte distincte, avec rappel automatique selon la courbe de l'oubli.
- **Quiz « Canaux VHF »** pour tester la connaissance.
- **Tableau de canaux consultable hors-ligne** dans l'application.

Pour comprendre l'architecture pédagogique de l'application : [Répétition espacée Leitner : la méthode pour réviser le CRR](/blog/education/repetition-espacee-leitner-reviser-crr/).

Pour archiver hors-ligne les listes officielles ANFR de canaux (utiles à bord), [Save as PDF](/apps/save-as-pdf/) sauvegarde les pages et tableaux en PDF consultables sans réseau. Et pour maintenir une routine quotidienne de révision incluant la mémorisation des canaux, [The Done List](/apps/the-done-list/) aide à suivre les progrès jour après jour.

## Foire aux questions

**Combien de canaux dois-je vraiment connaître pour le CRR ?**
Pas tous, mais une douzaine au minimum : 6, 8, 9, 13, 15, 16, 17, 67, 70, 72, 77, 80. Au-delà, retenez le **principe** (canaux d'opérations portuaires, canaux duplex côtiers, splits USA/Canada) plutôt que la liste exhaustive. L'examen teste la compréhension structurelle, pas la mémorisation de 56 fréquences.

**Le canal 16 et le canal 70 sont-ils surveillés en permanence par tous les navires ?**
Le canal 16 est surveillé en veille vocale par toutes les VHF marines en service. Le canal 70 est surveillé en veille DSC par toutes les VHF DSC en service (et toutes les VHF récentes le sont). En pratique, votre VHF DSC veille **simultanément** les deux canaux dès qu'elle est sous tension, sans intervention de votre part.

**Quelle est la différence entre le canal 16 et le canal 9 ?**
Le **canal 16** est le canal **international** d'appel et de détresse, surveillé partout dans le monde. Le **canal 9** est un canal d'appel **alternatif** utilisé principalement aux États-Unis pour les communications routinières entre plaisanciers, afin de soulager le 16. En Europe, le canal 9 est plutôt utilisé pour les opérations portuaires locales. À l'international, **toujours appeler sur le 16** ou via ASN.

**Pourquoi certains canaux ont-ils une puissance limitée à 1 W ?**
Pour éviter les brouillages à grande distance et préserver les communications à courte portée. Les canaux 13, 15 et 17 sont notamment limités à 1 W par défaut. Le canal 13 (bridge-to-bridge) sert aux manœuvres de navigation entre navires proches : 1 W suffit largement et n'encombre pas les stations éloignées.

**Mon GPS de plaisance suffit-il pour transmettre la position via ASN ?**
Si votre VHF DSC est connectée à votre GPS via le protocole NMEA 0183 ou NMEA 2000, oui. La connexion peut être filaire (deux fils dédiés) ou via le réseau bus du bateau. Beaucoup de VHF récentes intègrent leur propre récepteur GPS, ce qui simplifie l'installation. Vérifiez dans le menu DSC de votre VHF que la position est bien reçue (mention « GPS OK » ou équivalent).

**Que faire si je dois traverser une zone où le plan USA s'applique ?**
Vérifiez le réglage USA/INTL de votre VHF avant d'entrer dans la zone (menu de configuration, généralement accessible par 2-3 pressions). Aux États-Unis, certains canaux que vous utilisez en France (notamment canal 80, canal 87) ont des fréquences différentes. Une VHF correctement réglée évite les transmissions sur des fréquences non autorisées.

**Y a-t-il des canaux réservés aux régates et compétitions ?**
Certains canaux peuvent être attribués temporairement aux organisateurs de compétitions par l'ANFR. Ce sont des **autorisations spéciales** ; en dehors d'un cadre officiel et autorisé, vous ne pouvez pas vous approprier un canal pour une régate amateur. Renseignez-vous auprès de votre fédération ou directement auprès de l'ANFR pour les régulations en vigueur.
