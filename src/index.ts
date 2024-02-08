import pgStructure, { Table } from 'pg-structure'
import { Client } from 'pg'

async function main() {

    const client = new Client({
        host: 'db.bartho.dev',
        port: 5000,
        database: 'mockabase',
        user: 'mockabase',
        password: 'mockabase123'
    })

    const db = await pgStructure(client)
    console.clear()

    const table = db.get('sales.currency') as Table
    const columnNames = table.columns.map(c => c.name)
    const indexColumnNames = table.indexes
    const relatedTables = table.relations

    console.log(relatedTables)
    // console.log(relatedTables)
}

main()