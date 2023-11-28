-- Creates the user user_0d_1 with all privileges.
CREATE USER
    IF NOT EXISTS 'user_0d_1'@'localhost'
    IDENTIFIED BY 'user_0d_1_pwd';
-- Grants for user_0d_1@localhost
GRANT ALL PRIVILEGES
   ON *.*
   TO 'user_0d_1'@'localhost';
