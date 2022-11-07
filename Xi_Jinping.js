// +++ 切換網頁標題 +++

let showingAlert = false;
const title = '习近平官方網站';
const messages = '中華人民共和國';

const change = setInterval(() => {
    document.title =
        showingAlert ? title : messages;
        showingAlert = !showingAlert;
}, 1000);

//    ===[ 政治 ]===

var imgJ1 = [
    "政治2.jpg",
    "政治3.jpg",
    "政治1.png"
]

let num1=0;

function J1next(){
    var J1 = document.getElementById('J1');

    num1++;
    if(num1 >= imgJ1.length){
        num1=0;
    }
    J1.src = imgJ1[num1];
}

function J1previous(){
    var J1 = document.getElementById('J1');

    num1--;
    if(num1 < 0){
        num1 = imgJ1.length -1;
    }
    J1.src = imgJ1[num1];
}

function text0up(){
    document.getElementById('text0').innerHTML = "我们不管建交的国家是共产主义或是民主统治,只要不承认跟台湾有任何友好关系,大家都是好朋友";
}

// ===[ 親民 ]===

var imgM1 = [
    "親民1.jpg",
    "親民2.jpg"
]

let num2 = 0;

function M1next(){
    var M1 = document.getElementById('M1');

    num2++;
    if(num2 >= imgM1.length){
        num2 = 0;
    }
    M1.src = imgM1[num2];
}

function M1previous(){
    var M1 = document.getElementById('M1');

    num2--;
    if(num2 < 0){
        num2 = imgM1.length - 1;
    }
    M1.src = imgM1[num2];
}

function text1up(){
    document.getElementById('text1').innerHTML = "我们的近平也很喜欢亲近民众,当然,这些照片都是当时现场拍的,绝对不是P图上去的";
}

// ===[ 有趣 ]===

var imgF1 = [
    "有趣1.jpg",
    "有趣2.jpg"
];

let num3 = 0;

function F1next(){
    var F1 = document.getElementById('F1');

    num3++;
    if(num3 >= imgF1.length){
        num3 = 0;
    }
    F1.src = imgF1[num3];
}

function F1previous(){
    var F1 = document.getElementById('F1');

    num3--;
    if(num3 < 0){
        num3 = imgF1.length - 1;
    }
    F1.src = imgF1[num3];
}

function text2up(){
    document.getElementById('text2').innerHTML = "这些有趣的图片不但让看过的人印象深刻,还能增加习近平的知名度,可说是一石二鸟,一举两得";
}

// *** *** *** 意見回饋 *** *** ***

function enter(){

    const typeElement = document.getElementById('fname');
    const type = typeElement.value;


    if(type != ""){
        alert("感谢您的意见回馈,但我们也就看看而已,绝不会因为您的意见而做任何改变,毕竟独裁专政嘛,您懂的");
        alert("\n这是您给出的回馈: " + type);
    }
    else{
        alert("一个字都没打就直接传送,请问是您是在冲三小?");
    }
}


