<?php
$vetor1 = array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
echo '<h1>Array 1 - Integers</h1>';
for ($i = 0; $i < count($vetor1); $i++) {
    echo $vetor1[$i] . ", ";
}

$vetor2 = array(10, 20.5, 'Lucas', 40, 50.21, 'Henrique', 70, 80, 90.35, 'Igor');
echo '<h1>Array 2 - Tipos diferentes</h1>';
for ($i = 0; $i < count($vetor2); $i++) {
    echo $vetor2[$i] . " ";
}

$vetor3 = array(10 => 10, 20.5, 'Lucas', 40, 50.21, 20 => 'Henrique', 70, 80, 90.35, 'Igor');
echo '<h1>Especificando indices</h1>';
foreach ($vetor3 as $i => $v) {
    echo $i, ': ', $v . " ";
}

$vetor4 = [
    'nome' => 'Lucas',
    'sobrenome' => 'Rocha',
    'idade' => 22,
];
echo '<h1>Array com chaves</h1>';
foreach ($vetor4 as $i => $v) {
    echo $i, ': ', $v . "<br>";
}

$v1['nome'] = 'Henrique';
$v1['sobrenome'] = 'Sales';
$v1['idade'] = 21;
echo '<h1>Array com chaves - Adicionando elementos</h1>';
foreach ($v1 as $i => $v) {
    echo $i, ': ', $v . "<br>";
}