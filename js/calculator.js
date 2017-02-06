var num = 0,
    result = 0,
    numshow = "0";
var operate = 0; //输入状态的标志 
var calcul = 0; //计算状态的标志 
var quit = 0; //防止重复键的标志

//数字键
function command(num) {
    var str = String(document.calculator.numScreen.value); //获得当前显示数据 
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
    str = str + String(num); //给当前值追加字符 
    document.calculator.numScreen.value = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志 
}

//双00键
function dzero() {
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? ((operate == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
    document.calculator.numScreen.value = str;
    operate = 0;
}

//小数点键
function dot() {
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length - 1; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.calculator.numScreen.value = str;
    operate = 0;
}

//退格键
function del() {
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.calculator.numScreen.value = str;
}

//清除键
function clearscreen() {
    num = 0;
    result = 0;
    numshow = "0";
    document.calculator.numScreen.value = "0";
}

//加法键
function addition() {
    calculate(); //调用计算函数 
    operate = 1; //更改输入状态 
    calcul = 1; //更改计算状态为加 
}

//减法键
function subtraction() {
    calculate();
    operate = 1;
    calcul = 2;
}

//乘法键
function multiplication() {
    calculate();
    operate = 1;
    calcul = 3;
}

//除法键
function division() {
    calculate();
    operate = 1;
    calcul = 4;
}

//求余键
function persent() {
    calculate();
    operate = 1;
    calcul = 5;
}

//等于键
function equal() {
    calculate();
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}
// sin cos tan 绑定onclick
var msinValue = document.getElementById("msin");
var mcosValue = document.getElementById("mcos");
var mtanValue = document.getElementById("mtan");
msinValue.onclick = function() {
    msin();
}
mcosValue.onclick = function() {
    mcos();
}
mtanValue.onclick = function() {
        mtan();
    }
    //sin函数键
function msin() {
    numshow = Number(document.calculator.numScreen.value);
    result = parseFloat(Math.sin(numshow * Math.PI / 180).toFixed(8));
    numshow = String(result);
    document.calculator.numScreen.value = numshow;
    num = result;
}
//cos函数键
function mcos() {
    numshow = Number(document.calculator.numScreen.value);
    result = parseFloat(Math.cos(numshow * Math.PI / 180).toFixed(8));
    numshow = String(result);
    document.calculator.numScreen.value = numshow;
    num = result;
}

//tan函数键
function mtan() {
    numshow = Number(document.calculator.numScreen.value);
    if (numshow == 90) {
        alert("不存在");
        document.calculator.numScreen.value = "0";
    } else {
        result = parseFloat(Math.tan(numshow * Math.PI / 180).toFixed(8));
        numshow = String(result);
        document.calculator.numScreen.value = numshow;
        num = result;
    }
}


//计算
function calculate() {
    numshow = Number(document.calculator.numScreen.value);
    if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
        switch (calcul) { //判断要输入状态 
            case 1:
                result = parseFloat((num + numshow).toFixed(8));
                break; //计算"+" 
            case 2:
                result = parseFloat((num - numshow).toFixed(8));
                break; //计算"-" 
            case 3:
                //四舍五入toFixed(); 返回解析后的数字parseFloat
                result = parseFloat((num * numshow).toFixed(8));
                break;
            case 4:
                if (numshow != 0) {
                    result = parseFloat((num / numshow).toFixed(8));
                } else {
                    alert("被除数不能为零！");
                    result = 0;
                }
                break;
            case 5:
                if (parseInt(num) == num && parseInt(numshow) == numshow) {
                    result = num % numshow;
                } else {
                    alert("求余必须为整数！");
                    result = 0;
                }
                break;
        }
        quit = 1; //避免重复按键 
    } else {
        result = numshow;
    }
    numshow = String(result);
    document.calculator.numScreen.value = numshow;
    num = result; //存储当前值 
}
