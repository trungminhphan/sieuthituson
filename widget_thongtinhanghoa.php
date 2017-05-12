<?php if($t['thongtinhanghoa']) : ?>
<div class="widget">
	<h5 class="widget-title">Thông tin hàng hoá<span></span></h5>
	<?php $count = count($t['thongtinhanghoa']) - 1; ?>
	<a href="#modal-thongtinhanghoa" data-toggle="modal" title="Thông tin hàng hóa"><img src="<?php echo $target_images . $t['thongtinhanghoa'][$count]['aliasname']; ?>" alt="" style="width:225px;" /></a>
</div><!-- Widget -->
<?php endif; ?>