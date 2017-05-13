<?php
function __autoload($class_name) {
    require_once('admin/cls/class.' . strtolower($class_name) . '.php');
}
$session = new SessionManager();
require_once('admin/inc/functions.inc.php');
require_once('inc/config.inc.php');
$path = $_SERVER['REQUEST_URI'] ? explode("/", $_SERVER['REQUEST_URI']) : '';
$page = end($path);
$danhmuctintuc = new DanhMucTinTuc();$nganhhang = new NganhHang();
$trangtienich = new TrangTienIch();
$danhmuctintuc_list = $danhmuctintuc->get_all_list();
$nganhhang_list = $nganhhang->get_all_list();
$trangtienich_list = $trangtienich->get_all_list();
?>
<!DOCTYPE html>
<html>
	<head>
		<!-- Basic -->
		<meta charset="utf-8">
		<title>Siêu Thị Tứ Sơn- Châu Đốc An Giang</title>
		<meta name="keywords" content= "An Giang University - SIÊU THỊ TỨ SƠN" />
		<meta name="description" content="An Giang University - SIÊU THỊ TỨ SƠN">
		<meta name="author" content="<Phan Minh Trung> trungminhphan@gmail.com">
		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Favicon -->
        <link rel="shortcut icon" href="images/favicon.png">
		<!-- Web Fonts  -->
		<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' 
		rel='stylesheet' type='text/css'>
		<!-- Lib CSS -->
		<link rel="stylesheet" href="css/lib/bootstrap.min.css">
		<link rel="stylesheet" href="css/lib/animate.min.css">
		<link rel="stylesheet" href="css/lib/font-awesome.min.css">
		<link rel="stylesheet" href="css/lib/univershicon.css">
		<link rel="stylesheet" href="css/lib/owl.carousel.css">
		<link rel="stylesheet" href="css/lib/prettyPhoto.css">
		<link rel="stylesheet" href="css/lib/menu.css">
		<link rel="stylesheet" href="css/lib/timeline.css">
		<!-- Revolution CSS -->
		<link rel="stylesheet" href="revolution/css/settings.css">
		<link rel="stylesheet" href="revolution/css/layers.css">
		<link rel="stylesheet" href="revolution/css/navigation.css">
		<!-- Theme CSS -->
		<link rel="stylesheet" href="css/theme.css">
		<link rel="stylesheet" href="css/theme-responsive.css">
		<!--[if IE]>
			<link rel="stylesheet" href="css/ie.css">
		<![endif]-->
		<!-- Head Libs -->
		<script src="js/lib/modernizr.js"></script>
	
		<!-- Skins CSS -->
		<link rel="stylesheet" href="css/skins/default.css">
		
		<!-- Theme Custom CSS -->
		<link href="css/jquery.booklet.1.1.0.css" type="text/css" rel="stylesheet" media="screen" />
		<link rel="stylesheet" href="css/custom.css">
	</head>
<body>
<!-- Page Loader -->
<div id="pageloader">
	<div class="loader-inner">
		<img src="images/default/giphy.gif" alt="">
	</div>
</div><!-- Page Loader -->
<!-- Back to top -->
<a href="#0" class="cd-top">Top</a>	
<!-- Header Begins -->	
<header id="header" class="default-header colored flat-menu" style="background: #ffff00;">
	<div class="header-top">
		<div class="container">
			<nav>
				<ul class="nav nav-pills nav-top">
					<li class="phone">
						<span><i class="fa fa-phone"></i>1900 9696 78</span>
					</li>
					<li class="phone">
						<span><i class="fa fa-fax"></i>1900 9696 78</span>
					</li>
					<li class="phone">
						<span><i class="fa fa-envelope"></i>sieuthituson@yahoo.com</span>
					</li>
				</ul>
			</nav>
			<ul class="social-icons color">
				<li class="facebook"><a href="https://facebook.com/sttuson" target="_blank" title="Facebook">Facebook</a></li>
				<li class="youtube"><a href="http://www.youtube.com/" target="_blank" title="youtube">Youtube</a></li>
				<li class="rss"><a href="http://www.zalo.vn/" target="_blank" title="Zalo">Zalo</a></li>
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="logo">
			<a href="index.html">
				 <img alt="Siêu thị Tứ Sơn" height="100" width="167" data-sticky-width="133" data-sticky-height="80" src="images/default/logo.png">
			</a>
		</div>
		<button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">
			<i class="fa fa-bars"></i>
		</button>
	</div>
	<div class="navbar-collapse nav-main-collapse collapse">
		<div class="container">
			<nav class="nav-main mega-menu">
				<ul class="nav nav-pills nav-main" id="mainMenu" >
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="index.html"><i class="fa fa-home"></i> Trang chủ</a>
						<?php
						if($danhmuctintuc_list){
							echo '<ul class="dropdown-menu">';
							foreach($danhmuctintuc_list as $dmt){
								echo '<li><a href="tintuc.html?id='.$dmt['_id'].'"><i class="fa fa-chevron-right" aria-hidden="true"></i> '.$dmt['ten'].'</a></li>';
							}
							echo '</ul>';
						}
						?>
						
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="gioithieu.html"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Giới thiệu</a>
						<ul></ul>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="sanpham.html">
							<i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Sản phẩm
						</a>
						<ul class="dropdown-menu">
						<?php
						if($nganhhang_list){
							foreach($nganhhang_list as $nh){
								echo '<li><a href="nganhhang.html?id='.$nh['_id'].'"><i class="fa fa-chevron-right" aria-hidden="true"></i> '.$nh['ten'].'</a></li>';
							}
						}
						?>
						</ul>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="doitac.html">
							<i class="fa fa-users" aria-hidden="true"></i> Đối tác
						</a>
						<ul></ul>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="tienich.html">
							<i class="fa fa-sun-o" aria-hidden="true"></i> Tiện ích
						</a>
						<?php if($trangtienich_list): ?>
						<ul class="dropdown-menu">
						<?php foreach ($trangtienich_list as $tti) {
							echo '<li><a href="trangtienich.html?id='.$tti['_id'].'"><i class="fa fa-chevron-right" aria-hidden="true"></i> '.$tti['ten'].'</a></li>';
						}
						?>
						</ul>
						<?php endif; ?>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="hoidap.html">
							<i class="fa fa-question-circle" aria-hidden="true"></i> Hỏi đáp
						</a>
						<ul></ul>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle menu-color" href="tuyendung.html">
							<i class="fa fa-file-text-o" aria-hidden="true"></i> Tuyển dụng
						</a>
						<ul></ul>
					</li>

					<li class="dropdown"><a href="lienhe.html" class="dropdown-toggle menu-color"><i class="fa fa-envelope-o" aria-hidden="true"></i> Liên hệ</a><ul></ul></li>
				</ul>
			</nav>
		</div>
	</div>
</header><!-- Header Ends -->