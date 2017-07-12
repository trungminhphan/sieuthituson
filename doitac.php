<?php
require_once('header.php');
$doitac = new DoiTac(); $dt = $doitac->get_one();
?>
<?php if($dt['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($dt['banner'] as $dtb) : ?>
			<li data-transition="fade" class="typo-dark heavy">
			<?php echo $dtb['link'] ? '<a href="'.$dtb['link'].'">' : ''; ?>
				<img src="<?php echo $target_images . $dtb['aliasname']; ?>"  
					alt=""
					data-bgposition="center center" 
					data-bgfit="cover" 
					data-bgrepeat="no-repeat" 
					class="rev-slidebg">
				<?php echo $dtb['link'] ? '</a>' : ''; ?>
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
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Giới thiệu</h3>
						</div>
						<div class="panel-body">
							<?php echo $dt['gioithieu']; ?>
						</div>
					</div>

					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Lợi ích khi tham gia</h3>
						</div>
						<div class="panel-body">
							<?php echo $dt['loiich']; ?>
						</div>
					</div>

					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Cách thức tham gia</h3>
						</div>
						<div class="panel-body">
							<?php echo $dt['cachthuc']; ?>
						</div>
					</div>

					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Yêu cầu khi trở thành nhà cung cấp</h3>
						</div>
						<div class="panel-body">
							<?php echo $dt['yeucau']; ?>
						</div>
					</div>

					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title" style="font-size:25px;font-weight:bold;"><i class="uni-car-coins"></i> Các đối tác đã tham gia</h3>
						</div>
						<div class="panel-body">
							<?php echo $dt['dathamgia']; ?>
						</div><!-- Column -->

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('footer.php'); ?>