<?php
require_once('header.php');
$hoidap = new HoiDap();
$q = isset($_GET['q']) ? $_GET['q'] : 0;
if(isset($_POST['submit'])){
	$hoten = isset($_POST['hoten']) ? $_POST['hoten'] : '';
	$dienthoai = isset($_POST['dienthoai']) ? $_POST['dienthoai'] : '';
	$email = isset($_POST['email']) ? $_POST['email'] : '';
	$cauhoi = isset($_POST['noidung']) ? $_POST['noidung'] : '';
	$hoidap->hoten = $hoten;
	$hoidap->dienthoai = $dienthoai;
	$hoidap->email = $email;
	$hoidap->cauhoi = $cauhoi;
	$hoidap->hienthi = 0;
	if($hoidap->insert()) transfers_to('hoidap.html?q=1');
}
$cauhoithuonggap = $hoidap->get_thuonggap();
$list = $hoidap->get_list_front();
?>
<link rel="stylesheet" type="text/css" href="css/custom.css">
<div role="main" class="main">
	<div class="page-default typo-dark bg-grey">
		<div class="container">
			<?php if($q == 1): ?>
			<div class="alert alert-red alert-dismissible" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h5><strong>Cám ơn Ông/Bà đã đặt câu hỏi, Chúng tôi sẽ trả lời sớm nhất có thể.</strong></h5>
			</div>
			<?php endif; ?>
			<div class="row">
				<div class="col-md-6">
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Câu hỏi thường gặp</h3>
						</div>
						<div class="panel-body">
							<div class="panel-group accordion" id="accordion" role="tablist" aria-multiselectable="true">
								<?php if($cauhoithuonggap): ?>
								<?php $i =1; foreach($cauhoithuonggap as $chtg): ?>
								<div class="panel panel-default">
									<div class="panel-heading" role="tab" id="heading_<?php echo $i; ?>">
										<h4 class="panel-title">
											<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_<?php echo $i; ?>" aria-expanded="false" aria-controls="collapse_<?php echo $i; ?>">
											Hỏi: <?php echo nl2p($chtg['cauhoi']); ?>
 											</a>
										</h4>
									</div>
									<div id="collapse_<?php echo $i;?>" class="panel-collapse collapse <?php echo $i==1 ? 'in' : ''; ?>" role="tabpanel" aria-labelledby="heading_<?php echo $i; ?>">
										<div class="panel-body">
											<h6><b>Trả lời:</b></h6>
											<?php echo isset($chtg['traloi']) ? nl2p($chtg['traloi']) : ''; ?>
										</div>
									</div>
								</div>
								<?php $i++; endforeach; ?>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Hỏi Siêu thị Tứ Sơn</h3>
						</div>
						<div class="panel-body">
							<h6>Vui lòng điền đầy đủ thông tin dưới đây</h6>
							<form method="POST" action="<?php echo $_SERVER['REQUEST_URI']; ?>" id="hoidapform">
								<!-- Field 1 -->
								<div class="input-text form-group">
									<input type="text" name="hoten" class="input-name form-control" placeholder="Họ tên" required="required" />
								</div>
								<!-- Field 3 -->
								<div class="input-email form-group">
									<input type="text" name="dienthoai" class="input-phone form-control" placeholder="Điện thoại" required="required"/>
								</div>
								<!-- Field 2 -->
								<div class="input-email form-group">
									<input type="email" name="email" class="input-email form-control" placeholder="Email" required="required"/>
								</div>
								
								<!-- Field 4 -->
								<div class="textarea-message form-group">
									<textarea name="noidung" class="textarea-message form-control" placeholder="Nội dung câu hỏi" rows="8" required="required"></textarea>
								</div>
								<!-- Button -->
								<div class="text-center">
									<button class="btn" type="submit" name="submit" id="submit">Gửi <i class="fa fa-paper-plane"></i></button>
								</div>
							</form>

						</div>
					</div>
				</div>
			</div>
			<?php if($list): ?>
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Phản hồi khách hàng</h3>
						</div>
						<div class="panel-body phanhoikhachhang">
							<?php foreach($list as $l): ?>
							<p><span class="text-red bold">Ngày <?php echo date("d/m/Y", $l['date_post']->sec);?> khách hàng <?php echo $l['hoten']; ?> Hỏi:</span> <?php echo $l['cauhoi']; ?>
							<p><span class="text-red bold"><?php echo $l['nguoitraloi']; ?>:</span> <?php echo $l['traloi']; ?> 
							<hr class="md" />
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			</div>
			<?php endif; ?>
		</div>
	</div>
</div>
<?php require_once('footer.php'); ?>