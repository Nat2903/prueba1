let grafico1 = document.querySelector("#miprimergrafico");
let x =[];
let y =[];
let paso = ( 2 * Math.PI - 0) / 200;
for (let xV = 0; xV <= 2 * Math.PI ; xV += paso)
{
    x.push(xV);
    y.push(8 * Math.sin(xV));
}
console.log(x);
console.log (y);
Plotly.newPlot(
    grafico1,
     [
         {x: [1,2,3,4,5], y: [1,2,3,4,5]},
          {x: x, y: y},
    ],
    {
    margin: {t: 0},
}
);

