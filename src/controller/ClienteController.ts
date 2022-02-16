import { getRepository } from "typeorm";
import { Clientes } from "../models/Clientes";
import { Request, Response } from "express";

export const getClientes = async (request: Request, response: Response) => {
  try {
    const cliente = await getRepository(Clientes).find();
    return response.status(201).json(cliente);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};

export const saveClientes = async (request: Request, response: Response) => {
  try {
    const cliente = await getRepository(Clientes).save(request.body);
    return response.status(201).json(cliente);
  } catch (error) {
    console.log("Erro:", error);
    return response.status(400).send();
  }
};

export const getClienteById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const cliente = await getRepository(Clientes).findOne(id);
    return response.status(201).json(cliente);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};

export const updateCliente = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const cliente = await getRepository(Clientes).update(id, request.body);
    return response.status(201).json(cliente);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
