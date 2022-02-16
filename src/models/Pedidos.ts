import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clientes } from "./Clientes";
import { Produtos } from "./Produtos";

@Entity("pedidos")
export class Pedidos {
  @PrimaryGeneratedColumn("increment", {
    type: "int",
  })
  id: number;

  @CreateDateColumn()
  data: Date;

  @Column()
  status: string;

  @Column({
    type: "float",
  })
  valor: number;

  @Column({
    type: "float",
  })
  desconto: number;

  @ManyToOne(() => Clientes, (clientes) => clientes.pedidos, { eager: true })
  @JoinColumn()
  clientes: Clientes;

  @ManyToMany(() => Produtos, { eager: true })
  @JoinTable()
  produtos: Produtos[];
}
