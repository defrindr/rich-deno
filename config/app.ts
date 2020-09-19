import env from  '../libs/env.ts';
import { config_interface } from './interfaces/config.ts';

const config = {} as config_interface;

config.app_name = env.APP_NAME || 'Rich Deno';
config.server_address = env.SERVER_ADDRESS || '127.0.0.1';
config.port_address = env.PORT_ADDRESS || '8000';
config.db_driver = env.DB_DRIVER || 'MYSQL';
config.db_hostname = env.DB_HOSTNAME || '127.0.0.1';
config.db_user = env.DB_USER || 'Rich Deno';
config.db_password = env.DB_PASSWORD || '';
config.db_name = env.DB_NAME || 'RichDB';

export { config };