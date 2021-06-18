CREATE TABLE recipes (
   "id" SERIAL PRIMARY KEY,
   "name" VARCHAR (255) NOT NULL,
   "desc" VARCHAR (5000),
   "ingredients" VARCHAR (5000),
   "directions" VARCHAR (5000),
   "tips" VARCHAR (5000),
   "variations" VARCHAR (5000),
   "servings" INT NOT NULL,
   "prepTime" INT NOT NULL,
   "cookTime" INT NOT NULL,
   "linkUrl" VARCHAR (500),
   "picUrl" VARCHAR (500),
   "tags" VARCHAR (500)
);