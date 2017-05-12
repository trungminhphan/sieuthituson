<?php
$sanpham = new SanPham();
$sanphammoi = $sanpham->get_sanphammoi();
?>
<?php if($sanphammoi) : ?>
<!-- Widget -->
<div class="widget">
	<h5 class="widget-title">Sản phẩm mới<span></span></h5>
	<ul class="thumbnail-widget">
		<?php foreach($sanphammoi as $spm): ?>
		<li>
			<?php if($spm['hinhanh']) : ?>
			<div class="thumb-wrap">
				<img width="60" height="60" src="<?php echo $target_images . $spm['hinhanh'][0]['aliasname']; ?>" class="img-responsive" alt="Thumb">
			</div>
			<?php else : ?>
				<div class="thumb-wrap">
					<img width="60" height="60" src="images/default_icon.png" class="img-responsive" alt="Thumb">
				</div>
			<?php endif;?>
			<div class="thumb-content"><a href="chitietsanpham.html?id=<?php echo $spm['_id']; ?>"><?php echo $spm['ten']; ?></a><span><?php echo date("d/m/Y", $spm['date_post']->sec); ?></span></div>	
		</li>
		<?php endforeach; ?>
	</ul><!-- Thumbnail Widget -->
</div><!-- Widget -->
<?php endif; ?>