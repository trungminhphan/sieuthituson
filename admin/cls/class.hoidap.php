<?php
class HoiDap {
	const COLLECTION = 'hoidap';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $hoten = '';
	public $dienthoai = '';
	public $email = '';
	public $cauhoi = '';
	public $hienthi = 0;
	public $date_post = '';

	public $traloi = '';
	public $nguoitraloi = '';
	public $ngaytraloi = '';
	public $thuonggap = 0;

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(HoiDap::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('date_post'=>-1));
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('date_post'=>1));
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function get_thuonggap(){
		$query = array('hienthi' => 1, 'traloi' => array('$exists' => true), 'thuonggap' => 1);
		return $this->_collection->find($query)->sort(array('date_post' => -1));
	}

	public function get_list_front(){
		$query = array('hienthi' => 1, 'traloi' => array('$exists' => true));
		return $this->_collection->find($query)->sort(array('date_post' => -1));	
	}

	public function insert(){
		$query = array(
			'hoten' =>$this->hoten,
			'dienthoai' => $this->dienthoai,
			'email' => $this->email,
			'cauhoi' => $this->cauhoi,
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate()
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'hoten' =>$this->hoten,
			'dienthoai' => $this->dienthoai,
			'email' => $this->email,
			'cauhoi' => $this->cauhoi,
			'hienthi' => intval($this->hienthi),
			'traloi' => $this->traloi,
			'nguoitraloi' => $this->nguoitraloi,
			'ngaytraloi' => new MongoDate(),
			'thuonggap' => intval($this->thuonggap)
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