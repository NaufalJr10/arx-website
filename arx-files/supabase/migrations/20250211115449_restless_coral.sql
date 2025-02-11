/*
  # Initial Schema Setup for ARX Platform

  1. Authentication
    - Using Supabase Auth for user management
    
  2. New Tables
    - users_profile
      - Extended user profile information
    - emergency_contacts
      - Emergency contact information for users
    - counseling_sessions
      - Counseling session records
    - chat_messages
      - Encrypted chat messages
    - resources
      - Safety and support resources
    - progress_tracking
      - User progress and goals
    - community_posts
      - Community forum posts
    - support_circles
      - Support group information
    
  3. Security
    - RLS policies for all tables
    - Encryption for sensitive data
*/

-- Users Profile
CREATE TABLE users_profile (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  display_name text,
  anonymous_mode boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON users_profile FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users_profile FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Emergency Contacts
CREATE TABLE emergency_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  relationship text,
  is_primary boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE emergency_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their emergency contacts"
  ON emergency_contacts FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Counseling Sessions
CREATE TABLE counseling_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  counselor_id uuid REFERENCES auth.users(id) NOT NULL,
  scheduled_at timestamptz NOT NULL,
  status text DEFAULT 'scheduled',
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE counseling_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their sessions"
  ON counseling_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() = counselor_id);

-- Chat Messages
CREATE TABLE chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES counseling_sessions(id) NOT NULL,
  sender_id uuid REFERENCES auth.users(id) NOT NULL,
  encrypted_content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can access their chat messages"
  ON chat_messages FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM counseling_sessions
      WHERE id = chat_messages.session_id
      AND (user_id = auth.uid() OR counselor_id = auth.uid())
    )
  );

-- Resources
CREATE TABLE resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  is_public boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read public resources"
  ON resources FOR SELECT
  TO authenticated
  USING (is_public = true);

-- Progress Tracking
CREATE TABLE progress_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  goal_type text NOT NULL,
  goal_description text NOT NULL,
  target_date date,
  status text DEFAULT 'in_progress',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE progress_tracking ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their progress"
  ON progress_tracking FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Community Posts
CREATE TABLE community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  is_anonymous boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all posts"
  ON community_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage their posts"
  ON community_posts FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Support Circles
CREATE TABLE support_circles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  created_by uuid REFERENCES auth.users(id) NOT NULL,
  is_private boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE support_circles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view public circles"
  ON support_circles FOR SELECT
  TO authenticated
  USING (is_private = false OR created_by = auth.uid());

-- Support Circle Members
CREATE TABLE circle_members (
  circle_id uuid REFERENCES support_circles(id) NOT NULL,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  joined_at timestamptz DEFAULT now(),
  PRIMARY KEY (circle_id, user_id)
);

ALTER TABLE circle_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view circle members"
  ON circle_members FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM support_circles
      WHERE id = circle_members.circle_id
      AND (is_private = false OR created_by = auth.uid())
    )
  );