import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PaisesModule } from './paises/paises.module';
import { AutosModule } from './autos/autos.module';
import { MarcasModule } from './marcas/marcas.module';
import { RolesModule } from './roles/roles.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';

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
      //logging: true,
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
