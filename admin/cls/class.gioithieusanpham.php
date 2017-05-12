<?php
class GioiThieuSanPham {
	const COLLECTION = 'gioithieusanpham';
	private $_mongo;
	private $_collection;
	public $id = '58e611a07247aec00f00002e';
	public $banner = array(); //array('filename', 'aliasname', link);
	public $cachthucdathang = '';
	public $trothanhnhacungcap = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(GioiThieuSanPham::COLLECTION);
	}

	public function edit(){
		$query = array('$set' => array(
			'banner' => $this->banner,
			'cachthucdathang' => $this->cachthucdathang,
			'trothanhnhacungcap' => $this->trothanhnhacungcap
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