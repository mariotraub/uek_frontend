# 2.2

1. Entzippen Sie die angehängte Vorlagedatei und öffnen Sie das HTML in einem modernen Browser.
2. Öffnen Sie die Konsole der Entwicklertools (F12).
3. Benutzen Sie "getElementsByClassName" und "innerText" um den Namen der Hauptstadt auszugeben.
   ```javascript 
    document.querySelector("tr.voy-qb-item:nth-child(6) > td:nth-child(2) > a:nth-child(1)").innerText
   ```
4. Zählen Sie wie viele Regionen (Nordostbulgarien, ...) es gibt, indem Sie "getElementsByClassName" und "length" verwenden.
   ```javascript
   document.querySelector("div.voy-regionList:nth-child(3) > div:nth-child(2)").querySelectorAll("a").length
   ```
5. Geben Sie alle Namen "Klasse: p-name" der Einträge mit dem Attribute "data-group='nature'" auf der Konsole aus. Dazu soll querySelectorAll und forEach verwendet werden.
   ```javascript
   document.querySelectorAll("*[data-group='nature'] .p-name").forEach(elem => console.log(elem.innerText));
   ```
6. Geben Sie die Fläche von Bulgarien mit nur einem "querySelector" und "innerText" zurück.
   ```javascript
   console.log(document.querySelector("tr.voy-qb-item:nth-child(9) > td:nth-child(2)").innerText);
   ```