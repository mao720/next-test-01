import { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "../../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect()
    if (req.method=='GET') {
        
    } else if(req.method=='PUT'){

    } else {
        
    }
}
