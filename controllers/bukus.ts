import { Buku } from '../models/buku.ts';
import db from '../config/db.ts';

const getBukus= async( {response}: {response: any}) => {
    let bukus = await db.query("select * from buku");
    response.body = {
        success: true,
        data : bukus
    };
}

export { getBukus };

