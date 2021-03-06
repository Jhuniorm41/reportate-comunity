export class Basic {
  constructor(
    public id: number = 0,
    public nombre: number = null
    ) { }
}

export class Filter {
  constructor(
    public departamentoId: number = 0,
    public municipioId: number = 0,
    public centroSaludId: number = 0,
    public enfermedadId: number = 0
    ) { }
}

export class Data {
  constructor(
    public dias: string[] = [],
    public confirmados: number[] = [],
    public positivos: number[] = [],
    public recuperados: number[] = [],
    public decesos: number[] = [],
    public sospechosos: number[] = [],
    public descartado: number[] = []
    ) { }
}

export class DataTotal {
  constructor(
    public nivelLugar: number = null,
    public items: DataTotalItem[] = []
    ) { }
}

export class DataTotalItem {
  constructor(
    public nombre: number = null,
    public sospechoso: number = 0,
    public negativo: number = 0,
    public confirmado: number = 0,
    public curado: number = 0,
    public fallecido: number = 0
    ) { }
}

export class DataTotalNumber {
  constructor(
    public confirmados: number = 0,
    public positivos: number = 0,
    public sospechosos: number = 0,
    public descartados: number = 0,
    public recuperados: number = 0,
    public decesos: number = 0,
    ) { }
}
