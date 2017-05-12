<?php 
require_once('header.php'); 
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$tienich = new TienIch();
if($id && $act=='del'){
    $tienich->id = $id; $t = $tienich->get_one();
    if($t['hinhanh']){
        foreach($t['hinhanh'] as $h){
            if(file_exists($target_images . $h['aliasname'])){
                @unlink($target_images . $h['aliasname']);
            }
        }
    }
    if($tienich->delete()) transfers_to('tienich.html?msg=Xóa thành công!');
}

$list = $tienich->get_all_list();
if(isset($_POST['submit'])){
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $act = isset($_POST['act']) ? $_POST['act'] : '';
    $ten = isset($_POST['ten']) ? $_POST['ten'] : '';
    $noidung = isset($_POST['noidung']) ? $_POST['noidung'] : '';
    $hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : '';
    $thutu = isset($_POST['thutu']) ? $_POST['thutu'] : '';
    $arr_hinhanh = array();
    $hinhanh_aliasname = isset($_POST['hinhanh_aliasname']) ? $_POST['hinhanh_aliasname'] : '';
    $hinhanh_filename = isset($_POST['hinhanh_filename']) ? $_POST['hinhanh_filename'] : '';
    $hinhanh_mota = isset($_POST['hinhanh_mota']) ? $_POST['hinhanh_mota'] : '';
    if($hinhanh_aliasname){
        foreach ($hinhanh_aliasname as $key => $value) {
            array_push($arr_hinhanh, array('filename' => $hinhanh_filename[$key], 'aliasname' => $value, 'mota' => $hinhanh_mota[$key]));
        }
    }

    $tienich->ten = $ten;
    $tienich->noidung = $noidung;
    $tienich->hinhanh = $arr_hinhanh;
    $tienich->thutu = $thutu;
    $tienich->hienthi = $hienthi;

    if($act == 'edit'){
        $tienich->id = $id;
        if($tienich->edit()) transfers_to('tienich.html?msg=Chỉnh sửa thành công');
    } else {
        if($tienich->insert()) transfers_to('tienich.html?msg=Thêm thành công');
    }
}
if($id && $act == 'edit'){
    $tienich->id = $id; $t = $tienich->get_one();
    $ten = $t['ten'];
    $noidung = $t['noidung'];
    $hienthi = $t['hienthi'];
    $thutu = $t['thutu'];
    $hinhanh = isset($t['hinhanh']) ? $t['hinhanh'] : '';
}
?>
<h1 class="page-header">TRANG CHỦ - NỘI DUNG TIỆN ÍCH</h1>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<link href="assets/plugins/summernote/summernote.css" rel="stylesheet" />
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" name="bannerform" id="tintucform" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Nhập thông tin tin tức</h4>
            </div>
            <div class="panel-body">

                <div class="form-group">
                    <label class="col-md-3 control-label">Tên</label>
                    <div class="col-md-9">
                        <input type="hidden" name="id" id="id" value="<?php echo isset($id) ? $id : '';?>">
                        <input type="hidden" name="act" id="act" value="<?php echo isset($act) ? $act : ''; ?>">
                        <input class="form-control" type="text" id="ten" name="ten" placeholder="Tên danh mục tin tức" data-parsley-required="true" value="<?php echo isset($ten) ? $ten : ''; ?>" />
                    </div>
                </div>                
                <div class="form-group">
                    <label class="col-md-3 control-label">Nội dung</label>
                    <div class="col-md-9">
                        <textarea class="form-control summernote" name="noidung" id="noidung" placeholder="Mô tả" rows="5" data-parsley-required="true"><?php echo isset($noidung) ? $noidung : ''; ?></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Chọn hình ảnh</label>
                    <div class="col-md-3">
                        <span class="btn btn-primary fileinput-button">
                            <i class="fa fa-file-image-o"></i>
                            <span>Chọn hình ICON tốt nhất (128px x 128px)...</span>
                            <input type="file" name="hinhanh_files[]" multiple class="hinhanh_dinhkem">
                        </span>
                    </div>
                </div>
                <div id="hinhanh_list">
                <?php
                if(isset($hinhanh) && $hinhanh){
                    foreach($hinhanh as $h){
                        echo '<div class="items form-group">';
                        echo '<div class="col-md-6"><input type="text" name="hinhanh_mota[]" value="'.$h['mota'].'" class="form-control" placeholder="Mô tả hình ảnh"></div>';
                        echo '<div class="col-md-6">';
                        echo '<div class="input-group">
                                <input type="hidden" class="form-control" name="hinhanh_aliasname[]" value="'.$h['aliasname'].'" readonly/>
                                <input type="text" class="form-control" name="hinhanh_filename[]" value="'.$h['filename'].'" readonly/>
                                <span class="input-group-addon"><a href="get.xoahinhanh.html?filename='.$h['aliasname'].'" onclick="return false;" class="delete_file"><i class="fa fa-trash"></i></a></span>
                            </div></div></div>';
                    }
                }
                ?>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Thứ tự</label>
                    <div class="col-md-3">
                        <input type="number" name="thutu" id="thutu" value="<?php echo isset($thutu) ? $thutu : ''; ?>" class="form-control">
                    </div>
                    <label class="col-md-3 control-label">Hiển thị</label>
                    <div class="col-md-3">
                        <input type="checkbox" name="hienthi" id="hienthi" value="1" data-render="switchery" data-theme="default" <?php echo ($id && $hienthi == 0) ? '' : 'checked';?> /> 
                    </div>
                </div>
           	</div>
            <div class="panel-footer">
                <a href="tienich.html" class="btn btn-white"><i class="fa fa-reply-all"></i> Trở về</a>
                <button type="submit" name="submit" id="submit" class="btn btn-primary"><i class="fa fa-save"></i> Lưu</button>
            </div>
        </div>
    </div>
</div>
</form>

<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/plugins/parsley/dist/parsley.js"></script>
<script src="assets/plugins/switchery/switchery.min.js"></script>
<script type="text/javascript" src="assets/js/trangchu.js"></script>
<script src="assets/js/form-slider-switcher.demo.min.js"></script>
<script src="assets/plugins/summernote/summernote.min.js"></script>
<script src="assets/js/form-summernote.demo.min.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        upload_hinhanh();delete_file();
        <?php if(isset($msg) && $msg) : ?>
        $.gritter.add({
            title:"Thông báo !",
            text:"<?php echo $msg; ?>",
            image:"assets/img/login.png",
            sticky:false,
            time:""
        });
        <?php endif; ?>
        App.init();FormSummernote.init();FormSliderSwitcher.init();
    });
</script>