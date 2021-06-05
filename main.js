/*Bài 1: chương trình xuất 3 số theo thứ tự tăng dần
B1: Input
- nhập giá trị 3 số nguyên 
B2:Handle
- tạo biến a, b, c,
- chia ra 3 trường hợp:,so sánh lần lượt 2 số với 1 số, tìm ra số bé nhất, tiếp tục so sánh 2 số còn lại với nhau.
B3: Output
- Xuất 3 số theo thứ tự tăng dần
*/
var btnSapXep = document.getElementById('btnSapXep');
btnSapXep.onclick = function () {
    var a = document.getElementById("soA").value;
    var b = document.getElementById("soB").value;
    var c = document.getElementById("soC").value;

    if (a < b && a < c) {
        if (c < b) {
            kq.innerHTML = a + ' ' + c + ' ' + b;
        }
        kq.innerHTML = a + ' ' + b + ' ' + c;
    }else if (b < a && b < c){
        if (c < a){
            kq.innerHTML = b + ' ' + c + ' ' + a;
        }
        kq.innerHTML = b + ' ' + a + ' ' + c;
    }else{
        if(a < b ){
            kq.innerHTML = c + ' ' + a + ' ' + b;
        }
        kq.innerHTML = c + ' ' + b + ' ' + a;
    }
}
/*Bài 2: chương trình “Chào hỏi” các thành viên trong gia đình
B1: Input
- nhập ký tự Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
B2:Handle
- tạo biến kyTu
- chia ra 3 trường hợp:,so sánh lần lượt 2 số với 1 số, tìm ra số bé nhất, tiếp tục so sánh 2 số còn lại với nhau.
B3: Output
- Xuất lời chào
*/
var btnGuiLoiChao = document.getElementById('btnGuiLoiChao');
btnGuiLoiChao.onclick = function(){
    var kyTu = document.getElementById('nguoiSD').value;
    if(kyTu === 'B'){
        loiChao.innerHTML = 'Xin chào bố';
    }else if(kyTu === 'M'){
        loiChao.innerHTML = 'Xin chào mẹ';
    }else if(kyTu === 'A'){
        loiChao.innerHTML = 'Xin chào anh';
    }else if(kyTu === 'E'){
        loiChao.innerHTML = 'Xin chào anh';
    }else{
        if(kyTu !== 'B' || kyTu !== 'M' || kyTu !== 'A' || kyTu !== 'E' )
        alert('Vui lòng nhập lại ký tự')
    }

}
