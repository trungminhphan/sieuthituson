
/** danhmuctintuc indexes **/
db.getCollection("danhmuctintuc").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** doitac indexes **/
db.getCollection("doitac").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** gioithieu indexes **/
db.getCollection("gioithieu").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** gioithieusanpham indexes **/
db.getCollection("gioithieusanpham").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** hoidap indexes **/
db.getCollection("hoidap").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** lienhe indexes **/
db.getCollection("lienhe").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** loaisanpham indexes **/
db.getCollection("loaisanpham").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** nganhhang indexes **/
db.getCollection("nganhhang").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sanpham indexes **/
db.getCollection("sanpham").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tienich indexes **/
db.getCollection("tienich").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tintuc indexes **/
db.getCollection("tintuc").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** trangchu indexes **/
db.getCollection("trangchu").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** trangtienich indexes **/
db.getCollection("trangtienich").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tuyendung indexes **/
db.getCollection("tuyendung").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmuctintuc records **/
db.getCollection("danhmuctintuc").insert({
  "_id": ObjectId("58e5db047247aec00f000029"),
  "banner": [
    {
      "filename": "bg-12.jpg",
      "aliasname": "52151c56b0dc0ca9fbc7b7ac7770ab60_20170406060453.jpg",
      "link": ""
    },
    {
      "filename": "bg-07.jpg",
      "aliasname": "518bf6da5bfc7157e475f34f54369795_20170406060403.jpg",
      "link": ""
    },
    {
      "filename": "bg-07.jpg",
      "aliasname": "518bf6da5bfc7157e475f34f54369795_20170406060459.jpg",
      "link": ""
    }
  ],
  "ten": "Chương trình và sự kiện tại Siêu thị Tứ Sơn",
  "thutu": NumberInt(1),
  "hienthi": NumberInt(1)
});
db.getCollection("danhmuctintuc").insert({
  "_id": ObjectId("58e5e7357247aec00f00002a"),
  "banner": [
    
  ],
  "ten": "Người Việt Nam ưu tiên dùng hàng Việt Nam",
  "thutu": NumberInt(2),
  "hienthi": NumberInt(1)
});
db.getCollection("danhmuctintuc").insert({
  "_id": ObjectId("58e5e7457247aec00f00002b"),
  "banner": [
    
  ],
  "ten": "Truyền thông kết nối hàng hoá",
  "thutu": NumberInt(3),
  "hienthi": NumberInt(1)
});
db.getCollection("danhmuctintuc").insert({
  "_id": ObjectId("58e5e7527247aec00f00002c"),
  "banner": [
    
  ],
  "ten": "Hoạt động nội bộ",
  "thutu": NumberInt(4),
  "hienthi": NumberInt(1)
});

/** doitac records **/
db.getCollection("doitac").insert({
  "_id": ObjectId("58e64b267247ae300f000029"),
  "banner": [
    {
      "filename": "bg-01.jpg",
      "aliasname": "4bd98bc745ea027e473f09d64936c015_20170406020430.jpg",
      "link": ""
    }
  ],
  "gioithieu": "<p><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span></p><p><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span></p><p><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\">Giới thiệu&nbsp;</span><span style=\"color: rgb(36, 42, 48); text-align: right;\"><br></span><span style=\"color: rgb(36, 42, 48); text-align: right;\"><br></span><br></p>",
  "loiich": "<p><span style=\"color: rgb(36, 42, 48); font-weight: 600; text-align: right;\">Lợi ích khi tham gia</span><br></p>",
  "cachthuc": "<p><span style=\"color: rgb(36, 42, 48); font-weight: 600; text-align: right;\">Cách thức tham gia</span><br></p>",
  "yeucau": "<p><span style=\"color: rgb(36, 42, 48); font-weight: 600; text-align: right;\">Yêu cầu khi trở thành nhà cung cấp</span><br></p>",
  "dathamgia": "<p><span style=\"color: rgb(36, 42, 48); font-weight: 600; text-align: right;\">Các đối tác đã tham gia</span><br></p>"
});

/** gioithieu records **/
db.getCollection("gioithieu").insert({
  "_id": ObjectId("58e60de87247ae180f00002a"),
  "banner": [
    {
      "filename": "bg-07.jpg",
      "aliasname": "518bf6da5bfc7157e475f34f54369795_20170406090453.jpg",
      "link": ""
    }
  ],
  "noidung": "<h5>Siêu Thị Tứ Sơn hình thành và phát triển</h5><p>Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn&nbsp;</p><p>Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn&nbsp;</p><p>Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn Nội dung giới thiệu Siêu Thị Tứ Sơn&nbsp;</p><h5>Thông tin cơ bản về giao dịch mua bán với Siêu thị Tứ Sơn</h5><ul><li>Siêu thị Tứ Sơn không có hình thức công nợ</li><li>Siêu thị Tứ Sơn không có hình thức công nợ</li><li>Siêu thị Tứ Sơn không có hình thức công nợ</li><li>Siêu thị Tứ Sơn không có hình thức công nợ</li><li>Siêu thị Tứ Sơn không có hình thức công nợ</li></ul><p><br></p>"
});

/** gioithieusanpham records **/
db.getCollection("gioithieusanpham").insert({
  "_id": ObjectId("58e611a07247aec00f00002e"),
  "banner": [
    {
      "filename": "bg-07.jpg",
      "aliasname": "518bf6da5bfc7157e475f34f54369795_20170406100432.jpg",
      "link": ""
    }
  ],
  "cachthucdathang": "<p>Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng Cách thức đặt hàng&nbsp;<br></p>",
  "trothanhnhacungcap": "<p>Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp&nbsp;</p><p>Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp Trở thành nhà cung cấp&nbsp;<br></p>"
});

/** hoidap records **/
db.getCollection("hoidap").insert({
  "_id": ObjectId("58e7062a32341cfc09003687"),
  "hoten": "Anh Trung",
  "dienthoai": "0123456789",
  "email": "trung2002lx@yahoo.com",
  "cauhoi": "Nội dung câu hỏi Nội dung câu hỏ",
  "hienthi": NumberInt(1),
  "date_post": ISODate("2017-04-07T03:23:22.0Z"),
  "traloi": "Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1 Nội dung trả lời 1\r\n",
  "nguoitraloi": "Siêu Thị Tứ Sơn",
  "ngaytraloi": ISODate("2017-04-17T15:30:01.0Z"),
  "thuonggap": NumberInt(1)
});
db.getCollection("hoidap").insert({
  "_id": ObjectId("58e70e9a32341c0c0a0002d6"),
  "hoten": "Phan Minh Trung",
  "dienthoai": "Phan Minh Trung",
  "email": "eeeee@gmail.com",
  "cauhoi": "Nội dung hỏi Nội dung hỏi",
  "hienthi": NumberInt(1),
  "date_post": ISODate("2017-04-07T03:59:22.0Z"),
  "traloi": "Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời Nội dung trả lời ",
  "nguoitraloi": "Siêu Thị Tứ Sơn",
  "ngaytraloi": ISODate("2017-04-17T15:29:35.0Z"),
  "thuonggap": NumberInt(1)
});
db.getCollection("hoidap").insert({
  "_id": ObjectId("58f4db8b7247ae300f00002b"),
  "hoten": "Phan Minh Trung",
  "dienthoai": "0985954347",
  "email": "trungminhphan@gmail.com",
  "cauhoi": "Đặt câu hỏi",
  "hienthi": NumberInt(0),
  "date_post": ISODate("2017-04-17T15:13:15.0Z")
});

/** lienhe records **/
db.getCollection("lienhe").insert({
  "_id": ObjectId("58e7108332341c0c0a007572"),
  "diachi": "102 Nguyễn Tri Phương, P.Châu Phú B, TP.Châu Đốc, An Giang",
  "dienthoai": "1900 96 96 78",
  "email": "sieuthituson@yahoo.com",
  "noidung": "<p><b>SIÊU THỊ TỨ SƠN</b></p><p>102 Nguyễn Tri Phương, P.Châu Phú B, TP.Châu Đốc, An Giang</p><p>1900 96 96 78</p><p>sieuthituson@yahoo.com<br></p>"
});

/** loaisanpham records **/
db.getCollection("loaisanpham").insert({
  "_id": ObjectId("58e616137247aebc0f00002e"),
  "banner": [
    
  ],
  "ten": "Sản phẩm sắp có mặt tại Tứ Sơn",
  "thutu": NumberInt(1),
  "hienthi": NumberInt(1)
});
db.getCollection("loaisanpham").insert({
  "_id": ObjectId("58e616987247ae280f00002a"),
  "banner": [
    
  ],
  "ten": "Sản phẩm mới",
  "thutu": NumberInt(2),
  "hienthi": NumberInt(1)
});
db.getCollection("loaisanpham").insert({
  "_id": ObjectId("58e616a67247ae280f00002b"),
  "banner": [
    
  ],
  "ten": "Sản phẩm giá tốt",
  "thutu": NumberInt(3),
  "hienthi": NumberInt(1)
});
db.getCollection("loaisanpham").insert({
  "_id": ObjectId("58e616ba7247ae280f00002c"),
  "banner": [
    
  ],
  "ten": "Thực phẩm chế biến sẵn",
  "thutu": NumberInt(4),
  "hienthi": NumberInt(1)
});

/** nganhhang records **/
db.getCollection("nganhhang").insert({
  "_id": ObjectId("58e614cd7247aebc0f000029"),
  "banner": [
    {
      "filename": "bg-07.jpg",
      "aliasname": "518bf6da5bfc7157e475f34f54369795_20170406100407.jpg",
      "link": ""
    }
  ],
  "ten": "Thực phẩm",
  "thutu": NumberInt(1),
  "hienthi": NumberInt(1)
});
db.getCollection("nganhhang").insert({
  "_id": ObjectId("58e614dd7247aebc0f00002a"),
  "banner": [
    {
      "filename": "bg-01.jpg",
      "aliasname": "4bd98bc745ea027e473f09d64936c015_20170406100448.jpg",
      "link": ""
    }
  ],
  "ten": "Hóa mỹ phẩm",
  "thutu": NumberInt(2),
  "hienthi": NumberInt(1)
});
db.getCollection("nganhhang").insert({
  "_id": ObjectId("58e614ec7247aebc0f00002b"),
  "banner": [
    {
      "filename": "bg-04.jpg",
      "aliasname": "e040bc0128285dcbc533d6cc9630db41_20170406100403.jpg",
      "link": ""
    }
  ],
  "ten": "Gia dụng",
  "thutu": NumberInt(3),
  "hienthi": NumberInt(1)
});
db.getCollection("nganhhang").insert({
  "_id": ObjectId("58e614f97247aebc0f00002c"),
  "banner": [
    {
      "filename": "bg-06.jpg",
      "aliasname": "af2fc0e62d8729fb8a53caf286fa10f4_20170406100416.jpg",
      "link": ""
    }
  ],
  "ten": "Thời Trang",
  "thutu": NumberInt(4),
  "hienthi": NumberInt(1)
});
db.getCollection("nganhhang").insert({
  "_id": ObjectId("58e615067247aebc0f00002d"),
  "banner": [
    {
      "filename": "bg-12.jpg",
      "aliasname": "52151c56b0dc0ca9fbc7b7ac7770ab60_20170406100443.jpg",
      "link": ""
    }
  ],
  "ten": "Điện gia dụng",
  "thutu": NumberInt(6),
  "hienthi": NumberInt(1)
});

/** sanpham records **/
db.getCollection("sanpham").insert({
  "_id": ObjectId("58e62e5c7247ae180f00002b"),
  "ten": "Sản phẩm A",
  "mota": "<p>Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A </p><p>Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A </p><p>Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A </p><p>Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A Sản phẩm A </p>",
  "hinhanh": [
    {
      "filename": "shop-04.jpg",
      "aliasname": "a54bf8a98ccfaf5440b830c89245ab30_20170417080411.jpg",
      "mota": ""
    }
  ],
  "hienthi": NumberInt(1),
  "id_nganhhang": [
    "58e614cd7247aebc0f000029",
    "58e614dd7247aebc0f00002a",
    "58e614ec7247aebc0f00002b",
    "58e614f97247aebc0f00002c",
    "58e615067247aebc0f00002d"
  ],
  "id_loaisanpham": [
    "58e616137247aebc0f00002e",
    "58e616987247ae280f00002a",
    "58e616a67247ae280f00002b",
    "58e616ba7247ae280f00002c"
  ],
  "date_post": ISODate("2017-04-17T09:36:06.0Z")
});
db.getCollection("sanpham").insert({
  "_id": ObjectId("58f4795fd893988c0d000029"),
  "ten": "Sản phẩm B",
  "mota": "<p>Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B </p><p>Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B </p><p>Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B </p><p>Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B Sản phẩm B <br></p>",
  "hinhanh": [
    {
      "filename": "shop-02.jpg",
      "aliasname": "2b1de8f45edc7cc08b4d7aada1c564d7_20170417080421.jpg",
      "mota": ""
    }
  ],
  "hienthi": NumberInt(1),
  "id_nganhhang": [
    "58e614cd7247aebc0f000029",
    "58e614dd7247aebc0f00002a",
    "58e614ec7247aebc0f00002b",
    "58e614f97247aebc0f00002c",
    "58e615067247aebc0f00002d"
  ],
  "id_loaisanpham": [
    "58e616137247aebc0f00002e",
    "58e616987247ae280f00002a",
    "58e616a67247ae280f00002b",
    "58e616ba7247ae280f00002c"
  ],
  "date_post": ISODate("2017-04-17T08:32:28.0Z")
});
db.getCollection("sanpham").insert({
  "_id": ObjectId("58f47985d893988c0d00002a"),
  "ten": "Sản phẩm C",
  "mota": "<p>Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C </p><p>Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C </p><p>Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C </p><p>Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C Sản phẩm C <br></p>",
  "hinhanh": [
    {
      "filename": "shop-03.jpg",
      "aliasname": "33898f0df4f35d1b064166584163fc58_20170417080459.jpg",
      "mota": ""
    }
  ],
  "hienthi": NumberInt(1),
  "id_nganhhang": [
    "58e614cd7247aebc0f000029",
    "58e614dd7247aebc0f00002a",
    "58e614ec7247aebc0f00002b",
    "58e614f97247aebc0f00002c",
    "58e615067247aebc0f00002d"
  ],
  "id_loaisanpham": [
    "58e616137247aebc0f00002e",
    "58e616987247ae280f00002a",
    "58e616a67247ae280f00002b",
    "58e616ba7247ae280f00002c"
  ],
  "date_post": ISODate("2017-04-17T08:32:42.0Z")
});
db.getCollection("sanpham").insert({
  "_id": ObjectId("58f479acd893988c0d00002b"),
  "ten": "Sản phẩm D",
  "mota": "<p>Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D </p><p>Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D </p><p>Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D Sản phẩm D <br></p>",
  "hinhanh": [
    {
      "filename": "shop-07.jpg",
      "aliasname": "4245ac0d80e7b3d96c4f5ccae43b3fc5_20170417080439.jpg",
      "mota": ""
    }
  ],
  "hienthi": NumberInt(1),
  "id_nganhhang": [
    "58e614cd7247aebc0f000029",
    "58e614dd7247aebc0f00002a",
    "58e614ec7247aebc0f00002b",
    "58e614f97247aebc0f00002c",
    "58e615067247aebc0f00002d"
  ],
  "id_loaisanpham": [
    "58e616137247aebc0f00002e",
    "58e616987247ae280f00002a",
    "58e616a67247ae280f00002b",
    "58e616ba7247ae280f00002c"
  ],
  "date_post": ISODate("2017-04-17T08:32:55.0Z")
});
db.getCollection("sanpham").insert({
  "_id": ObjectId("58f47f01d89398840d000029"),
  "ten": "Sản phẩm E",
  "mota": "<p>Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E </p><p>Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E </p><p>Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E Sản phẩm E <br></p>",
  "hinhanh": [
    {
      "filename": "shop-05.jpg",
      "aliasname": "c32d8e230f5ce2d35fbb1c70ac2c1828_20170417080424.jpg",
      "mota": ""
    }
  ],
  "hienthi": NumberInt(1),
  "id_nganhhang": [
    "58e614cd7247aebc0f000029",
    "58e614dd7247aebc0f00002a",
    "58e614ec7247aebc0f00002b",
    "58e614f97247aebc0f00002c",
    "58e615067247aebc0f00002d"
  ],
  "id_loaisanpham": [
    "58e616137247aebc0f00002e",
    "58e616987247ae280f00002a",
    "58e616a67247ae280f00002b",
    "58e616ba7247ae280f00002c"
  ],
  "date_post": ISODate("2017-04-17T09:35:38.0Z")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": ObjectId("58e5a2a5400ae1085de23284"),
  "session_id": "tfikcnhvr0mis0gu74b0gm6j33",
  "data": "user_id|s:24:\"58e5a2e47247aec40f000029\";roles|i:7;",
  "timedout_at": NumberInt(1491458045),
  "expired_at": NumberInt(1491480389)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58e5d542400ae1085de23285"),
  "session_id": "n8kj3lkjdv5thkssj60smsr030",
  "data": "user_id|s:24:\"58e5a2e47247aec40f000029\";roles|i:7;",
  "timedout_at": NumberInt(1491498366),
  "expired_at": NumberInt(1491523016)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58e660ebc872f0777d745823"),
  "session_id": "dvp9ie61rh29qtkfflbgeu8r56",
  "data": "user_id|s:24:\"58e5a2e47247aec40f000029\";roles|i:7;",
  "timedout_at": NumberInt(1491499122),
  "expired_at": NumberInt(1491529099)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58e6fef2c872f0777d745824"),
  "session_id": "020fa6k8lfaqkcfj067kalb9h7",
  "data": "user_id|s:24:\"58e5a2e47247aec40f000029\";roles|i:7;",
  "timedout_at": NumberInt(1491654129),
  "expired_at": NumberInt(1491680235)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f32263325592a249f84295"),
  "session_id": "4hvtoeiejmfliluqttb7n0tba5",
  "data": "",
  "timedout_at": NumberInt(1492335059),
  "expired_at": NumberInt(1492365059)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f4701d340b78c08cd029a7"),
  "session_id": "p67hah2rgkp7h1d9e7tgk0oh62",
  "data": "user_id|s:24:\"58e5a2e47247aec40f000029\";roles|i:7;",
  "timedout_at": NumberInt(1492429965),
  "expired_at": NumberInt(1492450493)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("58f4d389400ae1085de2329b"),
  "session_id": "ldql05cl3gbukko9c5oi26plb7",
  "data": "user_id|s:24:\"58e5a2e47247aec40f000029\";roles|i:7;",
  "timedout_at": NumberInt(1492449306),
  "expired_at": NumberInt(1492475945)
});

/** tienich records **/
db.getCollection("tienich").insert({
  "_id": ObjectId("58e6532d7247aebc0f000030"),
  "ten": "Mua hàng qua Điện thoại ABC",
  "noidung": "<p>Mua hàng qua Điện thoại<br></p>",
  "thutu": "1",
  "hienthi": "1",
  "date_post": ISODate("2017-04-06T14:40:58.0Z")
});
db.getCollection("tienich").insert({
  "_id": ObjectId("58e653917247aec40f00002c"),
  "ten": "Chương trình thẻ cùng nhau tiết kiệm",
  "noidung": "Chương trình thẻ cùng nhau tiết kiệm",
  "thutu": "2",
  "hienthi": "1",
  "date_post": ISODate("2017-04-06T14:41:21.0Z")
});
db.getCollection("tienich").insert({
  "_id": ObjectId("58e653e87247ae280f00002d"),
  "ten": "Có mua hàng là được giao hàng",
  "noidung": "Có mua hàng là được giao hàng",
  "thutu": "3",
  "hienthi": "1",
  "date_post": ISODate("2017-04-06T15:00:33.0Z"),
  "hinhanh": [
    {
      "filename": "shopping.png",
      "aliasname": "51c70a39774fecb8524c0bcaade7a084_20170406030427.png",
      "mota": ""
    }
  ]
});
db.getCollection("tienich").insert({
  "_id": ObjectId("58e654407247ae280f00002e"),
  "ten": "Dùng thử sản phẩm",
  "noidung": "<p>Dùng thử sản phẩm<br></p>",
  "thutu": "4",
  "hienthi": "1",
  "date_post": ISODate("2017-04-06T14:44:16.0Z")
});
db.getCollection("tienich").insert({
  "_id": ObjectId("58e657d57247aec00f00002f"),
  "ten": "Sản phẩm sắp có mặt tại Tứ Sơn",
  "noidung": "<p><img src=\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJEN0E3Mzk1MjM1NTExRTdBQkY5OTdBMDQzQjRCQzY0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJEN0E3Mzk2MjM1NTExRTdBQkY5OTdBMDQzQjRCQzY0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQ3QTczOTMyMzU1MTFFN0FCRjk5N0EwNDNCNEJDNjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ3QTczOTQyMzU1MTFFN0FCRjk5N0EwNDNCNEJDNjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAH0AfQDAREAAhEBAxEB/8QA1AABAAICAwEAAAAAAAAAAAAAAAYHBAUCAwgBAQEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwgQAAEDAwIDAgYJDwgIBgMBAAEAAgMRBAUSBiExB0ETUWGBIjIUcUJSk5QVVRYIkaGx0WJygpKyIzPT41YXwaLSU3M1VxhDY7PDJDREdPDCg6MmN1SERTYRAQACAQIBBQwGBwYHAAMBAAABAgMRBAUhMUFREvBhcYGRobHRIjITBsFSklMUFeFCctIjMxbxYuKTVBeCorLCQyQ08nM1B//aAAwDAQACEQMRAD8A9UoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMHJZ7CYxurI39vaeKaRrCfYBNT5FhbJWvPKRh2mXL7lbW8EIpkOtOwLN/dsvX3kv9XbxOJ/n92D5CtFt5jjp1W+H5Z3l41msVjvz6tWvHWG/vdXxJtPJX7favex0Qr5GSN+usfxcz7tZlJn5cpT+bnx08/wBMPrN19Yrvja7TgtgeXrUrf1rPsJ8XNPNV5Ow4ZT3s9p/Zj/C4h/Xic1MeKtK+111p9aT7K8/jz1PdOEV6clu7xOYxnXN/PL4yLxBgP+4XvZz9cd3iY/H4TH/jyT3ftHxR1yH/APcxp/8ATH6hOxn647vEfieE/dZPL/icTa9douIvMXP4j5v+6CaZ+uHvxOET+rkju/aG5Xrna1EuGxt60e2jlo768kf2E7WeOiJJwcJvzZMlfF+iQdROodmT8Z7JuHsHOS1fqA8jBMnx8kc9Hv5Psr/y9xX/AIv09lyh65bbY7u8pYX+MkBo/voaNHh4ktd/NSN7XpiYeW+Vs88uO1Lx3p7vSkeM6kbHyWn1XMW4LuQmJgJPgHehlfIt1dxSeaVZn4Lu8XvY7eLl9GqRRyRyMD43B7HcWuaQQfYIW6JVlqzE6S5I8EBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEf3Bv3aWADxksjEyZnO3Ye8lr4C1tdP4VFpyZ6U55WOz4Tudx7lJ06+aP0+JEz1P3XnCWbP21PPE6obkL383D4jxLG/UeVo/E3t7lVx+R7fBy7nNET9WvLP0z5oPmT1Pzg1bg3MMdA/wBKzxzTUD3JeO6afKHJ8HLb3raeA/NNhg/k4e3PXfun6GfjuiuxrV3eXUM+TlPpuu5nOaXdp0M0N+ss67Okc/Kj5vmbd35KzFI/ux9M6yleN27gMWxrcdjra0DBRpiiY0/jAVW+uOteaFPn3mbL797W8My2KzRhAQEBAQEBBwmhhmjMc0bZYzzY8BwPkK8mNWVbTWdYnSUcynTXYuSc59zhrdsrhTvYGmB48dYixarbfHPQs8HG93i5K5LadU8vp1RyTo02wf3218/fYiUce7c8yxuP3VDG+n4RWmdnp7szCzr8yzkjTcYqZI8k/TDh631p29+ntrbc1mwcXwkMnp97+bP5S81zU/vQy+Hwvc802wW7/N9P0M7FdZ9tTXHqeZhuMHf1oYbuN2mviNA7ylgCyrvK66W9mUfP8tZ4r2sU1y066z3R505s76yvoG3FlcR3MDvRlhe17T5WkhSotE8sKHLivjns3iaz3+R3L1rEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBzmtaXOIDQKkngAAhEaoLuLq7t7HXHxfimSZzLPOmK1swXtLuXF7Q6vH3IKi5N1WOSPalf7P5ezZK9vJpix9dvV69Gp+JOq27vOzF83bOKf/ANHa+dcuaex1Dw8ep5+9WvsZcnvT2YTPxXDtn/Kr8fJ9afd7vBEeFIdvdK9l4Qtljshe3jf+rvfz76n3Id5jfwWhbse2pXo1lW7zj26z8k27NeqvJ+mfHKXAAAAcAOQUhTCAgICAgICAgICAgICAgIMHLYPD5e3NvlLKG9hII0zMa+lfck8R5FjakW5JjVv2+6y4bdrHaaz3pQa96Qeo3Dr7ZuXuMJdcxbOc6W3d4Gmp1hviJcPEottppy0nR0GL5i+JXsbrHXLXr5rer0eF0N6h702u9sO98OZLMEN+ObGj4+PIvpRo8ujyrz496e/HJ1tk8H2u75dpk0t9S3P6/wDqTvA7nwWftvWMTeR3LKAuY00e2vumGjh9RSqZK3jklz+72Obb20yVmvo8raLNEEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEER3d1M29t1/qgLshlnnTFjrbz3l/uXFodpPioXeJR8u5rTk55XPD+B5tzHa9zH9ae79HfRpm1+oG93CbdN27B4Rxq3D21BO9vZ3npBv4Wo+Jq0/CyZPfns16lpO/2ex5NvX4uX6883i/Rp40727tLb23bcwYiyZb6v0s3pSyHwvkdV7vqqVjxVpzQ5/ecQzbm2uS0z3uiPBHM262IQgICDi97I2OfI4MY0FznuNAAOZJK9iJmdIeWtFY1nkiEYm6j7dGQgsrd0l06aVkRmjbSNushtdTqVpXsCs68IzdibTpXSNe+56/zPtYy1x1mbza0RrHNGvh+hKVVuiY2SmvIbC4lsoRcXbI3OghJoHPA4BbMNazeItOldeWWjdXvXHa2OO1eI5I65QTD3fUa4zFvPkZfUrHvQJm3AiiYW14sYw+eSRwH2Ve7jHs645ikdq2nRrPj6nG7LNxW+etss9jH2uXtdmI06ojn8HpWIuedywM/losPhL/KysMkdhbyXDo283d2wu09vOiwyX7NZt1JOy20581MUTpN7RXyy8yQb96wX0eV3RZ5C5bj7VzfXHt0eqw944NZHHFJqbw1D0QTTi7wrn43GedbxM6R5H1+/BuFY5x7a9K9u3u8/anTnmZjl8vJ0QzMT136pSSi3hMOTnILhGbUOeQ0anHTB3Z4AVKypxDNzc/iaNz8ncNiO1OuOP2/3tVj9H+r+S3dk7vE5mCGK8ZF6xay27XMY5jSGvY4Oc/iNQI8qn7Lezlma253KfM/yxj2OOuXDNprr2Z7Xmnmhtdwdb9oYHcVxg8hBetmtSGzTtiaY6uAcKVeHkUPPStmTf46Xms68iDsvlHdbnBXNjmmluaNeX0aedubXedhufC3jtl5K0ucsyLVDHc62hjiRxljo2QDsrSlVujPGSs/DmO0gZOFX2eav4yl64teXs6cvgnm/Qg+zts9crTdgv8rko/i2afvMhDNN30T4yfObDE2vdmno0009jgoeDFuYvraeTpdHxTiHBr7XsYqT8SK6VmK6TE/3p6e/zpRtbrDtPcu5JcDYCdtwNZtp5WNbHP3YJdoo4uHAFw1AcFIw72mS/ZhTcR+V91tNvGe/Z7PJrETy115tfRyJypjnBB8c1r2ljwHMcCHNIqCDzBCPYnTlhAs90ixE9ycntyd+3sw0l7Jbaogc48fOiBbpr2lhHlUW+1ieWvsy6HafMWStfh54jNj7/P5fXq19t1D3RtW4Zj9+2JNs52iDO2o1Qv8AAXUAFT4KNd4nLCM9qTpkjxpN+D7fd17ezt7XTS3P3eWO/Cxsdk8fk7Rl3YXDLm2k9GWMhwr4D4CO0HipdbRaNYczmwXxW7N4mtmSsmoQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBi5PKY7F2b73IXDLa1j9KV5oK9gA5knsA4rG1orGst2DBfLaK0jtWlWs+6d5b9nfZ7RY7FbfDjHcZ2aoc8DmIaUJPiYfZcOShzkvl5Kclet1FdjteHx2tzPxM3RSOjw/p8UdKW7Q6e7d2wzvLWI3GSeKT5O4o6dxPPSeTGn3LfrqRiwVpzc/WpuI8YzbqdLT2adFY5v0+GUmW5VCAgICCEXPU2xj3GyyjDDiWFzLm+OonUAeLKe1DuFe3sV3Tg1pw9qf5nRX199yGX5rx13UY40+DHJa3q72vlbzHZrAbptb20h1XFsykdyx7XMDmvBIpyNPNKg5ttl2tq2nknoXO23+24hS9K+1WOSdeTn/sU/lbUYnP3NuypZZ3J7uvPSx2pv82i6/Bf4uKJn9ar5ZvMX4bdWrH6l+TwRPIkO6d3btddx3LPWMXj5xqsY6Bpe0AVc5wrUmtadir9lsNvFZrPZvePeXvGONb3txeO1ixW93o1hMdn5vIbg21NrnEOSiL7c3QaD52kFkmjgPbclT8Q21NvnjSNaTy6fQ6ngnEMu92k627OWNa9rTvcltFU5J17Hl5m307ri6tpyySZ7i4l0b6VBdx7F1WGKzjjsxpWY9L5vur5K7i0ZLTa1bTGvglf4IIBHI8QuBfa4nVxexkjHMe0PY8Fr2OFQQeBBBR7EzE6xzqv67uscP0yfj7KCO0gu7qGCOCBjY2CjjOaNaAP9Eq7iGlcOkcmsux+Tovn4jGS8za1aWnWeWfq/Srf6OVl3+/ZZyOFpYzSA/dOeyP7DyoHC665deqHW/PWXs7GK/WvEeaZ+hdO2Ole19t7kvM9jRM24u2vYy3c5phhbI4OeI2hoPMcKk0CtsWzpjvNo6Xz7iHzHud3t64MmnZr09NtObV5/wCt+XZkuo+S7sDu7LRZtcOZMTfPr4w8uCpN/ftZZ73I+n/KW1nFw+mvPfW3l5vNouHof0+xWI27Ybjlicc3kYHPMrnOoyCV2pjWsB0+cxrXVIqrTYbataRf9aXCfN3G8ufPfbxP8GlubrtHPrPh1hCurGb3vgOpLLXCZ+8eci2Ga3su8rHE+V7o2w926sZFW1FW9vHwqJvMmSmXStp5XQfLe02e54f2s2Gn8PWJtpyzERr2tefz9CebA6UyYjcV1uzMm2bmLkyOhsbAOba23femWl/nFxBI8AqefCk3bbPs3m9tO11RzQ5rjXzHGfb12uHtfCrpra/vW05ubo88rJU9yQgICDqurW2u7eS2uomT28o0ywyND2OB7HNNQV5MRPJLPHktS0WrOlo6YVxk+nGb25dvzHT+6MDuc+CmdWCQeCMuNB4mu8haodtvak64/I6bBxrFua/C3tdeq8c8eH1x44lutndTMbnJ3YvIROxO4IT3c2OuKtJf26NVPxTx8FRxWzFuYtyTyWQuJcEyYI+JSfiYZ5rR9Pr8unMmakqMQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQRvem/MNtSzEl2TPezcLWwjNZZCTQcq0bXhWnsAngtObPWkcvOtOGcKy7u2leSsc9p5o7v7dESxextwbwvGZvfjnRWYOqx26wlrWtP8AX0PCva2tT7Y+1UeuG2Se1k5upb5+K4dlX4Wz5bfrZP3fXzdUdKzYIILeFkEEbYoYwGxxRgNa1o5BrRwAU2I0cte82nWZ1mXNesRAQCQASTQDiSUJkQa3cOOvcliJ7KzufVJpqNMtK+YT57eHHi1SdpmrjyRa0dqIQOJbbJnwWx0t2Jt097p8yks3ipsTlLnHSHU+3dpD6U1NIDmupxpUFdrts8ZccXjpfId/s7bbPbFbl7M/2T5F07bfinYWzubGCK1huY2u0RgNGsji3xkOqFxm8jJ8W1bzNprL63wu2GdvS+OtaReI5uvq8qreo0LI93XobykbE8jxmMA/YXUcItM7evj9L5x80Uiu+vp09mf+WG93dfWl/wBPsPch7XTtfEygILtbYnNkH1uKg7DHbHu716OX08i541npm4XhtrHaiax44rMT3eB0dK81FbXt1jXhznXQEsAaK+dE1xcD4Kt5VWfG9vNqxeP1eSfG0/J++jHe2Kdfb5Y8WuvlRjK2+Tv8teXLbC4jdczSSCHunlzdbiaHhzCs8FqY8da9qvJEdMOf3mLNmz3vGO0dq0zppPTK6Nv3N/c4e1myFsbS7LKSwu5gt4Vp2aqVp2LjN3SlckxSe1XrfWOG5cuTBW2WvYvpyx3dfPo2Kjpzzp19z+6sjkW4i5w8tniMfM+S3uqOkbc1GlsusDQBpr5vMV4qi4jkvaezMaVjzvq3yZsttix/Frki+W8aTHN2e9pz+PyNb9H/AHNa4jd77Ge2kmdmGMtoZom6zG8O1DUB7Q+2d2U8C18NyxW+kx7yX868Ptn2sXi0R8KZtMT0+Dv9UdL06uhfHniHPetfHuR9cqLv1qb1gO5953jtdfwlyOTXtTrz6v0Ts+z8GnY93s108GnI9o4N1g7DWBxz2yWHq8QtHsNWmIMAZQ/erq8enZjTmfn7dxeM1/icl+1Ovh15VB4V7N5fSClvmETWNhO+Zjx5ze7smiKJ7eyjpQ13lVNj/i7rXoj6H0zdxOw4FFJ5L3rEeO/LMeKNY8T0Srx8rEFabi6/7Iw+QksYm3GSkhcWSzWrWGIOHAhr3vbqp4QKeNV+XiWOs6csuu2PyXvM+OLz2ccTzRbXXyRE6elJNm9R9qbuY4Ym5IuoxqlsZx3c7W+601IcPG0lSMG6pl92eVU8V4FudjP8Wvsz+tHLX9HjSdSFOICCNby2Bg90wNddNNtkoR/wuShAE0Z5gH3bK+1d5KFac2Ct+fn61pw3i+XaT7PtUnnrPNPqnvorid7bi2hkIsDvppltZTox+fYC6OQDskPOvhr5w+6HER65rY57N/Kt9xwzBvKTm2nJaPex9MeDu08HMs6KWKaJksT2yRSAOjkYQ5rmkVBBHAgqdEuVtWYnSeSYckeCAgICAgICAgICAgICAgICAgICAgICAgICAgICCFb66hNw0seFw0JyO5rzzLazj87uy4VDn+TjQ9nE0HONnz9n2a8tl7wrg/xonLlnsYK889fg7u9HK6tldOjYXXzg3JN8abonOt0zzqjt6j0YgfbDkX08TaBeYdvpPaty2ZcT4z8SvwcEfDwR0dNvD6vLrKcqUoBAQEGizu9MFhZ2W91KX3Di3XFENRjaT6T+PAU405+JTttw7LmjWscnf6fAp+Icd221tFbzraeiOXTvz3a95CepWQ3G+5EU7TDhJDS0MTg5k1BXU8tPM9jSrvg+LDFdY5cnTr0eByPzVud3NtJ9nBPu6TyW786ej+1I+m24fjHEeoTvreWADOPN0J9B34PonyeFVvGNp8PJ2492/p6fWvvlbifx8Hw7T7ePz16PJzeTrTBVDqEA6jbQyOQuospjYe/eI+6uYW0D/NNWvAPpc6HyK/4Rv6Y6zjvOnLrEuK+aOCZc94zYo7U6aWjp709/+xrtp7H3DLdWsuUMlpjbOUXEVq9/nOkaajSwEhnHmeakb7iWGKzGPS17Rpr3vD0oPBuAbq16zmmaYqW7UV16fB0d+edJ7/pxgL7IzX9w+5Mlw4vkYJBp1HwVaXAeKqrMXF81KRSOzyd50G5+V9tmyzktN9bTrPLyejXztnb7U29Bj249tjG+1a8yhkg7wmQiheS6prTgo199mtft9qe1zdXIscfCNrTFGKKRNInXl5eXr5WbZ43H2TdNnbRW7TzETGsr7NAtGTNe/vTM+FLwbXFijTHWtfBEQh+4sT1EvMzJ6heCDHEgW5jl7oNbT24A1k19lXG0z7OmOO3XW/Tya/ocvxPZ8Uy55+Ffs4ujS3Z8vT6UwxsF1BYW8N3P6zcxsa2aelNbgOJoqfNatrzNY0rrzOo2uO9Mda3t2rRHLPWyVrbxB1RWttE9z4oWRvd6TmtAJ9kgLyIiGdslrRpMzMO1esFa9ROiOG3VdvyllP8AFmXk/TSBuuGYjhV7KtId900+yCoG52Fck9qOSzruB/NubZVjHePiYo5uia+CervSr1nRXq9YwvxljlI242aokZDeTRwEE8dUelvPt80qD+AzxyRPJ4XUT82cKyTGS+OfiR10rNvL+lZ/SvpbbbJtJ5p523eYvAG3E7ARGyNpqI468aV4knnw4cFYbPaRijl5bS475i+YrcQtEVjs4q80dMz1z3cieqa5poNy5vHhz9tR3jYdwZazufi2346iWxOo7UBRvEGlSK0NOS05cke5r7VonRZ7DaZOTcTXXBjvXtz448v6XjR8boZzHOxzXxuLZYz5rgWmjmmvIrldNOd99i0WjWJ51obz2/t/H4DEb+6ezz2duJBb3cbJXukt5y3gXOJLmnm14JoatpwPGwz461rGXFyfQ47hW9z5c+TY7+K2tprXkjS1dfJPXHTGk68sL72Bkslk9l4a/wAnU31zasfM8jSXkjg8gcPPbR3lVztrTbHWZ59HzPjWDHh3mSmP3K2nTvd7xczfrerBAQYeXw+MzGPlx+Tt2XVnMKSRPHDxEHmCOwjiFjekWjSeZv2+5yYbxfHPZtCshJuHpdegTOlyuxpn0bKfOmsy88n+U+l6Lu2juJhe1gnrp6HU6YeK05NMe6iPFfwernjvwtLHZGxyVlFe2Mzbi1nGqOVh4EfZBHIg8Qp1bRMaw5TNhvitNLxpaGQvWoQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEF35v26srqLbe2ovXt0XvmRxtoW24IqXvJ4AgcfO4NHE9gMXPnmJ7NeW0ug4TwmuSs5889nBX/m70d3LzR0zGbsXYNrtuGS7upPX9w3nnZDJPqSSTUxxauIYD5XHifFngwRTlnltPSj8V4vbczFax2MNfdr9M9/zRzQli3qcQYeYyUeMxd1fyCrbaNz9PhI9FvlPBbtvhnJkikdMou93UYMNsk/qxr6lfYyPe1/YfHd3nhjLOVxcx0xo2leYZQNDfc+FdBmna47/AAq4+3aOr1uJ2leIZsf4jJn+Fjnrn6ObTqTrFZ3EX7RBbZCK7uWMAk0EBziBQuDFRZ9tkx8tqzWHYbTiGDNHZpkre+nLpz+HRWG+dnSYSWO8jnkurW6e4Plm4yNlPnUe4UrqFSCun4ZxCM8TWYitq9XNo+efMPA52kxki03pbpnn17/h9bJstyYq92RdYbLyFt1aNrj30Li7TxiAPHi0+afuVrybPJTdRkxx7Nve+n1+Fv2/FcObh1sGefbpHsd/6vk5v2fG1e0sTuS4zAbjDLZyxHRdXRBaImmhcHg8zw4NUnf58Ncft6WieaOvu61fwXZbu+f+D2qTHJa3V4fUu0cvD41xT64ICAgICAgICAgICAgICAgoTq+3cO2upuN3sYDdYqLuWwuFdLe7BEkDncdBfqc5p8fbQql3vax5oyc9X0z5YnBu+HX2evZyT2tfHzWjr05Inwd+EQ6vX2w81eWu4ts3NLzI6jlMe6NzHNkFPzrqjSHO5OoSCePhKjb22K8xek8s88Lz5Zw73b0tt9xX2Ke5bXXk6uvTq6ubqbH6PN1cybtusQ+MXGKvrR7722kaHxVhc0xyOaaiocdPlWfDJntzXomEX53x1ja1yxPZyUvHZmOSeXXWPp8SX9SOvbsTkJsNteGKaW1Jiub+UF0bXt4FkTARq08i48PAO1St1xHsz2adHSouBfJnx8cZtzMxFuWKxz6ddp7/AFInjOvXUu2aMheW8V/jA/u5HPtzHHqPHS2WPSA72a+wo1OI5o5Z5Y8C73Hybw+/8OkzTJpr72s/ZnoXjsXf2E3jiXX2PcYpYCG3tnIR3kLiKivhaaHS7t9kEC32+5rlrrD51xjgubYZexk5Yn3bRzW/T1wzcDvDbGfluIsNkob2W1NJ2RHiBWmoA01N+6HBZ489L+7OuiPvOF7nbRE5qWpFubXu5+9ztwtqA654ILiCSC4jbLBK0slieA5rmuFCHA8CCvJjVlS81mJrOkwqu/sMt0vyT8piWvvNlXTx69YElz7Mk01NJPoe5cfvXcKOEG1ZwTrHLT0OuxZsfFafDyaV3VY9m31/09ceOOmFn4rKWGVsIb+wmE9rO3VHI364I7CDwIPJTa2i0aw5XPgvhvNLxpaGUsmkQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBC+oW+psMIcLhY/XNzZI93Z2zKEx6v9I4Hh4xXgPSPAcY2fP2fZr70r3g/Coza5cs9nBTnnr73d4I5ebv2DsWHbdrLdXcgvdw3/n5LIOqSSTq7qMu4hgPlceJ8XuDB2I1nltPO1cX4tO6tFax2cNPdr9M9/0RyQlikKcQazL7kwuIlghv7kRS3BpGyhcaVpqdQHS2vaVJwbPLliZpGsQr95xTb7aa1y20m3dr4Gfc21vcwPt7iNssEo0yRvFWuB7CCtFLzWdYnSYTcmKuSs1tGtZ6FU7hzGNu94OtcuJBg8cXQRWsNQAWNpWjac3eDsouq2m3vTb9rHp8W/LrL5vxLfYsm+7GfX8Pj1rFa96PX5tHDb23JW3LtyS95jcJYvNzC6Q1nexpq1jeVdQ82vbyFVlu93HZ+DGl8tuSerwsOGcLmLzu51xbek9qNfemI5ojw83f76x2/FO6dvhzmOdY3rDQOGl7S1xFe2jmuaucn4m1zf3qu8j4PENtza47x4/7YlHsP0txtlfturq6deNicHwwFgY2oNW6+LtVPBwVhuON3vTs1js69PqUex+UcOHJ272m+k6xGmnl59U3/l5qkdcICAgICAgICAgICAgICAgIOm8srS+tZbS8hZcWs7SyaCVoexzT2Fp4FeWrExpPM2Yst8dovSZraOaY51YZn6Oeyr25M9jcXWNa4kugjc2SMV9z3gLh+MVXX4ZjmeTWHY7X553mOul4rk788k+bk8zbR7Kw3T/Y+fuNvskORbYzyuvpSHTOdHE4sNQGgBp40AW2MFcOO0159EG3Fs3E95hrnmPh/ErHZjm5ZjXyvL+DxU+XzVji4DSa+njt2OPEAyODdR8QrVc9jpNrRWOl9i3e5rgw2yTzUrM+SHqLqVbYXb3STI46KFjLGG1ZaWkJpxe5zWsd43h3nk+Hiuh3UVpgmOjTR8c4DkzbrilMkz7c2m1p73T4tOTzKD6SZPO2u7W2WHt4byfKW81pJaXMhjhkZoMh1OHgEfD6naqbZXtF9K8uvI+mfMu3w32vbyzNYx2rbtVjWYnXT6Vy9H+kOQ2hfXOXy1zFJfzwm3it7cucxjHPa9xc9wbqcdDeQ4eNWuy2U4pm1p5XA/M/zNj31K4sVZikW7Ws88zppzeOVqKxcWIOMsUUsT4pWNkikaWSRvAc1zXChBB4EEJMPa2mJ1jkmFVXNvfdLc0b2za+42NkZALm2HnOspXUAoT7XsYfwHe1KgTE4Lax7k+Z1+O9OK4uxf2d1SOSfrx6+v7UdMLSs7y1vbWK7tZGzW87Q+KVvEOaVOiYmNYcllxWx2mto0tHO7l6wEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEb35vS02rhjdvAmvpz3VhaipMkp4eiPOLQSK08Q5kLTnzRSNelacJ4Zbd5ezHJSOW09Ud3r6Gp6dbKu8e6bcm4D3+6MpV8zn0Pq0buPcspw1ctZH3o4Ba9vhmPat70pfGeJ1yaYMPJgpzf3p6/V5Z5ZTlSlAIOqS7tYpGxSzRxyv8AQjc4BzuzgCalZRS0xrETo12zUrMVm0RM9GqEbu21BFl59z5K572wgbG5ljSj3yMAayIO5aXP4nh4fZV3sN5M44wUjS86+13umfDo5HjXC61z23mW2uOuns9cxyRXwTPP4/C1m1Oo923Ivhzcofa3T9TJqUEDndn9n9hSt9wivY1xR7Vejr/SruDfNN/izXcT7F55/q/4fQ5b82PkJcjJlsVEbqG6o+eGPi9r6cXNHtmu58O1ecM4lSKRjyT2ZrzSy+Yvl/LbLOfDHarblmI54nr7+rWY3bm9s2IbG7dcwY2IirrouaxjW8PNY6hcQPR/kUnNu9rh1vXszeer19Cv2nC+IbvTHkm9cUfW10jxTz976FsY+xt7CygsrZumC3YI4x20HafGe1cplyzktNrc8vpW229cOOuOvu1jRkLW3iAgICAgICAgICAgICAgICAgICDruIIbiCS3nYJIZmujljdyc1wo4H2QV5MaxpLKl5raLV5Jjlh5a3HtHP8ATHedrl4bc3eLtrgTWF2QTG9lf0UrgPMfp8364XO5cNtvki3PGvI+zbHieDi+0timezktXS1emJ64646fNLr6odWr3ewtrSK29QxVs7vRbl/eOklIpreaNHmgkNAHafJ5u95OXSNNIZ/L3y1Th/atNu3ktya6aaR1R4elMvo9bAyDL927chE6C2bE6LGNeKOkdJwfKK+1DatB7a+JSuG7ade3PiUHzvxrHNPwuOdba6372nNHh15e9o3n0gt6S4myxuOxOTms8z6wLmWO2kLHCBrXAd4WnkXkUaedCt3Es/ZiIrOlld8lcKjPe+TLSLYuz2fajX2tY5vF0pF0e6h3G8sBKb5gblcc5kV3I0UZKHglkgA9EnSdQHby50G/ZbmcteXnhVfNHBK7DPHYn+Hk5a9cac8eqU9U1zIg6b2ytL60ms7yJs9rcMMc0LxVrmOFCCF5aImNJbMWW2O0WrOlo5pVfh7u66a7kbt/Iyul2lk3l2JvpDXuHni6ORx9z7bwjzvdKDSZw27M+5PM6vcY68TwfGpGm4xx7dY/Wjrj6Ps/VWup7kBAQEBAQEBAQEBAQEBAQEBAQEBAQEGLlMnZYvHXGQvZBFa2zC+V/iHIAdpJ4AdpWNrRWNZbtvgtlvFKRrayudjYu83huB2/c3HptI3Fm3bF3FrGNJHf8edOOg9pq73KiYKzkt8S3idLxXcV2eH8Hin2v/Jb/t9fe0r1rPU1ygg0e79zRYDGd+GiS7mOi1iPIupUudT2re36inbDZTnvpzVjnU/GuLRssPa5725Kx9PghAGbXymftTuPN5OG0gmFWyyip0N4DS0FrWj3IrVX873Hgt8HFSbTHU4uvCc28p+K3GWtK26Z6vByR4Ibtm7tkS2Ftg8g+e/tYAxpvJoyGOczgHmhD/rclBnYbqLzlppW09ET3Qt68a4fbHXb5ZtkrXT2pjk5PH2vNzI9vraUGIkiyGPcH4q8P5toOrQ4jUAD7Zjm8WlWHDN9OWJpf36+f9Kh+YuDV20xlxfyb83enn8cT0JB0vG4pWOmuJ5PiaKMxW0UnEOfUcY68dLKU8HYoHGvgxyREfEmdZ/T4V78pRurR2r2n4ERpWJ6+93o/QsFc+7YQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcJoYZonRTMbLE8UfG8BzSPAQeBXkxqyraazrE6S0bdj7GtZjetwWPikjrIZRbRVbTiXCjeHkWr8Pjjl7MeRYzxfe3jsTlyTE8mnan1q73b9IrAQYt0e2I5LrJSgtjlnjMcUIHDWWni8+5by8PgMDNxOsR7HLLquGfI2e2TXczFccdU6zbvd7vz5OtSO58PuyA2+a3DBMx+b1zwXFwRrl06dTi2upvptoCBw5cFU5aXj2r/rPofD91tba4cE10xaRMRzR3aT9K4PowH/AITcQ8ElqfqiVWnCea3icJ//AKD72HwX/wC1Zu0eoO191uuY8RcF09o4ia3laY5dNaCQNPNpPb2dtFYYdzTJr2Z5nIcT4Judl2Zy19m3NMcseDw90JIt6pEGq3PtvHbjwtxir9v5qYVjlb6cUreLJWHsc0/a5LXkxxeukpmx3t9tljJTnjzx0xPhRHptuPI2d7PsbcTgMxjBSyn5NuLcCrCyvPzeLfFUc2lR9vkmJ+Hbnhc8b2dL0jd4f5d/ej6tu/4+fv8AL+ssRTHNCAgICAgICAgICAgICAgICAgICAgqzc802/t5M2naPcNvYh3fZ24Yaa3glvcg+EkFg/CPY1Qck/Fv2I92Od1uxrHD9r+Jt/OycmOOrv8A0/ZjplZ8MMMEMcELGxwxNDIo2ijWtaKNaAOQAU2I0cpa02mZnlmXNesRBXXVyyunNx960F1rFrikI5Mc8tLSfvqUXRcByV9qv606S4X50295jHkj3I1ie9rp6VdmWeRkcBe97Gn81FUkAn3LfCfEuh7MRrLhO3e0RXWZjohl3+Dy+PghnvrV9vFcEiIyUBJAr6NajyhasW5x5JmKzrMJG54dnwVi2Ss1i3NqtLaOItclsvGw5a3FxGwulhZJXgA93dn2NJ+ouX3+e2Pc3nHOnRPk5X0jguzrn2GOueva01mNfDOnm8yVMYyNjY42hjGANaxooABwAACqpmZnWXSVrFY0jkiHJePRAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFQXfQS3i35Z5zGS24wrbltzd4u4a46dLtRZEAC1zSeTXUp4wqueHR8SLR7uvM7rH85WnZWw5It8bs9mt49M9Ovfjn7zU/SgPmbcHjvP8AcrXxb9Xx/Qnf/wCe8+b/AIP+5WmyeoGe2xYZXHYWIG8zPcxx3ABdLE5mto7po5ud3lB4Cq/BubY4mK89nXcW4Lg3l8eTNPs4tZ06J105+9GixunPRXe+Ky+J3HPfxY+VkrZbuzOt0xgd6cb6DTqe2oIrw581P2uwyVtF5nRynHfmvZ5sWTb1pN400i3Jp2uiY6dI8/gX0rl80EBBB+p+0rzJ2UGdwtWbjwp760dH6csYOp8PjPDUyvtuHIlRtzim0dqvvQvuB8QritOHL/Jy8k96frevveBu9kbstd0bfgykNGyn83dQj2kreY49hqHDxHjxWzDli9dULinD7bTNOOebonrhvltVwgICAgICAgICAgICAgICAgICCI9TN2ybe2+W2YL8xkXeq42JnF5kfRpc0eFuoAfdEdij7nL2K8nPPMueB8Pjc5tbfy6e1bwdXd0RLI6fbRj2xt2KzfR+RnPrGSnHHXO8CoB9ywea3xBZYMXYrp09LVxjiM7rPNo9yOSsd71zzykq3KsQEHGSOORjo5Gh8bhRzHAEEeAgr2JmJ1hjasWjSY1hCtxvyG27pt1hsDZyWRaC+5jiJkY+vEO0ULW+BXW0im4r2cmS3a6teTzuT4nOTY37e3wY5ppzxXlifFzQ09hhdxbzyMV/mw63xcXoRgGMObXi2Jp4+d7Z5UzLuMOzpNMXLefH5fUq9vsN1xTLGXcezir0c3irHplZsUUcUTIomhkcbQ1jG8AGtFAB7C5m1pmdZ530ClIrEViNIhyXjIQEBAQEBBEuonUK02Tj7W9ubOS8bdSmFrY3NYWkNLqnVXwKNudzGKImY11XfA+CW4he1K2ivZjXlQP/ADOYX5DuffmfaUL82r9WXTf7f5vva+ST/M5hfkO59+Z9pPzav1ZP9v8AN97XySf5nML8h3PvzPtJ+bV+rJ/t/m+9r5JP8zmF+Q7n35n2k/Nq/Vk/2/zfe18kn+ZzC/Idz78z7Sfm1fqyf7f5vva+ST/M5hfkO59+Z9pPzav1ZP8Ab/N97XySf5nML8h3PvzPtJ+bV+rJ/t/m+9r5JP8AM5hfkO59+Z9pPzav1ZP9v833tfJJ/mcwvyHc+/M+0n5tX6sn+3+b72vklt9pdecXuTcVlhIcTPbyXrnNbM+Rjmt0sc/iAPuVtw8RjJeK6c6BxP5NybTb2zTkraKdGk9ei0lYuNEBAQEBAQEBBTf0hts7gzbtvNxGPmvix9zHJ3DC/Q6QRFuunog6HcTw4Kq4nitfs9mNed3vyRv8G3+N8W9aa9nnnn07WunXztv0q6OWO1o48rlgy63C9tW+2jtQfax+F/un+QcKk7dnsYx+1blt6EH5j+ab7yZxYta4PPbw97qjxz3rNVg5AQEBAQVZfj+H3UFmQYO72vuZ+i7aODLe7qXF3iBqXjxF/iUG38LJr+rbu7vG63DP5jsuxPLnwc396vdyfZ761FOckICAgICAgICAgICAgICAgICA5waC5xoBxJPIBBVu1WHe2/7vdcwLsLhHeq4VjvRfMAay0I9q12rw1cB7VQcX8TJN+iOZ1m/n8Ds67aP5uX2r+Dq8fN4I760VOcmICAgICAgICAgICAgICCm/pM//AOaxH/eu/wBk5VXFfcjwu9+QP/oyfsfS87KjfVRAQEBAQEBAQTXox/8AZuC/tJf9hIpex/nVc981f/zsvgj/AKoeuF0z4cICAgICAgICAgICAgICAg0279tWu5NvXeInOgzN1W83bFMzzopB964fUWvLji9ZhO4dvbbXNXJHRzx1x0w0HSbclzkMJJh8kDHmsE/1O8idz0sJaw+OmnT5K9q07XJM17M89Vj8wbKuPLGXHy4svtR9Pr83QnKlKAQEBAQEBAQEBAQEBAQEBAQQXq7uC5sNvsxGPBfl87ILO1ibzLXkNf8AV1Bvlr2KLusmldI57Og+XdpXJmnLf+XijtT9Hr8SR7U29bbd2/ZYi3OoWzKSy9skrvOkkP3zySt2LHFKxCr4hvLbnNbLP60+SOiPI2y2IYgICAgICAgICAgICAgIKm+kVispktvYqPHWc95Iy7c57LeN8pa3uiKkMBoFWcTpa1Y0jXldv8j7nHiz5JyWrSOx0zEdPfUJ8zN4fIWQ+CT/ANBU3wMn1Z8j6Z+a7T73H9uvrPmZvD5CyHwSf+gnwMn1Z8h+a7T73H9uvrfHbO3e1pc7B5ANaKkm1mAAH4KfAv8AVnyEcU2s/wDlx/br62nWpPEBBsLDbu4MhB39hjLu7gDiwywQSSs1DiRqY0ivFZ1xWtGsRMoubfYMU9m96Vnqm0R6WT8zN4fIWQ+CT/0Fl8DJ9WfI1fmu0+9x/br6z5mbw+Qsh8En/oJ8DJ9WfIfmu0+9x/br60v6R7X3LZ9RcLc3eIvbe3jkkMk0tvKxjQYXji5zQBxKlbLFeMtZmJ8ih+ZuIbfJsMta5KWtMRyRaJn3o771KuifGhAQEBAQEBAQEBAQEBAQEBBWG8mnaHUDG7vhBbjMsRY5qg81r6DTIfZY2vjLB4VBzfw8kX6J5JdXw2fxmzvtp/mY/ap6vL5rd5aAIIBBqDxBCnOUEBAQEBAQEBAQEBAQEBAQEFYYL/5b1VyGad5+K2031Sx7WuuHVBcPDQF7q+BzVCp/Eyzboq6vd/8Ap8Prij+Zn9q37PdpHilZymuUEBAQEBAQEBAQEBAQEBAQEBAQY+SJGOuiOfcyfklY25pbcH8yvhj0vDS5B+jRAQenPo5//X8v/fzfkRroOGfyvG+P/PX/AN0f/rr6bLRVi40QEBAQEBAQEBAQEBAQEBAQEBAQaXee3Y9xbZv8S6jZZ4620h9pOw64n+R4C15sfbrMJ3Dd5O2z1ydETy9+J5/M03SXcUmY2jDDc1GQxbjZXbD6QMXBtfYb5te0grVtcnapy88cid8w7OMO5ma+5k9qPH3a+CYTRSVGICAgICAgICAgICAgICCP7/3CMBtHI5IP0TMiMduRzEsnmtcPDprq8i058nYpMrLhGz/EbmlOjXl8Eevm8bC6W7eOD2XYwyN03d231y88PeT+dp4+4Zpb5F5tsfZpDdx3efH3Vpj3a+zHgj1zrKWLepxAQEBAQEBAQEBAQEBAQEBAQEGNkv7uu/7GT8krG/NLdt/5lf2o9Lw2uQfowQEHpv6OX/1/L/383+zjXQcM/leN8f8Anr/7o/8A119Nk9yW6tsYxxbkctZ2j282TTxsd+KXVU22aleeYhzWDh25zcuPHe3grMtJL1f6axuo7PQEj3LZHj6rWFaZ3uL6yxr8scQn/wAVvN63KDq303ncGsz1sCf6zXGPqva0JG9xT+tDG/y1xCsazit4tJ9EpBjc9g8oK43IW17wr/w8zJeH4BK31yVtzTEqzPs82H+ZS1PDEx6Wcs0YQEBAQEBAQEBAQEBAQEBAQVnZ/wDxfrHcWo8zG7qh7+MVo0XLK6vLrBoPDIoUexm06Ld3d4XVZP8A2uGRb9fbzp/w/wBn/Ss1TXKiAgICAgICAgICAgICAgrPqYfj3d+2dntOqGWb17IMB/0UdTx/BY9v4Shbj2r1p43U8E/9fbZtz0xHZr4Z/TMeRZamuWEBAQEBAQEBAQEBAQEBAQEBAQEGNkv7uu/7GT8krG/NLdt/5lf2o9Lw2uQfowQEGzh3LuCDFfFFvkJ4MbrdI61ieWMc94AJcG01eiOa2RltFezE8iHfYYLZfi2pWcmmmsxrP6GsJJNTzWtMEBByjkkje2SNxY9pq17SQQfEQkSxtWJjSeZPNq9bN9YF7GSXZylk3gba9JkNPuZf0jfFxI8Sm4d/kp06x33N8R+U9luYmYr8O/XXk83N3c6+dh9WtsbvAt4Xmxy1Kvx05Go05mJ/ASD2OPiVzt95TLyc1up804z8tbnY+1Pt4vrR9MdHo76bKW54QEBAQEBAQEBAQEBAQEFfdaLCYYCy3Ba+be4C7juWP8Eb3Bj/AKjtDvIom8r7MWjnrLpPlnNHxrYbe7lrMePu1jxpxi8hBksba5CD9DdxMmZ4g9odQ+MVUmtu1ESodxhnFktSeeszHkZSyaRAQEBAQEBAQEBAQEBBWex6ZvqZujcJ8+Gx042zd2A8A8t9lsTT5VCw+1ltbq5HU8U/gbDDhjnv7c/R6Z8iy1NcsICAgICAgICAgICAgICAgICAgIMbJf3dd/2Mn5JWN+aW7b/zK/tR6Xhtcg/RggICAgICAgIOcUssMrJYXujljcHxyMJa5rmmoII4ggpE6MbVi0TExrEvSfRfqy/ckYwOaePjuBmq3uDQesxsHnVH9Y0cTTmOPYVf7HefE9m3vel8l+a/lqNpPx8MfwZnlj6s/uz5p5Opa6snEiAgICAgICAgICAgICDCzWMhyuHvcbMAYryCSB1fu2ltfIsb17UTHW37XPOLLXJHPWYnyIf0Vyc1zs71C5NbvE3EtpMDz4O1fU1FzR7CjbO2tNJ6F38zYIrue3X3clYtHd5E+UtzogICAgICAgICAgICDAz+SGMwd/kSeNpbyStr2uYwlo8p4LDJbs1mUjaYPi5a0+taIRLotjTabEtrh3GTJSy3bndpa52hlT94wLRs66Y/CuPmbN293NY5qRFfX55TtSnPiAgICAgICAgICAgICAgICAgICDGyX93Xf9jJ+SVjfmlu2/8AMr+1HpeG1yD9GCAgIL06X9B7G8xtvm91B723LRLa4trjGBG7i10zm0dVw4hrSKdvgFxtOHRMdq/kfOPmH5xvjyTh22ns8k35+X+70cnXPi61sW3TvYdtH3cW38fppSr7eN5p43PDirKNtjj9WPI4jJxze3nWc2T7Ux6GqzfRrp3loXMdio7KUg6Z7L8w5pPbpb+bP4TSteTY4rdGngTdp807/BOvxJvHVb2v0+SXn/qX0uymybqN7pPXMTdOLbW9DdJDhx7uVvHS+nEdhHLtApN1tLYp66y+n8A+YcfEKzGnZy156/THe9HkQhRHRCDLxOUvMTk7XJWT+7urOVs0LvumGtD4QeRHaFlS81mJjnho3O3pmx2x3jWto0l7Xw+SgymJsslB+hvYI7iPxNkaHAfXXW0v2qxMdL897rbzhy2x256WmPJLLWTQICAgICAgICAgICAgIK22gfijqzunDkgRZJkeRgHIVNCQB4ayPPkULF7OW0dfK6jiP8bh2HL00maT3eKFlKa5cQEBAQEBAQEBAQEBBBetWQfabBu4o/0t7JFbxH7ou7z64joou8tpj8LoPlnDF95WZ5qxM/R9KVYDGtxmDx+Oa0NFpbxQkDlVjAD9db8dezWIU+7zfFzXv9a0z52es0cQEBAQEBAQEBAQEBAQEBAQEBAQY2S/u67/ALGT8krG/NLdt/5lf2o9Lw2uQfowQEHbaGAXUJuBWAPaZQOZZUavrL2NNeVhki3Zns+9pyPcsEkMkMckDmuhe1ronM9EtIq0inZRdfE9T85XrMTMW5+lzXrEQaHe+0LLdu35cNdyugjkfHI2dgDnMdG6tQHcOIqPKtO4wxlr2ZWfCeJ32WeM1Y1mImNOvVW3+WTAfLN373GoH5VX60us/r/P91Tyyf5ZMB8s3fvcaflVfrSf1/n+6p5ZP8smA+Wbv3uNPyqv1pP6/wA/3VPLK1dt4SPBYGxw8czp47GIQsmeAHODeVQOCscWPsVivU4vf7udzntlmOzN510bJbEQQEBAQEBAQEBAQEBAQVtvFpxnVjaeWaAI79klhL2anV0Mr7Hf/WUPN7OWs9fJ3eV1HDZ+Lw7Pj6aaW+n/ALVlKY5cQEBAQEBAQEBAQEBBW3V4C9ym0cIT5t7kmyPaOdInMFfxXuUPd8s1r1y6j5d9jHny/Vx+nX1QshTHLiAgICAgICAgICAgICAgICAgICAgxsl/d13/AGMn5JWN+aW7b/zK/tR6Xhtcg/RggICC1OmvXLIbatYsRmYXZDDxebbvYR6xA33LdXB7B2NJFPDTgrHa8QnHHZty1cXx75Qx7u05cM9jLPP9W3qnv+bpXjt7qbsbPtYLDLQid/8A0s57iavg0SadX4NVcYt3jvzS+db75f3u29/HbTrj2o8sfSlA4io4g9qkKYQEBAQEBAQEBAQEBAQEBAQEBAQVv1uZ6vicLmW1EuMyUT2kdge13/ma1Q97yRFuqXT/ACvPayZMXRfHPd6VkNc17Q5pq1wBaRyIKmOZmNOR9R4ICAgICAgICAgICCt90NF11l2rbHiLe2luqfgzD/yqHk5c1YdPsZ7HDM9vrWiv/SsdTHMCAgICAgICAgICAgICAgICAgICAgxsl/d13/YyfklY35pbtv8AzK/tR6Xhtcg/RggICAgIN1ht67swlBi8tc2rG8omyOMfvbqs+stuPPenuzMK/dcK2u4/m462nr05fLzp5hfpG70swGZGC2ybBSr3NMMpp91H5n8xTcfE8kc+kua3fyLs8nLjm2OfLHn5fOsbbf0hdl5NzYck2XDzu4B0w72H3xgqPwmgKdi4ljtz+y5Tf/JO8wxrj0yx3uSfJP0TKy7S8tLy3Zc2k8dxbSjVHNE4PY4eEOaSCrCtomNYchlxWx2mt4mto6J5Jdy9YCAgICAgICAgICAgICAgIIV1kthN08yTj/07oJh+BMz+RRt3H8OV78t37O9p3+1H/LKSbYuPWNt4q4rXvbO3eT99E0rdinWseBWb6nZz3jqvb0tks0UQEBAQEBAQEBAQEFa07/rxqPH1TFOA8WrR+sKh8+fxOo17PCP2snr9SyVMcuICAgICAgICAgICAgICAgICAgICDGyX93Xf9jJ+SVjfmlu2/wDMr+1HpeG1yD9GCAglmA6X7v3BgDm8NbsvLdsroHwtka2YOYGknS/SCKOHI1UnHtL3r2qxqpN78w7Xa5/g5rTW2muunJy+DwNHldvZ3EP0ZTH3Fk6tB38T4wfYLgAfItN8dq88TCx229w541x3rfwTEtesEoQEBBv9p753NtW79Yw926JjjWa1fV8En38ZNPKOPjW7DuL451rKs4lwjb72vZy116p/WjwT3Q9K9N+q2F3nB3FPUs1E3VPYuNQ4Dm+F3tm+Ecx9dX+13lcsac1up8j498uZthbte/inmt9FuqfNPmTlTHOCAgICAgICAgICAgICAgjfUiDv9hZ6Olf+Cld+K3V/ItO4jXHPgWfBbdneYp/vwdNpe92LhnVrS3DPxHFv8ibf+XD3jVdN3k/aSVblWICAgICAgICAgICCuMVR/XPNf6rGxgeUQH+VQ6fz58HqdPuOThOPv5J/7ljKY5gQEBAQEBAQEBAQEBAQEBAQEBAQEGNkv7uu/wCxk/JKxvzS3bf+ZX9qPS8NrkH6MEBB6b+jl/8AX8v/AH83+zjXQcM/leN8f+ev/uj/APXX02WhJHHIwskaHsdwc1wBB9kFWMw46tpidYRXNdKun+Y1G7w0Ecruc1sDbvr4axFgJ9mqjZNnitz1XW0+Y99g93LaY6re1Hn1VzuL6NFu5r5du5VzH822t8NTfY72MAj8QqBl4VH6k+V1ex+frRybjHr36eqfWp7c+ztx7YvBa5qzfbOdXupeDopAO1kjatPscx2qry4L450tDvOH8U2+8p2sNot19ceGGlWpYCDJx2RvsbfQX9hM63vLZ4kgmZwc1w/8cjzWVbTWdY52nPgplpNLx2q2jSYev+nm8oN3bWtsswBlzxhvoW8o7hgGsDxOBDm+IhdPts8ZaRZ8K43wu2x3NsU+7z1nrrPN6p78JKpCoEBAQEBAQEBAQEBAQEGn3izXtHNs51sLn/ZOWvN7k+BN4bOm5x/t19LVdJX6+nmGd/q5B9SZ4Wva/wAuEz5gjTe5PF/0wlykKYQEBAQEBAQEBAQEFb4QaeuW4a+2x0RHkbbhQ6fz7eD1On3X/wDJxftz6brHUxzAgICAgICAgICAgICAgICAgICAgIOq5h7+2lhrp71jmaudNQpVeTGsM8d+zaJ6pUZ/lff+8Y+B/tlT/lP97zfpfR/9wo+5/wCf/Cf5X3/vGPgf7ZPyn+95v0n+4Ufc/wDP/hP8r7/3jHwP9sn5T/e836T/AHCj7n/n/wAKz+nGyDszb78Qbz17VcPuO+7vuqa2tbp06n+48KsNrt/hV7Ourj+O8X/H5/i9nsezEaa682vejrSlSVKICDW7h29idwYmfFZWAT2k4oR7Zjux7D7VzewrXlxVvXs25kvY73LtcsZcU6Wjz96e88lZ/p3uvE5q8xzcZd3bLWVzI7qG3lcyRgNWPaWhw85tDz4Lmsm2vW0xpM+J9v2XHNtmw1yTelZtHNNo1iemGB80N2fIl/8ABZv6Kw+Bf6s+RK/M9r97j+1X1nzQ3Z8iX/wWb+inwL/VnyH5ntfvcf2q+tcf0c4dwY2/y+NyFhdWtpcRR3MTriGSNgkjdoIaXgCrmyD8VWnDItWZiYmIcF883wZaY8mO9bWrM15JieSeXo6tPOvNXD5wICAgICAgICAgICAgINVuwgbVzJPIWNz/ALFy15fcnwJnD/8A6Mf7dfTDS9IQR05w33kv+3kWva/y4TvmL/7cni/6YTBSFKICAgICAgICAgICCt7E9111yDeXf4wH2dIh+0odf58+B0+Xl4TXvZP3ljqY5gQEBAQEBAQEBAQEBAQEBAQEBAQEFF5PdP0hGZK7ZaY2R1o2aRtu71SM1jDyGGvb5qp75t1rOkcngfR9vw7gU46ze8drsxr7c8+nKxvnZ9I75Ll+Bx/aWPxt31eZu/LeAfeR9uT52fSO+S5fgcf2k+Nu+rzH5bwD7yPtyfOz6R3yXL8Dj+0nxt31eY/LeAfeR9uT52fSO+S5fgcf2k+Nu+rzH5bwD7yPtyfOz6R3yXL8Dj+0nxt31eY/LeAfeR9uT52fSO+S5fgcf2k+Nu+rzH5bwD7yPtyfOz6R3yXL8Dj+0nxt31eY/LeAfeR9uT52fSO+S5fgcf2k+Nu+rzH5bwD7yPtyfOz6R3yXL8Dj+0nxt31eY/LeAfeR9uT52fSO+S5fgcf2k+Nu+rzH5bwD7yPtyfOz6R3yXL8Dj+0nxt31eY/LeAfeR9uUy6X5jqvf5m6ZvC1dbY5lsTAXwMh1TF7aUc3j6OrgpW0vmtafiRyaKD5h2vDMWGs7S3ayTbl9qZ5NJ+nRZasHIiAgICAgICAgICAgICDRb7l7rZedk8FjcfXjIWrPPsT4Fhwquu6xx/fr6WH0sjMewMM0/wBU8/Vlef5Vjtv5cN/Hp13mTwx6ISpb1QICAgICAgICAgICCt8k02vXTFSV82+xkjD7I1n/AHQUO3Jnjvw6fDPb4RePq5I+j1rHUxzAgICAgICAgICAgICAgICAgIPmpvhCGiG9UMXvTJ4W1h2jeG0v2XIfPI2buCYe7cCNXb5xHBRd3TJasdidJ1X/AMvbjaYc1p3Ve1Ts8ns9rl1j6FafMr6Q3y3J8PKr/gbr63ndf+bcC+6j/LPmV9Ib5bk+HlPgbr63nPzbgX3Uf5Z8yvpDfLcnw8p8DdfW85+bcC+6j/LPmV9Ib5bk+HlPgbr63nPzbgX3Uf5Z8yvpDfLcnw8p8DdfW85+bcC+6j/LPmV9Ib5bk+HlPgbr63nPzbgX3Uf5Z8yvpDfLcnw8p8DdfW85+bcC+6j/ACz5lfSG+W5Ph5T4G6+t5z824F91H+WfMr6Q3y3J8PKfA3X1vOfm3Avuo/yz5lfSG+W5Ph5T4G6+t5z824F91H+WfMr6Q3y3J8PKfA3X1vOfm3Avuo/yz5lfSG+W5Ph5T4G6+t5z824F91H+W+HZf0hQKnOSADmfX0+Buvrec/NeBfdR/lrT6bYPdWKwLm7oyMl/lbiVz3a5TK2KMeaxjXHw01H2fErHa471r7c62cZx7d7bNn/9akUx1jq01npn6EsUlSCAgICAgICAgICAgICCJ9VpzD08zjhzfb90P/Ve1n/mWjdT/DlccAr2t7j/AGtfJGrYbEtjbbMwsR5+pwvPsyMDz+UssEaUjwI/Fb9rdZJ/vz5p0b1bVeICAgICAgICAgICCtuoIdZ9R9k5L2ks77V58GrzBX39Q8/JkpLp+Ee3sdxj6oi3d9lZCmOYEBAQEBAQEBAQEBAQEBAQYuSyuMxdqbvJXUVnatIa6ed7Y2AuNANTiBxWN7xWNZnSG7Bt8ma3Yx1m9uqI1lp/4i7B/eLHfCov6S1fisX1o8qf+R777nJ9mfUpXcuwdp5jcOSyrN/4qFl/cy3DYS9jiwSPLg2veitKqpy7alrTb4leWe7pfQdhxndYMFMU7TLPYrFddJ6I/Za3+Fe1v8RMV+M39ctf4On3le7xpf8AUW5/0eXz/un8K9rf4iYr8Zv65PwdPvK93jP6i3P+jy+f90/hXtb/ABExX4zf1yfg6feV7vGf1Fuf9Hl8/wC6fwr2t/iJivxm/rk/B0+8r3eM/qLc/wCjy+f90/hXtb/ETFfjN/XJ+Dp95Xu8Z/UW5/0eXz/un8K9rf4iYr8Zv65PwdPvK93jP6i3P+jy+f8AdP4V7W/xExX4zf1yfg6feV7vGf1Fuf8AR5fP+6fwr2t/iJivxm/rk/B0+8r3eM/qLc/6PL5/3T+Fe1v8RMV+M39cn4On3le7xn9Rbn/R5fP+6fwr2t/iJivxm/rk/B0+8r3eM/qLc/6PL5/3T+Fe1v8AETFfjN/XJ+Dp95Xu8Z/UW5/0eXz/ALp/Cva3+ImK/Gb+uT8HT7yvd4z+otz/AKPL5/3T+Fe1v8RMV+M39cn4On3le7xn9Rbn/R5e7/hTjZn0frGyylrlcrlW5axjDZre1ZG6Nkj+DmOeS51WDnp7e3hUGZg4bEWi1p7UOd4r863yYrYsWP4V55JnXWYjp05Ofv8AR4VzK1cAICAgICAgICAgICAgICCv+uFy6LYroWcX3d3bwgeGj+8P1o1E3s6U8bovlemu71+rW0+bT6U5xtr6pjrW1/8Ax4Y4uHLzGhv8ik1jSIhRZ8nbva3XMyyFk1CAgICAgICAgICAgrjrjE6Lb+My0fCXGZCGbWOxnFx/nMaoe9j2Ynql0/ytbXNfHPNekx3eWViRyMljZLGdTJGhzHDtBFQVMiXM2rMTpLkjwQEBAQEBAQEBAQEBAQQnM9Y9hYbKXOLv72SO8tH93OwQSuAdSvpNaQeaiX32KszEzyw6Ha/K2+z465KViaW5Y9qPWi28+pvSTdmCkw19lrqC3keyQyQW8gfWM1HpRuH1lGz7vBkr2ZmfIuuFfL/FNlmjLTHWbRExy2jTl8Eq9+I+gf7x5X3j9goXw9t9a3d4nUfjON/c4vtf4z4j6B/vHlfeP2CfD231rd3iPxnG/ucX2v8AGfEfQP8AePK+8fsE+HtvrW7vEfjON/c4vtf4z4j6B/vHlfeP2CfD231rd3iPxnG/ucX2v8Z8R9A/3jyvvH7BPh7b61u7xH4zjf3OL7X+M+I+gf7x5X3j9gnw9t9a3d4j8Zxv7nF9r/GfEfQP948r7x+wT4e2+tbu8R+M439zi+1/jPiPoH+8eV94/YJ8PbfWt3eI/Gcb+5xfa/xnxH0D/ePK+8fsE+HtvrW7vEfjON/c4vtf4z4j6B/vHlfeP2CfD231rd3iPxnG/ucX2v8AGfEfQP8AePK+8fsE+HtvrW7vEfjON/c4vtf4z4j6B/vHlfeP2CfD231rd3iPxnG/ucX2v8b63AdBXuDW7hyznHgGiCpJ94T4e2+tbu8Tyd7xuOWcOH7X+NLMF0L2LmmOltbnORQAVbNdQst2v+872FpP1FJx8Px35pt3eJSbz5v3u3nS1cEz1VtNtPDpZNNpdEdk7cvPXhHJkrtprDJelj2xnwtY1rWavGQSOxS8Owx4515577n+JfNu83VOxrGOvT2dY18M66+JYCmuYEBAQEBAQEBAQEBAQEBAQVt1XAvs/s7CB1W3N/388f8Aq4y1hP1JHKHuuW1a991Hy/8Aw8O4y/VppHh5Z+hZSmOXEBAQEBAQEBAQEBAQRnqXjPjLYuYtqVIgMwH9gRKQPGQyi0biuuOYWvBM/wALd47f3tPLyfS+9OMm7J7Gw108gy+rNhlp7uH806vlYvdvbWkSx41g+Fu8lY5u1r5eX6UkW5WCAgICAgICAgICAgICCJ5XpT0/yuQnyOQxDJ725drnmMs7dTqUrRr2j6gUa+zxWnWY5V3t/mPfYccY8eTSleaNK+pifwV6YfIbPfrj9YsfwGH6vpb/AOq+I/ez9mv7p/BXph8hs9+uP1ifgMP1fSf1XxH72fs1/dP4K9MPkNnv1x+sT8Bh+r6T+q+I/ez9mv7p/BXph8hs9+uP1ifgMP1fSf1XxH72fs1/dP4K9MPkNnv1x+sT8Bh+r6T+q+I/ez9mv7p/BXph8hs9+uP1ifgMP1fSf1XxH72fs1/dP4K9MPkNnv1x+sT8Bh+r6T+q+I/ez9mv7p/BXph8hs9+uP1ifgMP1fSf1XxH72fs1/dP4K9MPkNnv1x+sT8Bh+r6T+q+I/ez9mv7p/BXph8hs9+uP1ifgMP1fSf1XxH72fs1/dP4K9MPkNnv1x+sT8Bh+r6T+q+I/ez9mv7p/BXph8hs9+uP1ifgMP1fSf1XxH72fs1/dd9v0g6awODmYGAkcu8dJIPqPe5exssUfqtd/mfiFufLbxaR6ISDG7ewGL/u3G2tkaUrbwxxmnstAK30xVrzREKvPvs+b+Ze1/DaZbBZoogICAgICAgICAgICAgICAgIK1l1ZbrnC0AGLAY/UT91KDXy/nmKFPtZ/wBmHUV/g8JmenNk9H/4ystTXLiAgICAgICAgICAgIOMsTJYnxSDVHI0te09oIoQkw9raYnWOeFcdGJH2VvndszH89h79+knm6OUkaqeDWxyh7OdImvVLpvmWsZLYtxHNkpHlj9EwshTHMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPhIAJJoBxJPgQ0Vv0hacnktz7pcKNyd8Y7avZHFUih8BYWfUULa+1Nr9cuo+YZ+Fjw7f6lNZ8M/p1WUprlxAQEBAQEBAQEBAQEBBWc3/x/rVFJ6Fnue17px7O/jFWj2ax/z1Cn2M3es6mv/scKmP1sFtfFP9v/ACrLU1ywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCMdSs4cNsnKXcbg24ki9Wtq/1twe7bT2NWryLRuL9mkyteCbX4+6pWeaJ1nwV5XPpxhBhtlYqy06ZDCJpQeYdL59D96HBvkXu3p2aRDzjW6+Pur26NdPJyfpSVblWICAgICAgICAgICAgIK/6z4y5ft22ztl/z+BuY7qEjnp1tqB+G1hPiBUTeVns9qOero/lrPWM04b+5lrNZ7vBqmeHyltlsTZ5O2NYL2Fk8dDWge0GnsjkpNLRaImOlR7nBbDktjtz1mYZiyaBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQVp1HPzg3ptvZ7DqgbJ8Y5MAindtDg1p8BLGyU8dFC3Ht3rTxy6ngv/AK+1zbqefTsV8P8Ab2fOsxTXLCAgICAgICAgICAgICAg6L+yt7+xuLK5Gq3uo3wytHAlkjS131ivLV1jSWzDltjvF689Z1jxK/6P31xZxZXZ987/AIzBXDu5HLVbyuJBaPch+qniIUTaW01pPPV0XzHii803VPdy15f2o/Rp44lYymOZEBAQEBAQEBAQa7cOfxm38Pc5bJy91aWzdTqcXOceDWMHa5x4ALDJkildZ5mrPmrirNrc0ID0w6g7q3TuvMQZG3ZbY23hbJDahlH273Poxjnni5z2VLq9o4UUXb573vOvN6FVw7f5c+W0WjSseZZ6mroQEBAQEHCaaGGJ80z2xRMGp8jyGtaB2kngEmdHkzERrKC3/WfaUVxJb4yK8zkkNe+djYHSxspzrIS1v1FFneU10jW3gVuTiuKJ0rE38EJRtncuK3Jhocvi3udazahR7dL2uYaOa4caEFbseSL11hN2+4rlpFq8zarY3CAgICAgICAgICAgICAgICAgICAgICDjLLHFE+WVwZFG0ve88AGtFSSky9rWZnSOeVb9Ko5M7nM9vi4aQMhKbXGg8220dKeQtazy6lC23tWm/W6jj0xt8WLaV/UjtW/an9Ovi0WWprlhAQEBAQEBAQEBAQEBAQEFYb/adq74xG9ogW2NwfUM1p9w4UDz4aNaHfgeNQs/sXi/RzT3d3M6vhP/ALe0ybWffr7VPV5eT/iWaHNcA5pBaRUEcQQVNcpMPqAgICAgICAgIKZ31uD47vMnnQBLtjZdW2rXedFeZl5EbHHsdHbue2v2nKuz5O1M2/Vp57foc/vM3xJtfnx4ubv29UejvWSLoxhbrD7RucnmI3W19kp5Ly7uLlwD3RAVZJJWmjhqdR3hqt20pNaazzzypXCcU48U2vyTadZ16u7VsttdUMLuG+yYsreaPD4uMvnzc+mO2NOwajqFW1dxHLnTgsse5reZ05o6W7BxGmWbaR7Ff1p5mpj3/ufd1tlYtj47u4reSOG0zl25rInOrWU909rifNHAcSKgupyWHx7ZIn4ceOWiN7kzxaMNf+KfUwz1c+IrWHC3Uvzt3Y1xbOMZHoh1VNGF4B1ObyOhnsgLH8V2fZ9+/eYTxP4cdif4mT+7zd3ghI+m2/Z94Wd/NPYssZLGcQmNk3ek1bq4jS0tp9dbtvn+JE8mmiVw/ezuImZjs6JipCwabdm7MRtfEPyeTeQwHRBAyhkmkPJjAe37A4rXlyxSNZR91uqYadqypooc1v8AifuTel98R7GtzrgsWvMbZg08OJoX/fkVJ4MA5qBpOX2rzpj7u70KOIvuY+JmnsYY6Ovu/s7zLb+gy1jbbL6Y451v660snmbH3Bjj9F1O0VHpyu5Dl53JfPrEUxRz93dLzLvYyRGHbRprz930rR2vg8ZsvaEFjLcMZb2Ebpby8kIYwvcdcshryFTw8Sm4qRjpp1LrbYa7fFETPJHPKusp1I3XvfMnb+wmus7Mf8zmHt0vEf8AWcR+aZ7n27vEol9xfJPZx8nfVN+IZdzfsYOSvTbu5vT6Fu4y0ls8dbWk1zJeSwRMjku5qd5K5ooXup2u5qfWNI0X2Os1rETOunSyVkzEBAQEBAQEBAQEBAQEBAQEEYi31ZybzyW3O50Q4mzF3f5OSRrYoy7SQyhHuHai4laYzR25r1QhRvYnNbHpyVjWZ8nrb3GZTH5Sxiv8dcMurOcExTxHUxwBoaEeAii2VtFo1jmSseSt41rOsMpZMxBAusGangwUG37CrspuGUWkUbTR3ckgSnxatQZ+Eou7vpXsxz2dD8ubaLZpzX/l4Y7U+Ho9fiS3bmFt8Jg7LFQU0WsYYXAU1PPnPfT7p5Llvx07NYhUb3czny2yT+tP9nkhsVmiiAgICAgICAgICAgICAgINVunAW24MBeYm4oG3LCI3kV0SDix3kcBXxLXlp26zCXsN3O3zVyR+rPm6UX6R7gubrCzYDJEtzO33+qTseavdC0kROPhppLCfC3xrTtcmtezPPVa/MOzrTLGan8vNHajw9Pr8aeKU58QabdO7sFtjH+vZe47pjiWwQtGqWVw46Y2DiT9Ydq15MtaRrKPud1TDXtXlGenfVT545rI2Lca6zgtYmz28pfrJaXaCJKANa482gV7fAtODc/EtMaaIWw4nG4vMRGkQn6lLVq9y7kxW28PNl8rIY7SAtDtI1Pc55DWta3tPFYZMkUr2p5mnPnrir2rcyPbSbv2/wBxX+Zyt4INuSamYjFGJjZHxE1jmk9J7Dp8LqmvICgWnF8SbTaZ9nohE2vx7Xm9p0x9EehNSQBU8lJWKrOo3V/Aw4afG7eyTbjKXTvV33UAc9ttG7hJMHABr3Nb6Ia7moWfdV00rPL6FJxDiuOtOzS2tp8zp251S6T4nBWmCgFwyxtmNb+ftXOD3g6jI+mqrnP872V5j3GKtYrGungYYOJ7WlIp0R1w7uoW9MfuXp3lXbYnlu4YZLePLOiilY9ltI+sgGtraktHnUrRvPgvdxli+Oez4/Az3u8rm29pxTM82vJPMrvemSyU2z7D1WxO3tmyTiHHY3j3105rdb7m4caauXm15njxpVQ8tpmkcnZp0d/vyqt5e84Y7MdjFryR0z35TW8uN15Tp5cs2XYS4bblnbCKzhkYPX75hP557A0/mxpLnV4ukPJSZm1sfsRpXTxz3edY3nLfb/wY7NIj/it193S0uR/4HYF7NtixlwO2oYGsucvcR93kcnNI5sYjbXz4oS81e8nlwaKVWq3JjnsR2adfTP6O+0ZY7GCfhxNKactv1rT6u7vJV0mur2XCYuy27i3Y/Cw0lzGWvmjXdzkfnGWrGnzgXcO8dwa0UAqpG2mdIisaV6Znp8CZwy0zjrGOvZr+tM9M9OnrWkpq6efMtLJ1F6vx4m4kPxNZTSwRxgkDuLapmI+6me3TXwU8Cq7fxcuk83q5/K5PLad3vOxPuVn0evu5lj7/AOlp3bdY0Nyr8djMfGYxj44g6OvtXxjU1rXBvm8QaDkpWfbduY5dIhcb3hvx5rHa7NY6HZirXZOwjBg8TC66zl+WgW8dJb2bj+lmdwEcTBxLnaWgcuK9rFMXsx70+Vliph22lKRrefLPh6oQHqBnp94ZN9tLffFmy7C5daskaDLcZG7iIDm21uyr5nBxozhpb6R40CiZ7zknTXSkeee9Cs3uWdxbTXs4onTv2nvR0+hv+mm5HMz0m2cFtk4/BWIccnfTyh1yyXTVrrhzasMjyKFmokeICi27fJ7XZrXSsc/X40nh+fS/w6Y+zSOeenx+r1Pm4uvFvFcXNvtjGPyzLMF11kHlzLdrWmhcNIcS2vJx017Kr2+95dKxrp09DzccaiJmMde1p09CZdO92z7r2zFlp4I7ed0skUkUTy9oMZp7YNIJHZxUjBl7ddZWOw3Xx8fbmNG7ssvir6WeKxvYLqW2douY4ZGSOjdx4PDSdJ4HmtkWieaUimWlpmKzE6Odnkcfe976ncxXPcPMU3cva/Q8AEtdpJoaHkvYtE8z2mStuaYnRkL1mrPqBjOrGfypssCRicHb8BdesiKS5eQCXHu9UjWN5BvCvM9ih565bTpXkr6VNvse6y27OP2aR068/k5VdZbZPUPF5jHYs543OYybyILS2vLp0jIxxdPLUN0RN919RRbYb1mI15Z78qfLstzS0V7etrdUz5WzmynWzYbhd5MyZLExECUyvF1CW1pxlH52KvY53BZTbNi5Z5YSPib3bctvap5f0rxxmWtMhhrbLRu7u0uYGXIdIQ3Sx7A/zieA0jmrKtomNXSYssXpF+iY1R7bfUrD7k3Hd4jDwTXNtZxd5NlQALfVq0hjanUdXHSe2h7OK049xF7TFejpRsG/plyTSkaxHT0JRLe2cM8NvNPHHcXFRbwve1r5NIq7Q0mrqdtFvmYTJvETETPLLuXrIQQvevVja21i+2kkN9lGjjYW5BLT/rXnzY/Lx8SjZt1WnJzyrt3xPFh5J5bdUIZZ5jrXvgCbGtj27h38WXBaWFzfC1z2vlf7LWtHjUeLZsvN7MK+mXebnlr7FO7x+RndJ9xZuE7qOdy5yeEwr6DKSuL2649ZlMbz5xZpaDSp7Kc1ntck+12p1rXpbOGZ7x8Tt27VKdPl7vIlGx9xZS823e7n3HK2yx95PJdY+OXSwW9gAGxazw4u06uPhW7Dkmaza3JH0J20z2nHOTJyRM6x3o7vK1l31GyucymNtNhMt8haPe52Wv7hsoZbRxvAo9pEenW2pYaku7B2rXO4m0xGPljp7zTbf2yWiMGlo6Z5eRW2Jmm3VuLc9nI99picrI/K5a+ZTvfi6z1mCJgcKUe57Ca9gUWvt2tHRPLPgjm8qlxXnNkyRPJS3tTP92NdPTCa9Jr6+tcZtvb9m5pkmhuMxnARqMNtOSLWOvJr5XPa6nOjTwUja2mIrWPDKz4ba1a0xx37W8HR5edbCnLx8c5rWlziGtaKuceAAHaUexGqsdlh28d+5DeUtXYrG1ssGDyNAayCvhDi/wDCb4FBw/xMk36I5nV8Tn8Fs6bWP5l/av6vo8U9a0FOcmICAgICAgICAgICAgICAgICCsOoEFxtPdljvyxY51nIRaZ6FgJ1ROoNdPDRoI+6aB7ZQs8fDvGSObpdXwi8bzb22d/ej2sc9/q7uiZ6llW9xBc28VxA8SwTMbJFI01a5jxVrgfAQVMideVy16TW01mNJhh7gzllgsLeZe9JFtZxmR4HpOPJrG+NziAFje8VrMz0NGfNGKk3nmhSG09q5nqjuC43LuOR8WHif3bIoyRqDTUW0B9rGz27+ZPjqRXYsVs1u1bm7uSPpc1tttfe5JyZPc7uTu9K39obQx+2be8jt2xtlv7mS4eY2CNoZWkMTRxOmKMAezU9qn4sUU176/2m1rhiYj9adfVHiaXrBuHMYvblvY4Rz2ZnNXUdjaPiNJG66lxYexxoG17K1Wrd5JrXSvvW5Efime9McRT3rTp3ehXe7b2zfuPamxr++77FYSSA5y8nkLmSXThrkD5Hnk1tRx5a6dii5ZjtVpM8lefw93pVG7yR8THhtPs107Uz19Pd4VubP3Fcbh+MclC1owIn9Xwz9Ja+ZkI0zTkk00PkqGcOTfGp+LJ29Z/V6F/tc85e1aPc10r4ueWdufEXWZwF9ira8NhLexmH1trdZY1xAfRtW+kyrefasslZtWYidNW3cYpyUmsTpqieM6GdPrO3ZHcWkt/K1oD5pppG1PaQyNzGj2KLRXZ44jrV+Pgu3iOWO1Phn6HdP0T6cSnzca+H+zuJx9l5Xs7TH1Mp4Ntp/V88pVgcBiMDjY8bibdttaRkuDG1JLncXOc51XOcfCVupSKxpCfhwUxV7NY0hH8U7eOU3Vl7bcOKtWbXtiPisSNZK+V4cNEoOpw9GpNWihIHhWqvbteYtEdjoRcfxb5LRkrHw45unwJgpCe4TwQXEToZ42zQvFHxyNDmuHgLTwK8mNXk1iY0lya1rWhrQGtaKNaOAAHYF69fUFJZzpfvnBbzl3Hs3urhkksk8UTnMa+MzV72JzZC1r2HUaEOr5RVV19vet+1RzWbhubFm+Lh5e7vpJBiutGcaIsvk7TbtmaCX4vZ3l04doa8l7WeyHLbFc1ueYrHe506uPd5PftFI73P3eNLtsbNwO24JGY2FxuJzqu76dxluZ3eGWV3nO9jl4lvx4a05k/BtaYo9nn6+mUNi6RO2/tvJHbU/f7rumOjt8rckRuijkf57IC0O7kmMkahxrxr4I/4Xs1ns+/193Mrq8L+FjmMc/xJ6Z+jq5HVhOmm8bXZs2FucvHasbbzC1x+NYIhJPI06XXdy4d5ICTRwaG17SUx7e8U01070fTLHHw/NGGaTbTknkryaz35RQ4PdWX2Zj9k4na91h5baRk2Wvrstht5pI2nUS+lZNUhDm86UHYFHil7UikVmNOdCtgy5MMYaUmvL7Uzya+t3bnuN17G2JZ4K5kt8dDkXi1b6hrlljjbWS6nfO8s1TTl1AxoAA5HwZZZtjxxWeTXq8/jlluJy7bBFJ0jXk5PPOvXPk0aDI2N5Y2Nlt+xcdvszbmG3x8jxHcSwV0i7y1xw0g+dogZwHHy6ZrMRFY9ntdH02n6EbNWa1jHWex2+jpmOu0/R3TbPSXHbYxWPu8ZgZpciI3tff5kMItZrgjSWQP9B3dhvHRUDtJKn7WtKxMV5e/0LzhuPHSs1pM267dEz3k9UpZqq6hdabvbeauMLY4nvLmBrSbq6cWRu1t1AxsaKvbxpXUONVCz7ua27MQo9/xicN5pFeXrlrenW89nYp17mM7n7e6zeUDZL26fBctuWnn3HEOZ3cfICMU+ssMGWldZtb2padhvcNdb3vE2tz8ltfB/Z9Du3Fv2/wCoLZdqbKtZTZ3f5vKZqdhZFFAT59AeVR7rieQHavMmec3sUjknnlsz7225/h4Y5J57T1NLncvlN6XUGxdoP7rbGJiZDe5BxpFIyEae8lcP9ENPmt9uePLlhkvOSexT3Y7vJ6fAi5sttxMYMP8ALrHLPg7u7otjYOE2xh9vstNvXEV5btcfWb2J7JDLOOD3PcwkV8XYFOwUrWuleVebLDix49McxMdffYeexu1d9Wxt7DJwuy2IlE1lkbORkk1ncA+Y/wA0+iSzzmng6nhFRjeK5Y0ieWPMxzUxbiNK2jtV5pjobzBZi0yED4GX1vfX9gWwZJ9r+jbcaQXACrqexU05LbS8T06zHOkYcsWjTWJmOfTrdmfbkX4LIsxtRkXW0wsyDpPfGM93QnkdVF7fXSdOc3EW+Hbs+9pOnhVb006KzWNzb53c5bJeNrJFizpla17hTXcPdqD3itaDkeNSoO32kxpa3k9al4fwfs2+Jl5bdXrbjrJv+LD4r4jx902PL5P83LM06ja2zuEkrg2rg4g0aOfMjktm7zdmOzHvT5kji2+jHXsRPtW80K0zm+drQ7Yxu0cHbXD8BbytlzU0lLeS9DDrc0cXlokfxcXcgAAolstYpFK+7HP31Nm3+KKVxY4ma6+10dr0/o5Em3RfZre2T2htWaz+JLLJRfGNzZNk1kWzC7u6kNYARFG4tZTg4ivJbck2yTWumkTypu4vfcWx4pjsVtGune5fohotl2O67Hce6Nq4a3lhnvK2UlwTqhsou8dS4lPDU/uHHu6cSSteKLxa1Y5+bwd/yI2yx5KZMmKkTy8nejujXRns2Pktxb+3NicNkPijEWLbWzvdJcXSRRwNjjj0NLNYrGS6rgPZWfwpvktETpEaehsjZWy570pbsUjSJ8mn0LZ2RsbD7Qxj7Ow1SzzuEl5eS07yZ4FBWnANb7Vo5fVU3DhjHGkL7Z7OmCvZr5UjW5LQDqxnrwWlrtLEEuzO4HdyQ00MdqTpkcSPR1+hXwaj2KJurzp2I57Oj+X9pXtW3OX+Vh5fDbo8nP5I6Uu23gbTA4O0xNqB3VqwNLgKa3ni99OzU4k07FIx0itYiFNvd3bcZbZLc9p/shslmiiAgICAgICAgICAgICAgICAgxcrjLTKY64x94zXbXTDHIO2h7R4CDxB8KxtWLRpLdgz2xXi9J0tVX3TbJ3eAzF10/zD/wA7aF02EnPAS2588xt+9B1NHgqPaqJt7TSfh28To+N4K7jHXe4ua3JeOq3X9E+Kf1kr33tx249p5HERuDbieMOtnO4NE0bg+OviLmgFSM2Pt0mHGb3b/GxWp0ygO1ttdZDhrTCPurXbGKs2d13kLGT3bxUku4F7KkknVUKLjx5tIryViPKq9rt932IpMxjrHl7vI0PVTam1tsYZstzlMhlN23ZabW4uLlxexrHVkmLG00tA80ePl2rVucVKRyzM28KNxPb48NNZta2WebWU6ym09w7n2Ft977v1PdeOZb3sF1JXhcCOhEnAkEg8TQ+cpNsVr445dLwssm2yZsFOXTJXSf7USfsjZr7zFbCzV9dT7ruJZcnfX9o0Fr3zNL5GSSSAuoWR+aaV7eFaLR8GmsY5me3zygzs8OtcN5mckzrMx+nwd2q5sdj7LHWMFhZRNgtLVjYoIW8mtaKAKxrWIjSOZ0GOkUrFa80MhesxAQEBAQEBAQEBAQEGq3Va5672/e22AumWeWlZptrmQVa01GrkHUJbUA0NDxWvLFprMV5JaNxW9qTFJ0sbXx+Xx+AsrPMXxyOTiZ/xV2RTU8kmg4CobXSCRU0qUxVmKxFp1l7t6XrSIvPaszrmxsrruvWreK47h4lh71jX6JG8nt1A6XDwhZzETztlqVtzxqju4emm0Nw5qLL5a1dcXMcYidH3jmxSNaSW94xpGqmr7a05NvS9tZRM2wxZbxe0azCS21tb2sEdvbRMgt4mhkUMbQxjWjkGtbQALdEacyXWsVjSI0hxvbn1Wznue7fN3Eb5O5iGqR+hpdpYO1xpQBJnSC9uzWZ59Fa7C2lkNwT5TdO+cbFLPltDMfYXbNTra2aSdIjfwYDUU4auFTzUPBjm+t7xz9HVCo2e0tlm2TPWJ7XNE9EJLH0q6dxyCRuBtdQNQHBzm/ikkLd+Fx/VhMjhuDX3Yazq1OMB04vYsRE2yjmfFauFswM0RzvDJNLWgCrm+b5Vhup7GOdORo4lPw9vMUjTo5FYbhtvinb9hir2IYGzypAsMO57qRRgtbJkMvKwa5pOPmwgBrfB5tFCvHZrET7MT0fTbr8CnzxFMcUtHYi3NH/dbpme9/Y2eVymHxm1cZtHb0s+LweYnd6/uq6YYm3LGNBuHxMNJHB3mtrQNp5oqOKytaIpFK8lZ/W9Lbly0pjriprWlp5bz09enT3aNbLnIYrax2hsVrsViMvJ3U+4rr81Ne6Tokk1HSWQs4jhSvoinGuPa5Ipj5Inp6/0NNs8Rpiw+zW3Paen9Hd1rY6bQ7Qx1rcYPbAfdQWRBv8ALNbWGa6PBzRN6L3tABIZ5rRQKdt4pWOzXo6e+vdhGKkTTHy6c9uiZ8KaKSsFddaIdytwceQxuaGIxtk2R2Ra1745Zi8BsTGGMEmpq3TUc6qJu+12dYnSI51RxeMnY7Vbdmsc/f6kO6e9FbLL4WHO7kmuIxd1nis43BpdEeLJJXkF9XjjQdlFowbSLV7VulXbDg9clIyZZnl9Dv6JbV23mm5rKX2JZPB6yGY2O4jMkLIfONI3SVD3djjxPAeFNnjrfWZjp5GfB9piv2rWr08mqyN4bHi3BLY31pfS4jNY0u9SyVuA57WSDS+NzTQOaR/45qZlw9vSYnS0dK53WzjLMWiezevNLp6f4zbGHbksTjMj8aZeGcS566kdruH3EleMp7PRIDez2arzBWtdYidZ6WOyx48etaz2ra+1LG2htTLYjfe7MlcMb8XZZ8E1nMHAlxo4vaWjiNBNOKxxYprktM80sNrtrY8+S0+7bTRNlJWLCzWYsMNirrKZCTu7O0jMkruZoOAa0drnHgB4Vje8VjWW/bba+fJXHSNbWlBemOIv8tkbzfubj032SJZjYDxEFs3zRp8nmg/fH2yi7ak2mclueeZ0HHNxTDSuzxT7FPenrt3cvkj9VZCmOYEBAQEBAQEBAQEBAQEBAQEBAQEEL6mbPuMzj4cpiSYdw4h3f4+Zg892k6izx+Fo9ke2KjbnFNo1j3oXvA+I1wXnHk5cOTktH0+vy9ENhsLeNvurBMvABFfwHucjag8Y5gONK8dD/SafB46rPBmi9delF4tw220zdnnpPLWeuPXHNKF7364x4bIZPD4yxM2QtHtt4rmU/mhJpq9xYPOdpJDWtHM9qj5t52ZmIjlhx+84z8O1qVrraGt6f9M83nMw3d+9y+R7nCa2srgfnJXN4sfMzkyNntIqezw4HDBt5tPbv3d3U07Hh18l/jZ/J3d3iXSrF0bG+LMb8YfGPqkPxho7r1zu2993fPR3lNWnxVWPZjXXTlYfDr2u1pHa62SsmYgICAgICAgICAgICAgICAgICAgICD45jXCjmhwqDQivEGoPkKEwwMlt7BZO5t7nI4+3vJ7SptpJ42vLNVK01A+BYWx1tOsxro1ZMFLzE2iJ0dee2xt/P28VtmbGO9hgeJIWSVGlwFOBaQaEcxyK8yYq3jS0avM23pkiItGujQ7n6T7S3HkbK8vmSxtsoW2rLS3eIoXQscXNYWgVaAXH0CFrybal5iZRdxwzFltFp/VjTkSqwx9ljrKGxsYGW1pbtDIYIwGsa0dgAW+tYiNITqUisaRGkMhesmr3FtrC7jx4x+Yt/WbQSMmEepzPPjPA1YWntosMmOt40tzNOfb0y17N41hs2taxoa0BrWijWgUAA5ABZt0Q+RxxxsDI2hjG+i1oAA9gBHkREczkj1o9v7MwOBv8nfY6FzLnLSma7e97n8S5ztLAfRbqeStWPDWkzMdKNh2lMVrWrHLbnbxbUkQVVmZpOo28W4G0e75qYOTvMncMJ03Fw0kBrXDsaQWt8ep3tQoN5+Nfsx7ted122rHDdr8a3/0ZY9mPq17uWfFHTK1IoooYmRRMbHFG0MjjaAGta0UAAHIAKdEaOStabTrPLMuSPBAQEBAQEBAQEBAQEBAQEBAQEBAQVfvPF5DZm4xvjBRGWwuCI9wY5nAPY4/pG9ldRqD2O8TjSDmrOO3brzdLrOG56b3B+EzTpeP5durvd3R+ylOD29sTIXTN4YyxgnusiBcMyFC52oimprXEhjxSjqAGvNSKY8cz24jllyGfhlcGe3bppkieXu+mEmW5mICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgr7qPurIy3UWy9tHVnskALqdh/5W3eOJLhXS97a0PtW1d4FE3GWdexX3pdJwXYUis7rP/JpzR9a3qjzzydaU7R2tjtsYODF2QFGDVPLShkkIAc4/UoB2Bb8WKKV0hU8R3991lnJfxR1Q3K2IIgICAgICAgICAgICAgICAgICAgICDjNDFNC+GZjZIZWlkkbgC1zXChBB5gheTGrKtprMTHJMKoredLtwOLtc2xcrKS48Xmzmd7fw090PbNGr0gaweXBb+5Pmdd7PFsPRG7xx9uO7m6p5OaY0tWGaGeFk0L2ywytD45GEOa5rhUOaRwIIU6J1cjas1mYmNJhzXrEQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQRHqBvkbdtYrLHsF3uPI+ZjbIAuIJOnvZGjjoB5Dm48B20j583YjSPenmXPB+FfibTe89nBT3rfRHf9Ecr5082O7b9rNf5KQ3W4skTJkLt51Oq46iwO9n0qfYATb4exGs+9LLjPFPxFopjjs4aclY+n1euZTBSFIICAgICAgICAgICAgICAgICAgICAgICDGyWNssnYTWF9EJrW4boljd2jmCPAQeIPYVjasWjSW3BnvivF6TpaFX47I5Lphlm4fLOfc7LvJD8XX5BJs3ONSx9Padrh2ek3hUCFW04Z7M+56HV58OPiuP4uL2dzWPar9b9PV5J5dJm1o5I5Y2SxPEkcgDmPaQWuaRUEEcwVPiXIWrMTpPO5I8EBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBFt977str2TGNZ65mbzzMdjmcXPceGt9OIjB5nt5DitGfPFI7624Vwq27tMzPZxV963V+n+2Wu6f7HvbS6l3RuV/rW57/znOdyt2EUEbByBDfN4eiOA7ScMGGYntW96Uvi/FKXrG3wR2cFP+bvz6e/PL1aTtSnPCAgICAgICAgICAgICAgICAgICAgICAgICDDy2Ix+Xx82PyELZ7WcUex31i08w4dhCxvSLRpLdt9xfDeL0nS0KytLzN9Lr1thkTJkdkTvpaXgBdLZk8dJA9r4WeVna1Qom2CdJ5aeh1WTHi4rTt00puo546L/p7/AIrdErSs7y0vbWK7tJmT2s7Q+GaMhzXNPIghTomJjWHJZMdqWmto0tHPDuXrAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBEd8dQbXbwZj7KL4x3HdgCyxsdSQXGjXy6eLW15Dm7kPCI+bPFOSOW3UueFcHtudb3nsYa+9b6I7/mjpYWxtgXVrev3NuiX1/c935xc6hbbjsYwDzQQOHDg3kO0nHDgmJ7VuWyRxXi9b1jBt47GCv/N3eWenqieKU54QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB03tlaX1pLaXkTZ7aZumWJ4q1wK8tWJjSWzFltjtFqzpaFW3WJ3L0zuZb/AAYfldoSvMl5i3GslvX0nxu9r7PI+2ofOMGa2wzrXlp1OrpuMHFKxTL/AA9zHu26Ld6e7WOjqWHtzc2F3Fjm3+KuBNCeEjD5skT+1krDxa4eNTMeSt41hze92OXbX7GSNJ809+J6YbRZoggICAgICAgICAgICAgICAgICAgICAgICAgICAgr3dXUe6lyJ23suIZLOvqya7AD7e17CSfRe9vbx0t9sexRMu4nXs05bOk2HBaxT4+6nsYuiP1reqPPPR1tlsbp3a7edJkr+U5LcV0S+7yMpLiHO9IMLuPi1fYHBZ4dvFOWeWyLxXjFtzpSkdjDXmrH093lnlTFSFKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAQCKHiDzCCudxdNr+wyL9xbFuPi3K/6ewFBb3Da10lpo38E8PAWqHk28xPax8kum2fGqZKfA3cdvH0W/Wr9Pj8urO2j1PscpdfE2bhOG3Gx3dvspqiOV4/qXup+I7zvZ5rPFuYtOluSyPxHgV8Vfi4p+Jh64548Prjk8CbqSoRAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBhZjNYrC2D7/KXTLS0j4OlkNOJ5NaBxc49gHFY3vFY1lv221yZ7xTHWbWlW82Z3j1GldaYJsmD2pUsuclJVtxcN5Oa2hBaPuWmvunDkoU3vm5K+zXrdRXbbXhsdrNpl3HRX9Wvd1z4olPNq7Qwe2Mc2yxcAZwHfTuAMkhHa5wA8gHAKXixVpGkOe3/Ecu6v28k+COiG6WxBEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBH927G2/um17rJQfn2ikN3HRsrO0UPaK9h+ytWXDW8cqx4fxXNtLa0nk6Y6JQtuS6g9P/wA3k437k2xGaMvWf81BGOA1Ek1A8Dz7D+xRu1kxc/tVXs4NnxHlxz8HPP6v6tp7ur7Kd7b3dt/clr6xiLts5b+mgPmTRnwSRuo5vP2FKx5a3jklz294dm21tMldOqeifBLcLYhCAgICAgICAgICAgICAgICAgICAgIPjnNY0vcQ1rQS5xNAAOZJR7Ea8kIBn+rNqLw4jaVqdwZlxLaxVNtGQaEukb6dO3Rw8LgomTdRrpT2pdFtPl+3Z+JubfBxd/3p8XR4/JLHxHTHJZa/Zm9+3hyV63jBjWGltCPBRvD2Q3yucvKbabT2sk6z1Nm445TDScWzr2K9Nv1p7u/4ohY8UUUMTIoWNjijAayNgDWtaOAAA4AKZEOZtabTrPLLkjwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCARQ8QeYQQXcfSXDX10MnhJn4HMsqY7q0JY0nxsaW0r9zw8IKi5NrEzrX2ZdBsvmDLjr8PLEZcXVbu7uuGpbvTf20HCHeGNOUxrTQZqxA1BvKr2+a08u3QfEtfxsmP341jrS54Zs95y7a/Yv9S30dP8A1R30127vLbW4o9WJv455AKyW58yZnCvnxOo8fUUrHmrfmlRbzhufbT/ErMR19Hl5m6WxBEBAQEBAQEBAQEBAQEBAQEBBwllihjdLM9scTBV8jyGtA8JJ4JMva1m06RGsoJmusGChn9Q2/BLuHKOOlkVoCYQ7lxlodVPuA5Rb7usclfal0O1+XM1o7eaYw4/73P5PXo1rdl783i4TbxyHxbinHUMJZHTVvAgSHjX8Mu+9C1/ByZPfnSOpKniez2XJtadvJ9e30fo08Mp9gdtYPAWgtcTaMto6APc0Ve+nu3nzipdMdaRpEOe3e+y7i3ayWm3d1Nms0QQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEHxzWuaWuALSKEHiCCj2J0QrcPSLaWWl9atonYrIAlzLqyPd0dzroFAPHp0nxqNk2tLcsckrzZ/MO5wx2bT8SnVbl7vHq0/q3WPa/6CaHdWNZyZN5tyG191weT+Oteman96E3t8M3XPE4L973fV/0szHdadvGb1XPWl1gbxv6RlzG58Y7PTYKj8JoWVd5XmtHZac3yzn07WG1cte9PL5PVMprjMzicpCJsbeQ3kRFdUEjX8PHpPBSa3i3NKiz7bJinS9ZrPfjRmLJoEBAQEBAQEBAQEBB8JABcTQDiSeQCEIznOpWycKXMu8nHJcNFfVras8v4seqnlotF9xSvPK12vBN1n5a0mK9c8kedGj1H3puAmPZ+3JGwOqBkshRrKU5taC1lfF3nkWn8Re/uV8crX8l2u35dzljX6tef1+Z9i6V53OytuN8Z2W/AOoY62Oi3B8FKNb/ADK/dJ+GtblvOry3HsO3js7TFFP71ve7vH4k6wm28Hg4O4xVlHaspRzmCr3U9081c7ylSqY615oUG63ubPOuS027urmbJZoogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgxMjicXk4e5yFpDdxdjZmNeB7FRw8ixtSLc8N2HcZMU60tNZ70oXk+ie0LiY3OONxiLsmoltJXDj+FV3kDgo1tnSeWORe4Pmfc1js37OSv8AejujzMM7S6uYcE4jc8eTiHKHIMq6g5AFwef/AHFj8LNXmtr4W78w4bm/m4Zxz11n+z/pfRvTqrjDpy+0m3rAP0thIS407dLe/XvxsteeuvgeflnD8v8ALz9n9qP/AMX2PrhhYToy+IyWMlrRzXxNeB9Rwd/NSN7XpiYeW+Vstv5V8d48Pd6W0t+sXTyYVdkzbnwTQzM+yyizjd456US/y5va/qa+Ca+tsoOo2xJ/0eesjXwzNb+UQs43GOemEa3Bt5XnxX8jMZu7abxVuasT/wDsxf0ll8WnXDRPDtxH/jv9mfU5fOva3yzY/CYf6S9+LXrh5+X7j7u/2Z9Tol3xsyIVkzliB/3ER+w5Yzmp1w2V4Xup5sd/sy18/VTp5AaOzlu8+CLVKf8A22uWM7nHHSkV4Dvbf+O3j5PS1d11w2JCdML7q7ceDRDbvFfLJ3YWud7jjrS8fyvu7c8Vr4bR9GrFHVnO32oYTZ+Qum+0nm8yPy6GyfZWP4q0+7WW7+nsWP8Am56V70c/nmHzv+ueWI0QY/AxEcS4iV9PZrNx/ATXPbqq97HCcPPN8s+T1ekb0iymTLXbp3Pe5Jtam2iPdx+McSWEfgJ+Fm3vWmSfmHHi/wDnw0p355Z9fnSbCdN9lYYN9TxcJkbxEsw711fCNdQ38EBb6beleaFVuuNbrP715073J6PpSVblWICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD4+NkjCyRoex3BzXCoPsgo9iZidYay42rtm5BE+Js5a8y63iJ+rpWucVZ6ISqb/cV5sl4/wCKWtl6abEl9LDQD73Uz8lwWE7bH1JVeN7uP/JPmYzukfTp3PDM99nH+8Xn4XH1NsfMO9j/AMnmr6nEdIOnA/8A4rPfZ/1ifhMfU9/qLffeeavqd0fSrp9Gatw0XlfKfsvK9/C4+phPH95P/knyR6mbbbC2XbGsWFs6+F8TZD/PDllGCkdENF+Lbq3Pkt5dPQ2tri8ZaGtpaQ255VijYz8kBZxWI5oQ8mfJf3rTPhlkrJqEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQf/9k=\" style=\"width: 164px; float: left; height: 164px;\" data-filename=\"icon.jpg\">Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các ản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn.</p><p>Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn Các sản phẩm sắp có mặt tại Tứ Sơn.<br></p><p><br></p>",
  "hinhanh": [
    {
      "filename": "shopping.png",
      "aliasname": "51c70a39774fecb8524c0bcaade7a084_20170406020413.png",
      "mota": "ABC"
    }
  ],
  "thutu": "2",
  "hienthi": "1",
  "date_post": ISODate("2017-04-17T10:08:41.0Z")
});

/** tintuc records **/
db.getCollection("tintuc").insert({
  "_id": ObjectId("58e602ec7247ae180f000029"),
  "tieude": "Siêu thị Tứ sơn được người tiêu dùng tại Siêu thị Tứ sơn công nhận là Siêu thị có hàng hoá đa dạng, giá rẻ và chất lượng cao",
  "mota": "Siêu thị Tứ Sơn đón mừng thông tin vui, nhiều ý nghĩa nhân chào năm mới 2017.\r\n\r\n“Siêu thị Tứ Sơn được người tiêu dùng tại Siêu thị Tứ Sơn công nhận là siêu thị có hàng hóa đa dạng, giá rẻ và chất lượng tốt.” Đây là kết quả được bộ phận khảo sát và thăm dò ý kiến khách hàng của Siêu thị Tứ Sơn thực hiện trong suốt khoảng thời gian từ tháng 06 đến tháng 12/2016.\r\n\r\nSự ghi nhận của khách hàng chính là sự cổ vũ lớn lao và tạo thêm nhiều động lực, ý tưởng để siêu thị Tứ Sơn thực hiện thêm nhiều tiện ích mới, những chương trình mới nhằm đem đến những trải nghiệm, thích thú và sự hài lòng trọn vẹn khi quý khách hàng đến tham quan, mua sắm tại siêu thị Tứ Sơn.\r\n\r\nNhân sự kiện kiện “Siêu thị Tứ Sơn được người tiêu dùng tại Siêu thị Tứ Sơn công nhận là siêu thị có hàng hóa đa dạng, giá rẻ và chất lượng tốt”, siêu thị Tứ Sơn tổ chức chương trình văn nghệ đón mừng trong hai ngày 09 và 10/01/2017 tại Siêu thị Tứ Sơn. Chương trình văn nghệ do nhóm nhạc trẻ Tây Nguyên thực hiện và giao lưu cùng quý khách hàng.",
  "noidung": "<p>Nhân sự kiện kiện “Siêu thị Tứ Sơn được người tiêu dùng tại Siêu thị Tứ Sơn công nhận là siêu thị có hàng hóa đa dạng, giá rẻ và chất lượng tốt”, siêu thị Tứ Sơn tổ chức chương trình văn nghệ đón mừng trong hai ngày 09 và 10/01/2017 tại Siêu thị Tứ Sơn. Chương trình văn nghệ do nhóm nhạc trẻ Tây Nguyên thực hiện và giao lưu cùng quý khách hàng.</p><p>\r\n<p style=\"text-align: center; \"><iframe frameborder=\"0\" src=\"//www.youtube.com/embed/XjJrBZXe1ts\" width=\"640\" height=\"360\" class=\"note-video-clip\"></iframe></p><p style=\"text-align: justify;\"><br></p><p style=\"text-align: justify;\"><br></p></p>",
  "hinhanh": [
    {
      "filename": "img.png",
      "aliasname": "d10c88f869301b1238f53cfdff8e9d7c_20170407090449.png",
      "mota": ""
    }
  ],
  "hienthi": NumberInt(1),
  "id_danhmuctintuc": [
    "58e5db047247aec00f000029",
    "58e5e7357247aec00f00002a",
    "58e5e7457247aec00f00002b",
    "58e5e7527247aec00f00002c"
  ],
  "date_post": ISODate("2017-04-17T14:41:41.0Z")
});
db.getCollection("tintuc").insert({
  "_id": ObjectId("58e8bbfe32341cfc09007e47"),
  "tieude": "PHIÊN CHỢ “TỰ HÀO HÀNG VIỆT NAM” 2016 TẠI HUYỆN CHÂU PHÚ",
  "mota": "Để tiếp tục triển khai kế hoạch hàng Việt về nông thôn của UBMT Tổ Quốc Việt Nam Tỉnh An Giang và Sở Công Thương An Giang. Siêu thị TỨ SƠN triển khai kế hoạch “Tự hào hàng Việt Nam” tháng 3 năm 2016.\r\n\r\nPhiên chợ “Tự hào hàng Việt Nam” là hoạt động rất ý nghĩa và quan trọng mà Siêu thị Tứ Sơn đã thực hiện từ năm 2014. Đến nay hoạt động này đã đi vào chiều sâu và trở thành niềm mong mỏi của đông đảo khách hàng ở nông thôn xa. Năm 2016, Siêu thị Tứ Sơn tiếp tục thực hiện nhiều phiên chợ hàng Việt ở quy mô, phong cách chuyên nghiệp hơn. Và cùng đồng hành quảng bá về “Phiên chợ Tự hào hàng Việt Nam”, cũng như đưa hàng Việt về các vùng nông thôn trong năm 2016 với Siêu thị Tứ Sơn còn có các nhà cung cấp thân thiết. Siêu thị Tứ Sơn xin giới thiệu một số nhà cung cấp thân thiết này thông qua clip.\r\n ",
  "noidung": "<p></p><p>Phiên chợ “Tự hào hàng Việt Nam” là hoạt động rất ý nghĩa và quan trọng mà Siêu thị Tứ Sơn đã thực hiện từ năm 2014. Đến nay hoạt động này đã đi vào chiều sâu và trở thành niềm mong mỏi của đông đảo khách hàng ở nông thôn xa. Năm 2016, Siêu thị Tứ Sơn tiếp tục thực hiện nhiều phiên chợ hàng Việt ở quy mô, phong cách chuyên nghiệp hơn. Và cùng đồng hành quảng bá về “Phiên chợ Tự hào hàng Việt Nam”, cũng như đưa hàng Việt về các vùng nông thôn trong năm 2016 với Siêu thị Tứ Sơn còn có các nhà cung cấp thân thiết. Siêu thị Tứ Sơn xin giới thiệu một số nhà cung cấp thân thiết này thông qua clip.<br>Để tiếp tục triển khai kế hoạch hàng Việt về nông thôn của UBMT Tổ Quốc Việt Nam Tỉnh An Giang và Sở Công Thương An Giang. Siêu thị TỨ SƠN triển khai kế hoạch “Tự hào hàng Việt Nam” tháng 3 năm 2016.</p><p> </p>",
  "hinhanh": [
    
  ],
  "hienthi": NumberInt(1),
  "id_danhmuctintuc": [
    "58e5db047247aec00f000029",
    "58e5e7357247aec00f00002a",
    "58e5e7457247aec00f00002b",
    "58e5e7527247aec00f00002c"
  ],
  "date_post": ISODate("2017-04-17T14:42:38.0Z")
});

/** trangchu records **/
db.getCollection("trangchu").insert({
  "_id": ObjectId("58e5a4217247aec40f00002a"),
  "banner": [
    {
      "filename": "slide4.png",
      "aliasname": "41318fec42b468de5d47599551f4c165_20170406030402.png",
      "link": ""
    },
    {
      "filename": "slide5.png",
      "aliasname": "d8116a4a33adafe8c8e7248f48b3e30e_20170406030459.png",
      "link": ""
    },
    {
      "filename": "slide6.png",
      "aliasname": "40632bbed977eaf37ef382e4594c469f_20170406030456.png",
      "link": ""
    }
  ],
  "video": [
    "https://www.youtube.com/embed/XjJrBZXe1ts?autoplay=1"
  ],
  "thongtinhanghoa": [
    {
      "filename": "32.png",
      "aliasname": "161306a460d101b0e63b350f68673d25_20170406030428.png"
    },
    {
      "filename": "31.png",
      "aliasname": "7d2045f2f6e5418b752005eed8758311_20170406030425.png"
    },
    {
      "filename": "30.png",
      "aliasname": "19ee203f0229aae4b91567bff25442e5_20170406030422.png"
    },
    {
      "filename": "29.png",
      "aliasname": "5004a2bbca35d7d745207c2f34e2b909_20170406030419.png"
    },
    {
      "filename": "28.png",
      "aliasname": "b9153260449b3690d1c2c5963a8cd00f_20170406030416.png"
    },
    {
      "filename": "27.png",
      "aliasname": "fff5c6cf4ca1543a72b64bf5dff0d8ef_20170406030411.png"
    },
    {
      "filename": "26.png",
      "aliasname": "258f63b9448490d648948081e23d86db_20170406030408.png"
    },
    {
      "filename": "25.png",
      "aliasname": "a969aaab995e4aaddbfe5fc3781fa63b_20170406030405.png"
    },
    {
      "filename": "24.png",
      "aliasname": "2484a7df36877a14689574eebda6dd7c_20170406030400.png"
    },
    {
      "filename": "23.png",
      "aliasname": "7ae5e99a8c2f19cd25f44313293553aa_20170406030456.png"
    },
    {
      "filename": "22.png",
      "aliasname": "75c168b671d4ce827fca23907d85f114_20170406030449.png"
    },
    {
      "filename": "21.png",
      "aliasname": "7134f8f5aced525d1c11d229063305e7_20170406030445.png"
    },
    {
      "filename": "20.png",
      "aliasname": "079f4fb55b755f6f198bee97d7c95390_20170406030436.png"
    },
    {
      "filename": "19.png",
      "aliasname": "ba6beb7ae28ef0a97d7a0a038feb5060_20170406030430.png"
    },
    {
      "filename": "18.png",
      "aliasname": "88399fdcf82e54c15ebbaabe86ff3e5e_20170406030425.png"
    },
    {
      "filename": "17.png",
      "aliasname": "c9baca3cda1c39194c04fe2170c3da65_20170406030420.png"
    },
    {
      "filename": "16.png",
      "aliasname": "1e412544122065c25107eadecd8208c7_20170406030415.png"
    },
    {
      "filename": "15.png",
      "aliasname": "d642f8c3d2d6c1ab174d170d2dc8ed78_20170406030409.png"
    },
    {
      "filename": "14.png",
      "aliasname": "7b6fbd4c592d356e087a0f1053751007_20170406030404.png"
    },
    {
      "filename": "13.png",
      "aliasname": "c00b57557743e709b8b96933432e0dfa_20170406030449.png"
    },
    {
      "filename": "12.png",
      "aliasname": "9eb60bc8bf2b004e4db7d1cc0d5f1d8c_20170406030446.png"
    },
    {
      "filename": "11.png",
      "aliasname": "59b2900aa03cb2182a51cdb520b535b6_20170406030442.png"
    },
    {
      "filename": "10.png",
      "aliasname": "586e508f161f26ce94633729ac56c602_20170406030438.png"
    },
    {
      "filename": "9.png",
      "aliasname": "7afbb1602613ec52b265d7a54ad27330_20170406030436.png"
    },
    {
      "filename": "8.png",
      "aliasname": "602e8f042f463dc47ebfdf6a94ed5a6d_20170406030435.png"
    },
    {
      "filename": "7.png",
      "aliasname": "9eb9cd58b9ea5e04c890326b5c1f471f_20170406030433.png"
    },
    {
      "filename": "6.png",
      "aliasname": "f19c9085129709ee14d013be869df69b_20170406030430.png"
    },
    {
      "filename": "5.png",
      "aliasname": "8266e4bfeda1bd42d8f9794eb4ea0a13_20170406030428.png"
    },
    {
      "filename": "4.png",
      "aliasname": "09dd8c2662b96ce14928333f055c5580_20170406030426.png"
    },
    {
      "filename": "3.png",
      "aliasname": "10fb15c77258a991b0028080a64fb42d_20170406030424.png"
    },
    {
      "filename": "2.png",
      "aliasname": "fb5c81ed3a220004b71069645f112867_20170406030422.png"
    },
    {
      "filename": "1.png",
      "aliasname": "4a47a0db6e60853dedfcfdf08a5ca249_20170406030420.png"
    }
  ]
});

/** trangtienich records **/
db.getCollection("trangtienich").insert({
  "_id": ObjectId("58f4d8be7247aec40f00002e"),
  "banner": [
    {
      "filename": "bg-13.jpg",
      "aliasname": "5de048abaea56486e618867dc7982455_20170417030447.jpg",
      "link": ""
    }
  ],
  "ten": "Cùng nhau tiết kiệm",
  "noidung": "<p>Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm&nbsp;</p><p>Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm&nbsp;</p><p>Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm Cùng nhau tiết kiệm&nbsp;<br></p>",
  "thutu": "1",
  "hienthi": "1",
  "date_post": ISODate("2017-04-17T15:01:18.0Z")
});
db.getCollection("trangtienich").insert({
  "_id": ObjectId("58f4d8e07247aec40f00002f"),
  "banner": [
    {
      "filename": "bg-07.jpg",
      "aliasname": "518bf6da5bfc7157e475f34f54369795_20170417030450.jpg",
      "link": ""
    }
  ],
  "ten": "Giao hàng tận nơi",
  "noidung": "<p>Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi&nbsp;</p><p>Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi&nbsp;</p><p>Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi Giao hàng tận nơi&nbsp;<br></p>",
  "thutu": "2",
  "hienthi": "1",
  "date_post": ISODate("2017-04-17T15:01:52.0Z")
});
db.getCollection("trangtienich").insert({
  "_id": ObjectId("58f4d90d7247aec40f000030"),
  "banner": [
    {
      "filename": "bg-11.jpg",
      "aliasname": "c39ac8064f50520ffff07cfee8287c5c_20170417030412.jpg",
      "link": ""
    }
  ],
  "ten": "Mua hàng qua điện thoại",
  "noidung": "<p>Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại&nbsp;</p><p>Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại&nbsp;</p><p>Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại Mua hàng qua điện thoại&nbsp;<br></p>",
  "thutu": "3",
  "hienthi": "1",
  "date_post": ISODate("2017-04-17T15:02:37.0Z")
});

/** tuyendung records **/
db.getCollection("tuyendung").insert({
  "_id": ObjectId("58e65d217247aebc0f000031"),
  "tieude": "abc",
  "banner": [
    {
      "filename": "bg-06.jpg",
      "aliasname": "af2fc0e62d8729fb8a53caf286fa10f4_20170406030405.jpg",
      "link": ""
    }
  ],
  "noidung": "<p>abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC abc ABC&nbsp;<br></p>"
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("58e5a2e47247aec40f000029"),
  "username": "admin",
  "password": "ec705f9abe736346fc04409dc85c79d8",
  "roles": NumberInt(7),
  "person": "Phan Minh Trung",
  "logs": [
    {
      "in": ISODate("2017-04-04T02:38:35.0Z")
    },
    {
      "out": ISODate("2017-04-04T03:37:16.0Z")
    },
    {
      "in": ISODate("2017-04-04T03:37:20.0Z")
    },
    {
      "out": ISODate("2017-04-04T03:41:35.0Z")
    },
    {
      "in": ISODate("2017-04-04T03:41:39.0Z")
    },
    {
      "out": ISODate("2017-04-04T03:54:38.0Z")
    },
    {
      "in": ISODate("2017-04-04T03:54:41.0Z")
    },
    {
      "in": ISODate("2017-04-04T07:03:38.0Z")
    },
    {
      "out": ISODate("2017-04-04T07:07:58.0Z")
    },
    {
      "in": ISODate("2017-04-04T07:08:04.0Z")
    },
    {
      "in": ISODate("2017-04-04T12:34:55.0Z")
    },
    {
      "in": ISODate("2017-04-06T02:07:38.0Z")
    },
    {
      "in": ISODate("2017-04-06T05:42:34.0Z")
    },
    {
      "in": ISODate("2017-04-06T13:57:03.0Z")
    },
    {
      "in": ISODate("2017-04-06T15:38:26.0Z")
    },
    {
      "in": ISODate("2017-04-07T02:52:39.0Z")
    },
    {
      "in": ISODate("2017-04-07T06:46:09.0Z")
    },
    {
      "in": ISODate("2017-04-08T09:37:29.0Z")
    },
    {
      "in": ISODate("2017-04-17T07:35:21.0Z")
    },
    {
      "in": ISODate("2017-04-17T14:40:50.0Z")
    }
  ]
});
