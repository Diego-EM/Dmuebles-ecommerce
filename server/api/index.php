<?php
    header( 'Access-Control-Allow-Origin: *');
    header( 'Access-Control-Allow-Methods: GET' );
    header( 'Access-Control-Allow-Credentials: true' );

    require_once "classes/connection/connection.php";
    $connection = new Connection();

    $search = $_GET['search'] ?? null;
    $id = $_GET['id'] ?? null;
    $categoria = $_GET['cat'] ?? null;


    // Get search results
    if (isset($search)){
        $query = "SELECT
            id,
            producto,
            precio,
            oferta
        FROM productos WHERE producto LIKE ':search%'"; 

        $response = $connection->getData($query,':search',$search);
        
        $searchArray = new RecursiveArrayIterator($response);
        $searchList = [];
        foreach($searchArray as $key=>$value) 
        {
            array_push($searchList, $value);
        }
        echo json_encode($searchList);
    }

    // Get product by id
    if(isset($id)){
        $query = "SELECT
            prod.id,
            prod.producto,
            prod.modelo,
            prod.descripcion,
            prod.precio,
            prod.oferta,
            prod.stock,
            prov.nombre,
            cat.categoria
        FROM ((productos prod
        INNER JOIN proveedores prov ON prod.id_proveedor = prov.id)
        INNER JOIN categorias cat ON prod.id_categoria = cat.id) WHERE prod.id = :id;"; 
        $response = $connection->getData($query,':id',$id);
        echo json_encode($response[0]);
    }

    //Get all products of one category
    if(isset($categoria)){
        if($categoria >= 7){
            $query = "SELECT id, producto, precio, oferta FROM productos WHERE oferta IS NOT NULL";
        } else {
            $query = "SELECT id, producto, precio, oferta FROM productos WHERE id_categoria = :categoria";
        }

        try{
            $response = $connection->getData($query,':categoria',$categoria);

            $productArray = new RecursiveArrayIterator($response);
            $productList = [];
            foreach($productArray as $key=>$value) 
            {
                array_push($productList, $value);
            }
            echo json_encode($productList);
        }
        catch(Exception $e){
            echo json_encode([
                'status'=>'error',
                'response'=>'Oops, an error has ocurred: Category is out of range'
            ]);
        }
    }
?>