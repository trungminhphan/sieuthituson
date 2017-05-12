<?php
class NganhHang {
	const COLLECTION = 'nganhhang';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $banner = array(); //array(filename, aliasname, link)
	public $ten = '';
	public $thutu = '';
	public $hienthi = 0;

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(NganhHang::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('thutu'=>1));
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('thutu'=>1));
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
		$query = array(
			'banner' => $this->banner,
			'ten' => $this->ten,
			'thutu' => intval($this->thutu),
			'hienthi' => intval($this->hienthi)
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'banner' => $this->banner,
			'ten' => $this->ten,
			'thutu' => intval($this->thutu),
			'hienthi' => intval($this->hienthi)
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