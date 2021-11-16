# proj-ser-www-22696-195ic

## Laboratorium nr.3 - "Obsługa zdarzeń" cz. 2 - Event Listener'y

Do wykonania tego zdania posłużyła mi wcześniej utworzona strona, którą również wykorzystałem na potrzeby Laboratiorium nr 1
i 2.

Pierwszym zdarzeniem które obsłużymy będzie *mouseover* oraz *mouseout*. Po najechaniu kursorem na przycisk z napisem *"zmień kolor"*, przycisk ten
jak i jego ramka zacznie co 0,35s zmieniać kolor na nowy, losowo wygenerowany kolor. Jeśli użytkownik nie zdecyduje się na kliknięcie przycisku
wykona się kolejny Event Listener *mouseout*. Gdy użytkownik zjedzie kursorem z naszego przycisku, ten zakończy funkcję zmieniania kolorów,
a jego kolor czcionki wróci ponownie do koloru białego. 
![obraz](https://user-images.githubusercontent.com/56678518/142065838-6fea40f3-d594-4d4b-b484-f34691a68574.png)

Po wciśnięciu przycisku obsłuży się kolejne zdarzenie, tym razem *click*. Po wciśnieciu przycisku, kolor który miał przycisk w 
momencie klikania przeniesie się automatycznie jako nasz domyślny kolor w inpucie typu color.
![obraz](https://user-images.githubusercontent.com/56678518/142065888-0cce9e1a-98bf-4de8-bf0e-9b2d480a55b2.png)

Następnie obsłużony zostanie *mouseenter*, Po najechaniu na lewą część stopki, tekst o prawach autorskich zostanie z zamieniony linkiem
do github'a. Po zjechaniu kursorem z tej części stopki tekst wróci do pierwotniego tekstu dzięki zdarzeniu *mouseout*.

Przed najechaniem:

![obraz](https://user-images.githubusercontent.com/56678518/142065931-cd4638f0-552e-4901-a359-6558d59bd3df.png)

Po najechaniu:

![obraz](https://user-images.githubusercontent.com/56678518/142065987-0992056a-5779-4e44-8bee-f2f26cfbbe2d.png)

Za pomocą zdarzenia *onload*, wyświetlana zostanie w prawym dolnym rogu godzina. Czas będzie aktualizował się do sekundę, bez
wymaganego input'u użytkownika.

![obraz](https://user-images.githubusercontent.com/56678518/142066127-f045f9cc-248e-4c51-bab3-870353338e92.png)

Za pomocą zdarzenia keypress, dodana została funkcjonalność, pozwalająca na odtworzenie działania przycisku "Dowiedz się więcej" za
pomocą wciśnięcia przycisku na klawiaturze. Po wciśnięciu klawisza "S" odtworzona zostanie ta funkcjonalość.


Na potrzeby tego zadania została dodana nowa zakładka "Test". W tej zakładce mamy 4 pola, gdzie każda z nich będzie posiadać
inna funkcjonalność. 

- Pierwsze okno wykorzystuje zdarzenie *wheel*, które będzie się aktywować przy odczytaniu wykorzystania kółka myszki.
Kółko w górę sprawia, że przeźroczystość naszego kontenera się zwiększa, natomiast kółko w dół sprawia, że przeźroczystość
się zmniejsza.
- Następne wykorzysta zdarzenie *mousemove*, które sprawi, że nasze ruchy myszką po kontenerze wyświetlą koordynaty naszego kursora
względem całego okna strony.
- W lewym dolnym rogu za pomocą zdarzenia *keyup* sprawdzimy, jakie klawisze zostały wciśnięte przez użytkownika, oraz wyświetlimy
ciąg wciśniętych klawiszy.
- Ostatni kontener zawiera zdarzenie *copy*. Po skopiowaniu zawartości kontenera, tekst się zmieni.

![obraz](https://user-images.githubusercontent.com/56678518/142066453-bb9c6faf-e5a7-40ac-a95a-e401d95af397.png)