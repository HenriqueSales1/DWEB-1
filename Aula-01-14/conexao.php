<?php
class Conexao
{
    private static $dsn = 'mysql:host=localhost;
    port=3306;
    dbname=dew2024';
    private static $usuario = 'root';
    private static $senha = 'root';
    private static $conexao = null;

    private static function conectar()
    {
        if (self::$conexao == null) {
            self::$conexao = new PDO(
                self::$dsn,
                self::$usuario,
                self::$senha
            );
        }
    }

    public static function getConexao()
    {
        self::conectar();
        return self::$conexao;
    }
    public static function preparaComando($sql)
    {
        self::conectar();
        $preparado = self::$conexao->prepare($sql);
        return $preparado;
    }
}

// var_dump(Conexao::getConexao());
