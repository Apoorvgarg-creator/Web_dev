# Preparing a database


```sql
create database shopdb;
create user shopper identified by 'Shoppass@24'; 
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;
Flush privileges;
```
