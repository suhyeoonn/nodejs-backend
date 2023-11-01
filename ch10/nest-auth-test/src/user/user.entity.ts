import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  username: string;

  @Column({ default: true })
  createdDt: Date = new Date();

  @Column({ nullable: true })
  providerId: string;
}
