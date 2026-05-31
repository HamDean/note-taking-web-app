create table tags
(
    id      int auto_increment
        primary key,
    user_id varchar(255) not null,
    name    varchar(255) not null,
    created_at datetime default (current_timestamp),
    constraint tags_users_id_fk
        foreign key (user_id) references users (id)
);