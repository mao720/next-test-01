import { NextApiRequest, NextApiResponse } from "next";
import pet from "../../../../models/pet";
import dbconnect from "../../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    if (req.method == 'GET') {
        console.log('MMM')
        const petById = await pet.findById(req.query.id);
        console.log(petById)
        res.json({ code: 0, data: petById })
    } else if (req.method == 'PUT') {

    } else if (req.method == 'DELETE') {

    } else {

    }
}