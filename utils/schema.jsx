import { integer, numeric, table, serial, varchar } from "drizzle-orm/pg-core";

//creating budget table
export const userBudget = table("budgets", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: varchar("amount").notNull(),
  Icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull(),
});

//income table
export const userIncome = table("incomes", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: varchar("amount").notNull(),
  Icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull(),
});

//expensetable
export const userExpense = table("expenses", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: varchar("amount").notNull(),
  budgetId: integer("budget").references(() => Budgets.id),
  createdBy: varchar("createdBy").notNull(),
});
