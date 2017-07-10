<?php
require_once('header.php');
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$gioithieusanpham = new GioiThieuSanPham(); $t = $gioithieusanpham->get_one();
if(isset($_POST['submit'])){
	$arr_banner = array();
    $banner_aliasname = isset($_POST['banner_aliasname']) ? $_POST['banner_aliasname'] : '';
    $banner_filename = isset($_POST['banner_filename']) ? $_POST['banner_filename'] : '';
    $banner_link = isset($_POST['banner_link']) ? $_POST['banner_link'] : '';
    if($banner_aliasname){
        foreach ($banner_aliasname as $key => $value) {
            array_push($arr_banner, array('filename' => $banner_filename[$key], 'aliasname' => $value, 'link' => $banner_link[$key]));
        }
    }
    $cachthucdathang = isset($_POST['cachthucdathang']) ? $_POST['cachthucdathang'] : '';
    $trothanhnhacungcap = isset($_POST['trothanhnhacungcap']) ? $_POST['trothanhnhacungcap'] : '';
    $gioithieusanpham->banner = $arr_banner;
    $gioithieusanpham->cachthucdathang = $cachthucdathang;
    $gioithieusanpham->trothanhnhacungcap = $trothanhnhacungcap;
    if($gioithieusanpham->edit()) transfers_to('gioithieusanpham.html?msg=Lưu thành công');
}
?>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<!-- begin page-header -->
<h1 class="page-header">SIÊU THỊ TỨ SƠN - TRANG GIỚI THIỆU SẢN PHẨM</h1>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" id="bannerform" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Nội dung giới thiệu Siêu Thị Tứ Sơn</h4>
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
                if($t['banner']){
                    foreach($t['banner'] as $banner){
                        echo '<div class="items form-group">';
                        echo '<div class="col-md-6"><input type="text" name="banner_link[]" value="'.$banner['link'].'" class="form-control" placeholder="Liên kết"></div>';
                        echo '<div class="col-md-6">';
                        echo '<div class="input-group">
                                <input type="hidden" class="form-control" name="banner_aliasname[]" value="'.$banner['aliasname'].'" readonly/>
                                <input type="text" class="form-control" name="banner_filename[]" value="'.$banner['filename'].'" readonly/>
                                <span class="input-group-addon"><a href="get.xoahinhanh.html?filename='.$banner['filename'].'" onclick="return false;" class="delete_file"><i class="fa fa-trash"></i></a></span>
                            </div></div></div>';
                    }
                }
                ?>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Cách thức đặt hàng</label>
                    <div class="col-md-10">
                        <textarea class="form-control" name="cachthucdathang" id="cachthucdathang" placeholder="Mô tả" rows="5" data-parsley-required="true"><?php echo isset($t['cachthucdathang']) ? $t['cachthucdathang'] : ''; ?></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Trở thành nhà cung cấp</label>
                    <div class="col-md-10">
                        <textarea class="form-control" name="trothanhnhacungcap" id="trothanhnhacungcap" placeholder="Mô tả" rows="5" data-parsley-required="true"><?php echo isset($t['trothanhnhacungcap']) ? $t['trothanhnhacungcap'] : ''; ?></textarea>
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
        CKEDITOR.replace('cachthucdathang', {
            filebrowserBrowseUrl: 'assets/plugins/ckfinder/ckfinder.html',
            filebrowserUploadUrl: 'assets/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
            filebrowserWindowWidth: '1000',
            filebrowserWindowHeight: '700'
        });
        CKEDITOR.replace('trothanhnhacungcap', {
            filebrowserBrowseUrl: 'assets/plugins/ckfinder/ckfinder.html',
            filebrowserUploadUrl: 'assets/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
            filebrowserWindowWidth: '1000',
            filebrowserWindowHeight: '700'
        });
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
        App.init();
    });
</script>