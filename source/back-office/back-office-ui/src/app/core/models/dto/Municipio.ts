import { AbstractAuditable } from '../abstract-auditable';

export class Municipio extends AbstractAuditable<number> {
    id: number;
    nombre: string;
    latitud: number;
    longitud: number;
    telefono: string;
    departamentoId?: number;
}
