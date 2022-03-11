/*
    Cơ chế khai báo biến trong es6. Cho biết sự khác biệt giữa var let và const
    var: Tự động hỗ trợ cơ chế hoisting(Tự khai báo biến lên đầu file). Ảnh toàn bộ scope
    let: Không hỗ trợ cơ chế hoisting, Trong cùng 1 scope không thể khai báo 2 biến trùng tên nhau được. Nếu khai báo biến cùng tên trên 1 scope khác thì let sẽ tự hiểu 2 biến phân biệt.
    => Đối với dự án code = es6 thì dùng let thay cho var tất cả trường hợp.
    const: Tính chất giống let, tuy nhiên không thể gán lại giá trị được. Đối với object và array thì không thể gán = object hoặc array khác mà chỉ có thể thay đổi được thuộc tính của object, hoặc phần tử của array.
*/
{
    // console.log(title);
    let title = 'cybersoft';
    // let title = 'abc';

    {
        let title = 'cyberlearn'
        console.log('title1', title);
    }

    console.log('title2', title);
}


const DOMAIN = 'https://svcy.myclass.vn/api';
const SETTINGS = {
    DOMAIN: 'http://svcy.myclass.vn/api',
    USER_LOGIN: 'cybersoft'
}

SETTINGS.DOMAIN = 'ABC';


// DOMAIN = 123;
// {
//     const DOMAIN = 'ABC';
// }

// var btn = document.querySelector('#btn');
// btn.onclick = function () {
//     alert(btn.innerHTML);
// }


var arrButton = document.querySelectorAll('button');
console.log(arrButton);
for (var i = 0; i < arrButton.length; i++) {
    //Mỗi lần duyệt lấy ra 1 button
    let btn = arrButton[i];
    //Lấy ra nội dung html của button đó
    let content = btn.innerHTML;
    //Cài đặt sự kiện onclick cho button đó
    btn.onclick = function () {
        alert(content);
    }
}

// {
//     //Mỗi lần duyệt lấy ra 1 button
//     let btn = arrButton[i];
//     //Lấy ra nội dung html của button đó
//     var content = btn.innerHTML;
//     //Cài đặt sự kiện onclick cho button đó
//     btn.onclick = function () {
//         alert(content);
//     }
// }
// {
//     //Mỗi lần duyệt lấy ra 1 button
//     let btn = arrButton[i];
//     //Lấy ra nội dung html của button đó
//     var content = btn.innerHTML;
//     //Cài đặt sự kiện onclick cho button đó
//     btn.onclick = function () {
//         alert(content);
//     }
// }
// {
//     //Mỗi lần duyệt lấy ra 1 button
//     var btn = arrButton[i];
//     //Lấy ra nội dung html của button đó
//     var content = btn.innerHTML;
//     //Cài đặt sự kiện onclick cho button đó
//     btn.onclick = function () {
//         alert(content);
//     }
// }


/*
    ------------------------------------- Function ----------------------
*/

//Declaration function: Hỗ trợ hoisting
function showInfo() {
    console.log('hello cybersoft');
}

showInfo();

//Expression function: Không hỗ trợ hoisting
var showInfo1 = function () {
    console.log('hello cybersoft 123');
}

showInfo1();
/*
    ----------------------------------- Arrow function -----------------------------
    Arrowfunction: 
    + Không hỗ trợ hoisting
    + Đối với hàm có 1 tham số thì ta không cần () tham số. Đối hàm có duy nhất 1 lệnh return thì ta không cần {return}
*/

//es5
let hello = function (name) {
    console.log('Hello ', name)
}
//es6: Arrow function
let helloEs6 = name => { console.log('Hello ', name) };

let getApiDelete = function (id) {
    return 'http://svcy.myclass.vn/api/sinhvienapi/xoaSinhVien?maSinhVien=' + id
}

console.log(getApiDelete(5));

let getApiDel = id => 'http://svcy.myclass.vn/api/sinhvienapi/xoaSinhVien?maSinhVien=' + id;

/*
    Ngữ cảnh (Context) của this:
    + Ngữ cảnh mặc định là window
    + Ngữ cảnh object : this là object đó
    + Ngữ cảnh function: this chính là function đó
    Nếu sử dụng hàm cho phương thức trong es6 thì ta dùng arrow function. Vì arrow function không hỗ trợ this
    => Đối với prototype (kiểu dữ liệu mình tự định nghĩa) hoặc methed (phương thức) thì dùng function. Còn lại đối với các hàm xử lý thông thường nên sử dụng arrow function
*/

var hoTenSV = 'abc';
// window.hoTenSV = 'abc';
let myObject = {
    id: 1,
    name: 'Nguyễn Văn A',
    showInfo: function () {
        console.log('id', this.id);
        console.log('name', this.name);
    }
}
myObject.showInfo();

function SinhVien() {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.hienThiThongTin = function () {
        console.log('mã sinh viên', this.maSinhVien);
        console.log('tên sinh viên', this.tenSinhVien);
    }
}
{
    let sv1 = new SinhVien();
    sv1.tenSinhVien = 'A';
    sv1.maSinhVien = 1;
    sv1.hienThiThongTin();

    let sv2 = new SinhVien();
    sv2.tenSinhVien = 'B';
    sv2.maSinhVien = 2;
    sv2.hienThiThongTin();
}
// var maHocVien = 123;
// var tenHocVien ='abc';
let hocVienCyber = {
    maHocVien: 1,
    tenHocVien: 'Nguyễn Văn A',
    hienThiThongTin: function () {
        let hienThi = () => {
            console.log('Mã học viên', this.maHocVien);
            console.log('Tên học viên', this.tenHocVien);
        }
        hienThi();
    }
}
hocVienCyber.hienThiThongTin();

/*
    Bài tập 2: Thay đổi màu sắc
    Cho mảng các màu yêu cầu:
        + Sử dụng mảng màu để tạo ra các button hiển thị trên div#colors
        + Xây dựng xử lý khi click vào button màu nào thì in ra div#home màu đó
*/
let arrColor = ['black', 'red', 'green', 'blue', 'orange', 'pink', 'yellow', 'pink'];

let renderButton = () => {
    //Cách 1:
    // for (let i = 0; i < arrColor.length; i++) {
    //     //Mỗi lần duyệt lấy ra 1 giá trị màu
    //     let color = arrColor[i];
    //     //Từ giá trị màu sẽ tao ra button
    //     let btn = document.createElement('button');
    //     btn.className ='btn text-white ml-2';
    //     btn.innerHTML = color;
    //     btn.style.backgroundColor = color;
    //     btn.onclick = function () {
    //         //Dom đến div#home => change style.color
    //         document.querySelector('#home').style.color = color;
    //     }

    //     //Hiển thị button lên giao diện
    //     document.querySelector('#colors').appendChild(btn)
    // }
    //Cách 2: 
    let htmlOutput = '';
    for (let i = 0; i < arrColor.length; i++) {
        let color = arrColor[i];
        htmlOutput += `
            <button class="btn ml-2 text-white" style="background-color:${color};" onclick="changeColor('${color}')">${color}</button>
        `
    }

    document.querySelector('#colors').innerHTML = htmlOutput;

}
//Gọi hàm thực thi khi giao diện vừa load
renderButton();

window.changeColor = (color) => {
    document.querySelector('#home').style.color = color;
}


/*
    Default parameter:
    Tham số mặc định của hàm: Khi gọi hàm không truyền giá trị thì hàm sẽ tự lấy giá trị mặc định để xử lý
*/

let hienThiThongTin = (hoTen = 'Tùng', namSinh = 2000, tuoi = 2022 - namSinh) => {
    console.log('Họ tên', hoTen);
    console.log('Tuổi', tuoi);
}

hienThiThongTin();
hienThiThongTin('Đạt', 1999);
hienThiThongTin('Đạt', 1999, 25);


// function tinhTong(a, b) {
//     console.log(a + b);
// }

function tinhTong(...restParam) { // [5,10] | [5,10,5]
    // console.log(restParam)
    switch (restParam.length) {
        case 2: {
            console.log(restParam[0] + restParam[1]);
        }; break;
        case 2: {
            console.log(restParam[0] + restParam[1] + restParam[2]);
        }; break;
        default: {
            console.log('Không hợp lệ !')
        }
    }
}

tinhTong(5, 10);
tinhTong(5, 10, 5);
tinhTong(5, 10, 5, 5, 3, 5);

/*
    Spreed operator: Dùng để sao chép các giá trị bên trong thuộc tính của object, hoặc các phần tử của array. Có thể thêm nhanh thuộc tính hoặc phần tử sau khi clone.
    primitive value : Giá trị cơ sở (number, string, boolean, null, undefine);
    reference value: Giá trị tham chiếu (object, array);

*/

let hocVien1 = { id: 5 };
let hocVien2 = { ...hocVien1, name: 'Tùng', id: 10 };
// hocVien2.id = 10;


console.log('hocVien1', hocVien1);
console.log('hocVien2', hocVien2);


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7];
// arr2.push(6);

console.log('arr1', arr1);
console.log('arr2', arr2);


// let objectA = {
//     id:5
// } //0xxx

// let objectB = objectA
// console.log(objectA === objectB);
// if(objectA === objectB) {
//     console.log('giống nhau!');
// }

/*
    Destructuring: Bóc tách thuộc tính, phương thức trong object hoặc phần tử trong mảng 

*/

let product = {
    id: 1,
    name: 'Galaxy note 10',
    price: 1000,
    showInfoProd: function () {
        console.log('Id', product.id);
        console.log('Name', product.name);
        console.log('Price', product.price);
    },
    info: {
        img: 'https://i.pravatar.cc?u=1',
    }
}

// let id = product.id;
// let name = product.name;
let { id, name, showInfoProd, ...rest } = product;
let { img } = product.info;
showInfoProd();
console.log('id', id);
console.log('rest', rest);

//tuple
let prod = [1, 'Galaxy note 10', 1000, function () {
    console.log('Id', prod[0]);
    console.log('Name', prod[1]);
    console.log('Price', prod[2]);
}];


let [maSP, tenSP, gia, hienThongTin] = prod;
console.log('tên sản phẩm', maSP);
hienThiThongTin();

/*
    string template: Là cú pháp es6 giúp chúng ta tạo 1 chuỗi dài có thể chèn vào tham số và xuống dòng được
*/


/*
    Object literal: Cho phép tạo nhanh thuộc tính từ biến. Lấy tên biến làm tên thuộc tính và giá trị biến làm giá trị thuộc tính
*/

let hoTen = 'Mị';
let thongTinSV = function () {
    console.log('Họ tên', hoTen);
}
let sinhVien5 = {
    hoTen,
    thongTinSV
}
console.log('Sinh viên', sinhVien5);
sinhVien5.thongTinSV();

/*
    dynamic key: Cho phép người dùng truyền động giá trị thuộc tính
*/

let tenThuocTinh = 'Mã sản phẩm';
let product1 = {
    [tenThuocTinh]: 1,
    name: 'Xiaomi 10',
    price: 6000
}


console.log('product', product1);
console.log('Mã sản phẩm', product1[tenThuocTinh]);


/*
    for in: Dùng để duyệt mảng mỗi lần duyệt sẽ trả ra index. Dùng để duyệt key (thuộc tính) của object
    for of: Dùng để duyệt các phần tử trong array mỗi lần duyệt lấy ra 1 phần tử
*/

let arrProd = [
    { id: 1, name: 'Nokia 10', price: 1000, img: 'https://i.pravatar.cc?u=1' }, //0
    { id: 2, name: 'Nokia 11', price: 2000, img: 'https://i.pravatar.cc?u=1' }, //1
    { id: 3, name: 'Nokia 12', price: 3000, img: 'https://i.pravatar.cc?u=1' }, //2
]
for (let pro of arrProd) {
    console.log('pro', pro);
}

for (let index in arrProd) {
    console.log('pro', arrProd[index]);
}


let object = {
    id: 1,
    name: 'abc',
    price: 1000,
    img: 'https://i.pravatar.cc?u=1'
}

for (let key in object) {
    console.log(key, object[key]);
}

// console.log('id',object.id);
// console.log('name',object.name);
// console.log('price',object.price);
// console.log('img',object.img);


let arrProd123 = {
    '0xxx': { id: 1, name: 'Nokia 10', price: 1000, img: 'https://i.pravatar.cc?u=1' },
    '0yyy': { id: 2, name: 'Nokia 11', price: 2000, img: 'https://i.pravatar.cc?u=1' },
    'zzz00': { id: 3, name: 'Nokia 12', price: 3000, img: 'https://i.pravatar.cc?u=1' }
}

// console.log('prod3',arrProd123.zzz00);
// console.log('prod1',arrProd123['0xxx']);

for(let key in arrProd123) {
    console.log('pro', arrProd123[key]);
}
/* 

    Bài tập thông tin nhân viên
    for of, destructuring object, spread operator, dynamic key, for in, string template
*/
document.getElementById('btnXacNhan').onclick = () => {

    var arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien select');
    console.log('arrInput',arrInput);
    let nhanVien = {};
    for (let input of arrInput) {
        // input.style.color = 'orange';
        let {id,value,style} = input;
        // let id = input.id;
        // let value = input.value;
        // console.log(id,value);
        nhanVien = {...nhanVien,[id]:value}
    }
    console.log('nhanVien',nhanVien)
    //Hiển thị thông tin nhân viên
    //nhanVien = {maNhanVien:'1',tenNhanVien:'Nguyen van A', luongCoBan:'1000',soGioLam:'100',soNgayNghi:10,chucVu:'GiamDoc'}
    let contentHTML = '';
    for(let key in nhanVien) {
        contentHTML += `
            <tr>
                <td>${key}</td>
                <td>${nhanVien[key]}</td>
            </tr>
        `
    }

    document.querySelector('tbody').innerHTML = contentHTML;
}


import {NhanVien,DOMAIN_BACKEND,getApiXoa} from './models/NhanVien.js';
// import {getApiXoa} from './models/NhanVien.js';
//import default có thể rename giá trị import và không có dấu {}
import NHAN_VIEN from './models/NhanVien.js';


let nv = new NhanVien();
nv.maNhanVien = 1;
nv.tenNhanVien ='ABC';
console.log('nv',nv);


console.log(getApiXoa(10));

import  './node_modules/lodash/lodash.min.js';
// import _ from 'lodash';

console.log(_);

let obA = {
    id:1
}

let obB = {
    id:2
}

console.log(_.isEqual(obA,obB)) 

let arrProd789 = [
    { id: 1, name: 'China', price: 1000, img: 'https://i.pravatar.cc?u=1' }, //0
    { id: 2, name: 'Black Berry', price: 3000, img: 'https://i.pravatar.cc?u=1' }, //1
    { id: 3, name: 'Apple', price: 2000, img: 'https://i.pravatar.cc?u=1' }, //2
    { id: 5, name: 'Black Berry', price: 6000, img: 'https://i.pravatar.cc?u=1' }, //1
    { id: 6, name: 'Black Berry', price: 2000, img: 'https://i.pravatar.cc?u=1' }, //1

]

let resultOrder =_.orderBy(arrProd789, ['name','price'])

console.log('resultOrder',resultOrder)

