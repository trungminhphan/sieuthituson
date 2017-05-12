<?php
require_once('header.php');
$gioithieu = new GioiThieu();
$gt = $gioithieu->get_one();
?>
<?php if($gt['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($gt['banner'] as $gtb) : ?>
			<li data-transition="fade" class="typo-dark heavy">
				<img src="<?php echo $target_images . $gtb['aliasname']; ?>"  
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
		<div class="container gioithieu">
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-default">
						<div class="panel-body">
						<br />
						<?php echo $gt['noidung']; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('footer.php'); ?>