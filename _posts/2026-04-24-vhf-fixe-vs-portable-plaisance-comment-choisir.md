---
layout: post
title: "VHF fixe vs VHF portable : que choisir pour la plaisance ?"
description: "Comparatif complet entre VHF fixe et VHF portable pour la plaisance : puissance, antenne, ASN, étanchéité, autonomie. Guide pour choisir et réussir le CRR avec CRR Maritime."
date: 2026-04-24
categories: [education]
tags: [crr, vhf-marine, anfr, vhf-fixe, vhf-portable, plaisance, equipement-bateau]
silo: education
pillar: education
related_apps: [crr, survivalist, local-weather-yawa, save-as-pdf]
permalink: /blog/education/vhf-fixe-vs-portable-plaisance-comment-choisir/
---

Au moment d'équiper son bateau d'une radio VHF marine, le plaisancier se trouve face à un choix souvent mal expliqué : faut-il opter pour une **VHF fixe** installée à demeure dans le carré ou la cabine, ou pour une **VHF portable** facilement transportable ? Les deux ont leurs avantages, leurs limitations et leurs cas d'usage. La réponse dépend du type de navigation envisagé, de la taille du bateau, du budget, et de la stratégie de redondance que vous souhaitez mettre en place.

Cet article compare en profondeur les deux types d'équipement, à la lumière des connaissances exigées par le **Certificat Restreint de Radiotéléphoniste (CRR)** délivré par l'**ANFR** et des recommandations de la **CEPT**. Il complète notre [guide complet sur les meilleures applications CRR et VHF marine](/blog/education/meilleures-applications-crr-vhf-marine-2026/) ainsi que notre [guide des canaux VHF marine](/blog/education/canaux-vhf-marine-frequences-guide-complet/).

## Les bases de la VHF marine : pourquoi 156 MHz ?

La **bande VHF maritime** s'étend de 156,000 MHz à 162,025 MHz, dans ce qu'on appelle techniquement la **bande VHF basse**. Cette gamme de fréquences a été standardisée par l'**Union internationale des télécommunications (UIT)** dès les années 1950 pour les communications maritimes mondiales, et structurée en canaux numérotés (canal 1, 2, 3… 88) chacun correspondant à une fréquence d'émission et de réception précise.

La VHF se caractérise par une propagation **en ligne de vue** (line-of-sight) : les ondes voyagent en ligne droite et ne suivent pas la courbure de la Terre comme le font les ondes plus longues (HF, BLU). Cela signifie que la **portée d'une VHF marine dépend essentiellement de la hauteur de l'antenne**, et non de la puissance d'émission.

### La règle des hauteurs : portée optique en VHF

Une formule approximative donne la **portée optique** (en milles nautiques) entre deux antennes de hauteurs h₁ et h₂ (en mètres) :

```
Portée (NM) ≈ 2,07 × (√h₁ + √h₂)
```

Quelques exemples concrets :

- VHF portable tenue à hauteur de l'épaule (2 m) communiquant avec une station côtière à 20 m : **2,07 × (√2 + √20) ≈ 2,07 × (1,41 + 4,47) ≈ 12 NM**.
- VHF fixe avec antenne en tête de mât (15 m) communiquant avec une station côtière à 30 m : **2,07 × (√15 + √30) ≈ 2,07 × (3,87 + 5,48) ≈ 19 NM**.
- Deux VHF portables (2 m chacune) entre annexes : **2,07 × (1,41 + 1,41) ≈ 6 NM**.

Vous voyez immédiatement que la **hauteur d'antenne** est le facteur déterminant. Une VHF de 25 W reliée à une antenne en tête de mât couvre 4 à 5 fois plus loin qu'une VHF de 5 W tenue à la main, alors que la puissance n'est que 5 fois supérieure. C'est un point fondamental, examiné au CRR et essentiel pour comprendre pourquoi les VHF fixes restent supérieures pour la sécurité.

## La VHF fixe : équipement principal du navire

La **VHF fixe** est destinée à rester installée à demeure sur le bateau, généralement à la table à cartes, dans le poste de pilotage, ou dans un emplacement dédié. Ses caractéristiques typiques :

### Puissance d'émission

- **25 W maximum** réglementairement (puissance haute), commutable en 1 W pour les communications de proximité.
- En pratique, la commutation 25 W / 1 W est accessible par un bouton dédié et obligatoirement utilisée selon les contextes (1 W dans les ports, 25 W en haute mer ou en détresse).

### Alimentation

- **12 V continu** (24 V pour certains bateaux professionnels), prélevés sur la batterie de service.
- Consommation typique : 1-2 A en réception, 5-6 A en émission. Une utilisation intensive en croisière demande une batterie correctement dimensionnée.

### Antenne

- **Antenne fouet** ou **antenne à gain**, généralement en fibre de verre, montée en tête de mât pour les voiliers ou sur un arceau pour les vedettes.
- La hauteur de l'antenne conditionne la portée : c'est ici que la VHF fixe écrase la portable.

### MMSI programmé en dur

- Chaque VHF fixe avec ASN doit être programmée avec un **MMSI** (Maritime Mobile Service Identity) attribué par l'**ANFR** lors de la déclaration de la station radio.
- Une seule programmation possible chez la plupart des fabricants, à effectuer avec soin (en cas d'erreur, retour SAV).
- Le MMSI est lié au navire et non à l'opérateur, ce qui distingue la VHF fixe de la portable. Notre [guide MMSI](/blog/education/mmsi-indicatifs-radio-maritime-guide/) détaille la structure et l'attribution de ces identifiants.

### ASN/DSC sur canal 70

- Veille permanente sur le **canal 70** (156,525 MHz) pour les appels sélectifs numériques.
- Bouton de détresse rouge protégé sous un cache pour éviter les déclenchements accidentels.
- Connexion GPS recommandée (souvent NMEA 0183 ou NMEA 2000) pour transmettre automatiquement la position en cas de détresse. Voir notre [guide ASN/DSC complet](/blog/education/asn-dsc-guide-complet-vhf-marine/).

### Avantages de la VHF fixe

- **Portée maximale** grâce à l'antenne haute.
- **Alimentation illimitée** tant que la batterie tient.
- **Affichage et ergonomie supérieurs** (écran lisible, micro déporté possible, intégration cockpit avec second poste).
- **MMSI programmé** = identification systématique en ASN, position GPS automatique.
- **Détresse fiable** : bouton sous cache, position transmise, retour d'accusé de réception affiché.

### Inconvénients

- **Inutilisable hors du bateau** : ne peut pas être emportée sur un radeau de survie ou dans une annexe.
- **Dépendance à la batterie** : si la batterie tombe en panne ou est noyée, plus de VHF.
- **Investissement plus lourd** : 200 à 700 € selon les modèles, plus l'antenne (50 à 200 €), plus l'installation.

## La VHF portable : équipement complémentaire ou principal sur petits bateaux

La **VHF portable** est un transceiver alimenté par batterie, conçu pour être tenu à la main et transporté facilement. C'est l'équipement de redondance par excellence, et le seul possible sur de très petits bateaux.

### Puissance d'émission

- **5 W maximum** en émission haute, commutable en 1 W (parfois 0,5 W) pour économie de batterie.
- Cette puissance plus faible est largement compensée, dans son contexte d'usage (proximité, redondance, annexe), par sa portabilité.

### Alimentation

- **Batterie Li-ion** intégrée, autonomie typique de 8 à 12 heures en utilisation mixte (90 % réception, 10 % émission).
- Chargement par chargeur secteur ou support 12 V à bord.
- Option **batterie alcaline de secours** (pile AA) sur certains modèles : précieuse en survie.

### Antenne

- **Antenne hélicoïdale courte** (15-20 cm) intégrée ou démontable.
- Hauteur effective limitée : 1,5 à 2 m si tenue à hauteur de la tête.
- Portée typique : **3 à 8 NM** vers une station côtière, **2 à 4 NM** entre VHF portables.

### Étanchéité

- Norme **IPX7** (immersion 30 min à 1 m) ou **IPX8** (immersion prolongée) pour les modèles modernes.
- Certains modèles **flottent** et émettent un signal lumineux à l'impact dans l'eau (fonction « float and flash »).
- L'étanchéité est cruciale pour un usage en annexe, en kayak, en planche à voile, ou en survie.

### ASN/DSC

- Présent sur la plupart des modèles récents (génération depuis ~2015).
- Veille canal 70, bouton de détresse intégré.
- **GPS interne** sur les modèles haut de gamme, sinon position à entrer manuellement.
- MMSI personnel ou navire-assigné selon les pays.

### Avantages de la VHF portable

- **Mobilité totale** : utilisable depuis n'importe où sur le bateau, en annexe, à terre, en radeau de survie.
- **Indépendance énergétique** vis-à-vis de la batterie principale du bateau.
- **Étanchéité IPX7/IPX8** : adaptée aux conditions humides et aux immersions accidentelles.
- **Coût plus accessible** : 80 à 350 € selon les modèles.
- **Idéale en redondance** d'une VHF fixe : si la batterie principale flanche, vous gardez une capacité d'émission.

### Inconvénients

- **Portée limitée** par la faible hauteur d'antenne (et la faible puissance accentue le problème).
- **Autonomie finie** : il faut surveiller la batterie et recharger régulièrement.
- **Affichage et ergonomie réduits** par rapport à une fixe (écran plus petit, boutons plus serrés).
- **MMSI parfois moins bien intégré** : selon les modèles, programmation moins fiable, moins de mémoire pour les contacts.

## Quel équipement pour quel programme de navigation ?

Voici quelques scénarios typiques.

### Voilier ou vedette de croisière côtière (jusqu'à 6 NM)

**Recommandation** : VHF fixe + VHF portable.

La fixe assure les communications de routine, les bulletins météo, les contacts avec les CROSS, et la veille ASN canal 70 en mer comme au mouillage. La portable est emportée en annexe lors des excursions à terre, ou conservée dans le sac de survie. C'est la configuration la plus courante chez les plaisanciers expérimentés. Notre [guide pour décider entre permis bateau et CRR](/blog/education/permis-bateau-crr-quel-ordre-choisir/) précise les obligations réglementaires associées.

### Petite vedette ou semi-rigide (≤6 m)

**Recommandation** : VHF portable, idéalement avec ASN.

Sur un petit bateau, l'absence de mât rend l'installation d'une VHF fixe peu pertinente — l'antenne ne pourrait être qu'à faible hauteur, ce qui réduit drastiquement le bénéfice de la fixe. Une VHF portable haut de gamme (avec ASN, GPS interne, IPX8) suffit largement pour la navigation côtière, et a l'énorme avantage d'être emportable en survie.

### Voilier en croisière hauturière

**Recommandation** : VHF fixe avec ASN + 2 VHF portables avec ASN + EPIRB + radeau de survie.

La redondance est ici critique. La fixe en tête de mât pour la portée maximale en mer libre. Une portable au cockpit, prête à l'emploi pour les communications rapides. Une seconde portable dans le sac de survie (« grab bag »). L'**EPIRB** (Emergency Position-Indicating Radio Beacon) sur 406 MHz pour les détresses au-delà de la portée VHF (système COSPAS-SARSAT, satellites). Ce niveau de redondance est essentiel pour les transats, traversées du golfe de Gascogne, ou tour du monde.

### Annexes et embarcations légères

**Recommandation** : VHF portable étanche IPX7 minimum.

Une simple portable suffit pour rejoindre la plage ou le bateau-mère. Privilégiez la flottabilité et l'étanchéité, y compris pour la pratique du kayak de mer ou de la planche à voile en mer ouverte.

## Préparer le CRR avec CRR Maritime, quel que soit votre équipement

Que vous équipiez votre bateau d'une VHF fixe, portable ou les deux, le **Certificat Restreint de Radiotéléphoniste** est nécessaire dès lors que vous naviguez à l'étranger ou que vous voulez utiliser pleinement et légalement votre équipement.

{% include blog-cta.html app_slug="crr" %}

L'application **CRR Maritime** couvre l'intégralité du programme ANFR 2025, y compris les chapitres techniques sur la VHF (fixes et portables), les antennes, la propagation, l'ASN, les MMSI, les canaux et leurs usages. Elle propose :

- **Leçons structurées** sur le matériel, la propagation et la réglementation.
- **Flashcards Leitner** pour mémoriser durablement (voir notre [article sur la répétition espacée](/blog/education/repetition-espacee-leitner-reviser-crr/)).
- **Quiz thématiques** pour identifier vos points faibles.
- **Mode examen** simulant les conditions réelles : 24 questions (6/8/10), 22 secondes par question.
- **100 % hors ligne** : idéale pour réviser en bateau, où la connexion est rare et précieuse.

Pour préparer une croisière en sécurité, **CRR Maritime** se complète bien avec [Local Weather: yawa](/apps/local-weather-yawa/) pour le suivi météo en temps réel, [Save as PDF](/apps/save-as-pdf/) pour conserver hors ligne les guides nautiques et fiches de procédure, et [Survivalist](/apps/survivalist/) pour les notions de survie en mer.

## Critères de choix pour acheter une VHF

### Pour une VHF fixe

- **Marque réputée** : Icom, Standard Horizon, Garmin, Simrad. Évitez les marques inconnues ou les sites de revente douteux.
- **Présence de l'ASN classe D** au minimum (voire classe A pour la grande plaisance ou le commerce léger).
- **Connexion GPS** NMEA 0183 ou NMEA 2000 pour transmission automatique de position en détresse.
- **Possibilité de double poste** (micro déporté ou second poste en cockpit).
- **Affichage lisible** par fort soleil, rétroéclairage de nuit.
- **Marquage CE** et conformité aux normes ETSI EN 301 178 / ETSI EN 300 338.

### Pour une VHF portable

- **Étanchéité IPX7 minimum**, IPX8 idéal pour usage maritime.
- **Flottabilité** appréciable mais non obligatoire.
- **ASN classe D ou H** (H = handheld, version simplifiée du DSC).
- **GPS intégré** : très utile en cas de déclenchement de détresse, sinon position à entrer manuellement.
- **Batterie Li-ion remplaçable**, idéalement avec compartiment piles AA en secours.
- **Autonomie ≥ 10 h** en utilisation mixte.

## Réglementation et homologation

Toute VHF marine vendue et utilisée en France doit être **homologuée** selon les normes européennes ETSI EN 301 178 (équipements émetteurs-récepteurs sans ASN) ou ETSI EN 300 338 (équipements ASN). Elle doit porter le **marquage CE**.

L'achat à l'étranger (USA, par exemple) est risqué : les VHF américaines fonctionnent sur des canaux légèrement différents (USA channels) et certaines fréquences ne sont pas autorisées en Europe. Préférez toujours un achat dans le circuit français ou européen.

L'usage de votre VHF requiert une **déclaration de la station radio** auprès de l'**ANFR**, qui attribue le MMSI et l'indicatif d'appel. Cette démarche est gratuite pour les stations de plaisance dans la plupart des cas (vérifier les éventuelles évolutions tarifaires). En revanche, l'usage légal de la VHF en émission (hors situations d'urgence) requiert le **CRR**, surtout en navigation internationale.

## FAQ

**Peut-on utiliser une VHF fixe sans antenne extérieure ?**
En théorie oui, en pratique non. Sans antenne extérieure, la portée est ridicule (quelques centaines de mètres) et le risque de réflexion peut endommager l'étage final de l'émetteur. Une VHF fixe sans antenne adaptée n'est pas exploitable.

**Une VHF portable peut-elle remplacer une VHF fixe sur un voilier de 10 m ?**
C'est possible mais sous-optimal. Vous perdez la portée (5-8 NM contre 20+ NM avec la fixe en tête de mât), la veille ASN permanente est fragilisée par l'autonomie de batterie, et la fiabilité globale est moindre. Pour un voilier de 10 m destiné à la croisière, l'investissement dans une VHF fixe + une portable de secours est très recommandé.

**Faut-il une déclaration ANFR pour une VHF portable ?**
Oui, si la VHF dispose d'un ASN avec MMSI dédié (généralement les modèles haut de gamme depuis 2015). La déclaration permet d'attribuer un MMSI personnel ou de rattacher la portable au MMSI du navire selon le mode choisi. Pour une VHF portable simple sans ASN, certains régimes simplifiés peuvent s'appliquer — vérifier l'arrêté ANFR en vigueur.

**Quelle puissance d'émission utiliser au quotidien ?**
La règle est simple : **1 W dans les ports et à proximité de la côte (rades, mouillages)**, **25 W en haute mer ou en cas de détresse**. Le 1 W permet de communiquer à courte distance sans saturer les fréquences pour les autres usagers, conformément au principe de bonne gestion du spectre.

**Le CRR couvre-t-il à la fois la fixe et la portable ?**
Oui. Le CRR sanctionne la maîtrise de la VHF marine en général : les notions de fréquences, de procédures, d'ASN, de canaux et de réglementation s'appliquent identiquement aux fixes et aux portables. **CRR Maritime** couvre les deux types d'équipement dans ses leçons.

**Que faire de mon ancienne VHF non-ASN ?**
Une VHF non-ASN reste utilisable en réception et en émission de routine, mais ne peut pas déclencher de détresse numérique. Elle peut servir de seconde radio à bord, mais pour la sécurité, l'ASN est désormais le standard incontournable. Le passage à une VHF ASN moderne est vivement recommandé.

**Quelle antenne choisir pour une VHF fixe ?**
Pour la plupart des voiliers, une **antenne fouet en fibre de verre de 1 m, gain 3 dBi**, montée en tête de mât, est l'option standard. Pour les vedettes, une antenne à gain plus élevé (6 dBi, 1,5-2,4 m) montée sur arceau peut compenser une hauteur d'installation moindre. Évitez les antennes très haut gain (9 dBi+) sur voilier : elles « focalisent » le faisceau à l'horizontale, ce qui devient problématique au près sous fort gîte.

---

VHF fixe et VHF portable ne s'opposent pas : elles se complètent. Sur un bateau sérieux destiné à la croisière, les deux sont indispensables pour assurer redondance, portée maximale et capacité d'emport. Comprendre leurs caractéristiques techniques fait partie intégrante du programme du CRR, et vous serez récompensé à l'examen comme en mer par la maîtrise de ces nuances. **CRR Maritime** vous accompagne dans cette préparation grâce à une méthode structurée, scientifique et autonome. Pour aller plus loin, consultez notre [guide complet du CRR](/blog/education/meilleures-applications-crr-vhf-marine-2026/), notre [guide ASN/DSC](/blog/education/asn-dsc-guide-complet-vhf-marine/), et notre [méthode pour réussir le premier coup](/blog/education/comment-reussir-examen-crr-premiere-tentative/).
