export interface IErrorResponse {
    message: string;
    type: string;
    value: string;
};

export const isIErrorResponse = (obj: any): obj is IErrorResponse => {
    return (
        typeof obj.message === 'string' &&
        typeof obj.type === 'string' &&
        typeof obj.value === 'string'
    );

};