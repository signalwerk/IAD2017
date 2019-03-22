---
title: Lokalisierung · Internationalisierung
---

# Lokalisierung · Internationalisierung


## Intro


<style>


.example {
  background-color: #ddd;

  padding-top: 0.7rem;
  padding-right: 1.2rem;
  padding-bottom: 0.9rem;
  padding-left: 1.2rem;

  margin-top: 1rem;
  margin-bottom: .3rem;
}

.example--h1 {
  font-size: 3rem;
}

.example--rtl {
  text-align: right;
}

.example-wm.Text1 span, .example-wm.Text1 {
  writing-mode: horizontal-tb;
  -webkit-writing-mode: horizontal-tb;
  -ms-writing-mode: horizontal-tb;
}

.example-wm.Text2 span, .example-wm.Text2 {
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: vertical-lr;
}

.example-wm.Text3 span, .example-wm.Text3 {
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
}

.example-wm.Text4 span, .example-wm.Text4 {
  writing-mode: sideways-lr;
  -webkit-writing-mode: sideways-lr;
  -ms-writing-mode: sideways-lr;
}

.example-wm.Text5 span, .example-wm.Text5 {
  writing-mode: sideways-rl;
  -webkit-writing-mode: sideways-rl;
  -ms-writing-mode: sideways-rl;
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




## Unicode


::: margin

### Vorläufer
* Diverse Standards für verschiedene Betriebsysteme und Sprachregionen
* [ASCII](http://ascii-table.com/) diente für die ersten 127 Zeichen des späteren Unicode

### Unicode Version 1 <br />(Oktober 1991)
7161 Zeichen für insgesammt 24 Schriftsysteme wurden standardisiert.

### Unicode Version 12 <br />(März 2018)
137 993 Zeichen für insgesammt 150 Schriftsysteme wurden standardisiert.

:::

Das Unicode Konsortium wurde geschaffen um eine Standardisierung zu erreichen, welcher Wert/Zeichencode (Codepoint) welchem Schriftzeichen (Glyph) entspricht.


### Beispiel

* Wert 65 entspricht einem lateinischen A (Grossbuchstabe)
* Notation meist in Hex `U+0041`
* In HTML in DEC `&#65;` oder HEX `&#x41;` geschrieben.
* [Unicode Eintrag für A](http://unicode.org/cldr/utility/character.jsp?a=0041)


### Encoding

Beim Encoding wird festgehalten, wie der Codepoint abgespeichert wird.

### Verbreitete Encodings für Unicode
* [UTF-8](https://en.wikipedia.org/wiki/UTF-8)
* UTF-16 (nur verwenden, wenn UTF-8 nicht möglich)
* UTF-32 (nur verwenden, wenn UTF-8 nicht möglich)

### Beispiel
* A = BIN `01000001` in UTF-8 Encoding


### Falsches Encoding
<div class="example example--h1">
Wörter → Wˆrter

</div>
Encoding «Windows Latin 1» als «Mac OS Roman» interpretiert.


::: margin
### Noto
Der [Google-Font Noto](https://www.google.com/get/noto/) hat das Ziel alle Zeichen des Unicode-Standards in einem Font zugänglich zu machen. Der Name des Fonts sthet für für «No Tofu». Wobei Tofu hier den «replacement character» □ meint.
:::

<div class="example example--h1">
W□rter – W�rter
</div>


Wenn das Zeichen korrekt Encoded ist, jedoch der Font kein Glyph für das Zeichen hat, so werden so genannte «replacement characters» gezeigt.




## Übersetzungen
Übersetzungen werden meist gebraucht um eine verschriftliche Sprache in eine andere zu überführen. Dies kann heute durch Menschen oder durch Maschinen gemacht werden. Maschinelle übersetzungen sollten nur dort gebraucht werden, wo es keine Möglichkeit gibt einen Menschen mit dieser Aufgabe zu betrauen, da maschinelle Übersetzungen noch immer Fehlerhaft sind.

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

### US oder UK
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

### Deutschland

<div class="example example--h1">
„Hallo Welt!“  
</div>

<div class="example example--h1">
„Ich lese die Site ‚Typo-Nerd‘ täglich.“
</div>


### Französisch

<div class="example example--h1">
« Bonjour ! »  
</div>

<div class="example example--h1">
Jean a dit : « C'est la ‹ morale du film › »
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

### Laufrichtung des Textes
Je nach Sprache kann der Text in ganz verschiedene richtungen laufen. In den westlichen Sprachen wird häufig von links nach rechts gelesen. Entsprechend der Leserichtung ist auch die Abfolge der Elemente zu sortieren.

### left to right (ltr) und right to left (rtl)
Häufig wird von ltr oder rtl Sprachen gesprochen. Diese Abkürzungen stehen für die Anfangsbuchstaben des englischen «left to right» und «right to left».

<div class="example example--h1 example--rtl">
עברית
</div>
Hebräisch ist eine häufig verwendete rtl Sprache (Wortbedeutung: Hebräisch)



### vertikale Laufrichtungen
In heutigen Browsern lassen sich auch vertikale Laufrichtungen realisieren. Jedoch unterstützt nicht jeder Browser jeden Modus.

::: margin
Beispiel von [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
:::


<table>
  <tr>
    <th>CSS-Wert</th>
    <th>Vertikales Schriftystem</th>
    <th>Horizontales Schriftystem</th>
    <th>Gemischte Schriftysteme</th>
  </tr>
  <tr>
    <td>horizontal-tb</td>
    <td class="example-wm Text1"><span>我家没有电脑。</span></td>
    <td class="example-wm Text1"><span>Example text</span></td>
    <td class="example-wm Text1"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-lr</td>
    <td class="example-wm Text2"><span>我家没有电脑。</span></td>
    <td class="example-wm Text2"><span>Example text</span></td>
    <td class="example-wm Text2"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-rl</td>
    <td class="example-wm Text3"><span>我家没有电脑。</span></td>
    <td class="example-wm Text3"><span>Example text</span></td>
    <td class="example-wm Text3"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-lr</td>
    <td class="example-wm Text4"><span>我家没有电脑。</span></td>
    <td class="example-wm Text4"><span>Example text</span></td>
    <td class="example-wm Text4"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-rl</td>
    <td class="example-wm Text5"><span>我家没有电脑。</span></td>
    <td class="example-wm Text5"><span>Example text</span></td>
    <td class="example-wm Text5"><span>1994年に至っては</span></td>
  </tr>
</table>





## Sortierung
Für die Sortierung von Einträgen gibt es in ganz verschiedenen Kulturkreisen verschiedene Regeln. Sortierungen müssen von technischen Systemen unterstütz werden, da diese meist Automatisch gemacht werden.

### Deutscher Sprachraum
::: margin
Beispiele aus [Wikipedia](https://de.wikipedia.org/wiki/Alphabetische_Sortierung#Beispiel_f%C3%BCr_deutschsprachige_Sortierungen)
:::
Im deutschen Sprachraum alleine gibt es bereits drei Sortierungen.

* DIN 5007 Variante 1 = Lexikon
* DIN 5007 Variante 2 = Telefonbuch
* Österreichische Sortierung (Telefonbuch)



::::: grid fullsize

:::: col_4of12
<div class="example example--h1">

### DIN 5007 Variante 1
* Göbel
* Goethe
* Goldmann
* Göthe
* Götz

</div>

**ö = o**
::::

:::: col_4of12
<div class="example example--h1">

### DIN 5007 Variante 1
* Göbel
* Goethe
* Göthe
* Götz
* Goldmann

</div>

**ö = oe**
::::

:::: col_4of12_last
<div class="example example--h1">

### DIN 5007 Variante 1
* Goethe
* Goldmann
* Göbel
* Göthe
* Götz

</div>

**ö folgt auf o**
::::

:::::


## Personennamen & Titel

In vielen westlichen Ländern werden akademische Grade oder Auszeichnungen – wie zum Beispiel Doktor oder Hofrat (in Östereich gebräuchlich für höhere Beamte) – im Namen geführt. Da gewise Personen einen Wert darauf legen, sollte dies jeweils berücksichtigt werden.  
In Österreich gibt es zum Beispiel [über 1500](https://karriere.sn.at/karriere-ratgeber/fort-weiterbildung/wo-der-titel-regiert-28942096) Titel die per Gesetz geregelt sind.



![](./img/text/titel-small.png)

Beispiel der [Wiener Staatsoper](https://www.wiener-staatsoper.at/)




::: margin printonly
#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
März 2019: Erstellung  
:::


## Weiterführende Informationen

* [Zeichencode Standard](http://www.unicode.org/)
* [Sortierung](https://www.unicode.org/reports/tr10/tr10-38.html) [(→ siehe auch Wikipedia)](https://de.wikipedia.org/wiki/Alphabetische_Sortierung)
* [Normalisierung – ß = ss](http://unicode.org/reports/tr15/)
* [Quelle für Lokalisierung](https://www.unicode.org/cldr/charts/33/summary/root.html)
* [Typographizer](https://github.com/frankrausch/Typographizer)
* [W3C · Internationalization techniques: Authoring HTML & CSS](https://www.w3.org/International/techniques/authoring-html)

<br />
<br />
<br />
<br />


<div><!––
Textlänge
satzbreite
### Typografie
#### Wortlängen
### Beispiele
––></div>
