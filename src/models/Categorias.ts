import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produtos } from "./Produtos";

@Entity("categorias")
export class Categorias {
  @PrimaryGeneratedColumn("increment", {
    type: "int",
  })
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Produtos, (produtos) => produtos.categoria)
  produtos: Produtos[];
}
