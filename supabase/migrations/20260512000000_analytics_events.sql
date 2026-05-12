-- Analytics events for Resume/Portfolio site
CREATE TABLE IF NOT EXISTS public.analytics_events (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id  TEXT        NOT NULL,
  event_type  TEXT        NOT NULL,
  section     TEXT,
  metadata    JSONB       DEFAULT '{}'::jsonb,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- No auth users on public portfolio — service role handles all writes via Edge Function
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE INDEX ON public.analytics_events(created_at DESC);
CREATE INDEX ON public.analytics_events(event_type);
CREATE INDEX ON public.analytics_events(session_id);
