<?php
class TrangChu {
	const COLLECTION = 'trangchu';
	private $_mongo;
	private $_collection;
	
	public $id = '58e5a4217247aec40f00002a';
	public $banner = array(); //array('filename', 'aliasname', link);
	public $video = array(); //array('link');
	public $thongtinhanghoa = array(); //array(filename, aliasname)

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(TrangChu::COLLECTION);
	}

	public function edit(){
		$query = array('$set' => array(
			'banner' => $this->banner,
			'video' => $this->video,
			'thongtinhanghoa' => $this->thongtinhanghoa
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function edit_banner(){
		$query = array('$set' => array(
			'banner' => $this->banner
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function edit_thongtinhanghoa(){
		$query = array('$set' => array(
			'thongtinhanghoa' => $this->thongtinhanghoa
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function edit_video(){
		$query = array('$set' => array(
			'video' => $this->video
		));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}
}

?>