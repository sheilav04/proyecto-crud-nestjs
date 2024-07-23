import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('int')
  dni: number;

  @Column('text')
  direccion: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'
  //idLocalizacion: Pais
}
