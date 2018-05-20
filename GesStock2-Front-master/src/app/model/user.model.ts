import { ParentEntity } from './parentEntity.model';

export class UserModel extends ParentEntity{
    public nombre: string;
    public apellidos: string;
    public telefono: string;
    public direccion: string;
    public usuario: string;
    public pass: string;
    public email: string;
    public img_perfil: string;
}