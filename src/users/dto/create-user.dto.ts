export class CreateUserDto {
    username: string;
    email: string;
    passwordHash: string;
    bio: string;
    roleName: string; // New field to specify role by name
}
