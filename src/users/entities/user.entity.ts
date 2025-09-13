export class User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    bio: string;
    createdAt: Date;
    roleId: number;

    constructor(
        id: number,
        username: string,
        email: string,
        passwordHash: string,
        bio: string,
        roleId: number,
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.bio = bio;
        this.createdAt = new Date();
        this.roleId = roleId;
    }
}
