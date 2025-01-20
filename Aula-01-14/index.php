<?php
require_once './controleCarta.php';

$uri = explode('/', $_SERVER['REQUEST_URI']);
$classeControle = 'Controle' . ucfirst($uri[2]);
$metodo = $uri[3];
$saida['status'] = 'Sem ação';

if (class_exists($classeControle)) {
    $objetoControle = new $classeControle();
    if (method_exists($classeControle, $metodo)) {
        $saida = $objetoControle->$metodo();
    }
}

echo json_encode($saida);
/*
$controle = new controleCarta();
$controle->inserir();

var_dump($controle->listar());
*/