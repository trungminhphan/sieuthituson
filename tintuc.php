<?php 
require_once('header.php');
$id = isset($_GET['id']) ? $_GET['id'] : '';
$danhmuctintuc = new DanhMucTinTuc();$tintuc = new TinTuc();
$danhmuctintuc->id = $id; $dmtt = $danhmuctintuc->get_one();
$tintuc->id_danhmuctintuc = $id; $tintuc_list = $tintuc->get_list_to_parent();
?>
<?php if($dmtt['banner']) :?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($dmtt['banner'] as $dtt) : ?>
			<li data-transition="fade" class="typo-dark heavy">
				<img src="<?php echo $target_images . $dtt['aliasname']; ?>"  
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

<?php if($tintuc_list) : ?>
<!-- Page Main -->
<div role="main" class="main">
	<div class="page-default bg-grey typo-dark">
		<!-- Container -->
		<div class="container">
			<!-- List row -->
			<ul class="row">
				<!-- Event Column -->
				<?php foreach($tintuc_list as $tt) : ?>
				<li class="col-xs-12 event-list-wrap">
					<!-- Event Wrapper -->
					<div class="row">
						<!-- Event Image Wrapper -->
						<div class="col-sm-4 col-md-4">
							<div class="event-img-wrap">
							<?php if($tt['hinhanh']) : ?>
								<img alt="Event" class="img-responsive" src="<?php echo $target_images . $tt['hinhanh'][0]['aliasname']; ?>" width="600" height="220">
							<?php else: ?>
								<img alt="Event" class="img-responsive" src="images/default_news.png" width="600" height="220">
							<?php endif; ?>
							</div>
						</div><!-- Event Image Wrapper -->
						<!-- Event Detail Wrapper -->
						<div class="col-sm-8 col-md-8">
							<div class="event-details">
								<h4><a href="chitiettintuc.html?id=<?php echo $tt['_id']; ?>"><?php echo $tt['tieude']; ?></a></h4>
								<ul class="events-meta">
									<li><i class="fa fa-calendar-o"></i> Ngày đăng: <?php echo date("d/m/Y", $tt['date_post']->sec); ?></li>
								</ul><!-- Event Meta -->
								<?php echo nl2p($tt['mota']); ?>
								<a href="chitiettintuc.html?id=<?php echo $tt['_id']; ?>" class="btn pull-right">Xem chi tiết</a>
							</div><!-- Event Meta -->
						</div>	<!-- Event details -->
					</div><!-- Event detail Wrapper -->
					<!-- Divider -->
					<hr class="md"/>
				</li><!-- Column -->
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
</div>
<?php endif; ?>
<?php require_once('footer.php'); ?>