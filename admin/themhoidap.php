<?php 
require_once('header.php'); 
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
$id = isset($_GET['id']) ? $_GET['id'] : '';
$act = isset($_GET['act']) ? $_GET['act'] : '';
$hoidap = new hoidap();$thuonggap = 0;$hienthi = 0;
if($id && $act=='del'){
    $hoidap->id = $id;
    if($hoidap->delete()) transfers_to('hoidap.html?msg=Xóa thành công!');
}

$list = $hoidap->get_all_list();
if(isset($_POST['submit'])){
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $act = isset($_POST['act']) ? $_POST['act'] : '';
    $hoten = isset($_POST['hoten']) ? $_POST['hoten'] : '';
    $dienthoai = isset($_POST['dienthoai']) ? $_POST['dienthoai'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $cauhoi = isset($_POST['cauhoi']) ? $_POST['cauhoi'] : '';
    $hienthi = isset($_POST['hienthi']) ? $_POST['hienthi'] : '';
    $traloi = isset($_POST['traloi']) ? $_POST['traloi'] : '';
    $nguoitraloi = isset($_POST['nguoitraloi']) ? $_POST['nguoitraloi'] : '';
    $thuonggap = isset($_POST['thuonggap']) ? $_POST['thuonggap'] : '';

    $hoidap->hoten = $hoten;
    $hoidap->dienthoai = $dienthoai;
    $hoidap->email = $email;
    $hoidap->cauhoi = $cauhoi;   
    $hoidap->hienthi = $hienthi;
    $hoidap->traloi = $traloi;
    $hoidap->nguoitraloi = $nguoitraloi;
    $hoidap->thuonggap = $thuonggap;

    if($act == 'edit'){
        $hoidap->id = $id;
        if($hoidap->edit()) transfers_to('hoidap.html?msg=Chỉnh sửa thành công');
    } else {
        if($hoidap->insert()) transfers_to('hoidap.html?msg=Thêm thành công');
    }
}
if($id && $act == 'edit'){
    $hoidap->id = $id; $t = $hoidap->get_one();
    $hoten = $t['hoten'];
    $dienthoai = $t['dienthoai'];
    $email = $t['email'];
    $cauhoi = $t['cauhoi'];
    $hienthi = $t['hienthi'];
    $thuonggap = isset($t['thuonggap']) ? $t['thuonggap'] : 0;
    $traloi = isset($t['traloi']) ? $t['traloi'] :''; 
    $nguoitraloi = isset($t['nguoitraloi']) ? $t['nguoitraloi'] : 'Siêu Thị Tứ Sơn'; 
}
?>
<h1 class="page-header">TRANG CHỦ - NỘI DUNG HỎI ĐÁP</h1>
<link href="assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet" />
<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="POST" class="form-horizontal" data-parsley-validate="true" name="bannerform" id="hoidapform" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-danger">
            <div class="panel-heading">
                <div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                </div>
                <h4 class="panel-title"><i class="fa fa-gears"></i> Nhập thông HỎI - ĐÁP</h4>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">Họ tên</label>
                    <div class="col-md-2">
                        <input type="hidden" name="id" id="id" value="<?php echo isset($id) ? $id : '';?>">
                        <input type="hidden" name="act" id="act" value="<?php echo isset($act) ? $act : ''; ?>">
                        <input class="form-control" type="text" id="hoten" name="hoten" placeholder="Họ tên" data-parsley-required="true" value="<?php echo isset($hoten) ? $hoten : ''; ?>" />
                    </div>
                    <label class="col-md-2 control-label">Điện thoại</label>
                    <div class="col-md-2">
                        <input class="form-control" type="text" id="dienthoai" name="dienthoai" placeholder="Điện thoại" data-parsley-required="true" value="<?php echo isset($dienthoai) ? $dienthoai : ''; ?>" />
                    </div>
                    <label class="col-md-2 control-label">Email</label>
                    <div class="col-md-2">
                        <input class="form-control" type="text" id="email" name="email" placeholder="Email" data-parsley-required="true" value="<?php echo isset($email) ? $email : ''; ?>" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Nội dung câu hỏi</label>
                    <div class="col-md-10">
                        <textarea class="form-control" name="cauhoi" id="cauhoi" placeholder="Nội dung" rows="10" data-parsley-required="true"><?php echo isset($cauhoi) ? $cauhoi : ''; ?></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Trả lời</label>
                    <div class="col-md-10">
                        <textarea class="form-control" name="traloi" id="traloi" placeholder="Nội dung" rows="10" data-parsley-required="true"><?php echo isset($traloi) ? $traloi : ''; ?></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Người trả lời</label>
                    <div class="col-md-2">
                        <input class="form-control" type="text" id="nguoitraloi" name="nguoitraloi" placeholder="Người trả lời" data-parsley-required="true" value="<?php echo isset($nguoitraloi) ? $nguoitraloi : ''; ?>" />
                    </div>
                    <label class="col-md-2 control-label">Câu hỏi thường gặp</label>
                    <div class="col-md-2">
                        <input type="checkbox" name="thuonggap" id="thuonggap" value="1" data-render="switchery" data-theme="default" <?php echo $thuonggap == 1 ? 'checked' : '';?> /> 
                    </div>
                    <label class="col-md-2 control-label">Hiển thị</label>
                    <div class="col-md-2">
                        <input type="checkbox" name="hienthi" id="hienthi" value="1" data-render="switchery" data-theme="default" <?php echo ($id && $hienthi == 0) ? '' : 'checked';?> /> 
                    </div>
                </div>
           	</div>
            <div class="panel-footer">
                <a href="hoidap.html" class="btn btn-white"><i class="fa fa-reply-all"></i> Trở về</a>
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
<script src="assets/js/form-slider-switcher.demo.min.js"></script>

<script src="assets/js/apps.min.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
    $(document).ready(function() {
        <?php if(isset($msg) && $msg) : ?>
        $.gritter.add({
            title:"Thông báo !",
            text:"<?php echo $msg; ?>",
            image:"assets/img/login.png",
            sticky:false,
            time:""
        });
        <?php endif; ?>
        App.init();FormSliderSwitcher.init();
    });
</script>