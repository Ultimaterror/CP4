const connection = require('./db');

async function insertEstate(data) {
    const sql = "INSERT INTO estate (type, room, bedroom, size, price, place, picture) VALUES (?, ?, ?, ?, ?, ?, ?)";


    let bodyResponse = {...data};
    
    return connection.promise().query(sql, [
        data.type,
        data.room,
        data.bedroom,
        data.size,
        data.price,
        data.place,
        data.picture
    ])
    .then(async ([rows]) => { 
        bodyResponse.id = rows.insertId
        
        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function updateEstate(id, data) {
    let sqlQuery = "UPDATE estate SET ";

    for (let key in itemValue = Object.keys(data)) {
        sqlQuery += `${itemValue[key]} = ?, `
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    sqlQuery += ` WHERE id = ?`;

    let bodyResponse = {...data, id: id};
    
    return connection.promise().query(sqlQuery, [...Object.values(data), id])
    .then(async ([rows]) => { 
        //bodyResponse.id = rows.insertId
        //@TODO remove password from body

        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function deleteEstate(id) {
    let sqlQuery = `DELETE FROM estate where id = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 
        return {status: 204, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchEstate() {
    const sql = "SELECT * FROM estate";
    
    return connection.promise().query(sql)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOneEstate(id) {
    const sql = "SELECT * FROM estate WHERE id = ?";
    
    return connection.promise().query(sql, id)
    .then(async ([rows]) => {
        return rows.length === 0 ? {status: 404, message: {}} : {status: 200, message: rows[0]}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

module.exports = {
    insertEstate,
    fetchEstate,
    fetchOneEstate,
    updateEstate,
    deleteEstate
}