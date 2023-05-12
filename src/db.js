import { createPool } from 'mysql2/promise'

// export const pool = createPool({
//     host: '193.42.137.1',
//     port: 3306,
//     user: 'u920415849_alpa',
//     password: 'Sistemas140210',
//     database: 'u920415849_alpa'
// })

export const pool = createPool({
    host: '10.42.0.1',
    port: 33060,
    user: 'root',
    password: 'secret',
    database: 'sys'
})

