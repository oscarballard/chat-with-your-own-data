import {
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

export interface IBaseEntity {
    id: string | number;
    createdAt: Date;
}

export abstract class BaseEntity implements IBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
}