##


## Grundschrift
* Immer in `rem` definieren
* `html` mit `px` oder `%` definieren → Grundlage für `rem`
* `body` und alle anderen Schriftgrössen in `rem`

```css
html {
  font-size: 16px;
}

body {
  font-size: 1rem;
}
```

### Mobile first

```css
@media (min-width: 85rem) {
  html {
    font-size: 24px;
  }
}
```




```css

.container {
  max-width: 38em;
  margin:0 auto;
  padding:0 2.5%;
}


@media (min-width: 85rem) {
  .container {
    width: 65rem;
  }
}

```



https://internetingishard.com/html-and-css/web-typography/
