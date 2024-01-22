// Bài tập tổng hợp ôn với mảng 

var arrSoN = [];

// Đầu tiên dom tới nút thêm só N và xử lý các hành động thêm dữ liệu vào mảng 

function themSoNVaoMang(){
        var soN = document.getElementById("txt-soN").value * 1;
        arrSoN.push(soN);
        console.log(arrSoN);
    document.querySelector(".render_arr").innerHTML = "👉" + arrSoN;
}

document.querySelector(".btn-success").onclick = themSoNVaoMang;


//Câu 1: 
function tinhTongSoDuong(){
    tong = 0;
    for (var i = 0; i < arrSoN.length; i++){
        if(arrSoN[i] > 0) {
            tong += arrSoN[i];
        }
    }
    console.log(tong);
    document.getElementById("kq1").innerHTML = "👉Tổng số dương: " + tong;
}

document.getElementById("btn1").onclick = tinhTongSoDuong;


//Câu 2: 
function demSoDuong(){
    var count = 0;
    for(var i=0; i<arrSoN.length; i++) {
        if(arrSoN[i] > 0) {
            count++;
        }
    }
    console.log(count);
    document.getElementById("kq2").innerHTML = "👉Số dương: " + count;
}

document.getElementById("btn2").onclick = demSoDuong;


// Câu 3: 
function timSoNhoNhat(){
    var min = arrSoN[0];
    for(var i=1; i<arrSoN.length; i++) {
        if(arrSoN[i] < min) {
            min = arrSoN[i];
        }
    }
    console.log(min);
    document.getElementById("kq3").innerHTML = "👉Số nhỏ nhất: " + min;
}
document.getElementById("btn3").onclick = timSoNhoNhat;

// Câu 4: 

function timSoDuongNhoNhat(){
    var soDuongNN = [];
    for(var i = 0; i <arrSoN.length; i++) {
        if(arrSoN[i] > 0) {
            soDuongNN[i] = arrSoN[i];
        }
    }
    console.log(soDuongNN);

    var min = soDuongNN[0];
    for(var i = 1; i < soDuongNN.length; i++) {
        if(min > soDuongNN[i]) {
            min = soDuongNN[i];
        } 
    }
    console.log(min);
    document.getElementById("kq4").innerHTML = "👉Số dương nhỏ nhất: " + min;
}
document.getElementById("btn4").onclick = timSoDuongNhoNhat;


// Câu 5: 

function timSoChanCuoiCung(){
    var soChan = -1;
    for (var i = arrSoN.length -1; i>= 0 ; i--) {
        if(arrSoN[i]%2 ==0){
            soChan =arrSoN[i];
            break;
        }
    }
    console.log(soChan);
    document.getElementById("kq5").innerHTML = "👉Số chẵn cuối cùng: " + soChan;
}
document.getElementById("btn5").onclick = timSoChanCuoiCung;


// Câu 6:
function doiCho() {
    var soViTri1 = document.getElementById("soViTri1").value;
    var soViTri2 = document.getElementById("soViTri2").value;
    var arrSoNCopy = [];
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoNCopy[i] = arrSoN[i];
    }
    var num = 0;
    num = arrSoNCopy[soViTri1];
    arrSoNCopy[soViTri1] = arrSoNCopy[soViTri2];
    arrSoNCopy[soViTri2] = num;

    document.getElementById("kq6").innerHTML ="👉Mảng sau khi đổi: " + arrSoNCopy;
}
document.getElementById("btn6").onclick = doiCho;


// Câu 7: 
function sxTangDan() {
    var arrSoNCopy = [];
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoNCopy[i] = arrSoN[i];
    }
    var num = 0;

    for (var i = 0; i < arrSoNCopy.length - 1; i++) {
        for (var z = 0; z < arrSoNCopy.length - 1 - i; z++) {
            if (arrSoNCopy[z] > arrSoNCopy[z + 1]) {
                num = arrSoNCopy[z];
                arrSoNCopy[z] = arrSoNCopy[z + 1];
                arrSoNCopy[z + 1] = num;
            }
        }
    }
    document.getElementById("kq7").innerHTML = "👉Mảng sau khi sắp xếp: " + arrSoNCopy;
}
document.getElementById("btn7").onclick = sxTangDan;

// Câu 8: 
function timSoNguyenTo() {
    var soNT = -1;
    for (var i = 0; i < arrSoN.length; i++) {
        if (kiemTra(arrSoN[i])) {
            soNT = arrSoN[i];
            break;
        }
    }
    if (soNT == -1) {
        document.getElementById("kq8").innerHTML = "Không có số nguyên tố nào tồn tại";
    } else {
        document.getElementById("kq8").innerHTML = "👉 Số nguyên tố đầu tiên: " + soNT;
    }
}
document.getElementById("btn8").onclick = timSoNguyenTo;

function kiemTra(n) {
    if(n === 1 || n <=0) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
// Câu 9: 
var numListB9 = [];
function themSoB9() {
    var num = document.getElementById("inputThemSo").value;
    if(num == '') {
        num = 0;
    } 
    numListB9.push(Number(num));

    document.getElementById("ketQuaThemSo").innerHTML = "👉 " + numListB9.toString();
}
document.getElementById("btnThemSo").onclick = themSoB9;

function demSoNguyen() {
    if (numListB9.length == '') {
        return document.getElementById("kq9").innerHTML = "Mảng rỗng";
    }

    var count = 0;
    for (let i = 0; i < numListB9.length; i++) {
        if (Number.isInteger(numListB9[i])) {
            count++;
        }
    }
    document.getElementById("kq9").innerHTML = "Số nguyên: " + count;
}
document.getElementById("btn9").onclick = demSoNguyen;


// Câu 10: 
function ssAmDuong() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            soDuong++;
        } else if (arrSoN[i] < 0){
            soAm++;
        }
    }
    
    if (soAm == soDuong) {
        document.getElementById("kq10").innerHTML = "👉Số âm = Số dương";
    } else if (soAm > soDuong) {
        document.getElementById("kq10").innerHTML = "👉Số âm > Số dương";
    } else {
        document.getElementById("kq10").innerHTML = "👉Số dương > Số âm";
    }   
    
}
document.getElementById("btn10").onclick = ssAmDuong;
