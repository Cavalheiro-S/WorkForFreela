export interface IControllerResponse<T> {
    message: string;
    data?: T
    errors?: string[];
}