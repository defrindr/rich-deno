interface config_interface {
  app_name: string;
  server_address: string;
  port_address: string;
  db_driver: string;
  db_hostname: string;
  db_user: string;
  db_password: any;
  db_name: string;
};

export { config_interface };