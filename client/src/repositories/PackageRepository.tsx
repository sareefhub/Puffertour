import { IRepository } from "./IRepository"
import Package from '../models/Package'
import SeatRemaining from "../models/seatRemaining"
import { getUserData } from "../helper";
import conf from "../conf";

const user = getUserData()

export class PackageRepository implements IRepository<Package | SeatRemaining>{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    urlPrefix = `http://localhost:1337/api/attractions`
=======
    urlPrefix = `${conf.apiPrefix}/api/attractions`
>>>>>>> d216aa0 (แก้ไข path)
=======
    urlPrefix = `${conf.apiPrefix}/attractions`
>>>>>>> c03127c (ทดสอบเพิ่มข้อมูล strapi)
=======
    urlPrefix = `${conf.apiPrefix}/api/attractions`
>>>>>>> cfe83a8 (แก้ไข path)
    token = user.jwt

    async get(id: string): Promise<Package[] | null> {
        const resp = await fetch(`${this.urlPrefix}?populate=*&filters[id][$eq]=${id}`)
        const data = await resp.json()
        return data.data;
    }

    async getAll(): Promise<Package[] | null> {
        const resp = await fetch(`${this.urlPrefix}?populate=*`)
        const data = await resp.json()
        return data.data;
    }

    async updateSeat(id: string | number, data: SeatRemaining): Promise<SeatRemaining> {
        const resp = await fetch(`${this.urlPrefix}/${id}`, {
            method: "PUT",
            headers: { 
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const data_res = await resp.json();
        return data_res
    }
}