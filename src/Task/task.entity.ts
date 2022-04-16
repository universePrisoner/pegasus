import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string | null;

    @Column()
    is_archived: boolean;
}