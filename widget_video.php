<?php if($t['video']) : ?>
<!-- Widget -->
<div class="widget">
	<h5 class="widget-title">Video<span></span></h5>
	<?php
	if($t['video']){
		foreach($t['video'] as $k => $v){
			echo '<iframe width="225" height="177" src="'.$v.'" frameborder="0" allowfullscreen></iframe>';
		}
	}
	?>
</div><!-- Widget -->
<?php endif; ?>