create table users
(
    id         varchar(255)                         not null
        primary key,
    email      varchar(255)                         not null,
    password   varchar(255)                         not null,
    created_at datetime default (current_timestamp) not null,
    updated_at datetime default (current_timestamp) null
);

create table notes
(
    id          varchar(255)                         not null
        primary key,
    user_id     varchar(255)                         not null,
    title       varchar(255)                         not null,
    content     longtext                             null,
    is_archived boolean                              null,
    created_at  datetime default (current_timestamp) not null,
    updated_at  datetime default (current_timestamp) null,
    constraint notes_users_id_fk
        foreign key (user_id) references users (id)
);

