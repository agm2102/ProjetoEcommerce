import { getConnection, getRepository } from "typeorm";
import { Pedidos } from "../models/Pedidos";
import { query, Request, Response } from "express";

export const getPedidos = async (request: Request, response: Response) => {
  try {
    const pedido = await getRepository(Pedidos).find();
    return response.status(200).json(pedido);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};

export const savePedidos = async (request: Request, response: Response) => {
  try {
    const pedido = await getRepository(Pedidos).save(request.body);
    return response.status(200).json(pedido);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};

export const getPedidoById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const pedido = await getRepository(Pedidos).findOne(id);
    return response.status(200).json(pedido);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};

export const updatePedido = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const pedido = await getRepository(Pedidos).update(id, request.body);
    return response.status(200).json(pedido);
  } catch (error) {
    console.log("Erro: ", error);
    return response.status(400).send();
  }
};
