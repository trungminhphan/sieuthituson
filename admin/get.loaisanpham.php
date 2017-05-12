<?php
require_once('header_none.php');
$loaisanpham = new LoaiSanPham();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';

if($act == 'del'){
	$loaisanpham->id = $id;
	if($loaisanpham->delete()) transfers_to('loaisanpham.html?msg=Xóa thành công');
}
if($act == 'edit'){
	$loaisanpham->id = $id; $t = $loaisanpham->get_one();
	$banner = '';
	if($t['banner']){
		foreach($t['banner'] as $b){
			$banner .= '<div class="items form-group">
                <div class="col-md-6"><input type="text" name="banner_link[]" value="'.$b['link'].'" class="form-control" placeholder="Liên kết"></div>
                <div class="col-md-6">
                <div class="input-group">
                        <input type="hidden" class="form-control" name="banner_aliasname[]" value="'.$b['aliasname'].'" readonly/>
                        <input type="text" class="form-control" name="banner_filename[]" value="'.$b['filename'].'" readonly/>
                        <span class="input-group-addon"><a href="get.xoahinhanh.html?filename='.$b['filename'].'" onclick="return false;" class="delete_file"><i class="fa fa-trash"></i></a></span>
                    </div></div></div>';
		}
	}
	$hienthi = '<input type="checkbox" name="hienthi" id="hienthi" value="1" data-render="switchery" data-theme="default" '.($t['hienthi'] == 1 ? 'checked' : '').'/>';

	$arr = array(
		'id' => $id,
		'act' => $act,
		'ten' => $t['ten'],
		'thutu' => $t['thutu'],
		'hienthi' => $hienthi,
		'banner' => $banner
	);
	echo json_encode($arr);
}

?>