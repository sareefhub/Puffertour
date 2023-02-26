export interface IRepository<T> {
    get(id: string|number) : Promise<T[] | null>
    getAll(): Promise<T[] | null>
}