---
title: Fonts · Darstellung
---
# Fonts · Darstellung

::: TOC
**Content**
[[TOC]]
:::
<div class='header'></div>



## Darstellung von Fonts

### Vektor zu Pixel
Heutige Fonts bestehen meist aus Vektor-Daten, die dann für die Anzeige an einem Ausgabegerät in eine Pixel-Matrix umgesetzt werden müssen. Diese Umrechnung von Vektoren zu Pixel kann auf verschiedene Arten geschehen. Die dafür zuständige Software wird Renderer genannt und ist je nach Hersteller unterschiedlich und liefert für die selben Vektoren unterschiedliche Ergebnisse.


<br>
<br>
<br>

::::: grid fullsize
:::: col_6of12
::: grid w80p
![Buchstabe a als Outline](./img/normal/Arial_a_outline.png)
:::
#### Font als Outline
Microsoft Arial Unicode
::::
:::: col_6of12_last
::: grid w80p
![Buchstabe a als Pixel ohne Hinting](./img/normal/Arial_a_no_hint.png)
:::
#### 12 Pixel Höhe (PPM) – S/W
Gerendert werden alle Pixel die zu mindestens
50% innerhalb der Kontur liegen (ohne Hinting).
::::
:::::

<br>
<br>


### Auflösung
Je höher die Auflösung eines Buchstaben ist, um so klarer nähert sich die Pixel-Darstellung an die Vektorform an.
Eine höhere Auflösung pro Buchstabe kann erreicht werden, indem die Grösse des Buchstabens oder die Auflösung des Ausgabegeräts erhöht wird.

<br>
<br>


::: grid fullsize upscale
![Arial as in s/w gerendert](./img/Microsoft_BW_Arial_a_waterfall@10x.png)
#### MS-Renderer – S/W 8 bis 48 Pixel Höhe (PPM)
Microsoft Arial Unicode (mit Hinting)
:::

<div class='header'></div>

## Darstellung ohne Graustufen

:::: margin
::: grid w70p
![Textworte in Arial als s/w in 8–18px mit Microsoft Renderer](./img/Microsoft_BW_Arial_word_waterfall_8_18px@10x.png)
:::
### 8 bis 18 Pixel Höhe (PPM)
MS-Renderer – S/W  
Microsoft Arial Unicode
::::
Bei kleinen Schriften oder aber bei gewissen Display-Technologien kann es sinnvoll sein, Schrift nur mit S/W darzustellen.

<br>
<br>
<br>

::: grid upscale
![Textwort in Arial als s/w in 8px mit Microsoft Renderer](./img/Microsoft_BW_Arial_Hamburge_8px@10x.png)
:::
### 8 Pixel Höhe (PPM)
Microsoft Arial Unicode – MS-Renderer – S/W

<br>
<br>
<br>

::: grid upscale
![Textwort in Arial als s/w in 24px mit Microsoft Renderer](./img/Microsoft_BW_Arial_Hamburge_24px@10x.png)
### 24 Pixel Höhe (PPM)
Microsoft Arial Unicode – MS-Renderer – S/W

:::



### Unterschiede im Rendering
Bei der S/W-Darstellung von Schrift sind die Unterschiede zwischen verschiedenen Renderern viel weniger stark erkennbar als bei einer Darstellung mit Graustufen.


<br>
<br>
<br>





::::: grid fullsize
:::: col_4of12
::: w70p
![a in Arial als s/w in 13px mit FreeType Renderer – 2014](./img/FreeType_BW_Arial_a_13px@100x.png)
:::
#### FreeType-Renderer – S/W
13 Pixel Höhe (PPM) – Microsoft Arial Unicode
::::
:::: col_4of12
::: w70p
![a in Arial als s/w in 13px mit Microsoft Renderer – 2014](./img/Microsoft_BW_Arial_a_13px@100x.png)
:::
#### MS-Renderer – S/W
13 Pixel Höhe (PPM) – Microsoft Arial Unicode
::::
:::: col_4of12_last
::: w70p
![a in Arial als s/w in 13px mit Apple Renderer – 2014](./img/Apple_BW_Arial_a_13px@100x.png)
:::
#### Apple-Renderer – S/W
13 Pixel Höhe (PPM) – Microsoft Arial Unicode
::::
:::::



<div class='header'></div>



## Hinting
Über spezielle Instruktionen wird die Kontur einer Schrift so verformt, dass die Darstellung besser auf ein Pixel-Grid passt. Danach wird diese neue Kontur vom Renderer gerastert. Die Verformung ist auch so optimiert, dass zum Beispiel die x-Höhe über einen ganzen Font hinweg in allen Zeichen gleich hoch erscheint.



<br>
<br>


::::: grid fullsize
:::: col_4of12
### Font als Outline
Microsoft Arial Unicode

::::

:::: col_4of12
::: w80p
![Buchstabe a als Outline](./img/normal/Arial_a_outline.png)
:::
::::

:::: col_4of12_last
::: w80p
![Buchstabe a als Pixel ohne Hinting](./img/normal/Arial_a_no_hint.png)
:::
::::
:::::


<br>
<br>
<br>


::::: grid fullsize
:::: col_4of12
### Hinting – 12 Pixel Höhe (PPM)
Konturen werden optimiert für Rasterung.

::::

:::: col_4of12
::: w80p
![Buchstabe a als Outline mit Hinting](./img/normal/Arial_a_hint_outline.png)
:::
::::

:::: col_4of12_last
::: w80p
![Buchstabe a als Pixel mit Hinting](./img/normal/Arial_a_hint_render_microsoft.png)
:::
::::
:::::




<div class='header'></div>


## TrueType vs. PostScript
Da der Aufwand einen Font mit guten Hints (Anweisungen) zu versehen sehr gross ist, sind nicht alle Fonts gleich gut optimiert und somit auch in der Qualität der Anzeige extrem verschieden. Häufig werden Schriften, die vorwiedgend für den Druck gezeichnet wurden, lediglich über eine automatische Hinting-Funktion optimiert. Dies führt nicht zu der selben Qualität in der Anzeige, wie wenn die Instruktionen von Hand eingefügt wurden.
PostScript basierte Schriften (OpenType PS & PostScript Type 1) ermöglichen weniger genaues Hintig wie TrueType basierte Schriften (OpenType TT & TrueType).

<br>
<br>



### TrueType mit von Hand eingefügten Hints
Microsoft Arial Unicode



::::: grid fullsize
![TrueType a in Microsoft Arial 5 – 48](./img/Microsoft_BW_Arial_a_waterfall@10x.png)
Die Stammstärken des Buchstaben wachsen gleichmässig an.
:::::

<br>
<br>
<br>

### Autohints in PostScript
AMB Newut Medium

::::: grid fullsize
![PostScript a in AMB Newut Medium 5 – 48](./img/Microsoft_BW_Newut_a_waterfall@10x.png)
Stammstärken und Schriftlinie wirken nicht durchgehend.
:::::



<div class='header'></div>

## Darstellung mit Graustufen
:::: margin
::: grid w70p
![Textworte in Arial als Graustufe in 8–18px mit Microsoft Renderer](./img/Microsoft_gray_Arial_word_waterfall_8_18px@10x.png)
:::
### 8 bis 18 Pixel Höhe (PPM)
MS-Renderer – Graustufen  
Microsoft Arial Unicode
::::
Oft wird im Web und bei eBooks eine Darstellung der Schrift mit Schriftglättung gewählt. Die Schrift erscheint weicher aber auch besser lesbar. Charaktereigenschaften in Zeichen können mit Graustufen auch in einem Pixel-Raster mit wenig Auflösung relativ gut erahnt werden.


<br>
<br>
<br>


::: grid upscale
![Textwort in Arial als Graustufe in 8px mit Microsoft Renderer](./img/Microsoft_gray_Arial_Hamburge_8px@10x.png)
:::
### 8 Pixel Höhe (PPM)
Microsoft Arial Unicode – MS-Renderer – Graustufen

<br>
<br>
<br>

::: grid upscale
![Textwort in Arial als Graustufe in 24px mit Microsoft Renderer](./img/Microsoft_gray_Arial_Hamburge_24px@10x.png)
### 24 Pixel Höhe (PPM)
Microsoft Arial Unicode – MS-Renderer – Graustufen

:::





### Unterschiede im Rendering
Bei der Darstellung von Zeichen mit Graustufen wird je nach eingesetztem Renderer der Unterschied zwischen den einzelnen Technologien sehr deutlich sichtbar.



<br>
<br>
<br>





::::: grid fullsize
:::: col_4of12
::: w70p
![a in Arial als s/w in 13px mit FreeType Renderer – 2014](./img/FreeType_gray_Arial_a_13px@100x.png)
:::
#### FreeType-Renderer – Graustufen
13 Pixel Höhe (PPM) – Microsoft Arial Unicode
::::
:::: col_4of12
::: w70p
![a in Arial als s/w in 13px mit Microsoft Renderer – 2014](./img/Microsoft_gray_Arial_a_13px@100x.png)
:::
#### MS-Renderer – Graustufen
13 Pixel Höhe (PPM) – Microsoft Arial Unicode
::::
:::: col_4of12_last
::: w70p
![a in Arial als s/w in 13px mit Apple Renderer – 2014](./img/Apple_gray_Arial_a_13px@100x.png)
:::
#### Apple-Renderer – Graustufen
13 Pixel Höhe (PPM) – Microsoft Arial Unicode
::::
:::::

<div class='header'></div>


## Darstellung mit Subpixel-Rendering
Bei der Darstellung mit Subpixeln wird die Schrftglättung nicht nur über verschiedene Graustufen erzeugt, sondern auch noch der Vorteil ausgenutzt, dass ein Bildschirm in horizontaler Richtung eine dreifach grössere Auflösung besitzt, da die RGB-Darstellung über drei Farb-Zustände in horizontaler Richtung geschieht. Dadurch wird die Darstellungsqualität wesentlich verbessert.


::::: grid fullsize space3 upscale
:::: col_6of12
![Ohne Subpixel-Rendering](./img/normal/W-enlargement-subpixel-no-antialias.png)
Schematische Darstellung ohne Glättung
::: small
Bildquelle: [Subpixel-Rendering – Wikipedia](http://de.wikipedia.org/wiki/Subpixel-Rendering)
:::

::::
:::: col_6of12_last
![Mit Subpixel-Rendering](./img/normal/W-enlargement-subpixel-rendering.png)
Schematische Darstellung mit Subpixel-Rendering
::::
:::::


::: margin space3
### Apple-Renderer – S/W
Microsoft Arial Unicode – 12 Pixel Höhe (PPM)
:::
![Testwort ohne Subpixel-Darstellung](./img/Apple_BW_Arial_Hamburgefonts_12px@10x.png)

<br>

::: margin space3
### Apple-Renderer – Subpixel
Microsoft Arial Unicode – 12 Pixel Höhe (PPM)
:::
![Testwort mit Subpixel-Darstellung](./img/Apple_subpixel_Arial_Hamburgefonts_12px@10x.png)




<div class='header'></div>

## Farbige Fonts
Es gibt vier verschiedene Möglichkeiten, wie in einem OpenType-Font farbige Elemente definiert werden können. Abweichende «Standards» wurden jeweils separat von folgenden Parteien entwickelt;

* Microsoft (COLR/CPAL)
* Apple (SBIX)
* Google (CBDT/CBLC)
* Adobe/Mozilla (SVG)

Da es somit technisch kompliziert ist für einen Renderer alle vier Definitionen zu unterstützen, ist die Verbreitung von farbigen Fonts sehr gering. Betriebsysteme bieten üblicherweise einen farbigen Emoji-Font, passend auf das jeweilige Betriebsystem, an. Jedoch gibt es darüber hinau wenige Fonts, die diese Technologie nutzen, da es auch für Schriftgestalter technisch mühsam ist alle Standards zu unterstützen.

### Einfärben
<br>

![Emoji-Font und die verschiedenen Layer](./img/winemoji.png)

Einige Technologien unterstützen auch das Einfärben einzelner Layer oder Teile.

Bildquelle: [Typography.Guru – Color Emoji](https://typography.guru/journal/windows-color-fonts/)
<br>
<br>

### Fallback
::::: grid fullsize space2

:::: col_6of12

![Farbiger Font gerendert auf einem Renderer, der dies nicht unterstützt](./img/colorfontsFallback.png)

Farbige Fonts können nur von wenigen Programmen angezeigt werden. Renderer die Farbige Fonts nicht unterstützen zeigen lediglich die S/W-Version an.
::::

:::: col_6of12_last

![Farbiger Font](./img/colorfontsEnahnced.png)
::::

Ist der Renderer in der Lage die neuen Instruktionen im Font zu lesen, so kann die farbige Version angezeigt werden.
:::::





<div class='header'></div>

## Parametrische Fonts


Bei Parametrischen Fonts führen veränderte Input-Parameter zu anders erzeugten Fonts. Dieses Konzept gibt es seit spätestens 1984 als Donald Knuth mit Metafont ein System präsentierte, welches Fonts mit unbeschränkt vielen Parametern versehen lässt.

<br>

:::: margin
::: grid w80p
![Experimente mit metaflop.com](./img/metaflop.svg)
:::

<br>
Im Jahr 2012 entstand mit metaflop.com ein Font-Generator zum Erzeugen eines Fonts mittels Parametrischen eingaben. Einzelne Instanzen können als Font herunntergeladen werden.
::::
::: imageline
![Prototypo – Font-Generator](./img/Prototypo-new-UI.jpg)
:::
Im Jahr 2014 startete mit «prototypo.io» zum ersten mal eine leicht zugängliche und einfach zu bedienende Web-App zum modifizieren parametrischer Fonts. Mittels Schiebereglern kann ein zuvor von den Machern definiertes Font-Model angepasst werden und dann als Font herunntergeladen werden. Die Fonts können dann in eine Website eingebunden oder auf dem Desktop verwendet werden.
<br>
<br>

#### Interpolation für Websites
Im Jahr 2015 entstanden die ersten JavaScript-Experimente mit denen Fonts live im Web-Browser interpoliert wurden und dann für die Anzeige verwendet wurden. Somit konnte auf die Umstände der Anzeige (Bildschirmgrösse, Gerät, ...) reagiert werden. Dieses Konzept war jedoch technisch nicht ausgereift genug für produktive Systeme. Es war eher ein «proof of concept».

<br>


::: grid
![Anpassen von Fonts gemäss Fensterbreite](./img/InterpolationAll.png)
:::
Anpassen des Fonts je nach Fenstergrösse.

Bildquelle: [A List Apart – Live font interpolation](http://alistapart.com/d/412/interpolation/)






<div class='header'></div>

::: margin printonly
#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
Mai 2014: Erstellung  
September 2015: Erweiterung  
März 2017: Erweiterung  
Juni 2018: Erweiterung  
:::

## Weiterführende Informationen


### Subpixel-Rendering
* [Subpixel-Rendering – Wikipedia](http://de.wikipedia.org/wiki/Subpixel-Rendering)
* [Subpixel rendering: from font rendering to image subsampling](https://ieeexplore.ieee.org/document/6494674/)


### Fonts in Webfonts konvertieren
* [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator)

### Webfonts und Kompression von Webfonts
* [Web Open Font Format - Wikipedia](https://en.wikipedia.org/wiki/Web_Open_Font_Format)
* [WOFF File Format 1.0](http://www.w3.org/TR/WOFF/)
* [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/)
* [Google Developers Blog – WOFF 2.0](http://googledevelopers.blogspot.hu/2015/02/smaller-fonts-with-woff-20-and-unicode.html)

### Farbige Fonts
* [Pixelambacht – multicolor fonts](https://pixelambacht.nl/2014/multicolor-fonts/)
* [Color fonts from Adobe Type](https://color.typekit.com/)
* [OpenType-SVG color fonts](https://helpx.adobe.com/typekit/using/ot-svg-color-fonts.html)
* [Colorfont – JavaScript Solution](http://manufacturaindependente.com/colorfont/)
* [Typography.Guru – Color Emoji](http://typography.guru/journal/windows-color-fonts/)
* [OpenType - Wikipedia](https://en.wikipedia.org/wiki/OpenType#Color)

### Andere Renderings
* [Checkerboard rendering](https://en.wikipedia.org/wiki/Checkerboard_rendering)
