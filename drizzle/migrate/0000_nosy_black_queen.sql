CREATE TABLE "admin_table" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "admin_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(25) NOT NULL,
	"email" varchar(30) NOT NULL,
	"password" varchar(250) NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL,
	CONSTRAINT "admin_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "order_table" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "order_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phone" varchar(100) NOT NULL,
	"address" varchar(100) NOT NULL,
	"country" varchar(100) NOT NULL,
	"refund" boolean DEFAULT false NOT NULL,
	"status" varchar DEFAULT 'Delivering' NOT NULL,
	"amount" integer DEFAULT 0 NOT NULL,
	"parkage" integer DEFAULT 0 NOT NULL,
	"sending_country" varchar(50) NOT NULL,
	"locations" jsonb NOT NULL,
	"tacking_number" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "order_table_email_unique" UNIQUE("email")
);
