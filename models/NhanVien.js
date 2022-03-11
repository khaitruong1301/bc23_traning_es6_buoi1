//export là cho phép function, array, object, number ,... sử dụng ở file khác với cú pháp import

export function NhanVien() {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.hienThiThongTin = function () {
        console.log('mã ', this.maNhanVien);
        console.log('tên ', this.tenNhanVien);
    }
}


export const DOMAIN_BACKEND = 'http://svcy.myclass.vn/api';


export const getApiXoa = id => 'http://svcy.myclass.vn/sinhvienapi/xoasinhvien?masinhvien=' + id;


//export default : mỗi 1 file chỉ có thể export default 1 lần
export default NhanVien;