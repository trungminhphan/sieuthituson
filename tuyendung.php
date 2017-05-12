<?php 
require_once('header.php');
$tuyendung = new TuyenDung(); $td = $tuyendung->get_one();
?>
<?php if($td['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($td['banner'] as $tdb) : ?>
			<?php if($tdb['link']): ?>
				<li data-transition="fade" class="typo-dark heavy">
				<a href="<?php echo $tdb['link']; ?>">
				<img src="<?php echo $target_images . $tdb['aliasname']; ?>"  
					alt=""
					data-bgposition="center center" 
					data-bgfit="cover" 
					data-bgrepeat="no-repeat" 
					class="rev-slidebg"></a>
			</li>
			<?php else:  ?>
				<li data-transition="fade" class="typo-dark heavy">
					<img src="<?php echo $target_images . $tdb['aliasname']; ?>"  
						alt=""
						data-bgposition="center center" 
						data-bgfit="cover" 
						data-bgrepeat="no-repeat" 
						class="rev-slidebg">
				</li>
			<?php endif; ?>
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
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-calendar-4"></i> <?php echo $td['tieude']; ?></h3>
						</div>
						<div class="panel-body">
							<?php echo $td['noidung']; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('footer.php'); ?>