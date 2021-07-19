import { NextApiRequest, NextApiResponse } from "next"
import Pet from "../../../models/pet"
import dbconnect from "../../../utils/dbconnect"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    res.statusCode = 200
    if (req.method == 'POST') {
        const body = JSON.parse(req.body)
        if (!body || !body.name) {
            res.json({ code: 10001, msg: 'name 是必需字段！' })
            return
        }
        await new Pet(body).save()
        res.json({ code: 0, msg: '新增成功' })
    } else {
        const petList = await Pet.find()
        res.json({ code: 0, data: petList })
    }
}
