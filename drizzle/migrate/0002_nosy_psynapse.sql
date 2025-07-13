ALTER TABLE "order_table" ADD COLUMN "package_weight" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "order_table" ADD COLUMN "tracking_number" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "order_table" ADD COLUMN "payment_method" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "order_table" DROP COLUMN "parckage_weight";--> statement-breakpoint
ALTER TABLE "order_table" DROP COLUMN "tacking_number";