CREATE TABLE scavengerhunt_findings (
 finding_id SERIAL PRIMARY KEY,
 item_id SERIAL references scavengerhunt_items(item_id),
 "finder" VARCHAR (100) NOT NULL,
 "comments" VARCHAR (500),
 "picture" bytea,
 "date" timestamp NOT NULL
);