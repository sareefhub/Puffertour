export default interface Payment {
    id: number
    attributes: {
        tour_id: string,
        tour_name: string,
        tour_start: Date | null,
        status: string,
        user: string,
        quantity: number,
        total_price: number
    }
}
