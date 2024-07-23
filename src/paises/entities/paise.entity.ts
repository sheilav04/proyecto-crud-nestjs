import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paise')
export class Paise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  provincia: string;

  @Column('text')
  localidad: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'
  //idLocalizacion: Pais
}
