$(function () {

  // Utworzenie canvasu oraz nadanie mu dwu wymiarowości
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');

  // Nadanie canvasowi szerokości i wysokości okna
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Dodanie canvasu do selektora body
  document.body.appendChild(canvas);

  function rand(min, max, interval) {
    if (interval === undefined) interval = 1;
    return Math.round((Math.floor(Math.random() * (max - min + 1)) + min) / interval) * interval;
  }

  function randIndex(thearray) {
    return thearray[rand(1, thearray.length) - 1];
  }

  var player = (function () {

    // nadanie obiektowi (kostce która porusza gracz atrybutów jak: wielkość, prędkość pozycja startowa)
    var x = 100,
      y = canvas.height / 2,
      w = 10,
      h = 10,
      speed = 10,
      dead = false,
      death = 0;

    return {
      // dodanie getów, aby móc pobierać informacje o obiekcie player
      getX: function () {
        return x;
      },

      getY: function () {
        return y;
      },

      getW: function () {
        return w;
      },

      getH: function () {
        return h;
      },

      // funkcja, wykonuje się, gdy obiekt gracz dotknie przeszkody
      // sumuje śmierci
      die: function () {
        dead = true;
        ++death;
      },
      // get'er zwracający ilość śmierci
      getDeath: function () {
        return death;
      },

      // po śmierci, gracz może się odrodzić, pojawi się ona w punkcie startowym i będzie mógł się dalej poruszać
      resurrect: function () {
        this.moveTo(100, canvas.height / 2);
        dead = false;
        this.draw();
      },

      // po śmierci, wciśnięcie spacji powoduje wskrzeszenie gracza - przeniesie go do puntku starotowego
      // jeśli wygrał - doszedł do konca planszy, pojawia się następny poziom
      respawn: function () {
        this.moveTo(100, canvas.height / 2);
        this.draw();
        blocks.nextLevel();
      },

      // get'er zwaracający czy gracz żyje/ nie żyje
      isDead: function () {
        return dead;
      },


      draw: function () {
        ctx.fillStyle = "#50BEFA";
        ctx.fillRect(x, y, w, h);
      },

      // funkcja sprawdza czy gracz jest martwy - jeśli tak, to nic nie robi
      // jeśli nie, to przenosi gracza do wybranej w atrybutach funkcji lokalizacji
      moveTo: function (a, b) {
        if (dead) return;
        x = a;
        y = b;
        if (y + h > canvas.height) {
          y = canvas.height - h;
        }
      },
    }
  })();

  // blok odpowiedzialny za spawnowanie przeszkód
  var blocks = (function () {

    // ustawienia bloku odpowiadające za ich atrybuty takie jak: pozycja startowa na osi x, maksymalna i minimalna długość, maksymalna i minimalna prędkość oraz kierunek ich pojawiania
    var blocks = [],
      level = 0,
      level_factor = 1.20,
      start = {
        n: 10,
        x1: 210,
        x2: 700,
        h_min: 15,
        h_max: 100,
        speed_min: 0.5,
        speed_max: 5,
        direction: ['up', 'down']
      };

    // funkcja odpowiedzialna na unikalne tworzenie obiektów przeszkód
    function Block(direction) {
      this.w = 10;
      this.h = rand(start.h_min, start.h_max);
      this.x = rand(start.x1, start.x2, 10);
      this.y = 0;
      this.speed = rand(start.speed_min, start.speed_max);
      this.direction = direction;
      // jeśli obiekt przeszkody będzie poruszał się do góry, to jego pozycja startowa to wysokość canvasu + offset powodujący nierównomierne pojawienie się przeszkód
      if (direction === "up") {
        this.y = canvas.height + rand(5, 350);
      }
      // w innym przypadku pojawia się on na górze, z tym samym offsetem
      else {
        this.y -= rand(5, 350);
      }
    }

    return {
      // get'er zwracający liczbę, przedstawiającą aktualny poziom rozgrywki
      curLevel: function () {
        return level;
      },
      // funkcja, która w momencie ukończenia poziomu usuwa wszystkie poprzednie bloki i dodaje nowe
      nextLevel: function () {

        ++level;
        blocks = [];

        var n = Math.ceil(start.n + (level * level_factor));

        //console.log(n);

        this.createXBlocks(n);
      },

      // funkcja ustawiająca kolory dla poszczególnych stanów gry
      // #800000 - czerwony - stan przegrany
      // #D98D00 - pomarańczowy - stan neutralny
      draw: function (b) {
        if (player.isDead()) ctx.fillStyle = "#800000";
        else ctx.fillStyle = "#D98D00";
        ctx.fillRect(b.x, b.y, b.w, b.h);
      },
      // background całej gry
      drawZone: function () {
        ctx.fillStyle = "#111111";
        ctx.fillRect(start.x1, 0, start.x2 - start.x1 + 10, canvas.height);
      },

      // funkcja tworząca array z X ilością ruszających się przeszkód
      createXBlocks: function (n) {
        for (i = 0; i < n; ++i) {
          blocks.push(new Block(randIndex(start.direction)));
        }
      },


      moveAll: function () {

        var px = player.getX(),
          py = player.getY(),
          pw = player.getW(),
          ph = player.getH();

        if (player.isDead()) return;
        else if (px > start.x2) {
          //level pass
          ctrl.x = 0;
          ctrl.y = canvas.height / 2;
          ctrl.velX = 0;
          ctrl.velY = 0;
          player.respawn();
          return;
        }

        // pętla odpowiedzialna za ponowne ustawienie bloków, po skończeniu całej trasy ( od góry do dołu, bądź na odwrót )
        // jeśli skończy całą trasę - odczekaj pewien czas zależny od prędkości, po czym przenieś obiekt do miejsca startowego
        // z którego zaczynał, oraz dodaj ponownie offset zwiększający losowość gry
        var len = blocks.length;
        for (i = 0; i < len; ++i) {
          if (blocks[i].direction === 'up') {
            blocks[i].y -= blocks[i].speed;
            if ((blocks[i].y + blocks[i].h) < 0) {
              blocks[i].y = canvas.height + rand(10, 350);
            }
          }
          else {
            blocks[i].y += blocks[i].speed;
            if (blocks[i].y > canvas.height) {
              blocks[i].y = 0;
              blocks[i].y -= rand(10, 350);
            }
          }

          // detekcja kolizji sprawdzająca czy:
          // px i py - położenie na osi x i y gracza oraz położenie dowolnej przeszkody pokrywają się ze sobą.
          // jeśli tak, gracz umiera
          if (((px > blocks[i].x) && (px < (blocks[i].x + blocks[i].w))) &&
            ((py > blocks[i].y) && py < (blocks[i].y + blocks[i].h))) {
            player.die();
          }
          else if (((px + pw < (blocks[i].x + blocks[i].w)) && (px + pw > blocks[i].x)) &&
            ((py + ph < (blocks[i].y + blocks[i].h)) && py + ph > blocks[i].y)) {
            player.die();
          }

        }
      },
      // funckcja rysująca przeszkody w obszarze cavansu
      drawAll: function () {
        for (var i in blocks) {
          this.draw(blocks[i]);
        }
      },

    }
  })();


  var ctrl = {
    x: 100,  //initial x
    y: (canvas.height / 2),  // initial y
    velY: 0,
    velX: 0,
    speed: 1400, // max speed
    friction: 0.68, // friction
    keys: []
  }

  function updateCtrl() {


    // restart - jeśli gracz jest martwy, wciśnięcie przycisku z kodem 32 - spacji spowoduje zresetowanie gry
    // reset = gracza wraca na miejsce startowe oraz jego prędkość jest zerowana, po czym gracz odzysuje kontrolę nad grą
    if (ctrl.keys[32]) {
      if (player.isDead()) {
        ctrl.x = 0;
        ctrl.y = canvas.height / 2;
        ctrl.velX = 0;
        ctrl.velY = 0;
        player.resurrect();
      }
    }

    // warunki poruszania się gracza
    // w = ruch dodatni na osi Y, s = ruch ujemny na osi Y
    // a = ruch ujemny na osi X, d = ruch dodatni na osi X
    if (ctrl.keys[38] || ctrl.keys[87]) {
      if (ctrl.velY > -ctrl.speed) {
        ctrl.velY--;
      }
    }

    if (ctrl.keys[40] || ctrl.keys[83]) {
      if (ctrl.velY < ctrl.speed) {
        ctrl.velY++;
      }
    }
    if (ctrl.keys[39] || ctrl.keys[68]) {
      if (ctrl.velX < ctrl.speed) {
        ctrl.velX++;
      }
    }
    if (ctrl.keys[37] || ctrl.keys[65]) {
      if (ctrl.velX > -ctrl.speed) {
        ctrl.velX--;
      }
    }

    // apply some friction to y velocity.
    ctrl.velY *= ctrl.friction;
    ctrl.y += ctrl.velY;

    // apply some friction to x velocity.
    ctrl.velX *= ctrl.friction;
    ctrl.x += ctrl.velX;

    // Warunki zapewniające, że gracz nie wyjdzie poza granice gry
    // jeśli wyjdzie poza granice, zostaje cofnięty
    if (ctrl.x >= canvas.width) {
      ctrl.x = canvas.width;
    } else if (ctrl.x <= 5) {
      ctrl.x = 5;
    }

    if (ctrl.y > canvas.height) {
      ctrl.y = canvas.height;
    } else if (ctrl.y <= 5) {
      ctrl.y = 5;
    }

    player.moveTo(ctrl.x, ctrl.y);

    setTimeout(updateCtrl, 10);
  }

  updateCtrl();

  // Eventy zapewniające możliwy ruch gracza
  document.body.addEventListener("keydown", function (e) {
    ctrl.keys[e.keyCode] = true;
  });
  document.body.addEventListener("keyup", function (e) {
    ctrl.keys[e.keyCode] = false;
  });

  blocks.nextLevel();

  // Funkcja odświeżająca się co klatkę przesuwająca wszystkie ruchome elementy gry, co sprawia, że gra jest płynna
  function update() {
    blocks.moveAll();
  }

  // Funkcja odświeżająca się co klatkę, rysująca wszystkie elementy gry, sprawdzająca co klatkę, czy gracz jest żywy, oraz wypisująca level i ilość śmierci gracza
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    blocks.drawZone();
    blocks.drawAll();
    player.draw();

    if (player.isDead()) {
      ctx.fillStyle = "#9F000C";
      ctx.font = "12px Verdana";
      ctx.fillText("Koniec gry!", 10, 50);
      ctx.fillText("Naciśnij [Spacja]", 10, 70);
      ctx.fillText("aby kontynuować", 10, 90);
    }
    else {
      ctx.fillStyle = "#D98D00";
      ctx.font = "12px Verdana";
      ctx.fillText("Przedostań się na drugą stronę", 10, 20);
      ctx.fillText("-------------------------------------->", 10, 40);

      ctx.fillText("Aby grać wykorzystaj strzałki", 10, 60);
      ctx.fillText('albo "w" / "s" / "a" / "d"', 10, 80);


      ctx.fillText("Level : " + blocks.curLevel(), 10, 150);
      ctx.fillText("Śmierci : " + player.getDeath(), 10, 170);
    }
  }

  // funkcja służąca jako interwał symulujący powstanie klatek
  // klatka zawiera w sobie update wszystkich informacji o grze ( pozycje gracza, pozycje przeszkód, detekcje kolizji, czy gracz jest żywy oraz czy został wciśnięty przycisk poruszania się )
  // natomiast funkcja draw wyrysuje i wypisze wszystkie zaktualizowane informacje w naszym obszarze canvas
  // interwał został ustawiony na (1 sekunde / 60) co symuluje 60 klatek na sekunde
  setInterval(function () {
    update();
    draw();
  }, 1000 / 60);

});