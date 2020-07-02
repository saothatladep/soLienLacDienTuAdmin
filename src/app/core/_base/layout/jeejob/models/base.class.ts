// Loại công việc
export class Loaicongviec {
    public idLoaicongviec: number;
    public tenloaicongviec: string;
}

// Thành phố
export class Thanhpho {
    public idThanhpho: number;
    public tenthanhpho: string;
}

//Địa điểm làm việc
export class Diadiemlamviec{
    public idDiadiemlamviec: number;
    public idNhatuyendung: number;
    public idQuan: number;
    public diachi: string;
}

//Ngành
export class Nganh{
    public tennganh:string;
    public idNganh:number;
}