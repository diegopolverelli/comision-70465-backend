import {Command, Option} from "commander"

const program=new Command()

program.option("-p, --port <PORT>", "Puerto donde escuchará el server", 3000)
program.option("-d, --debug", "Activa modo debug")
program.option("-c, --colors [COLORES...]", "Ingresar colores de fondo")
program.requiredOption("-u, --user <USER>", "Usuario que corre el script")
program.addOption(new Option("-m, --mode <MODE>", "Mode de ejecución del server").choices(["dev", "prod", "testing"]).default("dev"))


program.parse()
const opts=program.opts()

console.log(opts)
