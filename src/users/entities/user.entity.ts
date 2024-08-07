import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  nombre: string;

  @Column('varchar')
  apellido: string;

  @Column('int')
  dni: number;

  @Column('varchar')
  direccion: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'
  //idLocalizacion: Pais
}
