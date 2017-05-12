<?php
class TrangTienIch {
	const COLLECTION = 'trangtienich';
	private $_mongo;
	private $_collection;
	public $id = '';
	public $ten = '';
	public $banner = array(); //array('filename', 'aliasname', link);
	public $noidung = '';
	public $thutu = 0;
	public $hienthi = 0;
	public $date_post = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(TrangTienIch::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('thutu'=>1));
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('thutu'=>1));
	}

	public function insert(){
		$query = array(
			'banner' => $this->banner,
			'ten' => $this->ten,
			'noidung' => $this->noidung,
			'thutu' => $this->thutu,
			'hienthi' => $this->hienthi,
			'date_post' => new MongoDate()
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'banner' => $this->banner,
			'ten' => $this->ten,
			'noidung' => $this->noidung,
			'thutu' => $this->thutu,
			'hienthi' => $this->hienthi
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function delete(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->remove($query);	
	}
}
?>