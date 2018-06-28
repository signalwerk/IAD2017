---
title: CSS · Einheiten
---
# CSS · Einheiten

::: TOC
**Content**
[[TOC]]
:::

<div class='header'></div>



## Veschiedene Arten von Einheiten

* fixe Einheiten (immer gleich)
* flexieble Einheiten (abhängig von Kontext)
* ohne Einheiten
* Mischung von Einheiten


## Gebräuchliche fixe Einheiten

### Fixe CSS-Einheiten für Screens
* `px` – Pixel (1 px = 1 Inch ÷ 96)

### Fixe CSS-Einheiten (nur für Druck!)
* `pt` – Punkt (1 pt = 1 Inch ÷ 72)
* `mm` – Millimeter (25.4 mm = 1 Inch)


## Pixel-Werte
```css
html {
  font-size: 16px;
  line-height: 24px;
}
h1 {
  font-size: 32px;
  line-height: 48px;
}
```

### Nachteil
* Verhältnis von Schriftgrösse und Zeilenabstand nicht intuitiv (muss errechnet werden)
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich



## CSS Values
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: 32px;
}
```

### Nachteil
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich



## Gebräuchliche flexieble Einheiten

* Dokumenteabhängige CSS-Einheiten
* Viewportabhängige CSS-Einheiten

## Dokumenteabhängige CSS-Einheiten
* `%` – Relativ zum Parent-Element
* `rem` – Entspricht der Schriftgrösse des Root-Elements (`HTML`)
* `em` – Entspricht der aktuellen Schriftgrösse des Elements

## Viewportabhängige CSS-Einheiten
* `vh` – 1% der Fensterhöhe (Viewport)
* `vw` – 1% der Fensterbreite (Viewport)
* `vmin` – 1% der schmaleren Fensterdimension (Viewport)
* `vmax` – 1% der grösseren Fensterdimension (Viewport)

# CSS Values
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: 32px;
}
```

### Nachteil
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich

# CSS Values
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: 2rem;
}
```

## Mischung

* `calc()` ermöglicht es verschiedene Einheiten im CSS zu mischen
* nur nutzen, wenn flexieble und variable Einheiten gemischt werden müssen

## Mischung

```css
html {
  font-size: 16px;
  line-height: 1.5;
}
.fullsreen {
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
}
```

# CSS Mediaquery

Je nach Eigenschaft des Ausgabemediums andere CSS-Definition



# Grössenabhängig

```css
@media screen and (min-width: 30em) {
  html {
    font-size: 16px;
  }
}
```
Mediaquery wird aktiv, wenn das Ausgabemedium ein Bildschirm ist und die Breite mehr als `30 rem` ist.

# Print

```css
h1 {
  color: red;
}

@media print {
  h1 {
    color: black;
  }
}
```
Mediaquery wird aktiv, wenn das Dokument gedruckt wird.


## Mobile first

```css
html {
  font-size: 12px;
  line-height: 1.5;
}
@media screen and (min-width: 30em) {
  html {
    font-size: 16px;
  }
}
```
Beim Aufbau von CSS-Formatierungen empfiehlt es sich vom kleinsten Screen aus zu gehen und die grösseren Screens als «Ausnahmen» zu sehen.


[→ MDN Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)







::: margin compact

:::
