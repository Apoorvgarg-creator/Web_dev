# Write on terminal
 
```shell
$ brew services start mysql
```

# log in to mysql

```shell
$ mysql -u root -p
```

# create database

```sql
CREATE DATABASE mytestdb;
```

# Create User 

```sql
CREATE USER myuser identified BY 'Mypass@24';
``` 

# grant privileges

```sql
GRANT ALL privileges ON mytestdb.* TO myuser;
```
```sql
FLUSH privileges;
```

# Login using the new user

```shell
$ mysql -u myuser -p
Enter Password : Mypass@24
```
