-- Run this in your Supabase SQL Editor (dashboard → SQL Editor → New Query)
-- This creates the table that stores every contact form submission

create table if not exists contact_messages (
  id          bigint generated always as identity primary key,
  name        text not null,
  email       text not null,
  subject     text,
  message     text not null,
  created_at  timestamptz default now()
);

-- Allow anonymous inserts (your visitors don't log in)
alter table contact_messages enable row level security;

create policy "Allow anonymous inserts"
  on contact_messages for insert
  with check (true);

-- Optional: only you (authenticated) can read messages
create policy "Allow authenticated reads"
  on contact_messages for select
  using (auth.role() = 'authenticated');
