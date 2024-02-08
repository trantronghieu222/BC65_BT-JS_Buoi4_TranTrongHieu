/* --------------- Bài 1 --------------- */
/*
    Bước 1: Xác định đầu vào
        Số A: soA
        Số B: soB
        Số C: soC
        dãy số được sắp xếp tăng dần: result
    
    Bước 2: Các bước thực hiện
    TH1: nếu A < B và A < C (A là nhỏ nhất)
            Nếu B < C : result = A, B, C
            Ngược lại C < B : resule = A, C, B

    TH2: nếu B < A và B < C (B là nhỏ nhất)
            Nếu A < C : result = B, A, C
            Ngược lại C < A : resule = B, C, A

    TH3: Ngược lại (C là nhỏ nhất)
            Nếu A < B : result = C, A, B
            Ngược lại B < A : resule = C, B, A
    

    Bước 3: đầu ra
    kết quả của result là dãy 3 số tự nhiên được sắp xếp tăng dần

*/
document.getElementById("btnBai1").onclick = function () {
    var soA = +document.getElementById("soA").value;
    var soB = +document.getElementById("soB").value;
    var soC = +document.getElementById("soC").value;
    var result;
    if (soA < soB && soA < soC) {
        if (soB < soC) {
            result = `${soA}, ${soB}, ${soC}`;
        }
        else {
            result = `${soA}, ${soC}, ${soB}`;
        }
    }
    else if (soB < soA && soB < soC) {
        if (soA < soC) {
            result = `${soB}, ${soA}, ${soC}`;
        }
        else {
            result = `${soB}, ${soC}, ${soA}`;
        }
    }
    else {
        if (soA < soB) {
            result = `${soC}, ${soA}, ${soB}`;
        }
        else {
            result = `${soC}, ${soB}, ${soA}`;
        }
    }
    document.getElementById("result__bai1").innerHTML = result;
}

/* --------------- Bài 2 --------------- */
/*
    Bước 1: Đầu vào
        giá trị lựa chọn trong dropdown: familySelected
        thông tin thành viên: member

    Bước 2: Xử lý
        nếu chọn ô có value B: member = Bố
        nếu chọn ô có value M: member = Mẹ
        nếu chọn ô có value A: member = Anh trai
        ngược lại: member = Em gái

    Bước 3: Kết quả xin chào + member
*/
document.getElementById("btnBai2").onclick = function () {
    var familySelected = document.getElementById("familySelected").value;
    var member;
    if (familySelected == "B") {
        member = "Bố";
    }
    else if (familySelected == "M") {
        member = "Mẹ";
    }
    else if (familySelected == "A") {
        member = "Anh trai";
    }
    else {
        member = "Em gái";
    }
    document.getElementById("result__bai2").innerHTML = `Xin chào ${member}`;
}

/* --------------- Bài 3 --------------- */
/*
    Bước 1: Đầu vào
        Số thứ 1: number1
        Số thứ 2: number2
        Số thứ 3: number3
        Số chẵn: soChan
        Số lẻ: soLe

    Bước 2: Xử lý
        Nếu số 1 chia hết cho 2 -> soChan = soChan + 1
        Ngược lại số 1 không chia hết cho 2 -> soLe = soLe + 1 
        
        Nếu số 2 chia hết cho 2 -> soChan = soChan + 1
        Ngược lại số 2 không chia hết cho 2 -> soLe = soLe + 1 

        Nếu số 3 chia hết cho 2 -> soChan = soChan + 1
        Ngược lại số 3 không chia hết cho 2 -> soLe = soLe + 1 

    Bước 3: Kết quả
        Số lượng số chẵn và số lẻ: soChan: ...; soLe: ...
*/
document.getElementById("btnBai3").onclick = function () {
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var soChan = 0, soLe = 0;
    if (number1 % 2 == 0) {
        soChan += 1;
    }
    else {
        soLe += 1;
    }
    if (number2 % 2 == 0) {
        soChan += 1;
    }
    else {
        soLe += 1;
    }
    if (number3 % 2 == 0) {
        soChan += 1;
    }
    else {
        soLe += 1;
    }
    document.getElementById("result__bai3").innerHTML = `Số lẻ: ${soLe}; Số chẵn: ${soChan}`;
}

/* --------------- Bài 4 --------------- */
/*
    Bước 1: Đầu vào
        Cạnh 1: canh1
        Cạnh 2: canh2
        Cạnh 3: canh3
        Loại tam giác: loaiTamGiac

    Bước 2: Xử lý
        Nếu canh1 == canh2 hoặc canh1 == canh3 hoặc canh2 == canh3 -> loaiTamGiac = tam giác cân
        Nếu canh1 == canh2 == canh3 -> loaiTamGiac = tam giác đều 
        Nếu canh1^2 == canh2^2 + canh3^2 hoặc canh2^2 == canh1^2 + canh3^2 hoặc canh3^2 == canh1^2 + canh2^2 -> loaiTamGiac = tam giác vuông
        Ngược lại -> loaiTamGiac == tam giác thường

    Bước 3: Kết quả
        In ra loại tam giác vừa tính
*/
document.getElementById("btnBai4").onclick = function(){
    var canh1 = +document.getElementById("canh1").value;
    var canh2 = +document.getElementById("canh2").value;
    var canh3 = +document.getElementById("canh3").value;
    var loaiTamGiac;
    if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
        loaiTamGiac = "Tam giác cân";
    }
    else if (canh1 == canh2 == canh3){
        loaiTamGiac = "Tam giác đều";
    }
    else if (Math.pow(canh1, 2) == Math.pow(canh2, 2) + Math.pow(canh3, 2)
        || Math.pow(canh2, 2) == Math.pow(canh1, 2) + Math.pow(canh3, 2)
        || Math.pow(canh3, 2) == Math.pow(canh1, 2) + Math.pow(canh2, 2)
    ){
        loaiTamGiac = "Tam giác vuông";
    }
    else{
        loaiTamGiac = "Tam giác thường"
    }
    document.getElementById("result__bai4").innerHTML = loaiTamGiac;
}