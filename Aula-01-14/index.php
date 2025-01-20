<?php
require_once './controleCarta.php';

$controle = new controleCarta();
$lista = $controle->listar();

var_dump($controle->inserir());