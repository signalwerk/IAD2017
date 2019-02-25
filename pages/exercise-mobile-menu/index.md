---
title: Aufgabe · Mobile Menu
---

# Aufgabe · Mobile Menu


## Ausgangslage
In fast jedem Web-Projekt gibt es ein «Hamburger-Menü». Nun da die Studierenden in der lage sind einfache JavaScript-Arbeiten zu realisieren, kann ein Mobile-Menü mit «ausfahrendem» Inhalt realisiert werden.

### Termin
Am 18. Januar 2019 muss die Website mittels `gh-pages` online sein. Zusätzlich muss im Unterricht die Person und das Design kurz (5 min.) präsentiert werden.

## Aufgabe
Jede Person schreibt einen Text über eine bekannte «Internet-Persönlichkeit» im Umfang von etwa 1000 Zeichen. Quellen müssen korrekt und vollständig angegeben werden. Ein kritischer Umgang mit der Zuverlässigkeit der Quellen ist gefordert. Dieser Text soll als HTML-Dateien abgegeben werden. Bitte nur Text und Textstruktur verwenden. Keine Bilder, Videos, ... Plagiate werden mit der Note 1 bewertet. Für die Übersichtsseite muss zusätzlich ein Foto der Person im Format 1200 ✕ 900 px abgegeben werden. Bitte Quelle im Text deutlich vermerken. Lizenzen für Bild beachten!

Einige Personen, die man berücksichtigen könnte. Ich bitte [Frauen](https://en.wikipedia.org/wiki/Category:Women_Internet_pioneers) wo möglich zu bevorzugen:
* Marissa Mayer → Ex-CEO Yahoo!
* Chelsea Manning → Whistleblowerin
* Jen Simmons → CSS-Grids
* Lin Clark → Mozilla Hacks
* Lea Verou → CSS
* Becky Stern → Hacker & Maker
* Steve Jobs → Ex-CEO Apple
* Bill Gates → Ex-CEO Microsoft
* Larry Page → CEO Alphabet (google)
* Sergey Brin → President Alphabet (google)
* Jeff Bezos → CEO Amazon
* Donald E. Knuth → TeX & METAFONT
* Aaron Swartz → Internet hacktivist
* Vint Cerf → TCP/IP, ICANN, ...
* Douglas Engelbart → Hypertext, GUI, Maus
* Tim Berners-Lee → WWW
* Brendan Eich → JavaScript  
* Peter Sunde → The Pirate Bay, Flattr
* Julian Assange → WikiLeaks
* Edward Snowden → Whistleblower
* Glenn Greenwald → Journalist
* Lawrence Lessig → Creative Commons


## Seitenstruktur
Die ganze Klasse arbeitet in einem [Repository](https://github.com/logrinto/IAD2017.mobile-menu). Die Studierenden erstellen jeweils;

```
docs/{Nachname der Internet-Persönlichkeit}/
   ├── index.html      → html-File des Texts & Hamburger-Menü
   ├── styles.css      → Formatierung
   ├── script.js       → JavaScript
   ├── preview.jpg     → Bild der Person
   └── preview.md      → Quelle des Bildes
   ...
```

## index.html
Dieser Seite besteht aus Text und «Hamburger-Menü». Das selbe Menü wird auch auf Desktop angezeigt. Im Hamburger-Menü wird auf die jeweiligen Klassenkammeraden verlinkt. Die Link-Ziele und Texte weren am Tag der Abgabe eingefügt. Bitte mit 12 Dummy-Links (nicht nur Text) arbeiten. Das Markup (Code) muss möglichst minimal aufgebaut sein.

## style.css & script.js
Enthält die Formatierung und die Interaktion für die Seite.


## Bewertung

### Technik (40%)

* Die technischen Vorgaben sind eingehalten
* Code wird fehlerfrei ausgeführt (Chrome & Firefox)
* Die publizierten Inhalte sind technisch einwandfrei
* Responsive Ansicht ist gegeben

### Inhalt (20%)
* Wahl einer geeigneten Person
* Informationen übersichtlich und vollständig
* Inhaltliche Strukturen wurden geschaffen
* Texte erfüllen die Anforderung und sind vollständig
* Text wurde mit Sorgfalt verfasst (Quellen/Vollständigkeit)

### Führung/Menü (10%)
* Menüstruktur ist schlüssig und schnell zugänglich
* Menü wurde für Touch-Devices optimiert

### Grafisches Konzept (30%)
* Das Grafische Konzept der Seite ist schlüssig
* Grafische Sprache entspricht dem Inhalt
* Typografie überlegt eingesetzt
* Seitenarchitektur überlegt
* Zweckmässigkeit gegeben
* Wissensvermittlung gelungen
