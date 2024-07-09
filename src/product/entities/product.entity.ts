import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from './photo.entity';
import { CategoryEnum } from './enums/category.enum';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: CategoryEnum,
  })
  category: string;

  @OneToMany(() => Photo, photo => photo.product, { cascade: true })
  photos: Photo[];
}