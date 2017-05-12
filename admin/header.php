<?php
function __autoload($class_name) {
    require_once('cls/class.' . strtolower($class_name) . '.php');
}
$session = new SessionManager();
$users = new Users();
require_once('inc/functions.inc.php');
require_once('inc/config.inc.php');
if(!$users->isLoggedIn()){ transfers_to('./login.html?url=' . $_SERVER['REQUEST_URI']); }
?>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>SIÊU THỊ TỨ SƠN</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="Siêu thị Tứ Sơn, 102 Nguyễn Tri Phương, P.Châu Phú B, TP.Châu Đốc, An Giang." />
    <meta content="Siêu thị Tứ Sơn, 102 Nguyễn Tri Phương, P.Châu Phú B, TP.Châu Đốc, An Giang." />
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<link href="assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
	<link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="assets/css/animate.min.css" rel="stylesheet" />
	<link href="assets/css/style.min.css" rel="stylesheet" />
	<link href="assets/css/style-responsive.min.css" rel="stylesheet" />
	<link href="assets/css/theme/red.css" rel="stylesheet" id="theme" />
	<!-- ================== END BASE CSS STYLE ================== -->
    <link href="assets/plugins/ionicons/css/ionicons.min.css" rel="stylesheet" />
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="assets/plugins/pace/pace.min.js"></script>
	<!-- ================== END BASE JS ================== -->
</head>
<body>
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	<!-- begin #page-container -->
	<div id="page-container" class="page-container fade page-without-sidebar page-header-fixed page-with-top-menu">
		<!-- begin #header -->
		<div id="header" class="header navbar navbar-default navbar-fixed-top">
			<!-- begin container-fluid -->
			<div class="container-fluid">
				<!-- begin mobile sidebar expand / collapse button -->
				<div class="navbar-header">
					<a href="index.html" class="navbar-brand"><span class="fa fa-shopping-cart"></span> SIÊU THỊ TỨ SƠN</a>
					<button type="button" class="navbar-toggle" data-click="top-menu-toggled">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!-- end mobile sidebar expand / collapse button -->
				
				<!-- begin header navigation right -->
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown navbar-user">
						<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
							<img src="images/congtyanova-farm.png" alt="" /> 
							<span class="hidden-xs">Phan Minh Trung</span> <b class="caret"></b>
						</a>
						<ul class="dropdown-menu animated fadeInLeft">
							<li class="arrow"></li>
							<li><a href="change_password.html"><span class="fa fa-key"></span> Thay đổi mật khẩu</a></li>
                            <?php if($users->is_admin()) : ?>
                            <li class="arrow"></li>
                            <li><a href="users.html"><span class="fa fa-users"></span> Danh sách tài khoản</a></li>
                            <?php endif; ?>
							<li class="divider"></li>
							<li><a href="logout.html"><span class="fa fa-sign-out"></span> Đăng xuất</a></li>
						</ul>
					</li>
				</ul>
				<!-- end header navigation right -->
			</div>
			<!-- end container-fluid -->
		</div>
		<!-- end #header -->
		<!-- begin #top-menu -->
		<div id="top-menu" class="top-menu">
            <!-- begin top-menu nav -->
            <ul class="nav">
                <li class="has-sub">
                    <a href="trangchu.html">
                    	<b class="caret pull-right"></b>
                        <i class="fa fa-home"></i>
                        <span>TRANG CHỦ</span>
                    </a>
                    <ul class="sub-menu">
                    	<li><a href="trangchu.html">Trang chủ</a></li>
                        <li class="divider"></li>
                        <li><a href="danhmuctintuc.html">Danh mục tin tức</a></li>
                        <li class="divider"></li>
                        <li><a href="tintuc.html">Tin tức</a></li>
                    </ul>
                </li>
                <li>
                    <a href="gioithieu.html">
                        <i class="fa fa-th"></i>
                        <span>GIỚI THIỆU</span>
                    </a>
                </li>
                <li class="has-sub">
                    <a href="gioithieusanpham.html">
                    	<b class="caret pull-right"></b>
                        <i class="fa fa-gears "></i> 
                        <span>SẢN PHẨM</span>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="gioithieusanpham.html">Trang giới thiệu</a></li>
                        <li class="divider"></li>
                    	<li><a href="nganhhang.html">Danh mục ngành hàng</a></li>
                        <li class="divider"></li>
                        <li><a href="loaisanpham.html">Danh mục Loại sản phẩm</a></li>
                        <li class="divider"></li>
                        <li><a href="sanpham.html">Sản phẩm</a></li>
                    </ul>
                </li>
                <li>
                    <a href="doitac.html">
                        <i class="fa fa-thumbs-up"></i>
                        <span>DÀNH CHO ĐỐI TÁC</span>
                    </a>
                </li>
                <li class="has-sub">
                    <a href="tienich.html">
                        <i class="fa fa-sun-o"></i>
                        <span>TIỆN ÍCH</span>
                    </a>
                    <ul class="sub-menu">
                    	<li><a href="tienich.html">Tiện ích</a></li>
                        <li class="divider"></li>
                        <li><a href="trangtienich.html">Trang tiện ích</a></li>
                    </ul>
                </li> 
                <li>
                    <a href="hoidap.html">
                        <i class="fa fa-question-circle"></i>
                        <span>HỎI - ĐÁP</span>
                    </a>
                </li>           
                <li>
                    <a href="tuyendung.html">
                        <i class="fa fa-users"></i>
                        <span>TUYỂN DỤNG</span>
                    </a>
                </li> 
                <li>
                    <a href="lienhe.html">
                        <i class="fa fa-envelope-o"></i>
                        <span>LIÊN HỆ</span>
                    </a>
                </li>         
            </ul>
            <!-- end top-menu nav -->
		</div>
		<!-- end #top-menu -->
		
		<!-- begin #content -->
		<div id="content" class="content">