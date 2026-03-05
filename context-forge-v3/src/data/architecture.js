import { C } from "../styles/tokens";

export const searchFlow = [
  { step: "User taps 'Find Hotels' or 'Add Meal'", icon: "🔎", detail: "Context-aware: lodging or food search with sport-specific defaults" },
  { step: "Check Supabase venue cache", icon: "💾", detail: "TTL-based cache hit avoids API calls entirely" },
  { step: "Parallel API calls: Google Places + Foursquare", icon: "⚡", detail: "Google for lodging, Foursquare for food (primary providers)" },
  { step: "Sport-specific filters applied", icon: "🏟️", detail: "Pool, bus parking, early breakfast, team rates, group-friendly" },
  { step: "Distance calculated from tournament venue", icon: "📏", detail: "Haversine formula — sorted by proximity, not user location" },
  { step: "Map + list view with filter chips", icon: "🗺️", detail: "Custom markers (blue=hotel, purple=food, gold=venue), toggle views" },
  { step: "Add to trip via bottom sheet", icon: "💾", detail: "Select trip, date, meal type, notes → SQLite + sync queue" },
];

export const dataModels = [
  { name: "trips (local SQLite)", fields: "id, name, creator_id, location_name, lat/lng, tournament_name, sport, dates, team_size, share_code, visibility, sync_status", color: C.blue },
  { name: "itinerary_items (local)", fields: "id, trip_id, venue_id, scheduled_date, scheduled_time, meal_tag, status (suggested|booked), notes, distance_miles", color: C.purple },
  { name: "venues (local)", fields: "id, name, venue_type (lodging|food), address, lat/lng, rating, price_level, amenity booleans (pool, bus_parking, breakfast...)", color: C.cyan },
  { name: "trip_members (local)", fields: "id, trip_id, user_id, name, email, avatar, role (organizer|member), rsvp_status (going|maybe|cant|pending)", color: C.green },
  { name: "sync_queue (local)", fields: "id, entity_type, entity_id, action (create|update|delete), payload, retry_count, next_retry_at", color: C.orange },
  { name: "plans (Supabase cloud)", fields: "Maps to trips. id, name, creator_id, location, sport, dates, share_code, visibility", color: C.blue },
  { name: "plan_items (Supabase)", fields: "Maps to itinerary_items. day_number, meal_type, status (suggested|shortlisted|booked)", color: C.purple },
  { name: "plan_members (Supabase)", fields: "Maps to trip_members. role (organizer|member|viewer), rsvp (going|maybe|not_going|pending)", color: C.green },
  { name: "users (Supabase)", fields: "id, email, name, avatar, role, sports preferences, team info", color: C.amber },
];

export const syncArchitecture = [
  { label: "UI Layer", desc: "16 screens, 30+ components", color: C.blue },
  { label: "Zustand Stores", desc: "tripStore, userStore, syncStore", color: C.purple },
  { label: "SQLite Database", desc: "Local-first, 5 data tables + sync_queue", color: C.cyan },
  { label: "Sync Service", desc: "Queue changes, retry with backoff, resolve conflicts", color: C.orange },
  { label: "Hono Backend", desc: "REST API with Zod validation", color: C.amber },
  { label: "Supabase Cloud", desc: "PostgreSQL + RLS + Realtime", color: C.green },
];
