import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
    private roles: Role[] = [];
    private idCounter = 1;

    create(createRoleDto: CreateRoleDto) {
        const newRole = new Role(
            this.idCounter++,
            createRoleDto.name,
            createRoleDto.description,
        );
        this.roles.push(newRole);
        return newRole;
    }

    findAll() {
        return this.roles;
    }

    findOne(id: number) {
        return this.roles.find((role) => role.id === id);
    }

    update(id: number, updateRoleDto: UpdateRoleDto) {
        const role = this.roles.find((role) => role.id === id);
        if (role) {
            Object.assign(role, updateRoleDto);
            return role;
        }
        return null;
    }

    remove(id: number) {
        const index = this.roles.findIndex((role) => role.id === id);
        if (index !== -1) {
            this.roles.splice(index, 1);
            return { id };
        }
        return null;
    }

    findByName(name: string): Role | undefined {
        return this.roles.find((role) => role.name === name);
    }
}
