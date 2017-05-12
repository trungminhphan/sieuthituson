<?php
$tintucmoi = $tintuc->get_tintucmoi();
?>
<?php if($tintucmoi) : ?>
<!-- Widget -->
<div class="widget">
	<h5 class="widget-title">Tin tức mới<span></span></h5>
	<ul class="thumbnail-widget">
	<?php foreach($tintucmoi as $ttm) : ?>
		<li>
		<?php if($ttm['hinhanh']): ?>
			<div class="thumb-wrap">
				<img width="60" height="60" src="<?php echo $target_images. $ttm['hinhanh'][0]['aliasname']; ?>" class="img-responsive" alt="Thumb">
			</div>
		<?php else: ?>
			<div class="thumb-wrap">
				<img width="60" height="60" src="images/default_icon.png" class="img-responsive" alt="Thumb">
			</div>
		<?php endif; ?>
			<div class="thumb-content"><a href="chitiettintuc.html?id=<?php echo $ttm['_id']; ?>"><?php echo substr($ttm['tieude'],0,20); ?></a><span><?php echo date("d/m/Y", $ttm['date_post']->sec); ?></span></div>	
		</li>
	<?php endforeach; ?>
		<!--<li>
			<div class="thumb-wrap">
				<img width="60" height="60" src="images/default/thumb2.jpg" class="img-responsive" alt="Thumb">
			</div>
			<div class="thumb-content"><a href="#">Tin tức mới 2</a><span>10/10/2016</span></div>	
		</li>
		<li>
			<div class="thumb-wrap">
				<img width="60" height="60" src="images/default/thumb3.jpg" class="img-responsive" alt="Thumb">
			</div>
			<div class="thumb-content"><a href="#">Tin tức mới 2</a><span>10/10/2016</span></div>	
		</li>-->
	</ul><!-- Thumbnail Widget -->
</div><!-- Widget -->
<?php endif;?>