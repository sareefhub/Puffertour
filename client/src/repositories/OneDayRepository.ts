import axios from "axios";
import { IRepository } from "./IRepository"
import OneDay from "../models/OneDay"


export class OneDayRepository implements IRepository<OneDay>{
    urlPrefix = "http://localhost:1337/api/one-days?populate=*"
  static getAll: any;

    async get(id: string): Promise<OneDay[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`)
        const data = await resp.json()
        return data.data;
    }

    async getAll(): Promise<OneDay[] | null> {
        const resp = await fetch(`${this.urlPrefix}`)
        const data = await resp.json()
        return data.data;
    }
}