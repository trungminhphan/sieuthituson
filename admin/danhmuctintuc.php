<?php
require_once('header.php');
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$danhmuctintuc = new DanhMucTinTuc();
$list = $danhmuctintuc->get_all_list();
?>
<h1 class="page-header">TRANG CHỦ - DANH MỤC TIN TỨC</h1>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<link href="assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css" rel="stylesheet" />
<link href="assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css" rel="stylesheet" />
<link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload.css" rel="stylesheet" />
<link href="assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css" rel="stylesheet" />
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Danh mục tin tức</h4>
            </div>
            <div class="panel-body">
            <a href="#modal-danhmuctintuc" data-toggle="modal" class="btn btn-primary m-b-10" id="themmoi"><i class="fa fa-plus"></i> Thêm mới</a>
            <table id="data-table" class="table table-striped table-bordered table-hovered">
                <thead>
                	<tr>
                		<th>STT</th>
                		<th>Tên</th>
                        <th>Banner</th>
                		<th class="text-center">Thứ tự</th>
                		<th class="text-center">Hiển thị</th>
                		<th class="text-center"><i class="fa fa-trash"></i></th>
                		<th class="text-center"><i class="fa fa-pencil"></i></th>
                	</tr>
                </thead>
                <tbody>
                <?php
                if($list){
                    $i = 1;
                	foreach ($list as $ds) {
                        $hienthi = $ds['hienthi'] == 1 ? '<i class="fa fa-eye text-primary"></i>' : '<i class="fa fa-eye-slash text-danger"></i>';
                		echo '<tr>';
                		echo '<td>'.$i.'</td>';
                		echo '<td>'.$ds['ten'].'</td>';
                        echo '<td>'.count($ds['banner']).'</td>';
                		echo '<td class="text-center">'.$ds['thutu'].'</td>';
                		echo '<td class="text-center">'.$hienthi.'</td>';
                		echo '<td class="text-center"><a href="get.danhmuctintuc.html?id='.$ds['_id'].'&act=del" onclick="return confirm(\'Chắc chắn muốn xóa?\')"><i class="fa fa-trash"></i></a></td>';
                        echo '<td class="text-center"><a href="get.danhmuctintuc.html?id='.$ds['_id'].'&act=edit#modal-danhmuctintuc" data-toggle="modal" class="suadanhmuc"><i class="fa fa-pencil"></i></a></td>';
                		echo '<tr>';$i++;
                	}
                }
                ?>
                </tbody>
            </table>
           	</div>
        </div>
    </div>
</div>
<!-- #modal-dialog -->
<div class="modal fade" id="modal-danhmuctintuc">
<form action="post.danhmuctintuc.html" method="POST" class="form-horizontal" data-parsley-validate="true" name="bannerform" id="bannerform" enctype="multipart/form-data">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Thông tin danh mục tin tức</h4>
            </div>
            <div class="modal-body">
            	<div class="form-group">
                    <label class="col-md-3 control-label">Tên</label>
                    <div class="col-md-9">
                        <input type="hidden" name="id" id="id" value="">
                        <input type="hidden" name="act" id="act" value="">
                        <input class="form-control" type="text" id="ten" name="ten" placeholder="Tên danh mục tin tức" data-parsley-required="true" value="" />
                    </div>
                </div>
                <div class="form-group">
                	<label class="col-md-3 control-label">Thứ tự</label>
                	<div class="col-md-3">
                		<input type="number" name="thutu" id="thutu" class="form-control" />
                	</div>
                	<label class="col-md-3 control-label">Hiển thị</label>
                	<div class="col-md-3" id="hienthi_html">
                		<input type="checkbox" name="hienthi" id="hienthi" value="1" data-render="switchery" data-theme="default" checked/> 
                	</div>
                </div>
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
                <div id="banner_list"></div>
            </div>
            <div class="modal-footer">
                <a href="" class="btn btn-sm btn-white" data-dismiss="modal">Đóng</a>
                <button type="submit" name="submit" id="submit" class="btn btn-sm btn-success">Lưu</button>
            </div>
        </div>
    </div>
</form>
</div>
<div style="clear:both;"></div>
<?php require_once('footer.php'); ?>
<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="assets/plugins/gritter/js/jquery.gritter.js"></script>
<script src="assets/plugins/parsley/dist/parsley.js"></script>
<script type="text/javascript" src="assets/js/trangchu.js"></script>
<script src="assets/plugins/DataTables/media/js/jquery.dataTables.js"></script>
<script src="assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js"></script>
<script src="assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js"></script>
<script src="assets/plugins/switchery/switchery.min.js"></script>
<script src="assets/js/form-slider-switcher.demo.min.js"></script>
<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        upload_banner();delete_file();
        $("#themmoi").click(function(){
            $("#id").val("");$("#act").val("");
        });
        $(".suadanhmuc").click(function(){
            var _link = $(this).attr("href");
            $.getJSON(_link, function(data){
                $("#id").val(data.id);$("#act").val(data.act);$("#ten").val(data.ten);
                $("#thutu").val(data.thutu); $("#banner_list").html(data.banner);
                $("#hienthi_html").html(data.hienthi);FormSliderSwitcher.init();
                delete_file();
            });
        });
        <?php if(isset($msg) && $msg) : ?>
        $.gritter.add({
            title:"Thông báo !",
            text:"<?php echo $msg; ?>",
            image:"assets/img/login.png",
            sticky:false,
            time:""
        });
        <?php endif; ?>
        App.init();FormSliderSwitcher.init();TableManageDefault.init();
    });
</script>