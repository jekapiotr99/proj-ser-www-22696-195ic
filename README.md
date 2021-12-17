# proj-ser-www-22696-195ic

## Laboratorium nr. 5 - "Asynchroniczny Javascript"


Tworzenie obiektu JSON z podwójnym zagnieżdzeniem: 
- pierwsze zagnieżdzenie - details,
- drugie zagnieżdzenie - address

![obraz](https://user-images.githubusercontent.com/56678518/146575692-f86d097a-aad8-4d7b-a044-f8cf9910728a.png)

####Callback - metoda ta jest przekazywana jako argument jednej funkcji, po czym jest wywoływana by wykonać jej ciało funkcji z parametrami funkcji rodzica

Callback 1:

![obraz](https://user-images.githubusercontent.com/56678518/146576386-076ec017-0360-450c-a775-60843bf35aba.png)

Callback 2:

![obraz](https://user-images.githubusercontent.com/56678518/146576878-6f45e7d0-0033-42bd-9df5-6d9e7f2d1076.png)

Wynik Callback 1 i 2:

![obraz](https://user-images.githubusercontent.com/56678518/146576820-9ab12a7f-4789-41eb-b6f3-9676b798544d.png)

####Promise - metody, których zadaniem jest sprawdzenie poprawności wywołania kodu oraz zwrócenie komunikatu, bądź wartości o poprawnym lub niepoprawnym wykonaniu kodu.
Kod Promise został wywołany jako metoda funkcji fetch która pobiera informacje o pliku json. Ma to na celu umożliwić
dostęp do zmiennych pobranego obiektu.

Promise 1:

![obraz](https://user-images.githubusercontent.com/56678518/146578495-b1973b37-a3c2-47fe-a07d-f270d2cdc116.png)

Promise 2:

![obraz](https://user-images.githubusercontent.com/56678518/146578712-56fd067b-d5c1-4706-9b76-312dfe3b7532.png)

Wynik Promise 1 i 2:

![obraz](https://user-images.githubusercontent.com/56678518/146578781-6222206a-bf2d-4b58-a46e-818fc5dd1d6b.png)

####await - operator używany w asynchronicznych funkcjach pozwalający na poczekanie na wynik metody Promise.

await 1:

![obraz](https://user-images.githubusercontent.com/56678518/146578947-b9ebc688-7e82-4277-8261-a6dad09777df.png)

await 2:

![obraz](https://user-images.githubusercontent.com/56678518/146578970-f928cdc3-f2cb-4748-b6e9-daf52a621b9c.png)

Wynik await 1 i 2:

![obraz](https://user-images.githubusercontent.com/56678518/146579022-2baffd38-8bb0-4a1c-90cd-69fb7ae16065.png)

#### Ajax pozwala stronie na asynchroniczne wymianianie się danymi z serwerem. Pozwala nam na aktualizacje zawartości strony bez jej odświeżania

Ajax 1:

![obraz](https://user-images.githubusercontent.com/56678518/146579189-860f9f97-c5d2-4832-9f4a-40da9c36bf1a.png)

Ajax 2:

![obraz](https://user-images.githubusercontent.com/56678518/146579218-3ff370ce-c1f2-4ac6-b223-7e53e875b85e.png)

Wynik Ajax 1 i 2:

![obraz](https://user-images.githubusercontent.com/56678518/146579257-2d763b2b-37c4-4755-9bef-b896f1eed358.png)

#### Fetch funkcja pozwalająca na asychroniczne pobieranie danych z całej sieci

Fetch 1:

![obraz](https://user-images.githubusercontent.com/56678518/146579571-bb22904a-1e94-488a-bd39-434c485e4694.png)

Fetch 2:

![obraz](https://user-images.githubusercontent.com/56678518/146579596-48308c1f-e244-439c-a63e-4df46877ade4.png)

Wynik Fetch 1 i 2:

![obraz](https://user-images.githubusercontent.com/56678518/146579847-3cd07119-2aaf-46af-906d-f83357d40a69.png)

#### Axios to zewnętrzny klient oparty o promise'y dla klienta HTTP node.js i przeglądarki. Po stronie serwera wykorzystuje node.js, natomiast po stronie klienta ( przeglądarki ) wykorzystuje XMLHttpRequests (AJAX)

Axios 1:

![obraz](https://user-images.githubusercontent.com/56678518/146580270-4ad547c5-342e-487d-b215-887511e7485e.png)

Axios 2:

![obraz](https://user-images.githubusercontent.com/56678518/146580305-1a718412-c9a3-4503-97cf-ed08ddb4bbb8.png)

Wynik Axios 1 i 2:

![obraz](https://user-images.githubusercontent.com/56678518/146580375-31a3e45e-cc22-4430-8c6f-f6a68ca615aa.png)


Wszystkie wyniki: 

![obraz](https://user-images.githubusercontent.com/56678518/146580437-4bf0f226-7d00-4fd3-b5b3-904eef811702.png)