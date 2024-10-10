import {boolean, pgTable, pgTableCreator, uuid, varchar } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name)=>`heartcodeTraining_${name}`)

export const usersTable = createTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  iseducated: boolean().notNull(),
});