export interface Traccion {
    tipo: string;
    hpRestado: number;
    distanciaMax: number;
    getInfo(): string;
}