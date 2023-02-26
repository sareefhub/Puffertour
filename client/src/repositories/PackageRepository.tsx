import { IRepository } from "./IRepository"
import Package from '../models/Package'


export class PackageRepository implements IRepository<Package>{
    urlPrefix = "http://localhost:1337/api/attractions"

    async get(id: string): Promise<Package[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`)
        const data = await resp.json()
        return data.data;
    }

    async getAll(): Promise<Package[] | null> {
        const resp = await fetch(`${this.urlPrefix}`)
        const data = await resp.json()
        return data.data;
    }
}