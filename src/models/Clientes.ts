import { type } from "os";
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pedidos } from "./Pedidos";

@Entity("clientes")
export class Clientes {
  @PrimaryGeneratedColumn("increment", {
    type: "int",
  })
  id: number;

  @Column()
  name: string;

  @Column({
    type: "double",
    unique: true,
  })
  cpf: number;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  data_de_nascimento: string;

  @OneToMany(() => Pedidos, (pedidos) => pedidos.clientes)
  pedidos: Pedidos[];
}
