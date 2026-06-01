alter table notes
    modify id varchar(255) default (UUID());

alter table users
    modify id varchar(255) default (uuid());

