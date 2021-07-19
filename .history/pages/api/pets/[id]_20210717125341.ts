import { NextApiRequest, NextApiResponse } from "next";
import pet from "../../../models/pet";
import dbconnect from "../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    if (req.method == 'GET') {
        try {
            const petById = await pet.findById(req.query.id)
            if (petById) res.json({ code: 0, data: petById })
            else res.json({ code: 10002, msg: '没找到' })
        } catch (error) {
            res.json({ code: 10000, msg: error.message })
        }
    } else if (req.method == 'PUT') {
        const body = JSON.parse(req.body)
        if (!body || !body.name) {
            res.json({ code: 10001, msg: 'name 是必需字段！' })
            return
        }
        try {
            await pet.findByIdAndUpdate(req.query.id, body)
            res.json({ code: 0, msg: '更新成功' })
        } catch (error) {
            res.json({ code: 10000, msg: error.message })
        }
    } else if (req.method == 'DELETE') {

    } else {

    }
}
