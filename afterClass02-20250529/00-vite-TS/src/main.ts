import './style.css'
import { tipado } from './tsPruebas/01-tipado'
import { genericos } from './tsPruebas/02-genericos'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h3>Pruebas Typescript</h3>
<h4>${tipado}</h4>
<h4>${genericos}</h4>

`

