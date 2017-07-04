<?php if($t['video']) :
$url = isset($_SERVER['REDIRECT_URL']) ? $_SERVER['REDIRECT_URL'] : 'index.html'; $a = explode("/", $url); $l = end($a);
?>
<!-- Widget -->
<div class="widget">
	<h5 class="widget-title">Video<span></span></h5>
	<?php
	if($t['video']){
		foreach($t['video'] as $k => $v){
			if($l == 'index.html') $auto = '?autoplay=1'; else $auto = '';
			echo '<iframe width="225" height="177" src="'.$v.$auto.'" frameborder="0" allowfullscreen></iframe>';
		}
	}
	?>
</div><!-- Widget -->
<?php endif; ?>