import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { user } from "./schema";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

if (!("DATABASE_URL" in process.env))
        throw new Error("DATABASE_URL not found on .env");

const main = async () => {
        const client = postgres(process.env.DATABASE_URL as string);
        const db = drizzle(client);
        const data: (typeof user.$inferInsert)[] = [];

        for (let i = 0; i < 20; i++) {
                data.push({
                        id: faker.string.uuid(),
                        username: faker.internet.userName(),
                        hashedPassword: faker.internet.password(),
                        isAdmin: faker.datatype.boolean(),
                });
        }

        console.log("Seed start");
        await db.insert(user).values(data);
        console.log("Seed done");
};

main();