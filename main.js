function ex1(){
    var toan = 5
    var van = 7
    var hoa = 0
    var khuVucA = 2;
    var khuVucB = 1;
    var khuVucC = 0.5;
    var khuVucX = 0;
    var doiTuong1 = 2.5;
    var doiTuong2 = 1.5;
    var doiTuong3 = 1;
    var doiTuong0 = 0
    var diemChuan = 20;
    
    var diemUuTien = khuVucA + doiTuong2;
    var diemTong = 0;
    if(toan > 0 &&van > 0 &&hoa > 0){
        diemTong = toan + van + hoa + diemUuTien;
        console.log(diemTong);
         if(diemTong>diemChuan ){
            console.log("ban da trung tuyen")
        }else{
            console.log("ban khong trung tuyen");
        }

    }else{
        console.log("ban bi 0 diem nen ko trung tuyen")
    }
}

function ex2(){
    var name = " van A"
    var kw = 200;

    // var 50kwDau = 500;
    // var 50kwKe = 650;
    // var 100kwKe =850;
    // var 150kwKe = 1100;
    // var conLai = 1300;
    var total = 0;

    if(kw > 0){
        console.log(name,kw)
        if(kw <= 50 ){
            total = kw * 500;
            console.log("tien dien cua ban la:",total)
        }else if(kw <= 100 ){
            total = (50 * 500) +(kw -50)* 650;
            console.log("tien dien cua ban la:",total)
        }else if(kw <= 200){
            total= (50 * 500) +  50 * 650 + (kw - 100 ) *850;
            console.log("tien dien cua ban la:",total)
        }else if (kw <= 350){
            total= (50 * 500) + 50 * 650 +  50 *850 + (kw - 150) * 1100;
            console.log("tien dien cua ban la:",total)
        }else if (kw > 350){
            total= (50 * 500) + 50 * 650 +  50 * 850 + 50 * 1100 + (kw - 200) *1300;
            console.log("tien dien cua ban la:",total)
        }

    }else{
        console.log("ban ko co xai kw nao ca")
    }
}