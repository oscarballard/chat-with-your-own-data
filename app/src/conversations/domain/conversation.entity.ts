import { Sender } from 'src/common/constants/Sender';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('conversations')
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({
    type: 'enum',
    enum: Sender,
  })
  sender: Sender;
}
