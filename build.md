<!--* 1. Usa BS per creare un layout VELOCE, concentrati sulla parte JS; -->

Stai creando il frontend di un'applicazione che mostra gli utenti provenienti da un API e li filtra. Questi sono i tuoi compiti:

<!--* 2. Mostra tutti gli utenti in una tabella BS partendo da questa API. Ricorda di usare ASYNC AWAIT: https://jsonplaceholder.typicode.com/users -->

<!--* 3. Crea un dropdown con 3 opzioni: 'nome', 'username', 'email'. Il dropdown sarà la tua prima parte del tuo filtro; -->

<!--* 4. Crea un input di testo. Quando l'utente scrive qualcosa in questo input, la rispota dell'API dovrebbe venir filtrata e renderizzata usando sia il valore dell'input che l'opzione selezionata nel dropdown. -->

Ad esempio, se l'utente ha selezionato 'email' sul dropdown, quando scrive nell'input, i risultati dovrebbero venir filtrati in base alla email ed al contenuto dell'input;

Se invece avesse selezionato 'username', i risultati vanno filtrati in base all'username e al contenuto dell'input.

Per fare questo ricordati di questa sintassi alternativa per gli oggetti:

Sintassi tradizionale > oggetto.proprietà;
Sintassi alternativa > oggetto['proprietà']

Questo significa che nelle parentesi quadre potete inserire una variabile o qualsiasi altro valore JS.

ES:
const proDaControllare = 'username'
oggetto[propDaControllare]
