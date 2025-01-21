<?php
require_once './connection.php';
class userControl
{
    public function insert()
    {
        $sql = 'insert into atv2101 (user, senha) values (?,?)';
        $user = filter_input(INPUT_POST, 'user');
        $senha = filter_input(INPUT_POST, 'senha');
        $prepared = Conexao::preparaComando($sql);
        $prepared->bindValue(1, $user);
        $prepared->bindValue(2, $senha);
        if ($prepared->execute()) {
            return ['status' => 'success'];
        } else {
            return ['status' => 'error'];
        }
    }
    public function list()
    {
        $sql = 'select * from atv2101';
        $prepared = Conexao::preparaComando($sql);
        if ($prepared->execute()) {
            $todos = $prepared->fetchAll(PDO::FETCH_ASSOC);
        }
        return $todos;
    }
}