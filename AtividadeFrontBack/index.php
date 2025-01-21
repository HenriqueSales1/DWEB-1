<?php
require_once './userControl.php';

$uri = explode('/', $_SERVER['REQUEST_URI']);
$controlClass = ucfirst($uri[3]) . 'Control';
$method = $uri[4];
$output['status'] = 'undefined';

if (class_exists($controlClass)) {
    $control = new $controlClass();
    if (method_exists($controlClass, $method)) {
        $output = $control->$method();
    }
}
var_dump($_SERVER['REQUEST_URI']);
echo json_encode($output);