class App
{
    factorial(x)
    {
        let resultado = 1;
        let i = 1;
        while(i <= x)
        {
            resultado = resultado * i;
            i++;
        }
        return resultado;
    }

    primerSerie(numero)
    {
        let resultado = 0;
        let divisor = 1;

        for(let i = 1; i >= 1 / this.factorial(numero); 
        i = 1 / this.factorial(divisor++))
        {
            resultado = resultado + i;
        }

        return resultado;
    }

    segundaSerie(numero)
    {
        let resultado = 0;
        let operacion = true;
        let divisor = 1;
        let i = 4;

        for(let lugar = 1; lugar <= numero; lugar ++)
        {
            if(operacion)
            {
                resultado = resultado + i;
                operacion = false;
            } 

            else 
            {
                resultado = resultado - i;
                operacion = true;
            }

            divisor = divisor + 2

            i = 4/(divisor);
        }

        return resultado;
    }
}

let app = new App();

//Primer Serie = 2.71828...
console.log(app.primerSerie(10));

//Segunda Serie = 3.04183...
console.log(app.segundaSerie(10));