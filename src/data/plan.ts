export interface WorkoutDay {
  day: string;
  type: 'Long' | 'Tempo' | 'Intervals' | 'Easy' | 'Recovery' | 'Rest' | 'Strength';
  title: string;
  distanceKm: number;
  duration: string;
  description: string;
}

export const week: WorkoutDay[] = [
  { day: 'Mon', type: 'Easy', title: 'Easy + 6x100m Strides', distanceKm: 8, duration: '45m', description: 'Conversational pace. Strides at the end to keep legs sharp.' },
  { day: 'Tue', type: 'Intervals', title: 'VO2 — 6x800m @ 5K pace', distanceKm: 10.4, duration: '52m', description: '2 km warmup → 6x800m (400m float) → 2 km cooldown.' },
  { day: 'Wed', type: 'Easy', title: 'Easy Aerobic', distanceKm: 10, duration: '53m', description: 'Zone 2. Smooth, controlled cadence.' },
  { day: 'Thu', type: 'Tempo', title: 'Tempo — 4x2 km @ threshold', distanceKm: 14, duration: '67m', description: '4x2 km @ 1-hour race pace. 90s rest between blocks.' },
  { day: 'Fri', type: 'Recovery', title: 'Recovery Shakeout', distanceKm: 6, duration: '35m', description: 'Trail surface preferred. HR cap 140.' },
  { day: 'Sat', type: 'Long', title: 'Long — Coastal Loop', distanceKm: 24, duration: '2:00', description: 'Steady aerobic effort. Practice race-day fueling.' },
  { day: 'Sun', type: 'Rest', title: 'Rest + Mobility', distanceKm: 0, duration: '—', description: '45 min walk + mobility flow. Full reset.' },
];

export interface MealPlanItem {
  meal: string;
  options: string[];
  macros: string;
}

export const mealPlan: MealPlanItem[] = [
  {
    meal: 'Breakfast',
    options: [
      'Overnight oats + whey + berries',
      'Eggs, sourdough, avocado',
      'Smoothie bowl + chia',
    ],
    macros: '~480 kcal · 30P / 60C / 12F',
  },
  {
    meal: 'Pre-run',
    options: [
      'Banana + honey',
      'Rice cakes + jam',
      'Toast + peanut butter',
    ],
    macros: '~220 kcal · 6P / 42C / 4F',
  },
  {
    meal: 'Lunch',
    options: [
      'Chicken rice bowl + edamame',
      'Turkey wrap + apple',
      'Tuna salad on rye',
    ],
    macros: '~620 kcal · 45P / 70C / 16F',
  },
  {
    meal: 'Snack',
    options: [
      'Greek yogurt + granola',
      'Protein bar + dates',
      'Cottage cheese + pineapple',
    ],
    macros: '~340 kcal · 28P / 38C / 10F',
  },
  {
    meal: 'Dinner',
    options: [
      'Salmon, jasmine rice, broccoli',
      'Sirloin, sweet potato, asparagus',
      'Turkey meatballs, pasta, marinara',
    ],
    macros: '~720 kcal · 46P / 84C / 18F',
  },
  {
    meal: 'Evening',
    options: [
      'Casein + peanut butter',
      'Tart cherry juice + cashews',
      'Greek yogurt + honey + walnuts',
    ],
    macros: '~280 kcal · 22P / 28C / 12F',
  },
];

export interface DailyTarget {
  label: string;
  value: string;
  hint: string;
}

export const dailyTargets: DailyTarget[] = [
  { label: 'Calories', value: '2,900', hint: 'training day average' },
  { label: 'Protein', value: '175g', hint: '~2.4 g/kg body mass' },
  { label: 'Carbs', value: '420g', hint: 'higher on long-run days' },
  { label: 'Fat', value: '80g', hint: 'consistent across the week' },
  { label: 'Sleep', value: '8.0h', hint: 'lights out by 22:00' },
  { label: 'Hydration', value: '3.5L', hint: '+500ml per training hour' },
];
