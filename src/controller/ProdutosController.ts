import { getRepository } from "typeorm";
import { Produtos } from "../models/Produtos";
import { Request, Response } from "express";

export const getProdutos = async (request: Request, response: Response) => {
  try {
    const produtos = await getRepository(Produtos).find();
    return response.status(200).json(produtos);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
export const saveProduto = async (request: Request, response: Response) => {
  try {
    const produto = await getRepository(Produtos).save(request.body);
    return response.status(200).json(produto);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
export const getProdutoById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const produto = await getRepository(Produtos).findOne(id);
    return response.status(200).json(produto);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
export const updateProduto = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const produto = await getRepository(Produtos).update(id, request.body);
    return response.status(200).json(produto);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
