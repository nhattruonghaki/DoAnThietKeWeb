//xử lý tính thành tiền cho từng dòng, tinh tổng tiền cho giỏ hàng
function capnhat(){
    var sum=0;
$('.sp').each(function(index,tr){
    //chuyển đối tượng js thành đối tuongwj jQuery
    tr = $(tr);
    //lấy số lượng
    var sl=tr.find('.sl input').val();
     
    //lấy ô chứa đơn giá
    var gia=tr.find('.gia');
    gia.html(gia.data('value').toLocaleString('vi',{style:'currency',currency:'VND' }));
    gia=gia.data('value');
    //tinh thanh tien 
    //hien thành tiền vào ô
    tr.find('.tt').html((sl*gia).toLocaleString('vi',{style:'currency',currency:'VND' }));
    //tinh o tong tien
    sum+=sl*gia;
    //console.log();
    
        
    
});
$('#tong').html(sum.toLocaleString('vi',{style:'currency',currency:'VND' }));

}


$(function(){
    capnhat();
    //gan ham xu ly su kien thay doi so luong
    //gan ham vao the '#giohang', loc lai nguon phat sinh theo selector '.sl input' 
    $('.table').on('input','.sl input', function(event){
        //doi tuong this la nguon phat sinh su kien (eventt. target)
        var input =$(this);
        var sl=input.val();
        //lấy dòng chứa input dang cập nhật
        var tr=input.closest('.sp');
        var ten=tr.find('.ten').text();
        if(sl<=0){
            //hoi nguoi dung co muon xoa ko
            var xoa=confirm('Bạn muốn xóa sản phẩm ' +ten+' ra khỏi giỏ hàng này không???');
            if(xoa){
                tr.remove();
            }
            else{
                input.val(1);
            }
        }
        capnhat();

    })
    //gan ham xu ly su kien click  nut xoa
    $('.table').on('click','.btn-xoa',function(event){
        //lay dong chua nut dc bam
        var tr =$(this).closest('.sp');
        var ten=tr.find('.ten').text();
        var xoa=confirm('Bạn muốn xóa sản phẩm ' +ten+' ra khỏi giỏ hàng này không???');
        if(xoa){
            tr.remove();  
            capnhat();  
        }

    })
    


})
