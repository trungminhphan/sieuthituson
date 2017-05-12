<?php
class LienHe {
    const COLLECTION = 'lienhe';
    private $_mongo;
    private $_collection;
    public $id = '58e7108332341c0c0a007572';
    public $diachi = ''; //array('filename', 'aliasname', link);
    public $dienthoai = '';
    public $email = '';
    public $noidung = '';

    public function __construct(){
        $this->_mongo = DBConnect::init();
        $this->_collection = $this->_mongo->getCollection(LienHe::COLLECTION);
    }

    public function edit(){
        $query = array('$set' => array(
            'diachi' => $this->diachi,
            'dienthoai' => $this->dienthoai,
            'email' => $this->email,
            'noidung' => $this->noidung
        ));
        $condition = array('_id' => new MongoId($this->id));
        return $this->_collection->update($condition, $query);
    }

    public function get_one(){
        $query = array('_id' => new MongoId($this->id));
        return $this->_collection->findOne($query);
    }
}
?>