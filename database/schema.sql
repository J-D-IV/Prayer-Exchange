
/******************************* Joy Table ************************************/


-- JOY ----------------------------------------------

CREATE TABLE IF NOT EXISTS joy (
    id SERIAL PRIMARY KEY,
    joy character varying(350) NOT NULL
);

-- INDEX -------------------------------------------------------

CREATE UNIQUE INDEX joy_pkey ON joy(id int4_ops);





/****************************** New Joy Table ***********************************/


-- NEWJOY ----------------------------------------------

CREATE TABLE newjoy (
    id SERIAL PRIMARY KEY,
    joy character varying(350) NOT NULL,
    approved boolean NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX newjoy_pkey ON newjoy(id int4_ops);






/******************************* Users Table ************************************/


-- USERS  ----------------------------------------------

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname character varying(250) NOT NULL,
    lastname character varying(250) NOT NULL,
    email character varying(250) NOT NULL,
    password character varying(350) NOT NULL,
    token character varying(350)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX users_pkey ON users(id int4_ops);
