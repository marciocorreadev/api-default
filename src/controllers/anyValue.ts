import { Request, Response } from "express"
import AnyValueRepository from '@repositories/anyValue'
import { format, removeSynbols } from '@utils/fotmat'

function error(err: Error, res: Response, status: number ) {
    res.status(status).send({ error: err })
}

async function create(req: Request, res: Response) {
    try {

        let { anyValue } = req.body
        if (!anyValue) throw ({ errors: "Dados inválidos.", status: 400 });
        const createAnyValue = await AnyValueRepository.create({ anyValue });
        res.status(201).json(createAnyValue)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function get(req: Request, res: Response) {
    try {
        let { limit, skip } = req.query as any;

        const getAnyValue = await AnyValueRepository.get({},limit, skip);
        
        if (!getAnyValue.length) throw ({ errors: "Nada encontrado", status: 404 });

        res.status(200).json(getAnyValue)

    } catch (e) {

        error(e, res, e?.status ? e.status : 500)

    }
}

async function getById(req: Request, res: Response) {
    try {

        let { anyValue } = req.params
        if (!anyValue) throw ({ errors: "AnyValue não informado.", status: 400 });
        
        const getAnyValue = await AnyValueRepository.getById(anyValue);

        if (!getAnyValue.length) throw ({ errors: "Nada encontrado", status: 404 });

        res.status(200).json(getAnyValue)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function update(req: Request, res: Response) {
    try {
        let anyValue = req.params.anyValue
        let anyData = req.params.anyData
        if (!anyValue) throw ({ errors: "AnyValue não informado.", status: 400 });

        let data: any = {}
        if (anyData) data.anyData = removeSynbols(anyData)

        const updateAnyValue = await AnyValueRepository.update(anyValue, data);
        if (!updateAnyValue) throw ({ errors: "Não atualizado.", status: 404 });

        const getAnyValue = await AnyValueRepository.getById(data.anyValue);
        res.status(200).json(getAnyValue)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

async function remove(req: Request, res: Response) {
    try {
        let anyValue = req.params.anyValue
        if (!anyValue) throw ({ errors: "AnyValue não informado.", status: 400 });

        const removeAnyValue = await AnyValueRepository.remove(anyValue);
        if (!removeAnyValue) throw ({ errors: "Não removido.", status: 404 });

        res.status(200).json(removeAnyValue)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

export default { create, get, getById, update, remove }