URL aplikacije: https://yugioh-browser.onrender.com

Upute za lokalno pokretanje:
	- prvo unutar najvanjskog foldera "npm i"
   - unutar istog foldera "npm run dev"
   - stranica se pokreće na localhost:5173
      
Upute za pokretanje produkcijske verzije:
	- prvo unutar najvanjskog foldera "npm i"
   - unutar "server" foldera "npm i"
   - unutar najvanjskog foldera "npm run serve" ILI unutar server foldera "npm run start"
   - stranica se pokreće na localhost:5000
      
      
      
interpolation/one-way binding - Da, src/views/CardView.vue, u liniji 52 se ispisuje sadržaj varijable iz linije 10.
      
two-way binding - Da, src/components/CardList.vue, u liniji 85 je definirana dvostruka veza s inputom i varijablom "page", kada pomičemo slider na ekranu varijabla se mijenja, kada mjenjamo varijablu pomoću tipki slider se miče.

methods - Da, src/components/CardList.vue, u liniji 15 su definirane neke metode, primjerice za ići naprijed-natrag po stranicama liste.

computed properties - Da, src/components/CardList.vue, u liniji 57 su definirane metode za računanje koliko maksimalno stranica ima lista i za računanje koje karte se trenutno prikazuju.

barem jedan scoped style - Da, src/components/CardList.vue, od linije 90 na dalje.

koristiti barem jedan lifecycle hook - Da, src/components/CardList.vue, linija 54, zove metodu za dohvaćanje karti iz baze kad se stranica mount-a.

routing (više stranica) - Da, src/router/index.js, cijeli file.
	aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - Da, jer je node server podešen da svaki zahtjev preusmjerava na index.html.
	dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, src/router/index.js, linija 21-25.
      
(barem) dvije komponente - Da, u src/components.
	komponenta bez stanja, koristiti properties - Da, BigCard.vue preko propertiesa prima objekt karte te ju iscrtava.
	komponenta sa stanjem - Da, CardList.vue ima svoje stanje, npr. listu karata koja se promjeni kada dobije odgovor od baze podataka.
   
barem jedna komponenta mora emitirati barem jedan event - Da, klik na link od neke karte emitira event koji povećava counter broja klikova na karte, event. 
      Event se emitira u src/components/SmallCard.vue linija 22. Nakon toga, event hvata src/components/CardList.vue linija 18 i prosljeđuje ga na src/views/HomeView.vue koji se pretplatio u liniji 21.

store (Pinia) - Da, kada se emitira prethodno navedeni event, povećava se counter koji je globalno spremljen te ga onda homepage vidi i iscrta svježeg. 
      Spremanje i povećavanje countera je definirano u src/stores/counter.js, a koristi se u src/views/HomeView, linije 7-14.

asinkroni dohvat podataka s backenda - Da, koristio sam Firebase za pohranu karata, u src/firebase.js konfiguriram vezu, a u src/components/CardList.vue linije 22-39 dohvaćam karte.




