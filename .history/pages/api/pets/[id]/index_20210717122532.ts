import { NextApiRequest, NextApiResponse } from "next";
import pet from "../../../../models/pet";
import dbconnect from "../../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    if (req.method=='GET') {
        await pet.findById(req.query.id)
        res.json()
    } else if(req.method=='PUT'){

    } else if(req.method=='DELETE'){

    } else {
        
    }
}
