import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService], // Export the service to be used in other modules
})
export class RolesModule {}
