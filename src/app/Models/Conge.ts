import { User } from "./User"
export enum Type{
  ANNUEL ='ANNUEL',
  EXCEPTIONNEL='EXCEPTIONNEL'
}
export class Conge {
  id!: number;
  type!: string;
  date_demande!: Date;
  date_debut!: Date;
  date_fin!: Date;
  duree!: number;
  motif!: string;
  statut!: string;
  solde!: number;
  user!: User;
  file!:File


}
