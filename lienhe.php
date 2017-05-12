<?php
require_once('header.php');
$lienhe = new LienHe();$lh = $lienhe->get_one();
?>
<div role="main" class="main">
	<section class="bg-grey typo-dark" style="padding-top:30px;padding-bottom:30px">
		<div class="container">
			<div class="row">
				<div class="title-container text-left sm">
					<div class="title-wrap">
						<h4 class="title">Thông tin liên hệ</h4>
						<span class="separator line-separator"></span>
					</div>							
				</div><!-- Name -->
				<!-- Column -->
				<div class="col-sm-6">
					<div class="contact-info">
						<div class="info-icon bg-red">
							<i class="uni-map-marker"></i>
						</div>
						<h5 class="title">Siêu thị Tứ Sơn</h5>
						<p>Địa chỉ: <?php echo $lh['diachi']; ?></p>
					</div><!-- Contact Info -->
				</div><!-- Column -->
							
				<!-- Column -->
				<div class="col-sm-6">
					<div class="contact-info">
						<div class="info-icon bg-red">
							<i class="uni-phone-2"></i>
						</div>
						<h5 class="title">Điện thoại: <b><?php echo $lh['dienthoai']; ?></b></h5>
						<p>Email: <a href="mailto:<?php echo $lh['email']; ?>"><?php echo $lh['email']; ?></a></p>
					</div><!-- Contact Info -->
				</div><!-- Column -->
			</div><!-- Row -->
		</div><!-- Container -->
	</section><!-- Section -->
	<!-- Section -->
	<section class="pad-none typo-dark">
		<div class="container-fluid">
			<div class="row">
				<!-- Column -->
				<div class="col-sm-7 pad-60 col-eq-height bg-lgrey">
					<div class="title-container text-left sm">
						<div class="title-wrap">
							<h4 class="title">Gởi tin nhắn</h4>
							<span class="separator line-separator"></span>
						</div>							
					</div><!-- Name -->
					<!-- Form Begins -->
					<p class="form-message1" style="display: none;"></p>
					<form method="POST" action="post.hoidap.html" id="hoidapform">
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
				</div><!-- Column -->
				
				<!-- Column -->
				<div class="col-sm-5 col-eq-height map-canvas" 
					style="" 
					data-zoom="12" 
					data-lat="10.70061850498665" 
					data-lng="105.12952029705048" 
					data-title="Siêu Thị Tứ Sơn" 
					data-type="roadmap" 
					data-hue="#cc0000" 
					data-content="102 Nguyễn Tri Phương, P.Châu Phú B, TP.Châu Đốc, An Giang&lt;br&gt; Điện thoại: 1900 96 96 78&lt;br&gt; sieuthituson@yahoo.com">
				</div><!-- Column -->
			</div><!-- Row -->
		</div><!-- Container -->
	</section><!-- Section -->	

</div>
<?php require_once('footer.php'); ?>