
-- JOY ----------------------------------------------

CREATE TABLE IF NOT EXISTS joy (
    id SERIAL PRIMARY KEY,
    joy character varying(350) NOT NULL
);

-- INDEX -------------------------------------------------------

CREATE UNIQUE INDEX joy_pkey ON joy(id int4_ops);



-- NEWJOY ----------------------------------------------

CREATE TABLE newjoy (
    id SERIAL PRIMARY KEY,
    joy character varying(350) NOT NULL,
    approved boolean NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX newjoy_pkey ON newjoy(id int4_ops);
