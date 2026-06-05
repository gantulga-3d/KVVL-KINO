-- Күүл Кино — Supabase хүснэгтүүд
-- Supabase dashboard > SQL Editor дээр ажиллуулна уу

-- 1. Movies хүснэгт
create table if not exists movies (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  year        integer,
  duration    integer,
  genre       text,
  rating      text,
  youtube_id  text,
  poster_url  text,
  description text,
  created_at  timestamptz default now()
);

-- 2. Tokens хүснэгт
create table if not exists tokens (
  id          uuid primary key default gen_random_uuid(),
  code        text unique not null,
  type        text not null default 'single',  -- 'single' | 'full'
  movie_id    uuid references movies(id) on delete set null,
  used        boolean not null default false,
  used_at     timestamptz,
  fingerprint text,
  created_at  timestamptz default now()
);

-- 3. Row Level Security
alter table movies enable row level security;
alter table tokens enable row level security;

-- Movies: бүгд унших боломжтой
create policy "movies_read" on movies for select using (true);
-- Movies: зөвхөн service role бичих (admin)
create policy "movies_insert" on movies for insert with check (true);
create policy "movies_update" on movies for update using (true);
create policy "movies_delete" on movies for delete using (true);

-- Tokens: бүгд унших, шинэчлэх боломжтой (token validation)
create policy "tokens_read"   on tokens for select using (true);
create policy "tokens_update" on tokens for update using (true);
create policy "tokens_insert" on tokens for insert with check (true);
create policy "tokens_delete" on tokens for delete using (true);

-- 4. Индекс
create index if not exists idx_tokens_code    on tokens(code);
create index if not exists idx_tokens_movie   on tokens(movie_id);
create index if not exists idx_movies_created on movies(created_at desc);
