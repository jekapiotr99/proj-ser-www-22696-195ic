# proj-ser-www-22696-195ic

Wygląd strony
![obraz](https://user-images.githubusercontent.com/56678518/150806916-614647ef-d4e9-4af0-a28f-13549a23e0ac.png)

Początkowo komponent Table.vue został utworzony w pliku html, natomiast po transformacji projektu za pomocą vue-cli stał się komponentem Table.vue.

### Wykorzystanie dyrektyw `v-if`, `v-on`, `v-for`, `v-bind`, `v-model`, 
![obraz](https://user-images.githubusercontent.com/56678518/150808306-24d4ace3-206c-4da7-acf2-7814ebc5037d.png)
- `v-if` - dyrektywa sprawdza, czy w naszej liście zakupowej znajdują się jakieś przedmioty, jeśi lista
jest pusta nie ma sensu jej renderować. 
- `v-else` - jeśli lista jest pusta przydałby się stosowny komunikat.

![obraz](https://user-images.githubusercontent.com/56678518/150808789-55a2274c-fce8-4103-98dd-60bc05f8ff53.png)

- `v-on` - dyrektywa pozwalająca na wykonanie czynności po wprowadzeniu/wciśnięciu przez użytkownika danego klawisza
w zadaniu wykorzystane jako:
  - wciśnięcie enter podczas wpisywania nazwy produktu powoduje zatwierdzenie formularza,
  - wciśnięcie kursorem w pole tekstowe powoduje jego wyczyszczenie,
  - wciśnięcie przecisku "dodaj przedmiot" powoduje zatwierdzenie formularza,
- `v-for` - pętla pozwalająca na wyświetlenie wszystkich elementów listy zakupowej,
- `v-bind` - dyrektywa ta pozwala nam na zapisanie atrybuty elementu DOM za pomocą vue,
- `v-model` - tworzy powiązanie między polami formularza.

### Użycie właściwości `data`, `methods`, `computed`, 

- `data` - 

![obraz](https://user-images.githubusercontent.com/56678518/150810012-2a9c5eb4-10dc-4c2b-924c-8d6bbb0b95be.png)

- `methods` - 

![obraz](https://user-images.githubusercontent.com/56678518/150810141-ae69d4ae-dc34-442e-9d28-8f8fc7251223.png)

- `computed` - 

![obraz](https://user-images.githubusercontent.com/56678518/150810188-4adde80a-74a9-47e2-bba1-ab495100387c.png)

### Dodawanie plików .css do wybranych komponentów

Dodanie pliku css zostało wykonane za pomocą importu w skrypcie umieszczonym w pliku Table.vue - kodzie źródłowym componentu Table. Oznacza to, że tylko on będzie mógł z tego pliku korzystać.

![obraz](https://user-images.githubusercontent.com/56678518/150810432-a5f1eb3d-f4f4-4aee-9605-d32c6baa60de.png)

### Wykorzystanie props

Props służa do przesyłania danych pomiędzy komponentami. W tym zadaniu wykorzystałem props do przesłania Nazwy głównego nagłówka z 
pliku Table.vue do Head.vue

![obraz](https://user-images.githubusercontent.com/56678518/150811406-7a28951d-05df-45c3-917c-6ae4b0366578.png)

### Wykorzystanie Bootstrap'a w aplikacji
Po zainstalowaniu bootstrapa do naszej aplikacji należy go zaimportować:
![obraz](https://user-images.githubusercontent.com/56678518/150811734-f96f1993-f5e2-4497-925f-1cf1afb62a6e.png)

Pozwali to na zmianę przycisku button na <b-button> który ma dodatkowe możliwości. Wykorzystałem właściwość variant który pozwoli mi 
zmienić np. kolor przycisku w zależności od wykonanej przez użytkownika czynności.

![obraz](https://user-images.githubusercontent.com/56678518/150812076-4bbdfdda-627c-4bba-8528-88cb19cb554c.png)

Jak możemy zobaczyć b-button wykozystuje v-bind z wartości variant, która jest ustawiana w kodzie przy wysyłaniu formularza.

![obraz](https://user-images.githubusercontent.com/56678518/150812491-0ade7504-a301-49d0-bc2d-b8e81cf4e608.png)

Początkowy stan przycisku:

![obraz](https://user-images.githubusercontent.com/56678518/150813177-acf9ec64-c243-4fe4-8022-4be8928dd8d1.png)

Stan przycisku po poprawnym dodaniu do formularza: 

![obraz](https://user-images.githubusercontent.com/56678518/150813297-3a941b63-e733-4156-9420-32c8b6b20723.png)

Stan przycisku po błędzie w formularzu: (brak nazwy przedmiotu)

![obraz](https://user-images.githubusercontent.com/56678518/150813393-172a468d-10cd-4ac6-abc4-230fa7b08038.png)