# StreamFactionWebSite
Site de l'association Stream Faction développé dans le cadre d'un projet d'école

Charte de développement
-----------------------
Générales

	-Les noms de variables et de fonctions doivent être assez explicites.
	
	- Indentation doit être une seule tabulation correspondant à 4 espaces (Formatter : CTRL+K CTRL+F).
	
	- Pas de ligne vide, fin de page compris, sauf pour séparer les blocs de codes ou des variables.
	
Fichiers ou répertoires

		Pas de caractères accentués, 
		
		OUI /C# : underscore "_"
		NON /C# : ni espace " ", ni Majuscules , ni tiret "-"

		OUI NG : tiret "-" et CamelCase
		NON NG : ni underscore "_", ni espace
Images

	- Ne pas mettre les tailles et les autofermer
	- Pas de caractères accentués, ni espace, ni majuscules
	- Tiret acceptés
	- Si moins de 256 couleurs utiliser PNG8 sinon choisir le plus faible en taille entre PNG24 et JPG
	
TS

	Trier les Imports dans l'ordre alphabétique ou logique
	
HTML

	Auto-fermer les balises : <meta name="" content="" />
	
CSS/SASS

	- Trier les balises dans l'ordre alphabétique
	- (Règles : .toto { height: 100%; width: 100%; })
	
C#

	- Utiliser les classes en majuscule pour les types (String, Int32)
	- Utiliser que des String.Format ou StringBuilder pour des concaténation de chaine (jamais de "toto" + i)
	- Si Test d'une valeur Boolean, ne pas mettre "== true"
	
		NON => String sb = "Je m'appel "+ MonPrenom + ", et j'ai " + MonAge + "ans!"


		Oui =>
		String sb = String.Format("Je m'appel {0}, et j'ai {1} ans!",MonPrenom, MonAge) = "Je m'appel Ivan, et j'ai 34 ans"

		String sb = new StringBuilder();
		sb.append("Je m'appel ");
		sb.append(MonPrenom);
		sb.append(", et j'ai ");
		sb.append(MonAge);
		sb.append(" ! ");

		console.log(sb) =  "Je m'appel Ivan, et j'ai 34 ans"
