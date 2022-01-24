# proj-ser-www-22696-195ic

###  "Vue - aplikacja nr 2"

Projekt stworzony w Vue z wykorzystaniem Vue Router i Vuetify. <br>
Aplikacja stworzona za pomocą vue-cli

#### Routery:
Stworzone zostały 2 podstrony + strona główna która również musi mieć własny routes. Aby stoworzyć taką scieżkę należy
nadać temu obiektowy ścieżkę, nazwę oraz komponent do którego strona musi się odnosić. We wszystkich przypadkach Jako komponenty importujemy "strony" a raczej komponenty do poszczególnych podstron.

![obraz](https://user-images.githubusercontent.com/56678518/150840513-4edee749-6fc5-4efa-a592-789460768457.png)

#### Instalacja vuetify:
Ciekawą nowością była dla mnie automatyczna zmiana kodu po zainstalowaniu pakietu vuetify. Szkielet podstron wygenerowany przez vue-cli składał się z div'ów. Natomiast po instalacji 
wszystkie znaczniki zmieniły się na te, z Vuetify. 

Wygląd przed instalacją:

![obraz](https://user-images.githubusercontent.com/56678518/150841784-3562b857-5974-48b8-bd45-27c517176d48.png)

Wygląd po instalacji:

![obraz](https://user-images.githubusercontent.com/56678518/150841314-e18c1afb-4aa7-4d40-9c43-665803552116.png)

#### Pierwsza strona - home:
Pierwszym głównym komponentem dodanym do wszystkich stron jest pasek navbar z logiem Vuetify oraz z małym menu po prawej stronie.<br>
Stworzony przy pomocy komponentu `v-app-bar` i wykorzystuje `v-img`, które bedą przechowywać zdjęcia.<br>
Również wykorzystamy `v-spacer`, który oddzieli nam nasze dwa bloki `div`. <br>
Kolejnym nowym komponentem jest `router-link`, który w prosty sposób wykorzystujemy jako link na naszej stronie. Parametr `to` odzwierciedla standardowy `href`, lecz możemy wykorzystać w nim nasze routes.

Zawartość pierwszej strony opiera się na wykorzystanych komponentach:
- carousel, który składa się z:
  - v-carousel-item,
  - v-carousel,
- menu, który składa się z:
  - v-btn,
  - v-list,
  - v-list-item,
  - v-list-title

![obraz](https://user-images.githubusercontent.com/56678518/150840362-1a04e3bb-27de-44a7-829e-17b87e816776.png)

Zdjęcia jak i tytuły slajdów zapisane są w data w skrypcie zawartym na tej stronie. 

![obraz](https://user-images.githubusercontent.com/56678518/150843125-9f279073-6afd-4aa7-9952-ef30a23938d1.png)

#### Druga strona - Calendar:
Druga strona zawiera dwa główne komponenty - kalendarz i stopkę. 

![obraz](https://user-images.githubusercontent.com/56678518/150843448-b68d469d-8ff2-44db-9c7f-ed505256ad14.png)

Kalendarz składa się z takich komponentów jak:
- v-sheet,
- v-btn,
- v-icon,
- v-select,
- v-calendar

Stopka natomiast jak bardzo uniwersalnym rozwiązaniem, która znajduje się na wielu podstronach. Postanowiłem wykorzystać 
tą gotową stopkę i utworzyłem z niej własny komponent o nazwie Footer.vue. Dzieki temu rozwiązaniu możemy ją wykorzystać wielokrotnie jednym prostym importem.

Wykorzystane komponenty to:
- v-footer,
- v-card,
- v-card-text

![obraz](https://user-images.githubusercontent.com/56678518/150843858-ac72c6f1-8613-4c5e-a0e9-4649d860df9b.png)

Oddzieleniem kalendarza i stopki będzie kolejny komponent o nazwie `v-divider`, tworzy on poziomą linię oddzielające części naszej strony.

![obraz](https://user-images.githubusercontent.com/56678518/150844511-513504f7-e56e-4f9b-8448-fb58f7010e2a.png)

#### Trzecia strona - Lista:

Ostatnia strona zawiera rozsuwaną listę którą najcześciej widzimy w wszelakich QnA i innych tego typu treściach.
Wykorzystane W tej części komponenty to:
- v-expansion-panel,
- v-expansion-panel-header,
- v-expansion-panel-content

Druga część strony to przycisk który otwiera nam na dole strony wiadomość snackbar. Wykorzystany komponent w tej części to `v-snackbar`.

![obraz](https://user-images.githubusercontent.com/56678518/150845280-f6743468-56a5-48e5-9e86-60ccb4f4d099.png)

Informacje dotyczące zawartości przycisku, wiadomości snackbar jak i tekst rozwijanych paneli przechowywana jest w zmiennych w części skryptu komponentu.

![obraz](https://user-images.githubusercontent.com/56678518/150845484-a54f2731-b389-4ea1-81ff-0aa5566a8417.png)




