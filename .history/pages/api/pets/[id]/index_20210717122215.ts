import { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "../../../../utils/dbconnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbconnect
}
