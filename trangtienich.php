<?php
require_once('header.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$trangtienich->id = $id; $tti_one = $trangtienich->get_one();

?>
<?php if($tti_one['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($tti_one['banner'] as $ttib) : ?>
			<li data-transition="fade" class="typo-dark heavy">
				<img src="<?php echo $target_images . $ttib['aliasname']; ?>"  
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
<?php if($tti_one) : ?>
<div role="main" class="main">
	<div class="page-default typo-dark bg-grey">
		<div class="container">
			<div class="panel panel-danger">
				<div class="panel-heading">
					<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> <?php echo $tti_one['ten']; ?></h3>
				</div>
				<div class="panel-body">
				<?php echo $tti_one['noidung']; ?>
				</div>
			</div>
		
		</div>
	</div>
</div>
<?php endif; ?>
<?php require_once('footer.php'); ?>