<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    require_once './controleCarta.php';

    $controle = new controleCarta();
    $lista = $controle->listar();

    var_dump($controle->inserir());

    foreach($lista as $carta){
        echo '<h2>';
        echo $carta['nome'];
        echo '</h2>';
        echo '<p>';
        echo $carta['descricao'];
        echo '</p>';
    }

    ?>

</body>

</html>