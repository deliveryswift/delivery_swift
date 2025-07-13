import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';


dotenv.config()
if(!process.env.DATABASE_URL){
    console.log('No database provided')
}

export default defineConfig({
    out: './drizzle/migrate',
    schema: './drizzle/schema.ts',
    dialect: 'postgresql',
   
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
})