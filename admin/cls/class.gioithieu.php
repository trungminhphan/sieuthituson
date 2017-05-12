<?php
class GioiThieu {
	const COLLECTION = 'gioithieu';
	private $_mongo;
	private $_collection;
	public $id = '58e60de87247ae180f00002a';
	public $banner = array(); //array('filename', 'aliasname', link);
	public $noidung = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(GioiThieu::COLLECTION);
	}

	public function edit(){
		$query = array('$set' => array(
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