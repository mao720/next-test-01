import { NextApiRequest, NextApiResponse } from "next";
import pet from "../../../../models/pet";
import dbconnect from "../../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    if (req.method=='GET') {
        const petById = await pet.findById(req.query.id);
        res.json({code:1,data:petById})
    } else if(req.method=='PUT'){

    } else if(req.method=='DELETE'){

    } else {
        
    }
}
