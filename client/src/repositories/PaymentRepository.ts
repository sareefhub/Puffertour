import { IRepository } from "./IRepository"
import Payment from "../models/Payment";
import ReserveStatus from "../models/Reserve";
import { getUserData } from "../helper";
import conf from "../conf";


const user = getUserData()

export class PaymentRepository implements IRepository<Payment | ReserveStatus>{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    urlPrefix = `http://localhost:1337/api/payments`
=======
    urlPrefix = `${conf.apiPrefix}/api/payments`
>>>>>>> d216aa0 (แก้ไข path)
=======
    urlPrefix = `${conf.apiPrefix}/payments`
>>>>>>> c03127c (ทดสอบเพิ่มข้อมูล strapi)
=======
    urlPrefix = `${conf.apiPrefix}/api/payments`
>>>>>>> cfe83a8 (แก้ไข path)
    token = user.jwt

    async getByUser(): Promise<ReserveStatus[] | null> {
        const res = await fetch(`${this.urlPrefix}?populate=*&filters[user][$eq]=${user.username}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        const data = await res.json()
        return data.data
    }

    async createPayment(data: Payment): Promise<Payment> {
        const resp = await fetch(`${this.urlPrefix}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const data_res = await resp.json()
        return data_res;
    }

    async deletePayment(id: string | number): Promise<void> {
        const resp = await fetch(`${this.urlPrefix}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`,
            }
        })
        const data_res = await resp.json()
        return data_res
    }

}
