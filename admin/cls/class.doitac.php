<?php
class DoiTac {
	const COLLECTION = 'doitac';
	private $_mongo;
	private $_collection;
	public $id = '58e64b267247ae300f000029';
	public $banner = array(); //array('filename', 'aliasname', link);
	public $gioithieu = '';
	public $loiich = '';
	public $cachthuc = '';
	public $yeucau = '';
	public $dathamgia = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(DoiTac::COLLECTION);
	}

	public function edit(){
		$query = array('$set' => array(
			'banner' => $this->banner,
			'gioithieu' => $this->gioithieu,
			'loiich' => $this->loiich,
			'cachthuc' => $this->cachthuc,
			'yeucau' => $this->yeucau,
			'dathamgia' => $this->dathamgia
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