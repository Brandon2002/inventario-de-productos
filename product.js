export default class Product{
    constructor(codigo, nombre, cantidad, costo, posicion){
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._costo = costo;
        this._posicion = posicion;
    }

    getCod(){
        return this._codigo;
    }
    getName(){
        return this._nombre;
    }
    getCan(){
        return this._cantidad;
    }
    getCos(){
        return this._costo;
    }
    getPos(){
        return this._posicion;
    }
    getTotal(){
        let tot = this._costo * this._cantidad;
        return Number(tot);
    }


    static readForm(){
        let labCod = document.querySelector('#code');
        let labName = document.querySelector('#name');
        let labCan = document.querySelector('#quantity');
        let labCos = document.querySelector('#cost');
        let labPos = document.querySelector('#Position')

        let code = Number(labCod.value);
        let name = labName.value;
        let cost = Number(labCos.value);
        let quantity = Number(labCan.value);
        let position = Number(labPos.value);

        if(code && name && cost && quantity && position){
            labCod.value = '';
            labName.value = '';
            labCos.value = '';
            labCan.value = '';
            labPos.value = '';

            return new Product(code, name, quantity, cost, position);
        }
        return false;
    }
}