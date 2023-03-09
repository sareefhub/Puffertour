import { IRepository } from "./IRepository"
import Review from "../models/Review";
import ReviewData from "../models/Reviewdata";
import { getUserData } from "../helper";
import conf from "../conf";

const user = getUserData()

export class ReviewRepository implements IRepository<Review | ReviewData>{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    urlPrefix = `http://localhost:1337/api/review`
=======
    urlPrefix = `${conf.apiPrefix}/api/reviews`
>>>>>>> d216aa0 (แก้ไข path)
=======
    urlPrefix = `${conf.apiPrefix}/reviews`
>>>>>>> c03127c (ทดสอบเพิ่มข้อมูล strapi)
=======
    urlPrefix = `${conf.apiPrefix}/api/reviews`
>>>>>>> cfe83a8 (แก้ไข path)
    token = user.jwt
    
    async getReview(tourName: string): Promise<Review[] | null> {
        const res = await fetch(`${this.urlPrefix}?populate=*&filters[tour_name][$eq]=${tourName}`)
        const data = await res.json()
        return data.data
    }

    async createReview(data: ReviewData): Promise<ReviewData> {
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

    async deleteReview(id: string | number): Promise<void> {
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