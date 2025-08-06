CREATE DATABASE Boutique
 USE Boutique
 CREATE TABLE categories(
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(25)
 ) 

CREATE TABLE products(
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(25),
    category_id INT,
    price FLOAT,
    stock BOOLEAN,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
 ) 

 CREATE TABLE customers(
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    email VARCHAR(25),
    city VARCHAR(25),
    country VARCHAR(25)
 ) 


CREATE TABLE orders(
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    status VARCHAR(25),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
 ) 

CREATE TABLE orders_items(
    orde_itemr_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
 )

 CREATE TABLE payments(
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    payment_date DATE,
    amount FLOAT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
 )  

INSERT INTO categories (category_name) VALUES
('Informatique'), ('Maison'), ('Mode'), ('Livres');

INSERT INTO products (product_name, category_id, price, stock) VALUES
('Ordinateur Portable', 1, 1500.00, 10),
('Clavier', 1, 50.00, 100),
('Chaise de bureau', 2, 85.00, 25),
('T-shirt', 3, 20.00, 200),
('Roman Policier', 4, 15.00, 150);

INSERT INTO customers (first_name, last_name, email, city, country) VALUES
('Jean', 'Dupont', 'jean.dupont@email.com', 'Paris', 'France'),
('Marie', 'Martin', 'marie.martin@email.com', 'Lyon', 'France'),
('Pierre', 'Bernard', 'pierre.bernard@email.com', 'Marseille', 'France'),
('Sophie', 'Petit', 'sophie.petit@email.com', 'Toulouse', 'France'),
('Thomas', 'Robert', 'thomas.robert@email.com', 'Nice', 'France'),
('Laura', 'Richard', 'laura.richard@email.com', 'Bruxelles', 'Belgique'),
('Marc', 'Durand', 'marc.durand@email.com', 'Genève', 'Suisse');

-- Order inserts
INSERT INTO orders (customer_id, order_date, status) VALUES
(1, '2023-01-15', 'Livré'),
(2, '2023-01-16', 'En cours'),
(3, '2023-01-17', 'En attente'),
(4, '2023-01-18', 'Livré'),
(5, '2023-01-19', 'Annulé'),
(6, '2023-01-20', 'En cours'),
(1, '2023-01-21', 'En attente'),
(3, '2023-01-22', 'Livré');

-- Order items inserts
INSERT INTO orders_items (order_id, product_id, quantity) VALUES
(1, 1, 1),
(1, 3, 2),
(3, 5, 3),
(2, 4, 1),
(3, 2, 1),
(3, 4, 2),
(4, 3, 1),
(5, 3, 1),
(6, 1, 1),
(6, 2, 1),
(7, 5, 2),
(2, 4, 1),
(4, 1, 1);

-- Payment inserts
INSERT INTO payments (order_id, payment_date, amount) VALUES
(1, '2023-01-15', 1670.00),
(2, '2023-01-16', 79.00),
(4, '2023-01-18', 65.00),
(6, '2023-01-20', 1550.00),
(8, '2023-01-22', 85.00);

SELECT CONCAT(price, product_name) AS PrixProduit FROM products 

SELECT DISTINCT email FROM customers

SELECT * FROM products WHERE price< 50

SELECT * FROM customers WHERE city = "Casablanca" OR "Rabat"

SELECT * FROM products WHERE product_name LIKE "bureau"

SELECT * FROM orders WHERE status NOT IN("Annulé") AND customer_id IN (SELECT customer_id FROM customers WHERE first_name = "Ahmed") 

SELECT * FROM products WHERE stock BETWEEN 10 AND 100

SELECT * FROM customers WHERE country IN ('Maroc' ,'Algérie')

SELECT * FROM products WHERE category_id NOT IN (SELECT category_id FROM categories WHERE category_name = "Mode")

SELECT * FROM products ORDER BY price DESC LIMIT 3

SELECT * FROM customers ORDER BY customer_id DESC LIMIT 3

SELECT COUNT(order_id) AS Total, CONCAT(c.last_name, ' ', c.first_name) AS customer_name
FROM customers c, orders o
WHERE c.customer_id = o.customer_id
GROUP BY c.customer_id


