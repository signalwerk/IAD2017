---
title: Parser · Grundlagen
---
# Parser · Grundlagen

## Was ist ein Parser?
::: margin compact
#### Quellen & Weitere Beispiele
* [Wikipedia · Parser](https://de.wikipedia.org/wiki/Parser)
:::
Ein Parser ist ein Stück Software, welches die Daten eines Input-Formats so interpretiert, dass nach dem Interpretieren der Computer damit arbeiten kann. Also aus einem «Transportformat» wird eine «Native» Repräsentanz erzeugt. Parser kommen in der Informatik in vielen Bereichen vor. Meist werden bei Schnittstellen zu einer Software Parser benötigt.

### Beispiel HTML

```html
<p>Hallo <em>Welt!</em></p>
```
<br />
Im Browser wird dieses Stück HTML eher in einer Baumstruktur benötigt. Somit ist im Speicher/DOM des Browsers eher so eine Repräsentanz nötig.

<br />
<br />

```yaml
dom:
- type: element
  tag: p
  children:
  - type: text
    value: Hallo
- type: element
  tag: em
  children:
  - type: text
    value: Welt!

```


### Weitere Beispiele
* Damit der PDF-Viewer ein PDF darstellen kann, wird der Inhalt der Datei geparst
* Eine JavaScript-Datei wird interpregiert (geparst), so dass sie später ausgeführt werden kann.



## Bestandteile eines Parsers
::: margin compact
#### Bestandteile Parser
* Lexer – lexikalischer Scanner
* Tokenizer – interpretieren von Einheiten
:::
Ein Parser ist oftmals in mehrere Arbeitsschritte aufgeteilt. Der «Lexer» interpretiert lexikalisch die eintreffenden Daten. Der «Tokenizer» grenzt ab, welcher Wert zu welchem Element gehört und am Schluss wird das gewonnene Model vom Interpreter verarbeitet.

### Beispiel Lexer HTML

```
< = Starttag
p = Tagname
> = Endtag
H = Text
a = Text
l = Text
l = Text
o = Text
  = Weissraum
.
.
.
```

### Beispiel Tokenizer HTML

```yaml
dom:
- type: element
  tag: p
  children:
  - type: text
    value: Hallo
...
```


## HTML Parser
::: margin compact
### HTML-Parser vs. Browser
Ein Parser für HTML zu schreiben ist relativ simpel. Aber ein voll funktionsfähiger Browser, der einsatztauglich ist, ist unglaublich komplex. Es gibt Weltweit nur eine handvoll Projekte, die dies gemacht haben.
:::
Die Parser, welche HTML interpretieren sind über Jahre gewachsen uns haben einen Beeindruckenden Funktionsumfang. Nicht nur HTML muss interpretiert werden, sondern diverse andere Teile müssen für den Renderer (Darstellung) verständlich gemacht werden. Dazu zählen  zum Beispiel:

* Bild-Parser (jpg, gif, ...)
* Font-Parser
* CSS-Parser
* JavaScript-Parser
* ...


#### Robustheit
HTML-Parser sind so programmiert, dass gewisse Fehler im HTML vom Browser aufgefangen werden können.

#### Beispiel Robustheit
Anstatt

```html
<p>Hallo <em>Welt!</em></p>
```
<br />

könnte auch eine fehlerhafte Eingabe vom Browser korrigiert werden:
<br />

```html
<p>Hallo <em>Welt!
```



### CSS Parser
Auch der CSS Parser ist sehr fehlertolerant geschrieben. Definitionen, die vom Parser nicht verstanden werden, werden einfach ignoriert und der Parser bricht nicht einfach ab. Dies ermöglich neuere CSS-Definitionen zu verwenden, die von alten Browsern ignoriert werden.

#### Fallback
Durch diese Robustheit können mehrere Definitionen für das selbe definiert werden. Zu beachten ist, dass immer der unterste Wert der interpretiert werden kann gewinnt.

```css
p {
  color: rgb(170, 21, 21);    /* CSS2 */
  color: hsl(0, 78%, 37.5%);  /* CSS Color Module Level 3 */
  color: lab(37, 57, 43);     /* CSS Color Module Level 4 */
}
```

<br />

Wird auf einem Browser, der nur [CSS 2](https://www.w3.org/TR/CSS2/colors.html#q14.0) kann so interpretiert:

```css
p {
  color: rgb(170, 21, 21);    /* CSS2 */
}
```
<br />

Wird auf einem Browser, der [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/#hsl-color) kann so interpretiert:

```css
p {
  color: hsl(0, 78%, 37.5%);  /* CSS Color Module Level 3 */
}
```
<br />

Wird auf einem Browser, der [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#specifying-lab-lch) kann so interpretiert:

```css
p {
  color: lab(37, 57, 43);     /* CSS Color Module Level 4 */
}
```

#### Prefix
::: margin compact
[Online Autoprefixer](https://autoprefixer.github.io/)
:::
Wenn Browser-Hersteller gewisse funktionen neu implementieren, machen sie dies zum Teil mit so genannten Prefix-Flags. Anstatt das effektive CSS welches im Standard (später) steht, nehmen Sie eine Version die mit dem Vendor-Name beginnt. Also zum Beispiel `webkit`.
In einer produktiven Umgebung wird das CSS meist «normal» geschrieben und die Prefixe werden automatisiert dazu gefügt.


```css
div {
  background: -webkit-gradient(linear, left top, left bottom, from(white), to(red));
  background: -webkit-linear-gradient(top, white, red);
  background: -o-linear-gradient(top, white, red);
  background: linear-gradient(to bottom, white, red);
}
```


### HTML Ladezeiten
* CSS loading
* Responsive Images

### Videos Laden
* Segmentieren/Scrub


::: margin printonly
#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
Juni 2019: Erstellung  


<br />
<br />
<br />
<br />
<br />
:::


## Weiterführende Informationen


### Geschwindigkeit einer Website
* [The Daily Egg – Speed](https://www.crazyegg.com/blog/speed-up-your-website/?fbclid=IwAR071e0G3wuavGTF5A5vv9Z9Dnmh7ebyKrcBi_5foIo44cwtb2ugp57bl8s)
* [WebPagetest](https://www.webpagetest.org/)


### Responsive Bilder
* [Responsive Image Breakpoints Generator](https://responsivebreakpoints.com/)
* [Responsive Images 101](https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/)
