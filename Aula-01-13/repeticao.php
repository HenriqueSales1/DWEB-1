<?php
echo '<h1>Laço for</h1>';
for($i = 0; $i < 10; $i++) {
    // echo $i . "\n";
    echo "$i: ", $i**2, "<br>";
}

echo '<h1>Laço while</h1>';
$i = 20;
while($i <= 30){
    echo "$i: ", $i**2, "<br>";
    $i++;
}