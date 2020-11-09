export interface User{
    id : number;
    username : string;
    password : string;
    ime : string;
    prezime : string;
    role? : Role;
}

export enum Role{
    Admin = 'Administrator',
    User =  'User'
}

export interface UserDTO{
    username : string;
    password : string;
    ime : string;
    prezime : string;
    role? : Role;
}

export interface Movie{
    Title: string;
    Year : string;
    Poster: string;
    ImdbID : string;
    Type : string;
}

export const USERS : User[] = [
    {id: 2, username : "Camil", password : "c123", ime : "Camil", prezime : "Plojovic", role:Role.Admin},
    {id: 1, username : "Bendza", password : "b123", ime : "Belmin", prezime : "Kurtanovic", role:Role.User}
]