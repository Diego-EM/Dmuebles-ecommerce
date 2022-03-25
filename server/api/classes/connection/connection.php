<?php
    class Connection {
        private $server;
        private $user;
        private $password;
        private $database;
        private $connection;

        function __construct(){
            $data = $this->getConnectionData();

            $this->server = $data->connection->server;
            $this->user = $data->connection->user;
            $this->password = $data->connection->password;
            $this->database = $data->connection->database;

            $uri = "mysql:host=" . $this->server . ";dbname=" . $this->database;

            try{
                $this->connection = new PDO($uri, $this->user, $this->password);
                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch(PDOException $e){
                echo "Connection failed: " . $e;
                die();
            }
        }

        private function getConnectionData(){
            $dir = dirname(__FILE__);
            $data = file_get_contents($dir . '/config.json');
            return json_decode($data);
        }

        public function getData($query){
            $req = $this->connection->prepare($query);
            $req->execute();
            $res = $req->setFetchMode(PDO::FETCH_ASSOC);
            return new RecursiveArrayIterator($req->fetchAll());
        }
    }
?>