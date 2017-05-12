<?php
class SanPham {
	const COLLECTION = 'sanpham';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $ten = '';
	public $mota = '';
	public $hinhanh = '';
	public $hienthi = 0;
	public $id_nganhhang = array();
	public $id_loaisanpham = array();
	public $date_post = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(SanPham::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('date_post'=>-1));
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('date_post'=>-1));
	}

	public function get_sanphammoi(){
		return $this->_collection->find()->sort(array('date_post'=>-1))->limit(3);	
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
		$query = array(
			'ten' => $this->ten,
			'mota' => $this->mota,
			'hinhanh' => $this->hinhanh,
			'hienthi' => intval($this->hienthi),
			'id_nganhhang' => $this->id_nganhhang,
			'id_loaisanpham' => $this->id_loaisanpham,
			'date_post' => new MongoDate()
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'ten' => $this->ten,
			'mota' => $this->mota,
			'hinhanh' => $this->hinhanh,
			'hienthi' => intval($this->hienthi),
			'id_nganhhang' => $this->id_nganhhang,
			'id_loaisanpham' => $this->id_loaisanpham,
			'date_post' => new MongoDate()
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function delete(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->remove($query);
	}

}

?>