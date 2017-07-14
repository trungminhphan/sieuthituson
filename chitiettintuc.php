<?php require_once('header.php');
$trangchu = new TrangChu();$t = $trangchu->get_one();
$tintuc = new TinTuc();
$id = isset($_GET['id']) ? $_GET['id'] : '';
$tintuc->id = $id; $tt = $tintuc->get_one();
?>
<?php if($t['banner']) : ?>
<!-- Home Slider -->
<div class="rs-container light rev_slider_wrapper">
	<div id="revolutionSlider" class="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 1170, "gridheight": 500}'>
		<ul>
		<?php foreach($t['banner'] as $tb) : ?>
			<li data-transition="fade" class="typo-dark heavy">
				<img src="<?php echo $target_images . $tb['aliasname']; ?>"  
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
<!-- Page Main -->
<?php if($tt) : ?>
<div role="main" class="main">
	<!-- Section -->
	<div class="page-default typo-dark bg-grey">
		<!-- Container -->
		<div class="container">
			<div class="row">
				<!-- Page Content -->
				<div class="col-md-9">
					<div class="row">
						<!-- Blog Column -->
						<div class="col-md-12 blog-single">
							<div class="blog-single-wrap">
								<div class="blog-single-details">
									<h4><?php echo $tt['tieude']; ?></h4>
									<ul class="blog-meta">
										<li><i class="fa fa-calendar-o"></i>Ngày đăng: <?php echo date("d/m/Y", $tt['date_post']->sec); ?> 										
									</ul><!-- Blog Meta -->
									<?php echo nl2p($tt['mota']); ?>
									<?php echo $tt['noidung']; ?>
								</div>
							</div>
							<h4 style="margin:30px 0px;">Hình ảnh: </h4>
							<!-- Gallery Block -->
							<div class="isotope-grid grid-three-column" data-gutter="20" data-columns="3">
								<div class="grid-sizer"></div>
								<?php 
								if($tt['hinhanh']){
									foreach($tt['hinhanh'] as $key => $value){
										echo '<div class="item all design web">
												<div class="image-wrapper">
													<a href="'.$target_images.$value['aliasname'].'" title="'.$value['filename'].'" data-rel="prettyPhoto[portfolio]"><img src="'.$target_images.$value['aliasname'].'" alt="" /></a>
												</div>
											</div>';
									}
								}
								?>
								<div class="item all design web">
								
								</div><!-- Portfolio item -->
								<div class="item all design web">

								</div><!-- Portfolio item -->
							</div><!-- Gallery Block -->
						</div>
					</div>
				</div>
				
				<!-- Sidebar -->
				<div class="col-md-3">
					<!-- aside -->
					<aside class="sidebar">
						<?php require_once('widget_timkiem.php'); ?>
						<?php require_once('widget_video.php'); ?>
						<?php require_once('widget_thongtinhanghoa.php'); ?>
						<?php require_once('widget_sanphammoi.php'); ?>
						<?php require_once('widget_tintucmoi.php'); ?>
						<?php require_once('widget_tintuc.php'); ?>
					</aside><!-- aside -->	
				</div><!-- Column -->
			</div><!-- Row -->	
		</div><!-- Container -->	
	</div><!-- Page Default -->
</div><!-- Page Main -->
<?php endif; ?>
<div id="modal-thongtinhanghoa" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="Thông tin hàng hóa">
	<div class="modal-dialog" role="document" style="width:1100px;">
    <div class="modal-content">
      <div class="modal-body">
        <div class="book_wrapper">
			<a id="next_page_button"></a>
			<a id="prev_page_button"></a>
			<div id="loading" class="loading">Loading pages...</div>
			<div id="mybook" style="display:none;">
				<div class="b-load">
				<?php
				if(isset($t['thongtinhanghoa']) && $t['thongtinhanghoa']){
					foreach($t['thongtinhanghoa'] as $key => $tthh){
						if(isset($tthh['aliasname']) && $tthh['aliasname']){
						echo '<div>
								<img src="'.$target_images.$tthh['aliasname'].'" alt="" />
							</div>';
						}
					}
				}
				?>
				</div>
			</div>
		</div>
      </div>
      
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>
<?php require_once('footer.php'); ?>
<script src="js/lib/jquery.easing.1.3.js" type="text/javascript"></script>
<script src="js/lib/jquery.booklet.1.1.0.min.js" type="text/javascript"></script>
<script type="text/javascript">
	$(function() {
		var $mybook 		= $('#mybook');
		var $bttn_next		= $('#next_page_button');
		var $bttn_prev		= $('#prev_page_button');
		var $loading		= $('#loading');
		var $mybook_images	= $mybook.find('img');
		var cnt_images		= $mybook_images.length;
		var loaded			= 0;
		//preload all the images in the book,
		//and then call the booklet plugin

		$mybook_images.each(function(){
			var $img 	= $(this);
			var source	= $img.attr('src');
			$('<img/>').load(function(){
				++loaded;
				if(loaded == cnt_images){
					$loading.hide();
					$bttn_next.show();
					$bttn_prev.show();
					$mybook.show().booklet({
						name:               null,                            // name of the booklet to display in the document title bar
						width:              1000,                             // container width
						height:             707,                             // container height
						speed:              600,                             // speed of the transition between pages
						direction:          'LTR',                           // direction of the overall content organization, default LTR, left to right, can be RTL for languages which read right to left
						startingPage:       0,                               // index of the first page to be displayed
						easing:             'easeInOutQuad',                 // easing method for complete transition
						easeIn:             'easeInQuad',                    // easing method for first half of transition
						easeOut:            'easeOutQuad',                   // easing method for second half of transition

						closed:             true,                           // start with the book "closed", will add empty pages to beginning and end of book
						closedFrontTitle:   null,                            // used with "closed", "menu" and "pageSelector", determines title of blank starting page
						closedFrontChapter: null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank starting page
						closedBackTitle:    null,                            // used with "closed", "menu" and "pageSelector", determines chapter name of blank ending page
						closedBackChapter:  null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank ending page
						covers:             false,                           // used with  "closed", makes first and last pages into covers, without page numbers (if enabled)

						pagePadding:        0,                              // padding for each page wrapper
						pageNumbers:        true,                            // display page numbers on each page

						hovers:             false,                            // enables preview pageturn hover animation, shows a small preview of previous or next page on hover
						overlays:           false,                            // enables navigation using a page sized overlay, when enabled links inside the content will not be clickable
						tabs:               false,                           // adds tabs along the top of the pages
						tabWidth:           0,                              // set the width of the tabs
						tabHeight:          0,                              // set the height of the tabs
						arrows:             false,                           // adds arrows overlayed over the book edges
						cursor:             'pointer',                       // cursor css setting for side bar areas

						hash:               false,                           // enables navigation using a hash string, ex: #/page/1 for page 1, will affect all booklets with 'hash' enabled
						keyboard:           true,                            // enables navigation with arrow keys (left: previous, right: next)
						next:               $bttn_next,          			// selector for element to use as click trigger for next page
						prev:               $bttn_prev,          			// selector for element to use as click trigger for previous page

						menu:               null,                            // selector for element to use as the menu area, required for 'pageSelector'
						pageSelector:       false,                           // enables navigation with a dropdown menu of pages, requires 'menu'
						chapterSelector:    false,                           // enables navigation with a dropdown menu of chapters, determined by the "rel" attribute, requires 'menu'

						shadows:            true,                            // display shadows on page animations
						shadowTopFwdWidth:  0,                             // shadow width for top forward anim
						shadowTopBackWidth: 0,                             // shadow width for top back anim
						shadowBtmWidth:     0,                              // shadow width for bottom shadow

						before:             function(){},                    // callback invoked before each page turn animation
						after:              function(){}                     // callback invoked after each page turn animation
					});
					
				}
			}).attr('src',source);
		});
		
	});
</script>