import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: '193.42.137.1',
    port: 3306,
    user: 'u920415849_alpa',
    password: 'Sistemas140210',
    database: 'u920415849_alpa'
})


