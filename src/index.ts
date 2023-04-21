import pgStructure from 'pg-structure'

async function main() {

    const db = await pgStructure({
        host: 'db.bartho.dev',
        port: 5000,
        database: 'mockabase',
        user: 'mockabase',
        password: 'mockabase123'
    })
}

main()