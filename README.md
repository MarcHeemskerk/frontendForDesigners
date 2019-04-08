# frontend voor designers

Dit is de [online url](https://x-track.github.io/frontendvoordesigners/) met de opdrachten om te kunnen bekijken en testen in een browser.
- [Markup cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Getting started with GitHub Pages](https://guides.github.com/features/pages/)

Het vak bestaat uit 3 opdrachten:

### 1. [OPDRACHT 1](https://x-track.github.io/frontendvoordesigners/opdracht1)

### 2. [OPDRACHT 2](https://x-track.github.io/frontendvoordesigners/opdracht2)

### 3. [OPDRACHT 3](https://x-track.github.io/frontendvoordesigners/eindopdracht)

&nbsp;
&nbsp;
&nbsp;

<pre>
hello, this is
   just an     example
....
</pre>

Met de eindopdracht hebben we met API's gewerkt ik hed een zonsondergang en zonsopgang API gebruikt

### [Gebruikte API](https://sunrise-sunset.org/api)

Ik haal de JSON file op en verwerk dit in 3 stappen.

#### Stap 1:
In de functie: function getSunsetSunrise,
haal ik eerst de tijd van nu op. En plaats deze in de url van de api.

Als de gebruiker zijn locatie nog niet bekend is haal ik die op via
navigator.geolocation.getCurrentPosition

Als de locatie van de gebruiker al bekend is gaat hij gelijk door naar de functie: function secondPart.

#### Stap 2:
In stap 2 heb ik een de juiste url klaar liggen voor de API op te halen. In dit gedeelte van de fucntie hoef ik hem alleen op te halen. Zodra de JSON is op gehaald stuurt hij de data mee naar de volgende functie: function controller.

#### Stap 3:
In de functie: function controller pak hij alleen de data uit de JSON die hij nodig heeft en stuur hij deze mee in de functie: function remainingTime als parameter. Ook heb ik aan het einde van de functie: function controller een interval gemaakt die om de seconde de functie: function remainingTime uitvoert. Dit is nodig voor de coundown.



#### Function remainingTime uitleg:

##### Data laten na dat video afgespeeld is:
Zoals je ziet in het begin van mijn website speeld een filmpje af. ik heb er voor gezorgd dat als hij klaar is pas de text inbeeld komt. door een lege return te geven aan het begin van de functie.

##### Verkeerde data uit de JSON:
Ik kwam in de loop van tijd tegen dat de JSON verkeerde data terug gaf dus ik heb uiteindelijk met behulp van parseInt dit kunnen veranderen naar de juiste gegevens.

##### Heel lang kijken naar de website:
Ook heb ik er voor gezorgd als iemand heel lang de website open heb dat hij op een gegeven moment ook zegd dat hij opnieuw de gegevens laad.

##### Alle verzaamelde datagoed zetten:
Het volgende wat er moest gebeuren is de alle verzamelde data goed zetten voor gebruik van de countdown. het format wat ik heb gebruikt is: ("Mar 29, 2019 6:08:21").

##### Laten zien wanneer de data Sunset of Sunrise moet weergeven:
Ik heb 2 if stakements gemaakt die checken of hij de coundown moet showen naar Sunset of Sunrise door de kijken welke coundown kleiner is ook heb ik in de else gezet dat hij alles even opnieuw moet checken. Als de gebruiker namenlijk 2 dagen lang zit te kijken klopt de data niet meer, omdat alle 2 de countdowns 0dagen 0uur 0minuten 0seconden zijn.

##### Achtergrond laten veranderen:
Ook heb ik er voor gezorgd dat de achtergrond veranderd aan de hand van de countdown. Deze images haalt hij uit een Array. Ik heb deze gelukt aan een parameter die ik mee stuur in de function.

##### KonamiCode
>Als easteregg heb ik de konami code toegevoegd op mijn website. De konami code is een van de eerste cheatcodes die is toegevoegd in een spel. Veel websites van tegenwoordig hebben de konami code op hun website.
