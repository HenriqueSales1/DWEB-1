<?php

function funcao1($msg){
    echo "mensagem: $msg";
}

funcao1('Teste');

echo '<br>';

$f2 = function (){
    echo "função anonima";
};

$f2();

echo '<br>';

$f3 = fn ($x) => $x ** 2;
echo $f3(3);