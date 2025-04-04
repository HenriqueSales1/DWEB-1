<?php

require __DIR__ . '/vendor/autoload.php';

use Monolog\Level;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('logs.log', Level::Warning));

// add records to the log
$log->warning('Foo');
$log->error('Bar');

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/dist/styles.css" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <h1>Atividade 08 - Cartas</h1>
    </header>
    <main>
      <section>
        <div id="sec1">
          <img src="./img/joker.png" alt="" id="troca0" />
          <img src="./img/joker.png" alt="" id="troca1" />
          <img src="./img/joker.png" alt="" id="troca2" />
        </div>
      </section>

      <section>
        <div id="sec2">
          <img src="./img/1-paus.png" alt="" id="imagem0" />
          <img src="./img/2-paus.png" alt="" id="imagem1" />
          <img src="./img/3-paus.png" alt="" id="imagem2" />
          <img src="./img/4-paus.png" alt="" id="imagem3" />
          <img src="./img/5-paus.png" alt="" id="imagem4" />
          <img src="./img/6-paus.png" alt="" id="imagem5" />
          <img src="./img/7-paus.png" alt="" id="imagem6" />
          <img src="./img/8-paus.png" alt="" id="imagem7" />
          <img src="./img/9-paus.png" alt="" id="imagem8" />
          <img src="./img/10-paus.png" alt="" id="imagem9" />
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; Henrique Sales</p>
    </footer>
    <script src="./js/index.js" type="module"></script>
  </body>
</html>
