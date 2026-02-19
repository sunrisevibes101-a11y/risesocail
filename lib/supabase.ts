import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || ''; 
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''; 
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Browser client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server client with service role (use in server actions/routes)
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          avatar_url: string | null;
          plan: 'free' | 'pro' | 'lifetime';
          xp: number;
          level: number;
          streak_count: number;
          last_checkin: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          plan?: 'free' | 'pro' | 'lifetime';
          xp?: number;
          level?: number;
          streak_count?: number;
          last_checkin?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          avatar_url?: string | null;
          plan?: 'free' | 'pro' | 'lifetime';
          xp?: number;
          level?: number;
          streak_count?: number;
          last_checkin?: string | null;
          created_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          completed: boolean;
          task_date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          completed?: boolean;
          task_date: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          completed?: boolean;
          task_date?: string;
          created_at?: string;
        };
      };
      xp_events: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          reason: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          amount: number;
          reason: string;
          created_at: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          amount?: number;
          reason?: string;
          created_at?: string;
        };
      };
      community_posts: {
        Row: {
          id: string;
          user_id: string;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          content?: string;
          created_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
};
