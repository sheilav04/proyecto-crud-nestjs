import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { MarcasModule } from './marcas/marcas.module';
import { PaisesModule } from './paises/paises.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bootcamp052024',
      database: 'data',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    PaisesModule,
    AutosModule,
    MarcasModule,
    RolesModule,
    LenguajesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
