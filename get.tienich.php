<?php
require_once('header_none.php');
$tienich = new TienIch();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$tienich->id = $id; $ti = $tienich->get_one();
if($ti){
	echo '<h5 class="widget-title" style="height:77px;">'.$ti['ten'].'<span></span></h5>';
	echo $ti['noidung'];
}
?>