function upload_hinhanh(){
    $(".hinhanh_dinhkem").change(function() {
      var formData = new FormData($("#tintucform")[0]);
       $.ajax({
        url: "post.upload_hinhanh.php", type: "POST",
        data: formData, async: false,
        success: function(datas) {
            if(datas=='Failed'){
                $.gritter.add({
                    title:"Không thể Thêm Hình ảnh",
                    text:"Không thể Thêm Hình ảnh",
                    image:"assets/img/login.png",
                    sticky:false,
                    time:""
                });
            } else {
                $("#hinhanh_list").prepend(datas); delete_file();
            }
        },
        cache: false, contentType: false, processData: false
        }).fail(function() {
            $.gritter.add({
                title:"Không thể Upload tập tin",
                text:"Không thể Upload tập tin",
                image:"assets/img/login.png",
                sticky:false,
                time:""
            });
        });
    });
}

function upload_banner(){
    $(".banner_dinhkem").change(function() {
      var formData = new FormData($("#bannerform")[0]);
       $.ajax({
        url: "post.upload_banner.php", type: "POST",
        data: formData, async: false,
        success: function(datas) {
            if(datas=='Failed'){
                $.gritter.add({
                    title:"Không thể Thêm Banner",
                    text:"Không thể Thêm Banner",
                    image:"assets/img/login.png",
                    sticky:false,
                    time:""
                });
            } else {
                //$(".info").remove();
                $("#banner_list").prepend(datas); delete_file();
            }
        },
        cache: false, contentType: false, processData: false
        }).fail(function() {
            $.gritter.add({
                title:"Không thể Upload tập tin",
                text:"Không thể Upload tập tin",
                image:"assets/img/login.png",
                sticky:false,
                time:""
            });
        });
    });
}

function upload_hanghoa(){
    $(".hanghoa_dinhkem").change(function() {
      var formData = new FormData($("#thongtinhanghoaform")[0]);
       $.ajax({
        url: "post.upload_thongtinhanghoa.php", type: "POST",
        data: formData, async: false,
        success: function(datas) {
            if(datas=='Failed'){
                $.gritter.add({
                    title:"Không thể Thêm Hàng Hóa",
                    text:"<?php echo $msg; ?>",
                    image:"assets/img/login.png",
                    sticky:false,
                    time:""
                });
            } else {
                //$(".info").remove();
                $("#hanghoa_list").prepend(datas); delete_file();
            }
        },
        cache: false, contentType: false, processData: false
        }).fail(function() {
            $.gritter.add({
                title:"Không thể Upload tập tin",
                text:"Không thể Upload tập tin",
                image:"assets/img/login.png",
                sticky:false,
                time:""
            });
        });
    });
}

function delete_file(){
    var link_delete; var _this;
    $(".delete_file").click(function(){
        link_delete = $(this).attr("href"); _this = $(this);
        $.ajax({
            url: link_delete,
            type: "GET",
            success: function(datas) {
                _this.parents("div.items").fadeOut("slow", function(){
                    $(this).remove();
                });
            }
        }).fail(function() {
            $.gritter.add({
                title:"Không thể Xóa tập tin",
                text:"Không thể Xóa tập tin",
                image:"assets/img/login.png",
                sticky:false,
                time:""
            });
        });
    });
}