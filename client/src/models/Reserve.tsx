export default interface ReserveStatus {
    id : number;
    attributes: {
        tour_name: string,
        tour_id: string | number,
        tour_start: Date | null,
        status: string,
        user: string,
        quantity: number,
        total_price: number
    }
}
