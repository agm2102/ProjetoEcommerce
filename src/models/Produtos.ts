import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Categorias } from "./Categorias";
import { Pedidos } from "./Pedidos";

@Entity("produtos")
export class Produtos {
  @PrimaryGeneratedColumn("increment", {
    type: "int",
  })
  id: number;

  @Column()
  nome: string;

  @Column({
    type: "int",
  })
  quantidade_estoque: number;

  @Column({
    type: "float",
  })
  preco: number;

  @ManyToOne(() => Categorias, (categoria) => categoria.produtos, {
    eager: true,
  })
  @JoinColumn()
  categoria: Categorias;

  @ManyToMany(() => Pedidos)
  pedidos: Pedidos[];
}
