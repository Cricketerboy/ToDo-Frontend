// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kuqrsvezupcffzmxwcsm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1cXJzdmV6dXBjZmZ6bXh3Y3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMzg0NDIsImV4cCI6MjAzNzkxNDQ0Mn0.MwVc7837W2puNoHhPt0LzC1FfkWurnVMNDc9yrPbv74';
export const supabase = createClient(supabaseUrl, supabaseKey);
