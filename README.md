# frontend voor designers

Dit is de [online url](https://x-track.github.io/frontendvoordesigners/) met de opdrachten om te kunnen bekijken en testen in een browser.

- [Markup cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Getting started with GitHub Pages](https://guides.github.com/features/pages/)

Het vak bestaat uit 3 opdrachten:

## [opdracht 1](https://x-track.github.io/frontendvoordesigners/opdracht1)

## [opdracht 2](https://x-track.github.io/frontendvoordesigners/opdracht2)

## [Eindopdarcht](https://x-track.github.io/frontendvoordesigners/eindopdracht)


Met de eindopdracht hebben we met API's gewerkt ik hed een zonsondergang en zonsopgang API gebruikt

### [Gebruikte API](https://sunrise-sunset.org/api)

Ik haal de JSON file op dit doe ik in 3 stappen

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




#### function remainingTime uitleg:
Zoals je ziet in het begin van mijn website speeld een filmpje af. ik heb er voor gezorgd dat als hij klaar is pas de text inbeeld komt. door een lege return te geven aan het begin van de functie,

