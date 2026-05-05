---
layout: post
title: "ASN / DSC sur la VHF marine : guide complet pour le CRR"
description: "Tout ce qu'il faut savoir sur l'Appel Sélectif Numérique (ASN/DSC) en VHF marine : fonctionnement, bouton de détresse, MMSI, appels routine/urgence/détresse, contexte SMDSM, et comment le maîtriser pour le CRR."
date: 2026-04-17
categories: [education]
tags: [asn, dsc, vhf-marine, crr, smdsm, gmdss, mmsi, canal-70, detresse, plaisance]
silo: education
pillar: education
related_apps: [crr, save-as-pdf, local-weather-yawa, the-done-list]
---

# ASN / DSC sur la VHF marine : guide complet pour le CRR

L'**Appel Sélectif Numérique (ASN)** — connu en anglais sous le sigle **DSC** pour **Digital Selective Calling** — est l'innovation majeure qui a fait basculer la radio maritime du XXᵉ siècle dans l'ère du **Système Mondial de Détresse et de Sécurité en Mer (SMDSM)**. Pour un candidat au **Certificat Restreint de Radiotéléphoniste (CRR)**, comprendre l'ASN n'est pas optionnel : c'est l'un des sujets les plus présents dans la catégorie « Exploitation » de l'examen, et c'est aussi celui qui distingue, à la mer, un plaisancier capable de déclencher une alerte automatique d'un plaisancier limité au seul micro et au canal 16.

Avant l'ASN, transmettre une alerte de détresse en mer reposait entièrement sur la voix. Il fallait sortir le micro, prononcer « MAYDAY MAYDAY MAYDAY », donner son nom de navire, sa position, la nature de la détresse, le nombre de personnes à bord, et espérer qu'une station — navire ou côtière — capte le message. Si la VHF était mal réglée, si le canal 16 n'était pas surveillé à cet instant précis, si la propagation était mauvaise, le message pouvait passer inaperçu pendant des minutes ou des heures précieuses.

L'ASN change radicalement cette équation. Une simple pression sur le bouton rouge protégé d'une VHF DSC déclenche un appel **numérique automatique** qui transmet votre **MMSI**, votre **position GPS** (si la VHF est connectée à un GPS), la **nature de la détresse** et l'horodatage à toutes les stations équipées DSC dans la zone de portée VHF (typiquement 30-50 milles selon la propagation et l'antenne). Les stations côtières CROSS et les navires alentour reçoivent une alerte sonore caractéristique, et leur écran affiche l'identité et la position du navire en détresse — bien avant qu'un quelconque message vocal ait été prononcé.

Ce guide vous donne la compréhension complète de l'ASN/DSC nécessaire à la fois pour réussir le CRR et pour utiliser correctement votre VHF en mer.

## Le contexte : le Système Mondial de Détresse et de Sécurité en Mer (SMDSM/GMDSS)

L'ASN n'est pas une fonction isolée : il s'inscrit dans un dispositif international, le **SMDSM** (en anglais GMDSS — *Global Maritime Distress and Safety System*), adopté par l'**Organisation Maritime Internationale (OMI)** dans la convention SOLAS. Le SMDSM organise les communications de sécurité maritime selon quatre zones :

- **Zone A1** : couverture VHF avec ASN, dans la portée des stations côtières VHF (≈ 30-50 milles). C'est la zone dans laquelle navigue la quasi-totalité des plaisanciers français.
- **Zone A2** : couverture MF (ondes moyennes) avec ASN, jusqu'à environ 150 milles des côtes.
- **Zone A3** : couverture par satellite Inmarsat (entre les latitudes 70° N et 70° S).
- **Zone A4** : zones polaires, hors de la couverture Inmarsat.

Le CRR habilite à exploiter les stations VHF de la zone A1. Pour les zones A2 à A4, le **Certificat Général d'Opérateur (CGO)** est requis. Cette distinction zonale fait régulièrement l'objet de questions d'examen.

Au sein de la zone A1, l'ASN est la **brique technologique centrale**. Il fonctionne sur un canal dédié — le **canal 70** — qui est exclusivement réservé à l'ASN et **interdit à la voix**. Le canal 70 ne sert jamais à parler ; il sert uniquement aux échanges numériques entre VHF DSC.

Pour une vue d'ensemble du programme CRR et des autres thématiques connexes, consultez le hub : [Meilleures applications pour préparer le CRR Maritime et la VHF marine en 2026](/blog/education/meilleures-applications-crr-vhf-marine-2026/).

## Les composants techniques d'une VHF ASN/DSC

Une VHF marine ASN/DSC est une station radio dotée de plusieurs éléments fonctionnels :

### Le module DSC

Un microcontrôleur intégré à la VHF qui code et décode les messages numériques selon le standard **UIT-R M.493**. Ce module est responsable de la mise en forme des appels, de leur transmission sur le canal 70, et de la veille permanente sur ce même canal lorsque la VHF est sous tension.

### Le bouton de détresse rouge

Bouton physique, le plus souvent **rouge**, **protégé par un cache** ou par une trappe à soulever pour éviter les déclenchements accidentels. Une pression simple ou prolongée (selon le modèle, généralement 3 à 5 secondes) déclenche un **appel de détresse**. Sur la plupart des modèles, un bip sonore confirme la transmission.

### Le récepteur GPS intégré ou connecté

Une VHF ASN n'est efficace pour la détresse que si elle peut transmettre votre **position**. Trois cas :

- VHF avec GPS intégré (de plus en plus courant sur les modèles récents).
- VHF connectée à un récepteur GPS externe via NMEA 0183 ou NMEA 2000.
- VHF sans GPS : l'appel transmet uniquement le MMSI, sans position. C'est nettement moins efficace pour les sauveteurs.

L'**Agence Nationale des Fréquences** et les CROSS recommandent vivement de connecter (ou d'utiliser une VHF avec GPS intégré) pour que l'alerte transmette automatiquement la position.

### Le MMSI programmé

Le **Maritime Mobile Service Identity (MMSI)** est le numéro à 9 chiffres qui identifie votre station. Il doit être programmé dans la VHF pour que l'ASN fonctionne. Sans MMSI, le bouton de détresse est inopérant. Pour comprendre les MMSI en détail, voir : [MMSI et indicatifs : tout savoir pour la radio maritime](/blog/education/mmsi-indicatifs-radio-maritime-guide/).

### L'antenne et l'alimentation

Une VHF ASN nécessite une antenne adaptée (typiquement 1,5 m sur voilier, 90 cm sur moteur) et une alimentation 12 V stable. Pour le choix d'une VHF, lisez : [VHF fixe vs portable : comment choisir pour la plaisance](/blog/education/vhf-fixe-vs-portable-plaisance-comment-choisir/).

## Les trois niveaux d'appel ASN

L'ASN distingue trois niveaux de priorité, qui correspondent aux trois niveaux de la phraséologie vocale (MAYDAY, PAN-PAN, SÉCURITÉ) mais en version numérique. Ces trois niveaux font partie du programme d'examen CRR.

### 1. L'appel de routine

L'**appel de routine** (en anglais *Routine Call*) est utilisé pour entrer en contact avec une autre station spécifique — un autre navire, une station côtière, une marina — sans encombrer le canal 16. C'est la version moderne et discrète de « XXX, XXX, ici YYY ».

Procédure type :

1. Sur la VHF, sélectionner « DSC » puis « Appel individuel » (« Individual Call »).
2. Entrer le MMSI du destinataire (ou le sélectionner dans le carnet d'adresses si déjà enregistré).
3. Choisir le canal de travail proposé (typiquement un canal inter-ships : 6, 8, 72, 77 selon les zones).
4. Valider l'envoi.
5. Le destinataire reçoit l'appel sur sa VHF ; son écran affiche votre MMSI et le canal proposé. S'il accepte, il bascule sur le canal de travail et le dialogue vocal commence.

L'avantage : le canal 16 reste libre pour les communications de sécurité. C'est l'usage normal et recommandé pour toutes les communications non urgentes.

### 2. L'appel d'urgence

L'**appel d'urgence** (en anglais *Urgency Call*) correspond au niveau **PAN-PAN** : situation grave mais sans danger immédiat pour la vie humaine. Exemples : panne de moteur dans une zone à risque, malaise d'un membre d'équipage non vital, dérive proche d'un danger.

L'appel d'urgence ASN est généralement adressé à « Toutes les stations » (*All Ships*) ou à une station côtière spécifique. La procédure varie selon le modèle de VHF, mais inclut :

1. Menu DSC > Appel urgence (« Urgency »).
2. Sélection du canal de communication (typiquement le canal 16 pour le message vocal).
3. Validation et envoi.
4. Suivi par un message vocal **PAN-PAN PAN-PAN PAN-PAN** sur le canal indiqué.

### 3. L'appel de détresse — le bouton rouge

L'**appel de détresse** (en anglais *Distress Call*) correspond au niveau **MAYDAY** : danger grave et imminent, vie humaine menacée. C'est l'usage du **bouton rouge protégé**.

Procédure normalisée :

1. **Soulever le cache** du bouton rouge.
2. **Appuyer et maintenir** le bouton (généralement 3-5 secondes selon le modèle) jusqu'au signal de confirmation.
3. La VHF transmet automatiquement, sur le canal 70 :
   - Votre **MMSI**
   - Votre **position GPS** (si disponible)
   - L'**horodatage** UTC
   - La **nature de la détresse** (si vous avez eu le temps de la sélectionner — sinon « détresse non spécifiée »)
4. La VHF passe automatiquement sur le **canal 16**.
5. Vous transmettez immédiatement un **message vocal MAYDAY** structuré.

Le détail de la phraséologie vocale est traité dans : [Procédures de détresse VHF : MAYDAY, PAN-PAN et SÉCURITÉ expliquées](/blog/education/procedures-detresse-vhf-mayday-pan-pan-securite/).

L'appel de détresse ASN est répété automatiquement par la VHF jusqu'à ce qu'un accusé de réception (acknowledgement) soit reçu d'une station côtière. Cette redondance maximise les chances qu'au moins une station capte l'alerte.

{% include blog-cta.html app_slug="crr" %}

## Annuler une fausse alerte ASN — une procédure obligatoire

Les fausses alertes ASN sont un fléau bien connu des CROSS. Selon les retours d'expérience publiés, une part significative des alertes ASN reçues chaque année sont des **déclenchements accidentels** : un enfant à bord, une manipulation maladroite lors du nettoyage, un test mal compris. Ces fausses alertes mobilisent inutilement les sauveteurs et perturbent la veille.

**Si vous déclenchez une alerte par erreur, vous avez l'obligation de l'annuler immédiatement**. La procédure :

1. **Annuler dans le menu DSC** de la VHF (selon le modèle, fonction « Cancel » ou « Annuler ») dès que vous vous rendez compte de l'erreur.
2. **Passer sur le canal 16** et émettre vocalement le message d'annulation suivant (ou un équivalent en français) :

> « TOUTES LES STATIONS, TOUTES LES STATIONS, TOUTES LES STATIONS, ICI [nom du navire], MMSI [votre MMSI], position [votre position], heure [UTC]. ANNULEZ MA FAUSSE ALERTE DE DÉTRESSE DU [heure de l'alerte] UTC. TERMINÉ. »

L'absence d'annulation ne réduit pas seulement la disponibilité des sauveteurs — elle peut entraîner des sanctions administratives. Le CRR rappelle cette obligation. C'est un point régulièrement testé dans la catégorie « Réglementation ».

## Le canal 70 : exclusivement ASN

Le **canal 70** (156,525 MHz) est dédié exclusivement à l'ASN. Aucune communication vocale n'est autorisée sur ce canal. C'est une règle stricte du Règlement des Radiocommunications de l'UIT, et elle fait partie des questions classiques du CRR.

Concrètement :

- Une VHF DSC veille en permanence sur le canal 70 (en arrière-plan, sans son audible).
- Tous les appels ASN entrants et sortants passent par ce canal.
- Aucun bouton « PTT vocal » ne devrait fonctionner sur le canal 70 — la plupart des VHF modernes inhibent matériellement la transmission vocale sur ce canal.

Pour le détail du plan de canaux VHF marine : [Canaux VHF marine : guide complet des fréquences pour la plaisance](/blog/education/canaux-vhf-marine-frequences-guide-complet/).

## Les fonctions ASN avancées à connaître pour le CRR

Au-delà des trois types d'appel, le CRR couvre plusieurs fonctions ASN secondaires que vous rencontrerez dans les quiz et le manuel ANFR.

### L'appel de groupe

Un **appel de groupe** vise un ensemble prédéfini de stations (par exemple, une flottille, un club nautique) identifiées par un **MMSI de groupe** spécifique commençant par 0. Cette fonction est utile pour les organisateurs de régates ou les gestionnaires de flotte.

### L'appel à toutes les stations (All Ships)

L'**appel à toutes les stations** vise toutes les VHF DSC dans la zone de portée. C'est typiquement utilisé pour les avis de sécurité (SÉCURITÉ ASN) ou les appels d'urgence à grande échelle.

### L'accusé de réception (acknowledgement)

Lorsqu'une station reçoit un appel ASN, elle peut envoyer un **accusé de réception** automatique ou manuel. Pour les appels de détresse, l'accusé de réception est généralement envoyé par la station côtière (CROSS) responsable de la zone, jamais par un autre navire (sauf cas particuliers prévus par la procédure).

### Le test ASN (DSC Test)

La plupart des VHF DSC permettent un **test ASN** : on envoie un appel test à une station côtière équipée pour répondre, et l'on vérifie le bon fonctionnement de la chaîne. Attention : ce test est **encadré** ; il ne s'effectue pas avec n'importe quel destinataire et certains pays restreignent son usage. Les tests sauvages peuvent être considérés comme des brouillages.

## L'ASN, le MMSI et la licence de station

L'ASN ne fonctionne légalement que si :

1. Vous êtes titulaire du **CRR**.
2. Votre VHF est programmée avec un **MMSI valide**, attribué par l'ANFR pour les navires français.
3. Votre navire dispose d'une **licence de station**, également délivrée par l'ANFR.
4. Vous respectez les obligations de mise à jour (changement de propriétaire, changement de bateau).

Programmer un MMSI fictif dans une VHF est strictement interdit et constitue un usage illégal de la radio maritime. Cette interdiction fait régulièrement l'objet de questions d'examen.

Pour le détail complet sur les MMSI : [MMSI et indicatifs : tout savoir pour la radio maritime](/blog/education/mmsi-indicatifs-radio-maritime-guide/).

## Comment maîtriser l'ASN avec CRR Maritime

[CRR Maritime](/apps/crr/) propose plusieurs parcours dédiés à l'ASN dans son contenu :

- **Leçons spécifiques** sur le SMDSM, le canal 70, le bouton rouge et la procédure d'annulation.
- **Flashcards Leitner** sur les types d'appel, les MMSI de groupe, les fonctions DSC, les obligations réglementaires.
- **Quiz thématique « ASN/DSC »** pour tester et consolider la compréhension.
- **Questions d'examen blanc** intégrant les pièges classiques sur l'ASN (canal 70 = pas de voix, annulation obligatoire, etc.).

L'ASN représente, à elle seule, plusieurs questions d'examen sur les 24. La maîtriser solidement est un investissement à fort rendement.

Pour archiver les fiches techniques de votre VHF en hors-ligne, [Save as PDF](/apps/save-as-pdf/) permet de sauvegarder les manuels constructeurs et les pages d'aide ANFR. Pour planifier vos sessions d'apprentissage, [The Done List](/apps/the-done-list/) maintient une discipline quotidienne efficace, et pour préparer vos sorties après l'obtention du CRR, [Local Weather Yawa](/apps/local-weather-yawa/) fournit la météo marine locale dont vous aurez besoin avant chaque appareillage.

## Foire aux questions

**Que se passe-t-il si j'appuie sur le bouton rouge sans le relâcher correctement ?**
La plupart des VHF DSC exigent une pression continue de 3 à 5 secondes pour valider l'appel de détresse. Une pression brève peut afficher un avertissement sans déclencher l'alerte, ou déclencher quand même selon le modèle. Si vous avez déclenché par erreur, **annulez immédiatement** via le menu DSC puis émettez une annulation vocale sur le canal 16 (procédure décrite plus haut).

**L'ASN fonctionne-t-il si ma VHF n'a pas de GPS ?**
Oui, mais l'appel ne transmettra que votre MMSI, sans position. Les sauveteurs sauront que vous êtes en détresse mais devront vous localiser autrement (recherche par direction radiogoniométrique, demande vocale de votre position, etc.). C'est nettement moins efficace. Investir dans une VHF avec GPS intégré ou connecter un GPS NMEA est fortement recommandé.

**Faut-il une licence pour utiliser l'ASN en France ?**
Oui : il faut le **CRR** pour la personne (l'opérateur), et une **licence de station** pour le bateau (délivrée par l'ANFR), avec un **MMSI** programmé dans la VHF. Sans ces trois éléments, l'utilisation est illégale.

**Le canal 70 est-il vraiment réservé exclusivement à l'ASN ?**
Oui, c'est une règle internationale stricte (UIT). Aucune communication vocale n'est autorisée sur le canal 70. Toute transmission vocale sur ce canal constitue un brouillage et peut être sanctionnée.

**Combien de temps une alerte de détresse ASN est-elle répétée ?**
Selon le standard UIT-R M.493, une VHF en mode détresse réitère l'appel ASN à intervalles de quelques minutes jusqu'à réception d'un accusé de réception d'une station côtière. La logique exacte dépend du modèle, mais la philosophie est de maximiser les chances de captation par au moins une station.

**Puis-je utiliser l'ASN d'une VHF portable ?**
Certaines VHF portables modernes intègrent l'ASN/DSC avec GPS. Elles offrent l'avantage de pouvoir partir avec vous dans le radeau de survie, mais elles ont une portée plus limitée que les VHF fixes en raison de leur antenne courte. Pour une discussion approfondie : [VHF fixe vs portable : comment choisir pour la plaisance](/blog/education/vhf-fixe-vs-portable-plaisance-comment-choisir/).

**Est-ce que l'ASN remplace la veille canal 16 ?**
Non. L'ASN complète la veille canal 16 mais ne la remplace pas. Le canal 16 reste le **canal d'appel et de détresse vocale** universel, surveillé par toutes les VHF marines en service. Une VHF DSC veille **simultanément** sur le canal 70 (pour les appels numériques) et idéalement sur le canal 16 (pour les communications vocales). Cette double veille est la pratique recommandée par les CROSS.
