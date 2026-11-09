CREATE TABLE orders (id uuid PRIMARY KEY, cart_id uuid NOT NULL REFERENCES carts(id), total_cents integer NOT NULL);
