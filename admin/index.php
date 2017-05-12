<?php require_once('header.php');
$trangchu = new TrangChu();
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$t = $trangchu->get_one();
if(isset($_POST['submit'])){
    $act = isset($_POST['act']) ? $_POST['act'] : '';
    if($act == 'banner'){
        $arr_banner = array();
        $banner_aliasname = isset($_POST['banner_aliasname']) ? $_POST['banner_aliasname'] : '';
        $banner_filename = isset($_POST['banner_filename']) ? $_POST['banner_filename'] : '';
        $banner_link = isset($_POST['banner_link']) ? $_POST['banner_link'] : '';
        if($banner_aliasname){
            foreach ($banner_aliasname as $key => $value) {
                array_push($arr_banner, array('filename' => $banner_filename[$key], 'aliasname' => $value, 'link' => $banner_link[$key]));
            }
        }
        $trangchu->banner = $arr_banner;
        if($trangchu->edit_banner()) transfers_to('trangchu.html?msg=Lưu Banner thành công');
    }

    if($act == 'video'){
        $video = isset($_POST['video']) ? $_POST['video'] : '';
        $trangchu->video = $video;
        if($trangchu->edit_video()) transfers_to('trangchu.html?msg=Lưu Video thành công');
    }

    if($act == 'thongtinhanghoa'){
        $arr_hanghoa = array();
        $hanghoa_aliasname = isset($_POST['hanghoa_aliasname']) ? $_POST['hanghoa_aliasname'] : '';
        $hanghoa_filename = isset($_POST['hanghoa_filename']) ? $_POST['hanghoa_filename'] : '';
        if($hanghoa_aliasname){
            foreach ($hanghoa_aliasname as $key => $value) {
                array_push($arr_hanghoa, array('filename' => $hanghoa_filename[$key], 'aliasname' => $value));
            }
        }
        $trangchu->thongtinhanghoa = $arr_hanghoa;
        if($trangchu->edit_thongtinhanghoa()) transfers_to('trangchu.html?msg=Lưu Thông tin hàng hóa thành công');
    }
}
?>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />

<!-- begin page-header -->
<h1 class="page-header">SIÊU THỊ TỨ SƠN - THAY ĐỔI THÔNG TIN TRANG CHỦ BANNER, VIDEO, THÔNG TIN HÀNG HOÁ</h1>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" id="bannerform" enctype="multipart/form-data">
<input type="hidden" name="act" value="banner">
<div class="row">
    <div class="col-md-12">
        <div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Banner</h4>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Chọn hình ảnh BANNER</label>
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
            </div>
            <div class="modal-footer">
                <button type="submit" name="submit" id="submit" class="btn btn-primary"><i class="fa fa-check-circle-o"></i> Lưu</button>
            </div>
        </div>
    </div>
</div>
</form>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" name="videoform">
<input type="hidden" name="act" value="video">
<div class="row">
    <div class="col-md-12">
        <div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Video</h4>
            </div>
            <div class="panel-body" id="video_list">
                <?php
                if($t['video']){
                    foreach($t['video'] as $key => $value){
                        if($key == 0) {
                            echo '
                                <div class="form-group">
                                <label class="col-md-2 control-label">Video:</label>
                                <div class="col-md-10">
                                    <div class="input-group">
                                    <input type="text" name="video[]" class="form-control" value="'.$value.'" data-parsley-required="true">
                                    <span class="input-group-addon btn btn-primary" id="add_video"><i class="fa fa-plus"></i></span>
                                </div></div></div>';
                        } else {
                            echo '<div class="form-group">
                                <label class="col-md-2 control-label">Video:</label>
                                <div class="col-md-10">
                                    <div class="input-group">
                                        <input type="text" name="video[]" class="form-control" value="'.$value.'" data-parsley-required="true">
                                        <span class="input-group-addon btn btn-primary delete_video"><i class="fa fa-trash"></i></span>
                                    </div>
                                </div>
                             </div>';
                        }
                    }
                } else {
                    echo '
                    <div class="form-group">
                        <label class="col-md-2 control-label">Video:</label>
                        <div class="col-md-10">
                        <div class="input-group">
                        <input type="text" name="video[]" class="form-control" data-parsley-required="true">
                        <span class="input-group-addon btn btn-primary" id="add_video"><i class="fa fa-plus"></i></span>
                    </div></div></div>';
                }
                ?>
            </div>
            <div class="modal-footer">
                <button type="submit" name="submit" id="submit" class="btn btn-primary"><i class="fa fa-check-circle-o"></i> Lưu</button>
            </div>
        </div>
    </div>
</div>
</form>
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" id="thongtinhanghoaform" enctype="multipart/form-data">
<input type="hidden" name="act" value="thongtinhanghoa">
<div class="row">
    <div class="col-md-12">
        <div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Thông tin hàng hoá</h4>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Chọn hình ảnh THÔNG TIN HÀNG HOÁ</label>
                    <div class="col-md-3">
                        <span class="btn btn-primary fileinput-button">
                            <i class="fa fa-file-image-o"></i>
                            <span>Chọn hình Banner tốt nhất (500px x 707px)...</span>
                            <input type="file" name="hanghoa_files[]" multiple class="hanghoa_dinhkem">
                        </span>
                    </div>
                </div>
                <div id="hanghoa_list">
                <?php
                if($t['thongtinhanghoa']){
                    foreach($t['thongtinhanghoa'] as $h){
                        echo '<div class="items form-group">';
                        echo '<div class="col-md-12">';
                        echo '<div class="input-group">
                                <input type="hidden" class="form-control" name="hanghoa_aliasname[]" value="'.$h['aliasname'].'" readonly/>
                                <input type="text" class="form-control" name="hanghoa_filename[]" value="'.$h['filename'].'" readonly/>
                                <span class="input-group-addon"><a href="get.xoahinhanh.html?filename='.$h['aliasname'].'" onclick="return false;" class="delete_file"><i class="fa fa-trash"></i></a></span>
                            </div></div></div>';
                    }
                }
                ?>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" name="submit" id="submit" class="btn btn-primary"><i class="fa fa-check-circle-o"></i> Lưu</button>
            </div>
        </div>
    </div>
</div>
</form>

<div id="video_html" style="display:none;">
    <div class="form-group">
        <label class="col-md-2 control-label">Video:</label>
        <div class="col-md-10">
            <div class="input-group">
                <input type="text" name="video[]" class="form-control" data-parsley-required="true">
                <span class="input-group-addon btn btn-primary delete_video"><i class="fa fa-trash"></i></span>
            </div>
        </div>
     </div>
</div>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/plugins/parsley/dist/parsley.js"></script>
<script type="text/javascript" src="assets/js/trangchu.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        App.init();
        $("#add_video").click(function(){
            var html = $("#video_html").html();
            $("#video_list").append(html);
            $(".delete_video").click(function(){
                var _this = $(this);
                _this.parents(".form-group").remove();
            });
        });
        $(".delete_video").click(function(){
            var _this = $(this);
            _this.parents(".form-group").remove();
        });
        upload_banner();upload_hanghoa();delete_file();
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