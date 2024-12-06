CREATE TABLE "todos" (
	"id" SERIAL PRIMARY KEY,
	"text" TEXT,
	"isComplete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todos"
  ("text")
  VALUES 
  ('Build a CRUD app'),
  ('Make my app look nice');
  
ALTER TABLE "todos" ADD "completedAt" TIMESTAMPTZ;

SELECT * FROM "todos";

UPDATE "todos" SET "isComplete" = true WHERE "id" = 23;
