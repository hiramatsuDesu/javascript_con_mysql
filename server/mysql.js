const mysql = require('mysql')
const { createConnection } = require('net')


//establece la conexion
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'maria',
    password: 'hf5lKWXh)d4SObCy',
    database: 'mayoristamariaclara'
})
conection.connect((err) =>{
    if(err) throw err
    console.log('la conexion fue exitosa')
})


//muestra datos de productos
conection.query('SELECT * from productos', (err, rows) => {
    if(err) throw err
    console.log('Se listan los siguientes productos: ')
    console.log(rows)
    console.log('Cantidad de productos: ')
    console.log(rows.length)
})


/*
insertara este dato cada vez que se ejecute la base

const insertar = "INSERT INTO clientes VALUES('Fabiana', 'Prado', 30457895649, DEFAULT, NULL, 1145623907)"

conection.query(insertar, (err, rows) =>{
    if(err) throw err
})
*/
//muestra datos de clientes
conection.query('SELECT * from clientes', (err, rows) =>{
    if(err) throw err
    console.log('Clientes: ')
    console.log(rows)
    console.log('Cantidad de clientes al momento: ')
    console.log(rows.length)
})


//muestra datos de facturas
conection.query('SELECT * from facturas', (err, rows) =>{
    if(err) throw err
    console.log('Las facturas emitidas al momento: ')
    console.log(rows)
    console.log('Cantidad de facturas:')
    console.log(rows.length)
    
})

//vamos con un inner join
conection.query('SELECT * FROM facturas INNER JOIN clientes ON clientes.idCliente = facturas.idCliente', (err, rows) =>{
    if(err) throw err
    console.log('estos son los clientes con sus facturas')
    console.log(rows)
})

//inner join left
conection.query('SELECT * FROM clientes LEFT JOIN facturas ON clientes.idCliente = facturas.idCliente', (err, rows) => {
    if(err) throw err
    console.log('Estas son los clientes con sus respectivas facturas')
    console.log(rows)
})

conection.end()