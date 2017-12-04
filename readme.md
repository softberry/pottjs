# Falsches Spiel mit Roger Reddit
Dieses kleine Skript lädt Inhalte aus verschiedenen Subreddits, ohne das reddit.com aufgerufen werden muss. Das sieht die IT nämlich nicht so gerne. Rein technisch halten wir uns damit an die Regeln... aber leider wurde ein Kollege - der hier nicht namentlich erwähnt werden soll - dabei erwischt, wie er auf einem NSFW-Subreddit<sup>[1](#footnotensfw)</sup> unterwegs war.

## Le Problem
Um zukünftigen Ärger zu verhindern, muss also ein Filter eingebaut werden. Die Wahl zur Umsetzung fiel dabei zufällig auf Bernd, der daraus hoffentlich eine Lehre ziehen wird.

Da der komplette Code noch in jQuery (bäh!) geschrieben wurde, sollte er bei dieser Gelegenheit gleich in VanillaJS umgeschrieben und dabei grundlegend bereinigt werden.

## Aktueller Stand
Der aktuelle Zustand funktioniert nicht richtig und stellt den Stand dar, den Bernd zuletzt ins Repository gepusht hat. Wir alle wünschen ihm natürlich von ganzem Herzen gute Besserung und eine schnelle Genesung.  

Aber - hey - the show must go on, oder?

Grundsätzlich sieht der Code ja schon ganz gut aus, aber in der Praxis läuft nichts.  
Darum suchen wir jetzt freiwillige Helfer, die den Code wieder lauffähig machen.

## Deine Aufgabe
Die Seite hat früher folgendes getan:
 * Man konnte sich alle Postings mit Thumbnails aus einem beliebigen Subreddit anzeigen lassen. Wer Reddit nicht kennt:  http://reddit.com/r/funny/ ist das Subreddit "funny" und enthält lustige Bilder. Das Subreddit "nsfw_funny" enthält Bilder, wegen denen Bernd Ärger bekommt
 * Weil das Tool nur zum Anzeigen von Memes ausgelegt war, galt alles, was kein Bild enthielt, als irrelefant  
 * Unter jedem Thumbnail stand der Titel des Postings
 * Jedes Thumbnail war mit dem eigentlichen Bild verlinkt
 * Beim ersten Aufruf der Seite wurden die ersten 15 Einträger der Kategorie "hot" aus dem Subreddit "memes" geladen
 * Der Name des Subreddits konnte links eingetragen werden 
 * Die Anzahl an zu ladenden Posts konnte festgelegt werden
 * Innerhalb des Subreddits konnte zwischen den Kategorien "hot" ("Beliebt"), "new" ("Neu"), "top" ("Top") und "controversial" ("Kontrovers") gewählt werden
 * Nachdem alle Inhalte angezeigt wurden,  ließen sich diese nach Anzahl der "Upvotes", "Downvotes" und dem Alter des Postings sortieren
 * Die Seite muss in den aktuellen Versionen von Chrome, Firefox sowie Microsoft Edge laufen

 
Die Wünsche für die überarbeitete Version sind, dass alles wie früher funktioniert, aber:
- [x] ohne jQuery (das scheint Bernd grade so geschafft zu haben)
- [ ] Es muss sichergestellt sein, dass NSFW-Inhalte vor der Darstellung ausgefiltert werden. Das ist im Quellcode zwar schon drin, aber eine Filter-Funktion wäre vermutlich eleganter
- [ ] Sogenannte "Sticky"-Postings von Reddit sollen in der Liste nicht mehr angezeigt werden (dito: ist im Code, geht aber eleganter)

Im Moment bekommt man leider nur das Formular zum auswählen des Subreddits und eine Fehlermeldung in der Konsole.

Kannst du uns helfen?

## Kontakt
Du hast die Aufgabe gelöst oder noch Fragen?  
Schreib' uns - wir freuen uns, von Dir zu hören.

E-Mail: [jobs@add2.de](mailto:jobs@add2.de)  
Twitter: [https://twitter.com/add2de/](https://twitter.com/add2de)  
Facebook: [https://facebook.com/add2de/](https://facebook.com/add2de/)  
GitHub: [https://github.com/add2de/](https://github.com/add2de)
 

Viel Spaß,  
Dein add2-Team



------

<a name="footnotensfw"><sup>1</sup></a>: NSFW = "Not Safe For Work" = "Kram, den man sich besser nicht am Arbeitsplatz anschaut."