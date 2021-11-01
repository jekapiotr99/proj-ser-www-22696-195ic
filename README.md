# proj-ser-www-22696-195ic

## Laboratorium nr.1 - "Praca z systemem kontroli wersji, podstawy WWW"

Projekt składa się z 4 plików html - odpowiednio przedstawiając każdą z utworzonych na potrzeby zadania stron. Odpowiednio mamy:
- index.html,
- form.html,
- list.html,
- podrecznik.html,

Oraz jeden plik css o nazwie style.css oraz jeden plik js odpowiadający za responsywność paska nawigacji.
Szkielet strony i template został zaczerpnięty z darmowych template'ów Bootstrap'a.

### **index.html - strona startowa**
Wspólnym elementem każdej ze stron będzie pasek nawigacyjny umieszczony na górze strony. Zawiera on odnośniki do pozostałych stron zawartych w projekcie. Strona główna zawiera jako tło stronę akademii *(każda strona będzie posiadała maskę, która sprawi że tło jest mniej wyraźne oraz kolor będzie bardziej pasował do paska nawigacji)* oraz numer laboratoria jak i moje dane.
![obraz](https://user-images.githubusercontent.com/56678518/139729251-035e70db-67d1-4b44-92f2-5bb2df891b0c.png)

Poniżej przycisk "Dowiedz się więcej" przeniesie nas w płynnej animacji do kolejnej części strony, gdzie możemy znaleźć karuzelę przedstawiającą wykorzystane w tym projekcie języki programowania.
![obraz](https://user-images.githubusercontent.com/56678518/139729297-61365cc9-c1ad-4abd-94ce-745c0e1b78d4.png)

### **form.html - strona z formularzem**
Każda strona będzie zawierać tematyczne tło, by ułatwić oraz uprzyjemnić użytkownikowi pracę na stronie. Na tej stronie, jako wybrana została sterta dokumentów. Strona składa się z wycentrowanego okna, które zawiera całą strukturę formularza. Formularz posiada pola na: Imię, Nazwisko, Adres itp. oraz składa się z checkbox'a i przycisku dodaj. Przycisk posiada event onClick, który aktualnie nie posiada żadnej funkcjonalności (nasz formularz się wyzeruje, lecz dane nie zostaną nigdzie przesłane).
![obraz](https://user-images.githubusercontent.com/56678518/139730232-de7c289d-ab3b-49a6-a05c-0fd9d985bc9d.png)

### **podrecznik.html - strona z podręcznikiem**
Strona ta zawiera przykładowe informacje odnośnie podstaw tworzenia funkcji w języku Python. Na stronie możemy znaleźć tekst oraz kod odnośnie tworzenia wspomnianych części kodu, jak i zdjęcie poglądowe oraz diagram kołowy przedstawiający popularność języków programowania w roku 2021. Wykres ten został utworzony za pomocą skrytu JavaScript z udziałem bilbioteki GraphJS. Warto wspomnieć, że kontener z tekstem posiada własny scrollbar co dodaje stronie nowoczesnego design'u.
Tekst wykorzystany przy tworzeniu tej zakładki został zapożyczony z książki: *"Uczymy się programować w Pythonie"* wydawnictwa Galicea. 
![obraz](https://user-images.githubusercontent.com/56678518/139731216-526404f9-b068-41b3-8aa1-5db7734e3f98.png)

### **list.html - strona z listem**
Strona ta zawiera przykładowy list. Na jego górze widzimy datę oraz miejsce napisanie listu, adresata jak i treść listu, która to została zapożyczona ze strony *lipsum.com*. 
![obraz](https://user-images.githubusercontent.com/56678518/139731289-f905b8f3-e10b-4eec-a0f2-1f7ea00541d8.png)

##### Strona i podstrony są responsywne w bardzo dużym stopniu - wszystko skaluje się wraz z zmniejszanie/powiększaniem się strony - pokazuje to nowoczesność utworzonej strony.




