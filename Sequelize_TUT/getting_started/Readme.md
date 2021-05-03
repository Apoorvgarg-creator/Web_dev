# DATABASES : Sequelize Basics

### Setup Database
Open Mysql shell
```shell
mysql -u root -p
```

Inside mysql shell , create database, user and grant rights

```sql
CREATE DATABASE sampledb1;
```

```sql
CREATE user sampleuser1 identified  by 'SamplePass@1';
```

```sql
GRANT ALL PRIVILEGES ON sampledb1.* to sampleuser1;
```

### getting started

Then go to the working directory
```shell
npm install sequelize mysql2
```
