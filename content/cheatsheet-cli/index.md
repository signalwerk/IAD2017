---
title: Cheatsheet · CLI
---
# Cheatsheet · CLI

::: TOC
**Content**
[[TOC]]
:::


## Navigation in Verzeichnis

* `cd ...` → in ein Verzeichnis wechseln (change directory)
* `ls` → inhalt im aktuellen Verzeichnis anzeigen

## Flags

* `ls` → inhalt im aktuellen Verzeichnis anzeigen
* `ls -l` → `ls` als Liste
* `ls -a` → `ls` zeigt versteckte Dateien
* `ls -l -a` → `ls` zeigt versteckte Dateien & als Liste
* `ls -la` → `ls` zeigt versteckte Dateien & als Liste


## Parameter
* `ls .` → `ls` aktuelles Verzeichnis
* `ls test` → `ls` vom Verzeichnis `test`
* `open test` → `open` von `test`


## History

* `history` → zeigt die letzten Befehle
* `Pfeil nach oben` → navigiert durch die history


## Verzeichnisse

* `cd test` → wechselt in Verzeichnis `test`  
* `cd ..` → wechselt in Parent-Verzeichnis
* `cd ~` → wechselt ins Benutzer-Verzeichnis


## Erstellen und Löschen

* `mkdir test` → Verzeichnis `test` erstellen
* `touch test.txt` → Datei `test.txt` erstellen

* `rm test.txt` → Datei `test.txt` löschen
* `rm -r test` → Verzeichnis `test` löschen


## Curl

* `curl -o index.html http://...` → Datei herunterladen und als `index.html` speichern


## Git

* `git clone ...` → Klonen eines Repositories
* `git status` → zeigt veränderte Files
* `git add test.txt` → fügt ein File zum Tracken hinzu
* `git commit -m Test` → macht einen Commit (Eintrag) mit dem Kommentar `Test`
* `git push origin` → Publiziert die Commits auf einen anderen Server namens `orgin`
