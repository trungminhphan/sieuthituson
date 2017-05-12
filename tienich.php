<?php
require_once('header.php');
$tienich = new TienIch();
$tienich_list = $tienich->get_all_list();
?>
<div role="main" class="main">
	<div class="page-default typo-dark bg-grey">
		<div class="container">
			<?php if($tienich_list): ?>
			<?php foreach($tienich_list as $ti): ?>
				<div class="col-md-4">
					<!-- Widget -->
					<div class="widget subscribe">
						<h5 class="widget-title"><?php echo $ti['ten']; ?><span></span></h5>
						<?php
						if(isset($ti['hinhanh']) && $ti['hinhanh']){
							echo '<p class="text-center"><img src="'.$target_images.$ti['hinhanh'][0]['aliasname'].'" /></p>';
						} else {
							echo '<p class="text-center"><img src="images/default_icon.png" /></p>';
						}
						
						?>
						<div class="text-right">
							<a href="get.tienich.html?id=<?php echo $ti['_id']; ?>#modal-tienich" data-toggle="modal" class="btn primary load_tienich"><i class="uni-full-screen2"></i> Xem chi tiết</a>
						</div>
					</div><!-- Widget -->
				</div>
			<?php endforeach; ?>
			<?php endif;?>			
		</div>
	</div>
</div>

<div id="modal-tienich" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="Tiện ích">
	<div class="modal-dialog modal-lg" role="document">
	    <div class="modal-content">
	    	<div class="modal-body" id="content_tienich">
	    		<h5 class="widget-title" style="height:77px;">Mua hàng qua điện thoại<span></span></h5>
				<p class="text-center"><img src="images/phone.png" /></p>
	    	</div>
	    	<div class="modal-footer">
	    		<button type="submit" class="btn btn-default pull-right" data-dismiss="modal"><span class="fa fa-close"></span> Đóng</button>
	    	</div>
	    </div>
	</div>
</div>
<?php require_once('footer.php'); ?>
<script type="text/javascript">
	$(document).ready(function(){
		$(".load_tienich").click(function(){
			var _link = $(this).attr("href");
			$.get(_link, function(data){
				$("#content_tienich").html(data);
			});
		});
	});
</script>