let counter = 1;
const log = document.querySelector('#log');
const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');
const blackList = ['mousemove', 'mouseout'];

function logEvent(name, origin, value) {
  // Erstellt ein p
  const message = document.createElement('p');
  // Wenn der Wert existiert, wird der Wert mit ausgegeben
  if(value) {
    message.innerText = `${counter}: "${name}"-Ereignis durch ${origin} mit dem Wert ${value} ausgelöst.`;
  } else {
    message.innerText = `${counter}: "${name}"-Ereignis durch ${origin} ausgelöst.`;
  }
  // Fügt das p an den Anfang des Logs
  log.prepend(message);
  // Erhöht den Counter um 1
  counter++;
}

function registerEvents(element) {
  // Durchläuft alle Keys des Elements
  for(const key in element) {
    // Regex zum überprüfen ob der Key mit "on" beginnt
    if (/^on/.test(key)) {
      // Entfernt das "on" vom Key und speichert den Namen
      const eventName = key.slice(2);
      // Wenn die Blacklist den Eventnamen enthält, wird es der loop abgebrochen
      if(blackList.includes(eventName)) {
        break;
      }
      // Fügt einen EventListener hinzu, der das Event loggt
      window.addEventListener(eventName, (e) => {
        logEvent(eventName, e.target.nodeName ,e.target.value);
      });
    }
  };
}

// Regestiert alle Events für window
registerEvents(window);

// Verhindern, dass die Seite beim Abschicken des Formulars neu lädt und so die Logs verschwinden.
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
