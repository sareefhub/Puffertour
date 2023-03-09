import { IRepository } from "./IRepository"
import OneDay from "../models/OneDay"
import SeatRemaining from "../models/seatRemaining"
import { getUserData } from "../helper";
import conf from "../conf";

const user = getUserData()

export class OneDayRepository implements IRepository<OneDay | SeatRemaining>{
    urlPrefix = `${conf.apiPrefix}/api/one-days`
    token = user.jwt

    async get(id: string): Promise<OneDay[] | null> {
        const resp = await fetch(`${this.urlPrefix}?populate=*&filters[id][$eq]=${id}`)
        const data = await resp.json()
        return data.data;
    }

    async getAll(): Promise<OneDay[] | null> {
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