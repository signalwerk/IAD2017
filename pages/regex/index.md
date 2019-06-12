# Reguläre Ausdrücke · Grundlagen

## Grundlagen

<style>
td,
th {
  padding-right: 1rem;
}

td:last-child,
th:last-child {
  padding-right: 0;
}


</style>


### Konzept & Idee
::: margin compact
#### Quellen & Weitere Beispiele
* [Wikipedia · Regulärer Ausdruck](http://de.wikipedia.org/wiki/Regulärer_Ausdruck)
* [Wikipedia · regular expression](http://en.wikipedia.org/wiki/Regular_expression)
:::
Mit regulären Ausdrücken lassen sich Zeichenketten mit bestimmten syntaktischen Regeln beschreiben. Sie können als Filterkriterien in der Textsuche verwendet werden, indem der Text mit dem Muster des regulären Ausdrucks abgeglichen wird. So können Regeln definiert werden, die wesentlich flexibler sind als eine sture Suche nach einer fest vorgegebenen Zeichenfolge. In menschlicher Sprache ausgedrückt könnte zum Beispiel folgendes Suchmuster (Pattern) definiert werden: Suche alle Worte, die mit dem Zeichen `A` beginnen und dem Zeichen `r` enden (RegEx: `\bA[^ ]*r`).

### Geschichte
Reguläre Ausdrücke wurden 1956 vom Mathematiker Stephen Cole Kleene erstmalig beschrieben. Diese mathematische Notation (reguläre Mengen) entstammt der theoretischen Informatik und es handelt sich dabei um eine formale Sprache – also eine abstrakte Sprache, bei der nicht die Kommunikation im Vordergrund steht, sondern die mathematische Verwendung.

### Reguläre Ausdrücke, RegEx, GREP?
Es gibt diverse Begriffe, die stellvertretend für reguläre Ausdrücke verwendet werden. Häufig wird auch in der deutschen Sprache der englische Begriff «regular expressions» benutzt. Alternativ auch die Kurzform davon; «RegEx». Der Begriff GREP (auch: grep, Grep) steht für «global/regular expression/print» und entspringt dem Kommando `g/re/p` des Unix-Standardeditors «ed». Alle diese Begriffe lassen sich synonym verwenden und bezeichnen das selbe.

### Bedeutung & Implementierungen
Fast alle Programmiersprachen und Betriebssysteme (Konsole/Terminal) unterstützen heute reguläre Ausdrücke und seit den 1960er Jahren werden diese oft für Mustererkennungen (Suchbegriffe) in Texteditoren und zur lexikalischen Analyse in diversen Bereichen der digitalen Datenverarbeitung eingesetzt. Je nach verwendeter Implementierung (Programm) können kleine Abweichungen in der Verwendung, im Umfang oder der Notation auftauchen. JavaScript unterstützt Reguläre Ausdrücke seit [ECMAScript 3](https://www-archive.mozilla.org/js/language/E262-3.pdf) aus dem Jahr 1999 und seit dem weiter entwickelt.
Reguläre ausdrücke werden auch in der Bioinformatik eingesetzt. Ein Beispiel aus Wikipedia zeigt die Beschreibung eines Proteinmotivs:
`W-x(9,11)-[VFY]-[FYW]-x(6,7)-[GSTNE]-[GSTQCR]-[FYW]-R-S-A-P`




## Suchen


### Zeichen und Platzhalter
Als Zeichenliterale bezeichnen wir ein oder mehrere Buchstaben, die in einem Suchmuster enthalten sind. Der Buchstabe `a` – als Beispiel – findet nur den Buchstaben `a` und ansonsten keine weiteren Zeichen. Zusätzlich zu den expliziten Literalen gibt es noch den Punkt (`.`) als Platzhalterzeichen. Der Punkt findet jedes beliebige Zeichen. Möchte man einen Punkt suchen, so wird dieser mit einem sogenannten Escape-Zeichen (`.`) eingegeben. Neben den expliziten Zeichen gibt es noch weitere Platzhalter, welche eine spezielle Bedeutung haben. Hier einige Beispiele:


| RegEx | Findet             |
|-------|--------------------|
| `\d`    | Ziffer             |
| `\w`    | Buchstabe & Ziffer |
| `\s`    | Leerraumzeichen    |
| `\b`    | Wortgrenze*        |
| `$`     | Ende der Linie*    |
| `^`     | Anfang der Linie*  |


* Findet eine Position in einer Zeichenkette (auch: zero-width, zero-length)

::: grid fullsize

| RegEx    | Text                     | Findet          | Erklärung                                                                                                                                                       |
|----------|--------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `a`        | Hallo.                   | a               | Das `a` ist ein Zeichen ohne spezieller Funktion und wird somit auch im Text gefunden                                                                             |
| `\x{0061}` | Hallo.                   | a               | Zeichen können auch als Unicode-Wert angegeben werden (`U+0060` = `a`)                                                                                              |
| `.`        | Ja.                      | J, a, .   | Der Punkt dient als Platzhalter für alle Zeichen. Somit werden alle Zeichen gefunden.                                                                           |
| `.auch`    | Rauch<br/>Bauch<br/>auch | Rauch<br/>Bauch | Das Platzhalter Zeichen (`.`) findet sowohl ein `R`, wie auch ein `B`. Das Wort `auch` wird jedoch nicht gefunden, da das Platzhalterzeichen nicht gefüllt werden kann. |
| `\.`       | Hallo.                   | .               | Möchte man lediglich einen Punkt suchen, so wird dieser als `\.` gesucht.                                                                                         |
| `\\`       | \o/                      | \               | Back-Slash wird mit `\\` gefunden.                                                                                                                                |

:::


### Eckige Klammern, Bereiche und Negation
Eine Auflistung von alternativen Zeichen (Zeichenauswahl/Zeichenklasse) wird in Eckigen Klammern angegeben. Möchte man zum Beispiel nach einem `a` oder `b` suchen, so kann man dies als `[ab]` ausdrücken. Sollen ganze Mengen von Zeichen angegeben werden, so kann dies auch über eine `von–bis` Schreibweise getan werden. Also zum Beispiel findet `[a-d]` die Buchstaben `a`, `b`, `c` und `d` (positive Zeichenklasse). Ebenso lässt sich ein Zeichenauswahl definieren, die alle Zeichen ausser die angegebenen enthält. So umschreibt der Ausdruck `[^A-Z]` zum Beispiel alle Zeichen ausser die Zeichen `A` bis `Z` (negierte Zeichenauswahl/Zeichenklasse).





::: grid fullsize

| RegEx    | Text   | Findet         | Erklärung                                                                                            |
|----------|--------|----------------|------------------------------------------------------------------------------------------------------|
| `[a-zA-Z]` | Hallo? | H, a, l, l, o  | Findet alle Klein- und Grossbuchstaben nicht aber weitere Zeichen wie zum Beispiel das Fragezeichen. |


### Anwendungsbeispiel Platzhalter


| RegEx | Text                                 | Findet          |
|-------|--------------------------------------|-----------------|
| `Me.er` | Meier<br/>Meyer<br/>Maier <br/>Meder | Meier<br/>Meyer<br/>×<br/>× |


### Anwendungsbeispiel Zeichenklassen

| RegEx        | Text                                          | Findet                              |
|--------------|-----------------------------------------------|-------------------------------------|
| `M[ae][yi]er`  | Mayer<br/>Maier<br/>Meyer<br/>Meier<br/>Meder | Mayer<br/>Maier<br/>Meyer<br/>Meier<br/>× |
| `M[ae][^yi]er` | Mayer<br/>Maier<br/>Meyer<br/>Meier<br/>Meder | ×<br/>×<br/>×<br/>×<br/>Meder           |



:::



### Wiederholungsfaktoren
Wiederholungsfaktoren – auch Quantoren genannt – geben an, wie oft ein Ausdruck gefunden werden kann. Es können dabei exakte Wiederholungen (`{Anzahl}`), Bereiche (`{von,bis}`) sowie minimale Anzahl Fundstellen (`{von,}`) definiert werden.
Des weiteren können ganze Ausdrücke optional sein (`?`), beliebig wiederholt werden (`*`) oder minimal einmal wiederholt werden (`+`).


::: grid fullsize


| RegEx     | Text                                          | Findet                                        | Erklärung                                                                                                     |
|-----------|-----------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| `Hal{2}o`   | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | ×<br/>×<br/>Hallo<br/>×<br/>×                               | `l` muss exakt zweimal vorkommen.                                                                               |
| `Hal{2,3}o` | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | ×<br/>×<br/>Hallo<br/>Halllo<br/>×                    | `l` muss mindestens zweimal und maximal dreimal vorkommen.                                                      |
| `Hal{3,}o`  | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | ×<br/>×<br/>×<br/>Halllo<br/>Hallllo             | `l` muss mindestens dreimal vorkommen.                                                                          |
| `Hal?o`     | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | Hao<br/>Halo<br/>×<br/>×<br/>×                                  | `l` kann maximal einmal vorkommen, muss jedoch nicht vorkommen. Das Fragezeichen entspricht dem Ausdruck `{0,1}`. |
| `Hal+o`     | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | ×<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo    | `l` kann beliebig oft vorkommen, mindestens jedoch einmal. Das Plus entspricht dem Ausdruck `{1,}`.               |
| `Hal*o`     | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | Hao<br/>Halo<br/>Hallo<br/>Halllo<br/>Hallllo | `l` kann beliebig oft vorkommen, muss jedoch nicht. Das Asterisk entspricht dem Ausdruck `{0,}`.                  |

:::


### Gierige Wiederholungsfaktoren
Zu beachten ist, dass reguläre Ausdrücke grundsätzlich gierig (greedy) sind. Das heisst, dass immer die grösstmögliche Entsprechung gesucht wird. So findet ein Ausdruck wie `a.*z` alle Stellen die mit `a` beginnen und mit `z` enden ungeachtet dessen, ob vor dem letzten `z` weitere `z` stehen. Dieses Verhalten kann mit einem Fragezeichen (`?`) hinter einem Quantor unterbunden werden (Bsp: `.*?`).


::: grid fullsize


| RegEx | Text          | Findet         | Erklärung                                                                                         |
|-------|---------------|----------------|---------------------------------------------------------------------------------------------------|
| `h.*r`  | horrortheater | horrortheater  | Findet im Wort die längste Entsprechung, welche nicht `hor`, nicht `horr` und auch nicht `horror` ist.  |
| `h.*?r` | horrortheater | hor<br/>heater | Findet nun die kürzeste Entsprechung (`hor`). Aber auch `heater` wird in der weiteren Suche gefunden. |

:::


### Lookahead und Lookbehind
Über Lookahead und Lookbehind lassen sich Regeln definieren, die eine Abfolge von Suchausdrücken expliziter definieren.

::: grid fullsize


| RegEx                 | Text                    | Findet               | Erklärung                          |
|-----------------------|-------------------------|----------------------|------------------------------------|
| `(?<=a)b`               | ab<br/>bb<br/>aa<br/>ba | b<br/>×<br/>×<br/>×  | findet `b`, wenn davor ein `a` steht   <br/>(Positive Lookbehind) |
| `(?<!a)b`               | ab<br/>bb<br/>aa<br/>ba | ×<br/>bb<br/>×<br/>b | findet `b`, wenn davor kein `a` steht  <br/>(Negative Lookbehind) |
| `a(?=b)`                | ab<br/>bb<br/>aa<br/>ba | ab<br/>×<br/>×<br/>× | findet `a`, wenn danach ein `b` folgt  <br/>(Positive Lookahead) |
| `a(?!b)`                | ab<br/>bb<br/>aa<br/>ba | ×<br/>×<br/>aa<br/>a | findet `a`, wenn danach kein `b` folgt <br/>(Negative Lookahead) |

:::







### Gruppierungen, Alternativen und Rückwärtsreferenzen
Mit den runden Klammern können mehrerer Elemente in einem regulären Ausdruck gruppiert werden (`(Ausdruck)`). Somit können zum Beispiel Wiederholungsfaktoren (`*`,`+`,`?` usw.) auf ganze Gruppen angewendet werden oder aber zur späteren Wiederverwendung (Rückwärtsreferenzen) eingefasst werden (`\1`). Zudem können in Gruppen auch Alternativen vom restlichen Ausdruck abgetrennt werden (`(Alternative1|Alternative2)`).



::: grid fullsize

| RegEx                        | Text                                                       | Findet                                           | Erklärung                                                                                                                                                                                                                                                   |
|------------------------------|------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Test(rakete|flug|instrument)` | Testrakete<br/>Testflug<br/>Testinstrument<br/>Testreaktor | Testrakete<br/>Testflug<br/>Testinstrument<br/>× | Findet eine Zeichenkette die mit `Test` beginnt und dann mit `rakete`, `flug` oder `instrument` endet.                                                                                                                                                              |
| `(a)(n)\2\1`                   | anna<br/>nana                                              | anna<br/>×                                       | Findet zuerst ein `a` in einer Gruppe (1. Gruppe) und dann ein `n` welches in der zweiten Gruppe (2. Gruppe) gespeichert ist. Danach wird der Wert von Gruppe 1 und der Wert von Gruppe 2 über eine Rückwärtsreferenz (auch: backreferenc) noch einmal gesucht. |


### Anwendungsbeispiel

| RegEx       | Text                      | Findet  |
|-------------|---------------------------|---------|
| \b(.+)\b \1 | Und der der Baum war tot. | der der |

:::


### Ersetzen

Bei Ersetzungen von regulären Ausdrücken können entweder feste Zeichenketten oder aber wiederum Rückwärtsreferenzen eingesetzt werden.

::: grid fullsize


| RegEx    | Ersetzung | Text                             | Findet                           | Resultat                       |
|----------|-----------|----------------------------------|----------------------------------|--------------------------------|
| (.), (.) | $2 $1     | Page, Lawrence<br/>Knuth, Donald | Page, Lawrence<br/>Knuth, Donald | Lawrence Page<br/>Donald Knuth |

:::








<div class='header'></div>

::: margin printonly
#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
Dezember 2014: Erstellung  
Juni 2019: Erweiterung  


<br />
<br />
<br />
<br />
<br />
:::
