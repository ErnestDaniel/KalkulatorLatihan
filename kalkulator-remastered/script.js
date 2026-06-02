var input = document.getElementById("hitung");

var hasil = document.getElementById("hasil");

function inputAngka(angka) {
    hasil.value += angka;
    if (hasil.value[0] == "0") {
        hasil.value = angka;
    }
}

function inputOperator(operator) {
    hasil.value += operator;
    if (input.value == "") {
        if (hasil.value[0] == "+" || hasil.value[0] == "-" || hasil.value[0] == "*" || hasil.value[0] == "/" || hasil.value[0] == "%") {
            input.value = null;
            hasil.value = null;
            // return;
        } else {
            input.value = hasil.value;
            hasil.value = null;
        }
    } else {
        if (hasil.value[0] == "+" || hasil.value[0] == "-" || hasil.value[0] == "*" || hasil.value[0] == "/" || hasil.value[0] == "%") {
            input.value = input.value.slice(0,-1) + operator;
            hasil.value = null;
        } else {
            input.value += hasil.value;
            hasil.value = null;
        }
    }
}

function hapusSemua() {
    input.value = null;
    hasil.value = null;
}

function hapusAngka() {
    hasil.value = hasil.value.slice(0,-1);
}

function hasilHitung() {
    input.value += hasil.value;
    hasil.value = null;
    if (input.value.slice(-1) == "+" || input.value.slice(-1) == "-" || input.value.slice(-1) == "*" || input.value.slice(-1) == "/" || input.value.slice(-1) == "%") {
        hasil.value = eval(input.value.slice(0,-1));
    } else {
        hasil.value = eval(input.value);
    }
    input.value = null;
}