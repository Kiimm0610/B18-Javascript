function getID(id) {
    return document.getElementById(id);
}

//Thêm số
var listNumber = [];

function themSo() {
    var number = getID("number").value * 1;
    listNumber.push(number);

    var ketQuaThemSo = getID("ketQuaThemSo");
    ketQuaThemSo.innerHTML = "Số được thêm: " + listNumber;
    ketQuaThemSo.style.display = "block";
}

// Tổng số dương

function tongSoDuong() {
    if (listNumber.length === 0) {
        return;
    }

    var total = 0;
    for (var i = 0; i < listNumber.length; i++) {
        total += listNumber[i];
    }

    var ketQuaTongSoDuong = getID("ketQuaTongSoDuong");
    ketQuaTongSoDuong.innerHTML = "Tổng số dương: " + total;
    ketQuaTongSoDuong.style.display = "block";
}

// Điếm số dương
function diemSoDuong() {
    if (listNumber.length === 0) {
        return;
    }

    var count = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            count += 1;
        }
    }
    var ketQuaDemSoDuong = getID("ketQuaDemSoDuong");
    ketQuaDemSoDuong.innerHTML = "Số dương là: " + count;
    ketQuaDemSoDuong.style.display = "block";
}

// Tìm số nhỏ nhất
function timSoNhoNhat() {
    if (listNumber.length === 0) {
        return;
    }
    var minLook = Math.min(...listNumber);
    var sumMinLook = 0;
    sumMinLook = minLook;

    var ketQuaNhoNhat = getID("ketQuaNhoNhat");
    ketQuaNhoNhat.innerHTML = "Số nhỏ nhất là: " + sumMinLook;
    ketQuaNhoNhat.style.display = "block";
}

// Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
    if (listNumber.length === 0) {
        return;
    }

    var minDuong = 0;

    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number > 0 && (minDuong === 0 || number < minDuong)) {
            minDuong = number;
        }
    }

    var ketQuaDuongNhoNhat = getID("ketQuaDuongNhoNhat");
    ketQuaDuongNhoNhat.innerHTML = "Số dương nhỏ nhất: " + minDuong;
    ketQuaDuongNhoNhat.style.display = "block";
}

//Tìm số chẵn cuối cùng

function timSoChanCuoiCung() {
    var finalChan = 0;

    if (listNumber.length === 0) {
        return;
    }

    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 === 0) {
            finalChan = listNumber[i];
        }
    }

    var ketQuaSoChanCuoiCung = getID("ketQuaSoChanCuoiCung");
    ketQuaSoChanCuoiCung.innerHTML = "Số chẵn cuối cùng: " + finalChan;
    ketQuaSoChanCuoiCung.style.display = "block";
}

//Đổi số
function doiSo() {
    var input1 = parseInt(document.getElementById("changeNumber1").value);
    var input2 = parseInt(document.getElementById("changeNumber2").value);
    // Thực hiện hoán đổi giá trị của 2 vị trí trong mảng
    if (
        input1 < 0 ||
        input1 >= listNumber.length ||
        input2 < 0 ||
        input2 >= listNumber.length
    ) {
        alert("Invalid position or the Array now is empty!");
        return;
    }

    [listNumber[input1], listNumber[input2]] = [
        listNumber[input2],
        listNumber[input1],
    ];

    var ketQuaDoiSo = getID("ketQuaDoiSo");
    ketQuaDoiSo.innerHTML = `Đổi số: : ` + listNumber;
    ketQuaDoiSo.style.display = "block";
}

//Xếp tăng dần
function xepTangDan() {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[j];
                listNumber[j] = listNumber[i];
                listNumber[i] = temp;
            }
        }
    }

    var ketQuaXepTangDan = getID("ketQuaXepTangDan");
    ketQuaXepTangDan.innerHTML = "Xếp theo thứ tự tăng dần: " + listNumber;
    ketQuaXepTangDan.style.display = "block";
}

// Tìm số nguyên tố đầu tiên
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function timSoNguyenToDauTien() {
    var ketQuaTimSoNguyenToDauTien = getID("ketQuaTimSoNguyenToDauTien");
    for (var i = 0; i < listNumber.length; i++) {
        if (isPrime(listNumber[i])) {
            ketQuaTimSoNguyenToDauTien.innerHTML =
                "Số nguyên tố đầu tiên: " + listNumber[i];
            ketQuaTimSoNguyenToDauTien.style.display = "block";
            return listNumber[i];
        }
    }
}

//Đếm số nguyên
function demSoNguyen() {
    var soNguyen = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (Number.isInteger(listNumber[i])) {
            soNguyen++;
        }
    }

    var ketQuaDiemSoNguyen = getID("ketQuaDiemSoNguyen");
    ketQuaDiemSoNguyen.innerHTML = "Đếm số nguyên: " + soNguyen;
    ketQuaDiemSoNguyen.style.display = "block";
}

// So sánh số âm và số dương
function soSanh() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            soDuong++;
        } else if (listNumber[i] < 0) {
            soAm++;
        }
    }

    var ketQuaSoSanh = getID("ketQuaSoSanh");
    if (soAm > soDuong) {
        ketQuaSoSanh.innerHTML = "số âm < số dương";
        ketQuaSoSanh.style.display = "block";
    } else if (soAm < soDuong) {
        ketQuaSoSanh.innerHTML = "số dương > số âm";
        ketQuaSoSanh.style.display = "block";
    } else {
        ketQuaSoSanh.innerHTML = "số dương = số âm";
        ketQuaSoSanh.style.display = "block";
    }
}
