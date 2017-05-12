<?php
require_once('header_none.php');
if(isset($_POST['submit'])){
	$nganhhang = new NganhHang();
	$id = isset($_POST['id']) ? $_POST['id'] : '';
	$act = isset($_POST['act']) ? $_POST['act'] : '';
	$ten = isset($_POST['ten']) ? $_POST['ten'] : '';
	$thutu = isset($_POST['thutu']) ? $_POST['thutu'] : 0;
	$hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : 0;

	$arr_banner = array();
    $banner_aliasname = isset($_POST['banner_aliasname']) ? $_POST['banner_aliasname'] : '';
    $banner_filename = isset($_POST['banner_filename']) ? $_POST['banner_filename'] : '';
    $banner_link = isset($_POST['banner_link']) ? $_POST['banner_link'] : '';
    if($banner_aliasname){
        foreach ($banner_aliasname as $key => $value) {
            array_push($arr_banner, array('filename' => $banner_filename[$key], 'aliasname' => $value, 'link' => $banner_link[$key]));
        }
    }

    $nganhhang->ten = $ten;
    $nganhhang->thutu = $thutu;
    $nganhhang->hienthi = $hienthi;
    $nganhhang->banner = $arr_banner;

    if($act == 'edit'){
    	$nganhhang->id = $id;
    	if($nganhhang->edit()) transfers_to('nganhhang.html?msg=Chỉnh sửa danh mục thành công');
    } else {
    	if($nganhhang->insert()) transfers_to('nganhhang.html?msg=Thêm danh mục thành công');
    }
    
}
?>