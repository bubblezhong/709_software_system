## Oracle 操作

登录服务器

```
$ ssh -o ServerAliveInterval=60 root@114.215.30.227
```

切换至 oracle 用户

```bash
$ su oracle
```

载入 .bash_profile

```bash
$ source ~/.bash_profile
```

重启 oracle 

```bash
$ lsnrctl start
$ sqlplus / as sysdba
SQL> startup
```

停止 ORACLE

```SQL
SQL> shutdown immediate
```



