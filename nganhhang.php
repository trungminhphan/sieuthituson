<?php
require_once('header.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$nganhhang->id = $id; $nh_one = $nganhhang->get_one();
$sanpham = new SanPham();
$query = array('id_nganhhang' => $id);
$sanpham_list = $sanpham->get_list_condition($query);
?>
<?php if($nh_one['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($nh_one['banner'] as $nhb) : ?>
			<li data-transition="fade" class="typo-dark heavy">
				<img src="<?php echo $target_images . $nhb['aliasname']; ?>"  
					alt=""
					data-bgposition="center center" 
					data-bgfit="cover" 
					data-bgrepeat="no-repeat" 
					class="rev-slidebg">
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
				<?php if($sanpham_list): ?>
				<?php foreach($sanpham_list as $sp): ?>
					<div class="col-sm-6 col-md-3">
						<!-- Shop Grid Wrapper -->
						<div class="shop-wrap">
							<!-- Shop Image Wrapper -->
							<div class="shop-img-wrap">
								<img width="500" height="500" src="<?php echo $target_images . $sp['hinhanh'][0]['aliasname']; ?>" class="img-responsive" alt="Shop">
							</div><!-- Shop Wraper -->
							<!-- Shop Detail Wrapper -->
							<div class="product-details">
								<div class="shop-title-wrap">
									<a href=""><h5 class="product-name"><a href="chitietsanpham.html?id=<?php echo $sp['_id']; ?>"><?php echo $sp['ten']; ?></a></h5></a>
								</div><!-- Shop Detail Wrapper -->
								
							</div><!-- Blog Detail Wrapper -->
						</div><!-- Blog Wrapper -->
					</div><!-- Column -->
				<?php endforeach; ?>
				<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('footer.php'); ?>