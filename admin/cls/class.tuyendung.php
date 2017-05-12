<?php
class TuyenDung {
	const COLLECTION = 'tuyendung';
	private $_mongo;
	private $_collection;
	public $id = '58e65d217247aebc0f000031';
	public $tieude = '';
	public $banner = array(); //array('filename', 'aliasname', link);
	public $noidung = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(TuyenDung::COLLECTION);
	}

	public function edit(){
		$query = array('$set' => array(
			'tieude' => $this->tieude,
			'banner' => $this->banner,
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