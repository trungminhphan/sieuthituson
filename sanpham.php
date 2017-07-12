<?php
require_once('header.php');
$gioithieusanpham = new GioiThieuSanPham();
$loaisanpham = new LoaiSanPham();$sanpham = new SanPham();
$gtsp = $gioithieusanpham->get_one();
$loaisanpham_list = $loaisanpham->get_all_list();
?>
<?php if($gtsp['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($gtsp['banner'] as $gtspb) : ?>
			<li data-transition="fade" class="typo-dark heavy">
			<?php echo $gtspb['link'] ? '<a href="'.$gtspb['link'].'">' : ''; ?>
				<img src="<?php echo $target_images . $gtspb['aliasname']; ?>"  
					alt=""
					data-bgposition="center center" 
					data-bgfit="cover" 
					data-bgrepeat="no-repeat" 
					class="rev-slidebg">
				<?php echo $gtspb['link'] ? '</a>' : ''; ?>
			</li>
		<?php endforeach; ?>
		</ul>
	</div>
</div><!-- Home Slider -->	
<?php endif; ?>
<div role="main" class="main">
	<div class="page-default typo-dark bg-grey">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<?php if($loaisanpham_list): ?>
					<?php foreach($loaisanpham_list as $lsp): ?>
						<div class="panel panel-danger">
							<div class="panel-heading">
								<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> <?php echo $lsp['ten']; ?></h3>
							</div>
							<div class="panel-body">
								<div class="owl-carousel" 
								data-animatein="zoomIn" 
								data-animateout="slideOutDown" 
								data-margin="30" 
								data-stagepadding="" 
								data-loop="true" 
								data-merge="true" 
								data-nav="true"
								data-dots="false" 
								data-items="1"  data-mobile="1" data-tablet="2" data-desktopsmall="2"  data-desktop="4" 
								data-autoplay="true" 
								data-delay="3000" 
								data-navigation="true">
							<?php
							$query = array('id_loaisanpham' => strval($lsp['_id']));
							$sanpham_list = $sanpham->get_list_condition($query);
							if($sanpham_list){
								foreach($sanpham_list as $sp){
									echo '<div class="item">
											<div class="related-wrap">
												<div class="img-wrap">
													<a href="chitietsanpham.html?id='.$sp['_id'].'">
														<img height="500" width="500" alt="Related Product" class="img-responsive" src="'.$target_images . $sp['hinhanh'][0]['aliasname'].'">
													</a>
												</div>
												<div class="related-content">
													<h5 class="title">'.$sp['ten'].'</h5>
												</div>
											</div>
										</div>';

								}
							}
							?>
							</div><!-- Owl -->
						</div><!-- Related Post -->
					</div>
				<?php endforeach; ?>
				<?php endif; ?>

				<div class="panel panel-danger">
					<div class="panel-heading">
						<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Cách thức đặt hàng</h3>
					</div>
					<div class="panel-body">
						<?php echo $gtsp['cachthucdathang']; ?>
					</div>
				</div>
				<div class="panel panel-danger">
					<div class="panel-heading">
						<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Trở thành nhà cung cấp</h3>
					</div>
					<div class="panel-body">
						<?php echo $gtsp['trothanhnhacungcap']; ?>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('footer.php'); ?>