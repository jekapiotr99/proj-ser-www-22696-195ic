# proj-ser-www-22696-195ic

## Laboratorium nr.3 - "Obsługa zdarzeń" cz. 1 - 9 zadań

#### Treść zadań rozwiązanych znajduje się pod linkiem (pierwsze 9 zadań) - https://github.com/kartofelek007/zadania/tree/master/2-rozne
1. W pierwszym zadaniu do obliczenia ilości słów wykorzystałem funkcję split oraz funkcji length która zwróciła mi ilość wykonanych splitów - fragmentów tekstu dzielonych przy pomocy whitespace'a.
2. Aby utworzyć poprawnę imię w drugim poleceniu, postanowiłem pociąć dany przez użytkownika tekst w sposób następujący - Pierwsza litera zamieniamy na duże litery, reszta string'a zamieniamy na małe litery.
3. Aby podzielić tekst wykorzystałem funkcję split z przerywnikiem ".".
4. Generator tekstu posiada zaimplementowaną "tablicę" (tak naprawdę ciąg znaków wszystkich liter i cyfr), dzięki czemu, żeby wylosować literę/cyfrę wystarczy wylosować indeks z zakresu od 0 do długości stringa oraz dopisać znak odpowiadający indexowi do przygotowanego uwcześnie stringa.
5. Aby wypisać po kolei liczby od 1 do n, gdzie n jest wpisaną przez użytkownika należy zastosować pętlę, która będzie sama iterować tę liczbę. Iterator ten, pozwoli nam kontrolować zakończenie działania pętli, ale również to jego będziemy wypisywać jako kolejne cyfry/liczby.
6. Do pobrania imion oraz zformowatowania go posłużyłem się funkcją z zadania nr. 2, następnie za pomocą switch'a stworzyłem string'i gotowe do wypisania dla użytkownika zgodnie z zaleceniami w poleceniu.
7. Do wygenerowania tych liczb posłużyłem się przygotowaną przez autora funkcją. Następnie w pętli dodałem wszystkie elmenty do tablicy. Przesukanie elementów również odbyło się z zastosowaniem pętli, gdzie po odnalezieniu liczby większej od 10, licznik zwiększał się.
8. Wygenerowanie tablicy liczb odbyło się analogicznie do poprzedniego zadania, a zadanie dodania dodatkowych przerw zostało wykonane za pomocą funkcji padStart
9. Zadanie to zrealizowane zostało z wykorzystaniem funkcji wbudowanych, gdzie funkcji string.split pozwoliła mi rozbić ciąg znaków na osobne elementy w tablicy, funkcja sort pozwoliła mi posortować tablicę, a funkcja join wykonała zadanie odwrotne do funkcji split

![obraz](https://user-images.githubusercontent.com/56678518/142063338-2fe9abd5-6953-4a08-bbb8-e4ea33690004.png)
