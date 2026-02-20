export const sarahSteps = [
  { action: "Opens TravlTeam", detail: "Sees My Trips screen. Empty state: 'Plan your first trip' with Find Tournament + Create Custom options", icon: "📱" },
  { action: "Taps + button (FAB)", detail: "TripBuilder opens. Searches 'Dallas Cup' — tournament auto-fills name, dates, location, sport", icon: "📋" },
  { action: "Searches lodging near venue", detail: "VenueSearch: Google Places results with sport-specific filters — Pool, Bus Parking, Early Breakfast, Team Rates", icon: "🔎" },
  { action: "Toggles map and list view", detail: "Blue hotel markers + purple restaurant markers + gold tournament marker. Distance from venue shown.", icon: "🗺️" },
  { action: "Adds Hampton Inn to trip", detail: "Bottom sheet: select date, add note 'Call front desk for team rate — mention Dallas Cup'. Status: Suggested.", icon: "💾" },
  { action: "Adds dinner restaurant", detail: "Foursquare-powered search. Filters: Group Friendly, Kid Friendly. Adds with meal tag: Dinner, 6:00 PM.", icon: "🍽️" },
  { action: "Views day-by-day itinerary", detail: "TripDetail: day tabs (FRI/SAT/SUN), weather per day, quick stats (1 hotel, 4 meals, 8 going)", icon: "📅" },
  { action: "Invites the team", detail: "InviteMembers: copies share code, texts to parent group chat. RSVPRing shows 0/12 confirmed.", icon: "🔗" },
];

export const marcusSteps = [
  { action: "Gets share code in group text", detail: "Opens TravlTeam app, enters share code on Trips screen", icon: "📱" },
  { action: "Joins trip instantly", detail: "Auto-added as member with 'pending' RSVP. Sees Sarah's full itinerary.", icon: "🤝" },
  { action: "RSVPs 'Going'", detail: "Taps Going button. RSVPRing updates: 1 of 12 confirmed. Haptic feedback.", icon: "✅" },
  { action: "Browses the itinerary", detail: "Sees Hampton Inn (Suggested), restaurants by day. Swipes items for options.", icon: "👀" },
  { action: "Suggests Fairfield Inn", detail: "Opens VenueSearch, finds it's $20 cheaper. Adds with note: 'Pool is bigger, free parking'", icon: "🏨" },
  { action: "Creates his own trip", detail: "Next tournament: taps FAB → creates 'State Cup Phoenix' → invites his carpool group → cycle repeats.", icon: "🔄" },
];
