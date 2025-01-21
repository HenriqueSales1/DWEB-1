<?php
class Conexao
{
    private static $dsn = 'mysql:host=localhost;
    port=3306;
    dbname=atv2101';
    private static $user = 'root';
    private static $senha = 'root';
    private static $connection = null;

    private static function conectar()
    {
        if (self::$connection == null) {
            self::$connection = new PDO(
                self::$dsn,
                self::$user,
                self::$senha
            );
        }
    }

    public static function getConnection()
    {
        self::conectar();
        return self::$connection;
    }
    public static function preparaComando($sql)
    {
        self::conectar();
        $prepared = self::$connection->prepare($sql);
        return $prepared;
    }
}