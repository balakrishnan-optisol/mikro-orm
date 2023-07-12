import { Migration } from '@mikro-orm/migrations';

export class Migration20230712145843_create_user_table extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" bigserial primary key, "created_at" timestamp not null, "updated_at" timestamp not null, "first_name" varchar not null default \'\', "last_name" varchar not null default \'\', "email" varchar not null default \'\');'
    );
    this.addSql('create index "first_name_index" on "user" ("first_name");');
    this.addSql('create index "last_name_index" on "user" ("last_name");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }
}
