---
layout: post
title: "MMSI et indicatifs : tout savoir pour la radio maritime"
description: "Guide complet sur le MMSI (Maritime Mobile Service Identity) et les indicatifs d'appel pour la radio maritime française : structure 9 chiffres, codes MID 226-228, demande à l'ANFR, licence de station, AIS et MMSI de groupe."
date: 2026-04-20
categories: [education]
tags: [mmsi, indicatif-appel, vhf-marine, crr, anfr, licence-station, ais, plaisance, radio-maritime]
silo: education
pillar: education
related_apps: [crr, save-as-pdf, the-done-list, my-agenda-planning]
---

# MMSI et indicatifs : tout savoir pour la radio maritime

Si l'**ASN/DSC** est le mécanisme qui rend la VHF marine moderne intelligente, le **MMSI** (Maritime Mobile Service Identity) en est l'**identifiant unique** sans lequel rien ne fonctionne. Sans MMSI valide, votre bouton de détresse rouge est inopérant ; votre VHF est invisible pour le réseau ASN ; votre balise AIS — si vous en avez une — émet un signal anonyme inutile.

Pour le **Certificat Restreint de Radiotéléphoniste (CRR)**, la maîtrise du MMSI est doublement importante. D'une part, l'examen teste régulièrement la **structure** du numéro (9 chiffres, MID, station fixe vs station de groupe vs station côtière). D'autre part, sur le plan pratique, tout titulaire du CRR qui exploite une VHF doit obtenir un MMSI auprès de l'**Agence Nationale des Fréquences (ANFR)** dans le cadre de sa **licence de station de navire**.

À côté du MMSI, l'**indicatif d'appel** (call sign) reste le second identifiant traditionnel attribué par l'ANFR, hérité du XXᵉ siècle et toujours utilisé en VHF, en HF, et dans les correspondances officielles avec les autorités maritimes.

Ce guide passe en revue, méthodiquement, la structure du MMSI, son attribution, le rôle de l'indicatif d'appel, l'interaction avec l'AIS, les MMSI de groupe et toutes les nuances utiles à l'examen et à la pratique.

## Pourquoi un MMSI : l'identification numérique unique

Avant la généralisation de l'ASN, l'identification d'un navire en VHF reposait sur deux éléments :

- Le **nom du navire** (souvent peint sur la coque, déclaré aux autorités) ;
- L'**indicatif d'appel** attribué par l'autorité nationale (ANFR pour la France).

Cette identification, suffisante pour les communications vocales humaines, est **totalement inopérante pour un système numérique**. Un appel ASN se transmet en quelques fractions de seconde sous forme binaire : il faut un identifiant **purement numérique**, **unique au monde**, **structuré pour permettre le routage** des appels à travers les réseaux de stations côtières.

C'est exactement ce que fait le MMSI. Il est codifié par l'**Union Internationale des Télécommunications (UIT)** dans la **Recommandation UIT-R M.585**. Chaque MMSI est unique au monde et identifie de manière permanente une station radio maritime.

Pour comprendre l'écosystème ASN dans lequel s'inscrit le MMSI : [ASN / DSC sur la VHF marine : guide complet pour le CRR](/blog/education/asn-dsc-guide-complet-vhf-marine/).

## La structure d'un MMSI : 9 chiffres

Un MMSI est un nombre à **9 chiffres**, pas un de plus pas un de moins. La structure de ces 9 chiffres encode plusieurs informations.

### Les MMSI de navires (stations de plaisance et navires)

Pour un MMSI attribué à un navire, les 3 premiers chiffres forment le **MID** (Maritime Identification Digits), c'est-à-dire le code pays. Les 6 chiffres suivants identifient le navire à l'intérieur de ce pays.

**MID France** :

- **226** — France métropolitaine
- **227** — France métropolitaine (codes additionnels)
- **228** — France métropolitaine (codes additionnels)

Les départements et territoires d'outre-mer disposent de MID propres :

- **329** — Guadeloupe (région UIT 2)
- **345** — Martinique
- **347** — Guyane française
- **616** — Polynésie française
- **618** — Terres australes et antarctiques françaises
- **635** — Mayotte
- **660** — Réunion
- **642** — Saint-Pierre-et-Miquelon (selon classification UIT)
- **665** — Saint-Martin (côté français)
- **664** — Saint-Barthélemy
- **546** — Nouvelle-Calédonie
- **577** — Wallis-et-Futuna

(Cette liste reflète l'attribution UIT au moment de la rédaction ; vérifiez toujours les MID actualisés sur le site officiel de l'UIT pour les données précises.)

À l'examen CRR, retenir **226, 227, 228 = France métropolitaine** est essentiel. La connaissance des MID outre-mer peut être testée plus finement.

### Exemples de MMSI de navires

- **226 123 456** — un navire de plaisance immatriculé en France métropolitaine
- **227 987 654** — autre navire France métropolitaine
- **660 100 200** — un navire de plaisance à La Réunion

### Les MMSI de groupe

Un **MMSI de groupe** sert à appeler simultanément un ensemble de navires (régate, flottille, club). Sa structure commence par **0** suivi du MID puis de 5 chiffres :

- **0 + MID + 5 chiffres** → MMSI de groupe

Exemple : **0 226 12345** pour un groupe France.

Cette distinction (commençant par 0) doit être identifiée à l'examen CRR.

### Les MMSI de stations côtières

Les **stations côtières** (CROSS, Coastguard, etc.) ont un MMSI commençant par **00** suivi du MID puis de 4 chiffres :

- **00 + MID + 4 chiffres** → MMSI de station côtière

Exemple : **00 226 1000** pour une station côtière France métropolitaine.

À l'examen, vous pouvez être interrogé sur la distinction :

- 9 chiffres commençant par un chiffre non nul → MMSI de navire
- 9 chiffres commençant par 0 → MMSI de groupe
- 9 chiffres commençant par 00 → MMSI de station côtière

### Les MMSI d'aéronefs SAR

Les aéronefs de recherche et de sauvetage (Search And Rescue) ont des MMSI spécifiques commençant par **111**. Cette information apparaît parfois dans les questions de l'examen.

### Les MMSI de balises AIS-SART et autres dispositifs spéciaux

Les balises **AIS-SART** (transpondeurs de localisation pour radeaux de survie) ont des MMSI commençant par **970**. Les **MOB** (Man Overboard) ont des MMSI commençant par **972**. Les **EPIRB-AIS** ont des MMSI commençant par **974**.

Ces préfixes sont rarement testés en détail à l'examen CRR, mais leur existence fait partie du programme.

## Comment obtenir un MMSI en France

Pour les **plaisanciers français**, l'obtention d'un MMSI est encadrée par l'**ANFR**. Voici les grandes étapes :

### 1. Obtenir le CRR

Sans CRR, vous ne pouvez pas obtenir une licence de station équipée d'ASN. Le CRR est donc **prérequis** à la demande de MMSI pour une station ASN. (Pour des stations VHF non ASN, ce qui devient rare, une licence de station seule peut suffire.)

Pour préparer efficacement le CRR : [Comment réussir l'examen CRR du premier coup](/blog/education/comment-reussir-examen-crr-premiere-tentative/).

### 2. Demander la licence de station de navire

La **licence de station** est l'autorisation administrative permettant d'exploiter une station radio à bord d'un bateau. Elle est délivrée par l'**ANFR** sur dossier comprenant typiquement :

- Pièce d'identité du propriétaire
- Justificatif de propriété ou d'usage du bateau (acte de francisation, immatriculation)
- Inventaire des équipements radio à bord (VHF fixe / portable, AIS, etc.)
- Numéro CRR du titulaire

Le formulaire et la procédure sont disponibles sur le site de l'ANFR. La licence de station génère :

- Un **MMSI** unique attribué à votre navire ;
- Un **indicatif d'appel** (call sign) ;
- Un **numéro de licence** administratif.

### 3. Programmer le MMSI dans la VHF

Une fois le MMSI attribué, il doit être **programmé** dans votre VHF DSC. Selon les modèles, cette programmation est réalisable :

- Par l'utilisateur via le menu (avec souvent une **limitation** : la plupart des VHF n'autorisent la programmation MMSI **qu'une seule fois**, pour éviter les erreurs et les usages frauduleux). Une fois programmé, le MMSI ne peut plus être changé sans intervention SAV.
- Par un revendeur agréé qui peut reprogrammer le MMSI sur certaines VHF (en cas de revente du bateau, par exemple).

Programmer un MMSI fictif, ou utiliser un MMSI qui ne vous a pas été attribué, est **strictement illégal** et fait régulièrement l'objet de questions d'examen.

### 4. Frais

La licence de station ANFR pour la plaisance est généralement **gratuite ou à très bas coût** pour les bateaux de plaisance non commerciaux dont l'opérateur titulaire est CRR. Vérifiez les conditions tarifaires en vigueur sur le site officiel de l'ANFR.

### 5. Mise à jour

En cas de :

- **Changement de propriétaire** : mise à jour de la licence (nouveau titulaire, possiblement nouveau MMSI selon les cas) ;
- **Changement de bateau** : nouvelle licence pour le nouveau bateau ;
- **Changement d'équipement** : déclaration des nouveaux équipements ;
- **Vente du bateau** : la licence et le MMSI peuvent être transférés selon la procédure ANFR.

Ces obligations administratives sont parfois testées au CRR.

{% include blog-cta.html app_slug="crr" %}

## L'indicatif d'appel : héritage et usage actuel

L'**indicatif d'appel** (en anglais *call sign*) est un identifiant alphanumérique attribué par l'autorité nationale (ANFR pour la France) à toute station radio. Il existe depuis les premiers jours de la radio (Convention de Berlin 1906, puis convention de Madrid 1932) et continue d'être utilisé aujourd'hui malgré l'adoption du MMSI.

### Structure des indicatifs

L'UIT attribue à chaque pays une **série de préfixes** d'indicatifs. Pour la France, les principales séries sont :

- **F** suivi de chiffres et lettres (par exemple **F8AB**, **FA7BC**)
- **TM**, **TK**, **TH** et autres préfixes pour des cas spécifiques

Les indicatifs des navires de plaisance sont généralement attribués sous des séries dédiées par l'ANFR.

### Quand utiliser l'indicatif

Dans la pratique de la VHF marine de plaisance, **l'indicatif d'appel est rarement utilisé en première intention**. On préfère le **nom du navire** comme identifiant vocal courant. L'indicatif est néanmoins :

- Mentionné dans les **messages MAYDAY structurés** lorsqu'il est connu (voir [Procédures de détresse VHF](/blog/education/procedures-detresse-vhf-mayday-pan-pan-securite/)) ;
- Utilisé dans les **correspondances administratives** avec l'ANFR ;
- Utilisé en **HF** par les navires hauturiers ;
- Utilisé pour identifier formellement la station auprès des autorités étrangères.

### Indicatif vs MMSI

| Aspect | Indicatif | MMSI |
|---|---|---|
| Format | Alphanumérique (lettres et chiffres) | 9 chiffres |
| Origine | Convention de Berlin 1906, codifiée par l'UIT | UIT-R M.585, années 1990 |
| Usage principal | Identification vocale, correspondance officielle | ASN/DSC, AIS, identification numérique |
| Obtention | ANFR (avec licence de station) | ANFR (avec licence de station) |
| Changement | Rare, mais possible | Très rarement, programmation usine sur la VHF |

Les deux identifiants sont attribués **simultanément** lors de la délivrance de la licence de station ANFR.

## L'interaction MMSI / AIS

Le **Système d'Identification Automatique (AIS)** est une technologie complémentaire à la VHF DSC. Une station AIS émet régulièrement, sur deux canaux VHF dédiés (canaux 87B et 88B), des informations sur le navire :

- MMSI
- Position GPS
- Cap, vitesse
- Statut de navigation
- Nom du navire (selon classe AIS)
- Dimensions et type (selon classe AIS)

Toute station AIS dans la zone de portée VHF reçoit ces informations et les affiche sur son écran AIS ou son traceur de cartes.

Le **MMSI est l'identifiant central** d'une station AIS. Sans MMSI valide, l'AIS est inopérant. Pour un plaisancier équipé d'AIS (transpondeur classe B principalement), le MMSI est exactement le même que celui de sa VHF DSC : c'est le numéro unique du navire. Programmer deux MMSI différents pour la VHF et l'AIS du même bateau est une erreur grave.

L'AIS et l'ASN/DSC sont des technologies **complémentaires** :

- ASN/DSC : alerte numérique active (déclenchée par bouton ou commande), sur canal 70.
- AIS : diffusion passive permanente d'identité et position, sur canaux 87B/88B.

Les deux peuvent se déclencher en cascade : un MAYDAY ASN attire l'attention, et l'AIS permet aux sauveteurs de pister le navire en détresse pendant l'opération. Pour les balises AIS-MOB et AIS-SART : ce sont des dispositifs autonomes avec leur propre MMSI préfixé 970 ou 972.

## Le carnet d'adresses MMSI

Les VHF DSC modernes intègrent un **carnet d'adresses MMSI** où vous pouvez enregistrer les MMSI de vos contacts fréquents : autres bateaux du club, station côtière préférée, navire d'accompagnement, etc. Cela permet de lancer un appel routine ASN en sélectionnant le contact dans la liste plutôt qu'en tapant les 9 chiffres.

Pour les régates et flottilles, l'organisation peut publier un **MMSI de groupe** que tous les bateaux participants enregistrent. Un appel sur ce MMSI de groupe alerte simultanément tous les membres.

## Les pièges fréquents au CRR sur les MMSI

Voici les questions piégeuses qui reviennent dans les examens blancs :

1. **« Un MMSI a 9 chiffres » — Vrai.** Pas 8, pas 10. Toujours 9.
2. **« Le MID France est 226 » — Vrai pour la France métropolitaine, mais 227 et 228 sont aussi attribués.** Une question peut tester si vous savez qu'il y a plusieurs MID pour la France.
3. **« Un MMSI commençant par 0 est un MMSI de navire » — Faux.** C'est un MMSI de groupe.
4. **« Un MMSI commençant par 00 est un MMSI de groupe » — Faux.** C'est un MMSI de station côtière.
5. **« On peut programmer son MMSI sur sa VHF autant de fois qu'on veut » — Faux.** La plupart des VHF n'autorisent la programmation utilisateur qu'une seule fois, et la modification ultérieure passe par un revendeur agréé.
6. **« Le MMSI est le même que l'indicatif d'appel » — Faux.** Ce sont deux identifiants distincts, attribués ensemble par l'ANFR mais avec des formats et usages différents.
7. **« Une licence de station ANFR est nécessaire pour utiliser une VHF marine en France » — Vrai.** Elle s'obtient avec le CRR.

## Mémoriser les MMSI avec CRR Maritime

[CRR Maritime](/apps/crr/) propose plusieurs outils dédiés à la mémorisation des notions MMSI :

- **Leçon dédiée** sur la structure du MMSI, les MID, les groupes, les stations côtières.
- **Flashcards Leitner** sur les codes MID, les préfixes spéciaux (970, 972, 974), les structures de MMSI.
- **Quiz « MMSI et identifiants »** pour tester l'identification rapide d'un MMSI.
- **Questions d'examen blanc** intégrant les pièges classiques sur les préfixes 0 et 00, les MID outre-mer, les obligations administratives.

Pour planifier votre obtention de MMSI dans la foulée de votre CRR : [Permis bateau et CRR : quel ordre choisir ?](/blog/education/permis-bateau-crr-quel-ordre-choisir/).

Pour archiver les documents administratifs ANFR (formulaires, licences, attestations) hors-ligne, [Save as PDF](/apps/save-as-pdf/) est utile : ces documents sont fréquemment demandés en cas de contrôle. [The Done List](/apps/the-done-list/) aide à suivre les démarches administratives en parallèle de la révision (« j'ai envoyé le dossier ANFR », « j'ai reçu mon MMSI », « j'ai programmé la VHF »). Et [My Agenda & Planning](/apps/my-agenda-planning/) permet de bloquer les rendez-vous administratifs et les sessions de révision sur le même calendrier visuel.

## Foire aux questions

**Combien de temps faut-il pour obtenir un MMSI après une demande à l'ANFR ?**
Variable, mais comptez généralement **2 à 6 semaines** entre l'envoi du dossier complet et la délivrance officielle de la licence de station avec MMSI et indicatif. Anticipez votre demande si vous prévoyez une grande croisière à date fixe.

**Mon MMSI est-il valable à l'étranger ?**
Oui, le MMSI est un identifiant **international** géré par l'UIT. Un MMSI français (commençant par 226, 227 ou 228) est valable et reconnu partout dans le monde où le SMDSM est en vigueur. Vous pouvez utiliser votre VHF avec ce MMSI dans n'importe quelles eaux étrangères, à condition d'être titulaire du CRR (et de respecter les régulations locales additionnelles).

**Que se passe-t-il si je vends mon bateau ?**
La licence de station et le MMSI sont liés au bateau, pas à la personne. Lors de la vente, vous devez **prévenir l'ANFR**. Selon les cas, le MMSI peut être transféré à l'acheteur (qui devient titulaire) ou être conservé dans son équipement, ou être réattribué à un nouveau bateau. Les modalités précises évoluent : consultez la procédure en vigueur sur le site ANFR.

**Puis-je avoir plusieurs MMSI pour un même bateau ?**
Vous pouvez avoir un **MMSI principal pour la VHF DSC fixe** et un **MMSI distinct pour une balise AIS-SART** (préfixe 970) ou un **MMSI MOB** (préfixe 972) qui sont des dispositifs autonomes. Mais la VHF principale et l'AIS principal du bateau partagent généralement le **même MMSI**, qui est le MMSI du bateau.

**Est-il possible d'avoir un MMSI sans CRR ?**
Théoriquement, l'ANFR peut délivrer un MMSI pour une station VHF non équipée de DSC (« non ASN »), avec une simple licence de station. En pratique, les VHF non DSC sont devenues rares et l'ANFR encourage la généralisation du DSC. Pour exploiter une VHF DSC, le CRR est requis. Le cas « MMSI sans CRR » est essentiellement résiduel.

**Le MMSI peut-il être réutilisé si je change de bateau ?**
Selon les règles ANFR en vigueur. Généralement, le MMSI accompagne le **bateau**, pas le propriétaire. Si vous achetez un nouveau bateau, vous obtiendrez un nouveau MMSI pour ce bateau. Les modalités précises peuvent varier selon les évolutions administratives.

**Comment vérifier qu'un MMSI est valide et appartient bien à un navire donné ?**
L'UIT maintient une base de données mondiale des MMSI attribués (MARS — Maritime mobile Access and Retrieval System). Les autorités maritimes ont accès à cette base pour vérifier l'identité d'un navire à partir de son MMSI. Pour le grand public, plusieurs sites comme MarineTraffic et VesselFinder permettent de retrouver le nom et les caractéristiques d'un navire à partir de son MMSI, à condition que le navire émette en AIS et soit dans la couverture du site. Ces sites ne sont pas officiels mais utiles pour l'identification courante.
