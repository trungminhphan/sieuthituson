<?php
require_once('header.php');
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$lienhe = new lienhe(); $t = $lienhe->get_one();
if(isset($_POST['submit'])){
	$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : '';
    $dienthoai = isset($_POST['dienthoai']) ? $_POST['dienthoai'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $noidung = isset($_POST['noidung']) ? $_POST['noidung'] : '';
    
    $lienhe->diachi = $diachi;
    $lienhe->dienthoai = $dienthoai;
    $lienhe->email = $email;
    $lienhe->noidung = $noidung;
    if($lienhe->edit()) transfers_to('lienhe.html?msg=Lưu thành công');
}
?>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<!-- begin page-header -->
<h1 class="page-header">SIÊU THỊ TỨ SƠN - THÔNG TIN LIÊN HỆ</h1>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" id="bannerform" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Nội dung Liên hệ Siêu Thị Tứ Sơn</h4>
            </div>
            <div class="panel-body">
            	<div class="form-group">
                    <label class="col-md-2 control-label">Địa chỉ</label>
                    <div class="col-md-10">
                        <input class="form-control" type="text" id="diachi" name="diachi" placeholder="Địa chỉ" data-parsley-required="true" value="<?php echo isset($t['diachi']) ? $t['diachi'] : ''; ?>" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Điện thoại</label>
                    <div class="col-md-4">
                        <input class="form-control" type="text" id="dienthoai" name="dienthoai" placeholder="Điện thoại" data-parsley-required="true" value="<?php echo isset($t['dienthoai']) ? $t['dienthoai'] : ''; ?>" />
                    </div>
                    <label class="col-md-2 control-label">Email</label>
                    <div class="col-md-4">
                        <input class="form-control" type="text" id="email" name="email" placeholder="Email" data-parsley-required="true" value="<?php echo isset($t['email']) ? $t['email'] : ''; ?>" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Nội dung</label>
                    <div class="col-md-10">
                        <textarea class="form-control" name="noidung" id="noidung" placeholder="Mô tả" rows="5" data-parsley-required="true"><?php echo isset($t['noidung']) ? $t['noidung'] : ''; ?></textarea>
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
<script type="text/javascript" src="assets/js/trangchu.js"></script>
<script src="assets/plugins/ckeditor/ckeditor.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        CKEDITOR.replace('noidung', {
            filebrowserBrowseUrl: 'assets/plugins/ckfinder/ckfinder.html',
            filebrowserUploadUrl: 'assets/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
            filebrowserWindowWidth: '1000',
            filebrowserWindowHeight: '700'
        });
        App.init();
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
    });
</script>