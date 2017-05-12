<?php
require_once('header.php');
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$trangtienich = new trangtienich();
if($id && $act=='del'){
    $trangtienich->id = $id; $t = $trangtienich->get_one();
    if($t['banner']){
        foreach($t['banner'] as $h){
            if(file_exists($target_images . $h['aliasname'])){
                @unlink($target_images . $h['aliasname']);
            }
        }
    }
    if($trangtienich->delete()) transfers_to('trangtienich.html?msg=Xóa thành công!');
}
if(isset($_POST['submit'])){
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $act = isset($_POST['act']) ? $_POST['act'] : '';
    $ten = isset($_POST['ten']) ? $_POST['ten'] : '';
    $noidung = isset($_POST['noidung']) ? $_POST['noidung'] : '';
    $hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : '';
    $thutu = isset($_POST['thutu']) ? $_POST['thutu'] : '';
	$arr_banner = array();
    $banner_aliasname = isset($_POST['banner_aliasname']) ? $_POST['banner_aliasname'] : '';
    $banner_filename = isset($_POST['banner_filename']) ? $_POST['banner_filename'] : '';
    $banner_link = isset($_POST['banner_link']) ? $_POST['banner_link'] : '';
    if($banner_aliasname){
        foreach ($banner_aliasname as $key => $value) {
            array_push($arr_banner, array('filename' => $banner_filename[$key], 'aliasname' => $value, 'link' => $banner_link[$key]));
        }
    }

    $trangtienich->banner = $arr_banner;
    $trangtienich->ten = $ten;
    $trangtienich->noidung = $noidung;
    $trangtienich->thutu = $thutu;
    $trangtienich->hienthi = $hienthi;
    if($act == 'edit'){
        $trangtienich->id = $id;
        if($trangtienich->edit()) transfers_to('trangtienich.html?msg=Chỉnh sửa thành công');
    } else {
        if($trangtienich->insert()) transfers_to('trangtienich.html?msg=Thêm thành công');
    }
}

if($id && $act == 'edit'){
    $trangtienich->id = $id; $t = $trangtienich->get_one();
    $ten = $t['ten'];
    $noidung = $t['noidung'];
    $hienthi = $t['hienthi'];
    $thutu = $t['thutu'];
    $banner = isset($t['banner']) ? $t['banner'] : '';
}
?>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<link href="assets/plugins/summernote/summernote.css" rel="stylesheet" />
<!-- begin page-header -->
<h1 class="page-header">SIÊU THỊ TỨ SƠN - THÔNG TIN TRANG TIỆN ÍCH</h1>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" id="bannerform" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Nội dung TRANG TIỆN ÍCH</h4>
            </div>
            <div class="panel-body">
            	<div class="form-group">
                    <label class="col-md-2 control-label">Chọn hình ảnh BANNER</label>
                    <div class="col-md-3">
						<span class="btn btn-primary fileinput-button">
                            <i class="fa fa-file-image-o"></i>
                            <span>Chọn hình Banner tốt nhất (1920px x 960px)...</span>
                            <input type="file" name="banner_files[]" multiple class="banner_dinhkem">
                        </span>
                    </div>
                </div>
                <div id="banner_list">
                <?php
                if(isset($banner) && $banner){
                    foreach($banner as $b){
                        echo '<div class="items form-group">';
                        echo '<div class="col-md-6"><input type="text" name="banner_link[]" value="'.$b['link'].'" class="form-control" placeholder="Liên kết"></div>';
                        echo '<div class="col-md-6">';
                        echo '<div class="input-group">
                                <input type="hidden" class="form-control" name="banner_aliasname[]" value="'.$b['aliasname'].'" readonly/>
                                <input type="text" class="form-control" name="banner_filename[]" value="'.$b['filename'].'" readonly/>
                                <span class="input-group-addon"><a href="get.xoahinhanh.html?filename='.$b['filename'].'" onclick="return false;" class="delete_file"><i class="fa fa-trash"></i></a></span>
                            </div></div></div>';
                    }
                }
                ?>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Tên</label>
                    <div class="col-md-10">
                        <input type="hidden" name="id" id="id" value="<?php echo isset($id) ? $id : '';?>">
                        <input type="hidden" name="act" id="act" value="<?php echo isset($act) ? $act : ''; ?>">
                        <input class="form-control" type="text" id="ten" name="ten" placeholder="Tên" data-parsley-required="true" value="<?php echo isset($ten) ? $ten : ''; ?>" />
                    </div>
                </div> 
                <div class="form-group">
                    <label class="col-md-2 control-label">Nội dung</label>
                    <div class="col-md-10">
                        <textarea class="form-control summernote" name="noidung" id="noidung" placeholder="Mô tả" rows="5" data-parsley-required="true"><?php echo isset($noidung) ? $noidung : ''; ?></textarea>
                    </div>
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
            <div class="modal-footer">
                <button type="submit" name="submit" id="submit" class="btn btn-primary"><i class="fa fa-check-circle-o"></i> Lưu</button>
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
<script src="assets/js/form-slider-switcher.demo.min.js"></script>
<script type="text/javascript" src="assets/js/trangchu.js"></script>
<script src="assets/plugins/summernote/summernote.min.js"></script>
<script src="assets/js/form-summernote.demo.min.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        upload_banner();delete_file();
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