
export default class Inventario{
    constructor(){
        this._inv = new Array();
    }

    prueba(){
        return this._inv;
    }

    añadir(producto){
        let pos = this._encontrarProd(producto);

        if(pos == false){
            this._inv.push(producto);
            console.log(this._inv)
            return true;  
        }
        return false;  
    }

    noSobre(producto){
        if(this._inv.length > 20){
            return false
        }
    }

    eliminar(){
        
        let labCod = document.querySelector('#code');
        let code = Number(labCod.value);
        let pos = null;

        this._inv.forEach((element, i) => {
            if (element != null || element != undefined) {
                if (element.getCod() === code) {

                    

                    this._inv[i] = undefined;

                    this.actualizarHtml();
                    pos = false
                    return;
                }
            }
        });
        return pos;

    }

    buscar(){
        let labCod = document.querySelector('#code');
        let code = Number(labCod.value);
        let pos = null;

        this._inv.forEach((element, i) => {
            if (element != null || element != undefined) {
                if (element.getCod() === code) {

                    

                    this._inv[i];

                    this.actualizarHtmlB(labCod.value, true);
                    console.log(this._inv[i]);
                    pos = true;
                    return;
                }
            }
        });
        if (pos != true) {
            this.actualizarHtmlB(labCod.value, false);
        }
        return pos;
    }
    posicion(){
        let labPos = document.querySelector('#Position');
        let position = Number(labPos.value);

        for(let i = 0; i < this._inv.length; i++){
             return this._inv[position];
        }
    
    }
    

    _encontrarProd(productos){
        let pos = false;
        this._inv.forEach((element, i) => {
            if (element != null || element != undefined) {
                
                if (element.getCod() === productos.getCod()) {

                    pos = true;
                    return;
                }
            }
        });
        return pos;
        
        //Codigo Viejo
        
        // let newPos = false;
        // if (productos != null || productos != undefined) {
            //     newPos = this._inv.findIndex((prod) => {
            //     if(prod.getCod() === productos.getCod()){
            //         return true;
            //     }else{
            //         return false;
            //     }
            // })
        //}

    //return newPos;
    }

    actualizarHtml() {
        
        let textoParaInsertar;
        let localizarHtml;

        // Borrar Listado - (Evitar Repetidos)
        const array = document.getElementsByClassName('productosListados');
        while(array.length > 0){
            array[0].parentNode.removeChild(array[0]);
        }

        this._inv.forEach(element => {
            if (element != undefined || element != null) {

                //Agregar Listado - En forma de DIV
                textoParaInsertar = document.createElement( 'div' );
                textoParaInsertar.classList.add("productosListados");

                textoParaInsertar.innerHTML = `Codigo: ${element.getCod()} - Nombre: ${element.getName()} - Cantidad: ${element.getCan()} - Precio: $${element.getCos()} - Total: $${element.getTotal()}`;
                 
                localizarHtml = document.getElementById('productosHtml');
                localizarHtml.appendChild(textoParaInsertar);

            }
        })
        return;
    }

    actualizarHtmlB(id, trueFalse) {
        
        let textoParaInsertar;
        let localizarHtml;
        let texto;

                if (trueFalse === true) {
                    texto = 'fue encontrado'
                } else {
                    texto = 'NO fue encontrado'
                }

                //Agregar Listado - En forma de DIV
                textoParaInsertar = document.createElement( 'div' );
                textoParaInsertar.innerHTML = `Se busco el ID: ${id} y ${texto}`;
                 
                localizarHtml = document.getElementById('buscar');
                localizarHtml.appendChild(textoParaInsertar);
        return;
    }


    actualizarHtmlInverso() {
        
        let textoParaInsertar;
        let localizarHtml;

        // Borrar Listado - (Evitar Repetidos)
        const array = document.getElementsByClassName('productosListados');
        while(array.length > 0){
            array[0].parentNode.removeChild(array[0]);
        }

        this._inv.forEach(element => {
            if (element != undefined || element != null) {

                //Agregar Listado - En forma de DIV
                textoParaInsertar = document.createElement( 'div' );
                textoParaInsertar.classList.add("productosListados");

                textoParaInsertar.innerHTML = `Codigo: ${element.getCod()} - Nombre: ${element.getName()} - Peso: ${element.getCan()} - Precio: $${element.getCos()} - Total: $${element.getTotal()}`;
                 
                localizarHtml = document.getElementById('productosHtml');
                localizarHtml.prepend(textoParaInsertar);

            }
        })
        return;
    }
    


}