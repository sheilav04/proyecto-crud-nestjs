import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'
  //idLocalizacion: Pais
}
