-- Lists all privileges of the users user_0d_1 and user_0d_2 root users
SELECT CONCAT('Grants for ', user, '@', host) AS 'User and Host', 
       Grant_priv, Super_priv, Create_user_priv, Process_priv, 
       Reload_priv, Shutdown_priv, Show_db_priv, Alter_priv, 
       Create_priv, Drop_priv, Index_priv, References_priv, 
       Select_priv, Insert_priv, Update_priv, Delete_priv, 
       Create_routine_priv, Alter_routine_priv, Execute_priv, 
       Event_priv, Trigger_priv, Lock_tables_priv
FROM mysql.user
WHERE user IN ('user_0d_1', 'user_0d_2') AND host = 'localhost';

-- Lists SELECT and INSERT privileges of user_0d_2 on user_2_db database
SHOW GRANTS FOR 'user_0d_2'@'localhost' ON user_2_db;
