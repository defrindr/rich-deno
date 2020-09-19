import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "./app.ts";

let db: any;

let mysql_connect = {
  hostname: config.db_hostname,
  username: config.db_user,
  db: config.db_name,
  password: config.db_password,
};

if ( config.db_driver.toUpperCase() == "MYSQL"){
    db = await new Client().connect(mysql_connect);
}


export default db;

