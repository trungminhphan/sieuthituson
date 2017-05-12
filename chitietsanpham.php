<?php
require_once('header.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$sanpham = new SanPham(); $sanpham->id = $id; $sp = $sanpham->get_one();
?>
<!-- Page Main -->
<div role="main" class="main">
	<div class="page-default bg-grey shop-single">
		<!-- Container -->
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-body pad-30">
					<div class="row">
						<!-- Member Image Column -->
						<div class="col-md-5">
							<div class="owl-carousel dots-inline" 
								data-animatein="" 
								data-animateout="" 
								data-items="1" data-margin="" 
								data-loop="true" 
								data-merge="true" 
								data-nav="false" 
								data-dots="true" 
								data-stagepadding="" 
								data-mobile="1" 
								data-tablet="1" 
								data-desktopsmall="1"  
								data-desktop="1" 
								data-autoplay="false" 
								data-delay="3000" 
								data-navigation="true">
								<?php
								if($sp['hinhanh']){
									foreach($sp['hinhanh'] as $hinhanh){
										echo '<div class="item"><img class="img-responsive" src="'.$target_images . $hinhanh['aliasname'].'" alt="'.$hinhanh['mota'].'" width="600" height="500"></div>';
									}
								}
								?>
								<div class="item"><img class="img-responsive" src="images/default_product.png" alt="Siêu Thị Tứ Sơn" width="600" height="500"></div>
							</div><!-- carousel -->
						</div><!-- Coloumn -->
						<!-- Coloumn -->
						<div class="col-md-7">
							<div class="shop-detail-wrap">
								<h4 class="product-name"><?php echo $sp['ten']; ?></h4>
								<?php echo $sp['mota']; ?>
							</div><!-- Member Detail Wrapper -->
						</div><!-- Member Detail Column -->
					</div><!-- Row -->
					<!--<div class="row padding-top-20">
						<div class="col-md-12">
							<p class="margin-top-10">Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm .</p>
							<p class="margin-top-10">Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm .</p>
							<p class="margin-top-10">Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm .</p>
							<p class="margin-top-10">Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩm .</p>		
						</div>
					</div>-->
				</div>
			</div>
		</div><!-- Container -->
	</div><!-- Page Default -->
</div><!-- Page Main -->

<?php require_once('footer.php'); ?>