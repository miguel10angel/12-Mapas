export class Marcador{

    public lat:number;
    public lng:number;
    public titulo:string='Sin titulo';
    public descripcion:string='Sin descripción';


    constructor(  lat:number, lng:number){
        this.lat=lat;
        this.lng=lng;
    }
}
