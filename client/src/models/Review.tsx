export default interface Review {
    id : number;
    attributes: {
        tour_name: string,
        tour_id: string | number,
        review: string,
        user: string,
    }
}