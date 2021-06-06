/*Bài 1: chương trình xuất 3 số theo thứ tự tăng dần
B1: Input
- nhập giá trị 3 số nguyên 
B2:Handle
- tạo biến a, b, c,
- chia ra 3 trường hợp:,so sánh lần lượt 2 số với 1 số, tìm ra số bé nhất, tiếp tục so sánh 2 số còn lại với nhau, tìm ra số bé hơn
- sau đó sắp xếp
B3: Output
- Xuất 3 số theo thứ tự tăng dần
*/
var btnSapXep = document.getElementById('btnSapXep');
btnSapXep.onclick = function () {
    var a = document.getElementById("soA").value;
    var b = document.getElementById("soB").value;
    var c = document.getElementById("soC").value;

    if (a !== parseInt(a) && b !== parseInt(b) && c !== parseInt(c)) {
        alert('Vui lòng nhập số nguyên');
    } else {
        if (a < b && a < c) {
            if (c < b) {
                kq.innerHTML = a + ' ' + c + ' ' + b;
            }
            kq.innerHTML = a + ' ' + b + ' ' + c;
        } else if (b < a && b < c) {
            if (c < a) {
                kq.innerHTML = b + ' ' + c + ' ' + a;
            }
            kq.innerHTML = b + ' ' + a + ' ' + c;
        } else {
            if (a < b) {
                kq.innerHTML = c + ' ' + a + ' ' + b;
            }
            kq.innerHTML = c + ' ' + b + ' ' + a;
        }
    }

}
/*Bài 2: chương trình “Chào hỏi” các thành viên trong gia đình
B1: Input
- nhập ký tự Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
B2:Handle
- tạo biến kyTu
- So sánh ký tự nhập vào với biến kyTu
B3: Output
- Xuất lời chào
*/
var btnGuiLoiChao = document.getElementById('btnGuiLoiChao');
btnGuiLoiChao.onclick = function () {
    var kyTu = document.getElementById('nguoiSD').value;
    if (kyTu === 'B') {
        loiChao.innerHTML = 'Xin chào bố';
    } else if (kyTu === 'M') {
        loiChao.innerHTML = 'Xin chào mẹ';
    } else if (kyTu === 'A') {
        loiChao.innerHTML = 'Xin chào anh';
    } else if (kyTu === 'E') {
        loiChao.innerHTML = 'Xin chào em gái';
    } else {
        if (kyTu !== 'B' || kyTu !== 'M' || kyTu !== 'A' || kyTu !== 'E')
            alert('Vui lòng nhập lại ký tự')
    }
}
/*Bài 3: chương trình xuất ra bao nhiêu số chẵn số lẻ
B1: Input
- nhập giá trị 3 số nguyên
B2:Handle
- tạo biến soThuNhat, soThuHai, soThuBa
- Xét các trường hợp, lấy lần lượt 3 số chia hết cho 2 thì là số chẵn, không chia hết là số lẻ
B3: Output
- Xuất ra có bao nhiêu số lẻ, bao nhiêu số chẵn
*/

var btnXuat = document.getElementById('btnXuat');
btnXuat.onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;

    if (soThuNhat % 2 === 0 && soThuHai % 2 === 0 && soThuBa % 2 === 0) {
        alert('Có 3 số chẵn và 0 số lẻ');
    } else if (soThuNhat % 2 === 0 && soThuHai % 2 === 0 && soThuBa % 2 !== 0) {
        alert('Có 2 số chẵn và 1 số lẻ');
    } else if (soThuNhat % 2 === 0 && soThuHai % 2 !== 0 && soThuBa % 2 !== 0) {
        alert('Có 1 số chẵn và 2 số lẻ');
    } else if (soThuNhat % 2 === 0 && soThuHai % 2 !== 0 && soThuBa % 2 === 0) {
        alert('Có 2 số chẵn và 1 số lẻ');
    } else if (soThuNhat % 2 === 0 && soThuHai % 2 === 0 && soThuBa % 2 !== 0) {
        alert('Có 2 số chẵn và 1 số lẻ');
    } else if (soThuNhat % 2 !== 0 && soThuHai % 2 === 0 && soThuBa % 2 === 0) {
        alert('Có 2 số chẵn và 1 số lẻ');
    } else if (soThuNhat % 2 !== 0 && soThuHai % 2 !== 0 && soThuBa % 2 === 0) {
        alert('Có 1 số chẵn và 2 số lẻ');
    } else if (soThuNhat % 2 !== 0 && soThuHai % 2 === 0 && soThuBa % 2 !== 0) {
        alert('Có 1 số chẵn và 2 số lẻ');
    } else {
        alert('Có 0 số chẵn và 3 số lẻ');
    }
}
/*Bài 4: chương trình cho biết dạng hình tam giác 
B1: Input
- nhập giá trị 3 cạnh của tam giác
B2:Handle
- tạo biến canhA, canhB, canhC
- 
B3: Output
- Xuất ra tên dạng hình tam giác 
*/

var btnTamGiac = document.getElementById('btnTamGiac');
btnTamGiac.onclick = function(){
    var canhA = document.getElementById('canhThuNhat').value;
    var canhB = document.getElementById('canhThuHai').value;
    var canhC = document.getElementById('canhThuBa').value;
    if(canhA <= 0 || canhB <= 0 || canhC <= 0 ){
        alert('Nhập cạnh số dương');
    }else{
        if(canhA === canhB || canhA === canhC || canhB === canhC){
            alert('Tam giác cân');
        }else if(canhA === canhB === canhC){
            alert('Tam giác cân');
        }else if( (Math.pow(canhA,2) == Math.pow(canhB,2) + Math.pow(canhC,2))|| (Math.pow(canhB,2) == Math.pow(canhA,2) + Math.pow(canhC,2))  || (Math.pow(canhC,2) == Math.pow(canhB,2) + Math.pow(canhA,2))){
            alert('Tam giác vuông');
        }else{
            alert('Tam giác thường');
        }
    }
}

