export interface IRepository<T> {
    get?(id: string|number) : Promise<T[] | null>
    getAll?(): Promise<T[] | null>
    updateSeat?(id: string|number, data : T) : Promise<T>;

    getByUser?() : Promise<T[] | null>
    createPayment?(data: T): Promise<T>
    deletePayment?(id: string|number): Promise<void>
    
    getReview?(tourName: string) : Promise<T[] | null>
    createReview?(data: T): Promise<T>
    deleteReview?(id: string|number): Promise<void>
}