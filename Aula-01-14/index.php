<?php
require_once './controleCarta.php';

$controle = new controleCarta();
$controle->inserir();

var_dump($controle->inserir());