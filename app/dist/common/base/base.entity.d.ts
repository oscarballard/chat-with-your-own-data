export interface IBaseEntity {
    id: string | number;
    createdAt: Date;
}
export declare abstract class BaseEntity implements IBaseEntity {
    id: string;
    createdAt: Date;
}
