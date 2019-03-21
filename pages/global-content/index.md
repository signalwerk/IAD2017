---
title: Lokalisierung · Internationalisierung
---

# Lokalisierung · Internationalisierung


## Intro


<style>


.example {
  background-color: #ddd;
  padding: 0.7rem 1.2rem;
  margin-top: 1rem;
  margin-bottom: .3rem;
}

.example--h1 {
  font-size: 3rem;
}

</style>

### Lokalisierung (l10n)

::: margin
#### l10n
Lokalisierung wird oft als l10n geschrieben. 10 gibt dabei die Anzahl der Buchstaben zwischen l und n im englischen Wort «localization» ist. Gesprochen wird jedoch von Lokalisierung/localization.

:::

Mit «Lokalisierung» meint man den Vorgang, wie man Content und Produkte an einen Kulturkreis anpasst. Dazu können ganz verschiedene Anpassungen nötig sein.

Beispiele für Anpassungen bei der Lokalisierung:
* Sprache
* Wähnrung
* Kulturelle Referenzen
* Farben
* Zeitangaben

### Internationalisierung (i18n)

::: margin

#### l10n
Internationalisierung wird oft als i18n geschrieben. 18 gibt dabei die Anzahl der Buchstaben zwischen i und n im englischen Wort «internationalization» ist. Gesprochen wird jedoch von Internationalisierung/internationalization.

:::

Bei der «Internationalisierung» geht es darum ein System oder Produkt so zu gestalten, dass später eine Lokalisierung möglich ist.

Einige Beispiele für Internationalisierung
* Dimensionen ermöglichen – Ein System so bauen, dass mehrere Dimensionen – wie Sprache oder Land – möglich wird
* Fallbacks – Was geschieht, wenn ich nicht alle Inhalte in allen Dimensionen habe?
* Templating – Inhalt und Programmcode von einander abspalten. Inhalt sollte unabhängig vom Prgorammcode editiert werden können
* Views – Der selbe Inhalt sollte je nach Kulturkreis anders angezeigt werden. Beispiel Datum.


## Text

### Sprache, Land und Kultur
Text ist für die Lokalisierung meist in die jeweilige Sprache anzupassen. Jedoch genügt eine reine Sprachliche Anpassung nicht immer. So kann zum Beispiel in mehreren Ländern die selbe Sprache gelten aber andere Währungen. Somit ist eine weitere Dimension zu Pflegen. Auch lokale Referenzen und Vergleiche werden nicht überall gleich verstanden.


::: margin
#### Dimensionen
Beispiel einer Website um Flüge zu buchen. Es gibt drei Dimensionen der Lokalisierung:

* Region
* Sprache
* Währung
:::
![](./img/text/skyscanner.png)


::: margin
#### Individualisierung
Beispiel zur Konfiguration des MacOS 10.14 Betriebsystem

:::
![](./img/text/macOS_10.14.png)



## Schreibweise
Je nach Region können sich einzelne Wörter oder Schreibweisen durchgesezt haben. Dies ist bei einer Lokalisierung zwinden zu berücksichtigen. Nachfolgend einige Beispiele.


### ß oder ss
<div class="example example--h1">
Grösse: 80 m
</div>
Eine Schreibweise ohne «ß» wird in der Schweiz als normal erachtet. In Deutschland wird dies als Schreibfehler wahrgenommen.

<div class="example example--h1">
Größe: 80 m
</div>
Eine Schreibweise mit «ß» wird in Deutschland aber auch in der Schweiz als normal erachtet.

### UK oder US
<div class="example example--h1">
color gray
</div>
Die US-Schreibweise wird häufig auch ausserhalb von den USA in internationalen Medien verwendet.


<div class="example example--h1">
colour grey
</div>
Die UK-Schreibweise wird häufig in UK aber zum Teil auch im akademischen Umfeld benutzt.



## Vergleiche & Bezüge
Vergleiche sind sehr individuell für eine Kulturform und können nicht global verstanden werden. Sie unterscheiden Sich sogar innerhalb einer Kulturform zum gleich Massiv.

### Grössenvergleiche
Oft in populären Medien wird zum Veranschaulichen eine nicht [SI-Norm](https://de.wikipedia.org/wiki/Internationales_Einheitensystem) verwendet.

::: margin compact

#### Saarland
In Medien aus Deutschland oft mit der «Flächeneinheit» Saarland ein Vergleich gemacht. Im Nachbarland Schweiz ist hingengen nicht einmal allen Menschen  klar, dass Saarland ein Bundesland in Deutschland ist und sie haben kein Gefühl für dessen grösse.

:::

<div class="example example--h1">
«… ist etwa doppelt so groß wie das Saarland.»
</div>
~ 2570 km²


### Vorwissen

Je nach Publikum und Alter haben die Konsumenten eine andere Vorbildung und gewisse Bezüge funktionieren nicht mehr.

::: margin compact
#### Geschichte
Meist sind geschichtliche Referenzen nur dann zu verstehen, wenn Sie sehr bekannt sind oder in der eigenen Lebenszeit erlebt wurden.
:::
<div class="example example--h1">
«Noch während der chinesischen Kulturrevolution …»
</div>
~ 1966 – 1976

<div class="example example--h1">
«Noch während dem 2. Weltkrieg …»
</div>
~ 1939 – 1945



## Typografie
Die typografischen Regeln ändern sich von Land zu Land. Ein Beispiel sind Anführungs- und Schlusszeichen. Aber auch sonstige Regeln können in verschiedenen Ländern anders interpretiert werden.


### Schweiz
In der Schweiz werden die Anführungszeichen mit den so genannten Guillemets geschrieben:

<div class="example example--h1">
«Hallo Welt!»
</div>

Kommen innerhalb der Anführungszeichen weitere Anführungen vor, so kommen die einfachen Anführungszeichen zur Anwendung:

<div class="example example--h1">
«Ich lese die Site ‹Typo-Nerd› täglich.»
</div>


### Frankreich

<div class="example example--h1">
« Bonjour ! »  
</div>

<div class="example example--h1">
Jean a dit : « C'est la ‹ morale du film › »
</div>

### Deutschland

<div class="example example--h1">
„Hallo Welt!“  
</div>

<div class="example example--h1">
„Ich lese die Site ‚Typo-Nerd‘ täglich.“
</div>

### Englisch
In der englischen Sprache kommen die «Double quotes» zum Einsatz.

<div class="example example--h1">
“The best is yet to come.”
</div>

oder aber auch die «Single quotes»


<div class="example example--h1">
‘The best is yet to come.’
</div>







---
## Zeicheneinschränkung

Wörter → Woerter

---
## Rudolf → Ruedi → Rüdi
---
## STRAUẞ → Strauß
```notes
Deutscher Politiker der CSU ( † 1988 )
Franz Josef Strauß
```
---

## STRAUSS → Strauß
## STRAUSS → Strauss


```notes
im Pass immer mit SS oder auch in EN-Wiki
```



---
## Weitere Probleme


* ß → ss – Decomposing
* a → A &nbsp;– Case-Change
* a – z &nbsp;&nbsp;– Sortierung

```notes
Capital letters (Mtavruli)
```

---
# Alles klar?
---
## Sortierung

* DIN 5007 Variante 1 <br/> **ä = a**
* DIN 5007 Variante 2 <br/> **ä = ae**
* Österreichische Sortierung <br/> **ä folgt auf a**

```notes
* DIN 5007 Variante 1 = Lexikon
* DIN 5007 Variante 2 = Telefonbuch
* Österreichische Sortierung (Telefonbuch)
```















### Links:
## The Unicode Consortium
* [→ Zeichencode Standard](http://www.unicode.org/)
* [→ Sortierung](https://www.unicode.org/reports/tr10/tr10-38.html) [(→ siehe auch Wikipedia)](https://de.wikipedia.org/wiki/Alphabetische_Sortierung)
* [→ Normalisierung – ß = ss](http://unicode.org/reports/tr15/)
* [→ Quelle für Lokalisierung](https://www.unicode.org/cldr/charts/33/summary/root.html)
* [Typographizer](https://github.com/frankrausch/Typographizer)


Textlänge
satzbreite


### Übersetzungen

### Typografie
#### Wortlängen
Lokalisierte typografie

#### Text direction ltr rtl

### Beispiele

#### Titel & Ansprache
* Personennamen & Titel

####

# übersetzungen
Büro
Mechanical turk
machine translate


Noto






Unicode hilfe für schreibweise








Weiterführende Links


* [W3C · Internationalization techniques: Authoring HTML & CSS](https://www.w3.org/International/techniques/authoring-html)
