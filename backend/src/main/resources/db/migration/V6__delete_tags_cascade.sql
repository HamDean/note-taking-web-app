alter table note_tags
drop foreign key FK8babdwu6uqiu4rdkeuy8dkna0;

alter table note_tags
    add constraint FK8babdwu6uqiu4rdkeuy8dkna0
        foreign key (tag_id) references tags (id)
            on delete cascade;

