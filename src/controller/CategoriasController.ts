import { getRepository } from "typeorm";
import { Categorias } from "../models/Categorias";
import { Request, Response } from "express";

export const getCategorias = async (request: Request, response: Response) => {
  try {
    const categorias = await getRepository(Categorias).find();
    return response.status(200).json(categorias);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
export const saveCategoria = async (request: Request, response: Response) => {
  try {
    const categoria = await getRepository(Categorias).save(request.body);
    return response.status(200).json(categoria);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
export const getCategoriaById = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.params;
    const categoria = await getRepository(Categorias).findOne(id);
    return response.status(200).json(categoria);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
export const updateCategoria = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const categoria = await getRepository(Categorias).update(id, request.body);
    return response.status(200).json(categoria);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
