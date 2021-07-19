import { NextApiRequest, NextApiResponse } from "next";
import pet from "../../../models/pet";
import dbconnect from "../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    if (req.method == 'GET') {
        try {
            const petById = await pet.findById(req.query.id, null, null, (err) => {
                console.log(err)
            });
            res.json({ code: 0, data: petById })
        } catch (error) {
            res.json({ code: 10002 })
        }
    } else if (req.method == 'PUT') {

    } else if (req.method == 'DELETE') {

    } else {

    }
}
