"use server"

import { usersTable } from "../../src/db/schema";
import { db } from "../../src/db/index";


export async function insertOneUser(name:string, iseducated:boolean) {
    await db.insert(usersTable).values(
        {name:name, 
        iseducated:iseducated}
        );
}