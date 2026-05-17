export interface MacroSplit {
  protein: number; // grams
  carbs: number;
  fat: number;
}

export interface Meal {
  name: string;
  time: string;
  kcal: number;
  macros: MacroSplit;
  notes?: string;
}

export interface SplitKM {
  km: number;
  pace: string; // mm:ss / km
  hr: number;
}

export interface DailyLog {
  slug: string;
  date: string; // ISO
  weekday: string;
  // Run
  run: {
    title: string;
    distanceKm: number;
    durationMin: number;
    pace: string; // mm:ss / km
    avgHr: number;
    maxHr: number;
    elevationM: number;
    perceivedEffort: number; // 1-10
    surface: string;
    splits: SplitKM[];
    route: string;
    weather: string;
  };
  // Nutrition
  totalKcal: number;
  targetKcal: number;
  macros: MacroSplit;
  macroTargets: MacroSplit;
  meals: Meal[];
  // Recovery
  sleepHours: number;
  hydrationL: number;
  bodyMassKg: number;
  rhrBpm: number;
  notes: string;
}

export const logs: DailyLog[] = [
  {
    slug: '2026-05-16',
    date: '2026-05-16',
    weekday: 'Sat',
    run: {
      title: 'Long Run — Coastal Loop',
      distanceKm: 24.2,
      durationMin: 119,
      pace: '4:55',
      avgHr: 152,
      maxHr: 168,
      elevationM: 184,
      perceivedEffort: 7,
      surface: 'Asphalt',
      route: 'Mission Bay → Sunset Cliffs → Ocean Beach',
      weather: '63°F, marine layer, light NW wind',
      splits: [
        { km: 1, pace: '5:10', hr: 138 }, { km: 2, pace: '5:02', hr: 145 },
        { km: 3, pace: '4:58', hr: 148 }, { km: 4, pace: '4:55', hr: 150 },
        { km: 5, pace: '4:54', hr: 151 }, { km: 6, pace: '4:52', hr: 152 },
        { km: 7, pace: '4:51', hr: 153 }, { km: 8, pace: '4:50', hr: 154 },
        { km: 9, pace: '4:53', hr: 155 }, { km: 10, pace: '4:55', hr: 156 },
        { km: 11, pace: '4:56', hr: 156 }, { km: 12, pace: '4:57', hr: 157 },
        { km: 13, pace: '4:54', hr: 158 }, { km: 14, pace: '4:52', hr: 159 },
        { km: 15, pace: '4:51', hr: 160 }, { km: 16, pace: '4:50', hr: 161 },
        { km: 17, pace: '4:53', hr: 162 }, { km: 18, pace: '4:55', hr: 163 },
        { km: 19, pace: '4:58', hr: 164 }, { km: 20, pace: '5:00', hr: 165 },
        { km: 21, pace: '4:58', hr: 166 }, { km: 22, pace: '4:55', hr: 167 },
        { km: 23, pace: '4:51', hr: 168 }, { km: 24, pace: '4:42', hr: 168 },
      ],
    },
    totalKcal: 3180,
    targetKcal: 3200,
    macros: { protein: 168, carbs: 452, fat: 84 },
    macroTargets: { protein: 175, carbs: 460, fat: 85 },
    meals: [
      { name: 'Pre-run oats + banana + honey', time: '05:40', kcal: 420, macros: { protein: 12, carbs: 84, fat: 6 }, notes: '90 min before start' },
      { name: 'Recovery shake', time: '08:15', kcal: 380, macros: { protein: 40, carbs: 48, fat: 6 } },
      { name: 'Eggs, sweet potato hash, sourdough', time: '09:30', kcal: 720, macros: { protein: 38, carbs: 78, fat: 28 } },
      { name: 'Greek yogurt + berries + granola', time: '12:45', kcal: 410, macros: { protein: 28, carbs: 52, fat: 10 } },
      { name: 'Chicken burrito bowl', time: '15:00', kcal: 780, macros: { protein: 52, carbs: 92, fat: 18 } },
      { name: 'Salmon, jasmine rice, broccoli', time: '19:15', kcal: 620, macros: { protein: 42, carbs: 68, fat: 14 } },
      { name: 'Dark chocolate + almond milk', time: '21:30', kcal: 250, macros: { protein: 6, carbs: 30, fat: 12 } },
    ],
    sleepHours: 8.1,
    hydrationL: 4.2,
    bodyMassKg: 71.4,
    rhrBpm: 48,
    notes: 'Felt locked in by km 6. Negative split the back half — last 6 km the strongest of the block.',
  },
  {
    slug: '2026-05-15',
    date: '2026-05-15',
    weekday: 'Fri',
    run: {
      title: 'Recovery Shakeout',
      distanceKm: 6.0,
      durationMin: 35,
      pace: '5:50',
      avgHr: 132,
      maxHr: 142,
      elevationM: 22,
      perceivedEffort: 3,
      surface: 'Crushed gravel',
      route: 'River trail out-and-back',
      weather: '58°F, overcast',
      splits: [
        { km: 1, pace: '6:05', hr: 122 }, { km: 2, pace: '5:55', hr: 130 },
        { km: 3, pace: '5:48', hr: 134 }, { km: 4, pace: '5:46', hr: 135 },
        { km: 5, pace: '5:45', hr: 136 }, { km: 6, pace: '5:42', hr: 138 },
      ],
    },
    totalKcal: 2640,
    targetKcal: 2700,
    macros: { protein: 162, carbs: 312, fat: 78 },
    macroTargets: { protein: 165, carbs: 320, fat: 80 },
    meals: [
      { name: 'Black coffee + 2 eggs on toast', time: '07:20', kcal: 380, macros: { protein: 22, carbs: 32, fat: 16 } },
      { name: 'Cottage cheese + pineapple', time: '10:30', kcal: 280, macros: { protein: 26, carbs: 28, fat: 6 } },
      { name: 'Turkey wrap + apple', time: '13:00', kcal: 620, macros: { protein: 42, carbs: 72, fat: 16 } },
      { name: 'Protein shake + rice cakes', time: '16:45', kcal: 360, macros: { protein: 34, carbs: 50, fat: 5 } },
      { name: 'Sirloin, mashed potatoes, asparagus', time: '19:00', kcal: 740, macros: { protein: 48, carbs: 78, fat: 22 } },
      { name: 'Casein + peanut butter', time: '21:45', kcal: 260, macros: { protein: 30, carbs: 12, fat: 13 } },
    ],
    sleepHours: 7.6,
    hydrationL: 3.1,
    bodyMassKg: 71.6,
    rhrBpm: 50,
    notes: 'Legs ticking over. Saving the gas for tomorrow.',
  },
  {
    slug: '2026-05-14',
    date: '2026-05-14',
    weekday: 'Thu',
    run: {
      title: 'Tempo — 4x2 km @ threshold',
      distanceKm: 14.0,
      durationMin: 67,
      pace: '4:47',
      avgHr: 160,
      maxHr: 174,
      elevationM: 58,
      perceivedEffort: 8,
      surface: 'Track + asphalt',
      route: 'Warmup → tempo blocks → cooldown',
      weather: '61°F, calm',
      splits: [
        { km: 1, pace: '5:30', hr: 138 }, { km: 2, pace: '5:25', hr: 142 },
        { km: 3, pace: '4:18', hr: 165 }, { km: 4, pace: '4:16', hr: 168 },
        { km: 5, pace: '5:00', hr: 150 }, { km: 6, pace: '4:17', hr: 169 },
        { km: 7, pace: '4:18', hr: 170 }, { km: 8, pace: '5:02', hr: 152 },
        { km: 9, pace: '4:19', hr: 171 }, { km: 10, pace: '4:20', hr: 172 },
        { km: 11, pace: '5:05', hr: 155 }, { km: 12, pace: '4:18', hr: 173 },
        { km: 13, pace: '4:20', hr: 174 }, { km: 14, pace: '5:25', hr: 145 },
      ],
    },
    totalKcal: 2980,
    targetKcal: 3000,
    macros: { protein: 174, carbs: 408, fat: 78 },
    macroTargets: { protein: 175, carbs: 420, fat: 78 },
    meals: [
      { name: 'Oatmeal + whey + blueberries', time: '06:00', kcal: 460, macros: { protein: 36, carbs: 64, fat: 8 } },
      { name: 'Bagel + cream cheese + salmon', time: '10:00', kcal: 540, macros: { protein: 28, carbs: 62, fat: 18 } },
      { name: 'Chicken rice bowl + edamame', time: '13:30', kcal: 720, macros: { protein: 52, carbs: 88, fat: 14 } },
      { name: 'Protein bar + dates', time: '16:30', kcal: 320, macros: { protein: 18, carbs: 48, fat: 8 } },
      { name: 'Lean beef pasta + side salad', time: '19:30', kcal: 720, macros: { protein: 40, carbs: 96, fat: 20 } },
      { name: 'Tart cherry juice + cashews', time: '22:00', kcal: 220, macros: { protein: 6, carbs: 28, fat: 10 } },
    ],
    sleepHours: 7.4,
    hydrationL: 3.6,
    bodyMassKg: 71.5,
    rhrBpm: 49,
    notes: 'Threshold blocks felt repeatable. Cooldown HR dropped quickly — fitness is moving.',
  },
  {
    slug: '2026-05-13',
    date: '2026-05-13',
    weekday: 'Wed',
    run: {
      title: 'Easy Aerobic',
      distanceKm: 10.0,
      durationMin: 53,
      pace: '5:18',
      avgHr: 142,
      maxHr: 152,
      elevationM: 40,
      perceivedEffort: 4,
      surface: 'Asphalt',
      route: 'Neighborhood loops',
      weather: '64°F, sunny',
      splits: [
        { km: 1, pace: '5:30', hr: 132 }, { km: 2, pace: '5:24', hr: 138 },
        { km: 3, pace: '5:20', hr: 140 }, { km: 4, pace: '5:18', hr: 142 },
        { km: 5, pace: '5:16', hr: 144 }, { km: 6, pace: '5:15', hr: 145 },
        { km: 7, pace: '5:14', hr: 146 }, { km: 8, pace: '5:13', hr: 148 },
        { km: 9, pace: '5:12', hr: 149 }, { km: 10, pace: '5:08', hr: 152 },
      ],
    },
    totalKcal: 2720,
    targetKcal: 2750,
    macros: { protein: 168, carbs: 340, fat: 76 },
    macroTargets: { protein: 170, carbs: 345, fat: 78 },
    meals: [
      { name: 'Smoothie bowl + chia', time: '07:00', kcal: 520, macros: { protein: 32, carbs: 78, fat: 12 } },
      { name: 'Tuna salad on rye', time: '12:00', kcal: 480, macros: { protein: 38, carbs: 42, fat: 16 } },
      { name: 'Whey shake + banana', time: '15:30', kcal: 300, macros: { protein: 30, carbs: 38, fat: 4 } },
      { name: 'Grilled chicken, quinoa, peppers', time: '19:00', kcal: 720, macros: { protein: 48, carbs: 86, fat: 18 } },
      { name: 'Greek yogurt + honey + walnuts', time: '21:30', kcal: 380, macros: { protein: 20, carbs: 42, fat: 16 } },
      { name: 'Almonds + dried mango', time: '22:30', kcal: 320, macros: { protein: 8, carbs: 38, fat: 14 } },
    ],
    sleepHours: 8.0,
    hydrationL: 3.4,
    bodyMassKg: 71.5,
    rhrBpm: 47,
    notes: 'Sleep+HRV trending well. Body feels light.',
  },
  {
    slug: '2026-05-12',
    date: '2026-05-12',
    weekday: 'Tue',
    run: {
      title: 'VO2 Intervals — 6x800m',
      distanceKm: 10.4,
      durationMin: 52,
      pace: '5:00',
      avgHr: 158,
      maxHr: 178,
      elevationM: 12,
      perceivedEffort: 9,
      surface: 'Track',
      route: '6x800m @ 5K pace, 400m float',
      weather: '60°F, light breeze',
      splits: [
        { km: 1, pace: '5:35', hr: 138 }, { km: 2, pace: '5:30', hr: 142 },
        { km: 3, pace: '3:58', hr: 172 }, { km: 4, pace: '5:25', hr: 150 },
        { km: 5, pace: '3:56', hr: 174 }, { km: 6, pace: '5:20', hr: 152 },
        { km: 7, pace: '3:55', hr: 175 }, { km: 8, pace: '5:18', hr: 154 },
        { km: 9, pace: '3:54', hr: 177 }, { km: 10, pace: '5:48', hr: 145 },
      ],
    },
    totalKcal: 2910,
    targetKcal: 2950,
    macros: { protein: 172, carbs: 392, fat: 76 },
    macroTargets: { protein: 175, carbs: 400, fat: 78 },
    meals: [
      { name: 'Toast, peanut butter, banana', time: '06:30', kcal: 440, macros: { protein: 18, carbs: 64, fat: 14 } },
      { name: 'Recovery shake + bagel', time: '09:00', kcal: 540, macros: { protein: 38, carbs: 72, fat: 10 } },
      { name: 'Chicken pita + tabbouleh', time: '12:30', kcal: 620, macros: { protein: 44, carbs: 74, fat: 16 } },
      { name: 'Cottage cheese + crackers', time: '16:00', kcal: 320, macros: { protein: 32, carbs: 30, fat: 8 } },
      { name: 'Cod, basmati rice, green beans', time: '19:30', kcal: 660, macros: { protein: 40, carbs: 82, fat: 14 } },
      { name: 'Casein + dark chocolate', time: '22:00', kcal: 330, macros: { protein: 28, carbs: 30, fat: 14 } },
    ],
    sleepHours: 7.8,
    hydrationL: 3.8,
    bodyMassKg: 71.6,
    rhrBpm: 49,
    notes: 'All six reps under target. Last rep felt the strongest.',
  },
  {
    slug: '2026-05-11',
    date: '2026-05-11',
    weekday: 'Mon',
    run: {
      title: 'Easy + Strides',
      distanceKm: 8.0,
      durationMin: 44,
      pace: '5:30',
      avgHr: 138,
      maxHr: 168,
      elevationM: 28,
      perceivedEffort: 4,
      surface: 'Asphalt',
      route: 'Park loops + 6x100m strides',
      weather: '62°F, clear',
      splits: [
        { km: 1, pace: '5:40', hr: 130 }, { km: 2, pace: '5:35', hr: 134 },
        { km: 3, pace: '5:32', hr: 136 }, { km: 4, pace: '5:30', hr: 138 },
        { km: 5, pace: '5:28', hr: 140 }, { km: 6, pace: '5:26', hr: 142 },
        { km: 7, pace: '5:22', hr: 145 }, { km: 8, pace: '5:00', hr: 168 },
      ],
    },
    totalKcal: 2680,
    targetKcal: 2700,
    macros: { protein: 165, carbs: 320, fat: 78 },
    macroTargets: { protein: 170, carbs: 325, fat: 80 },
    meals: [
      { name: 'Overnight oats + protein powder', time: '07:00', kcal: 420, macros: { protein: 32, carbs: 56, fat: 8 } },
      { name: 'Apple + almond butter', time: '10:30', kcal: 260, macros: { protein: 8, carbs: 36, fat: 12 } },
      { name: 'Chicken Caesar wrap', time: '13:00', kcal: 580, macros: { protein: 40, carbs: 48, fat: 22 } },
      { name: 'Whey shake', time: '16:00', kcal: 220, macros: { protein: 32, carbs: 18, fat: 3 } },
      { name: 'Turkey meatballs, pasta, marinara', time: '19:00', kcal: 760, macros: { protein: 46, carbs: 92, fat: 22 } },
      { name: 'Greek yogurt + granola', time: '21:30', kcal: 440, macros: { protein: 22, carbs: 60, fat: 14 } },
    ],
    sleepHours: 8.2,
    hydrationL: 3.2,
    bodyMassKg: 71.7,
    rhrBpm: 47,
    notes: 'Strides crisp. Felt the snap come back in the last two.',
  },
  {
    slug: '2026-05-10',
    date: '2026-05-10',
    weekday: 'Sun',
    run: {
      title: 'Rest Day — Walk + Mobility',
      distanceKm: 0,
      durationMin: 0,
      pace: '—',
      avgHr: 0,
      maxHr: 0,
      elevationM: 0,
      perceivedEffort: 1,
      surface: '—',
      route: 'Active recovery — 45 min walk + mobility flow',
      weather: '65°F, clear',
      splits: [],
    },
    totalKcal: 2480,
    targetKcal: 2500,
    macros: { protein: 162, carbs: 268, fat: 84 },
    macroTargets: { protein: 165, carbs: 270, fat: 85 },
    meals: [
      { name: 'Brunch — eggs benedict + fruit', time: '10:00', kcal: 680, macros: { protein: 32, carbs: 64, fat: 30 } },
      { name: 'Trail mix + coffee', time: '14:00', kcal: 380, macros: { protein: 10, carbs: 36, fat: 22 } },
      { name: 'Chicken stir fry + brown rice', time: '18:30', kcal: 720, macros: { protein: 48, carbs: 86, fat: 18 } },
      { name: 'Cottage cheese + berries', time: '21:00', kcal: 320, macros: { protein: 30, carbs: 32, fat: 8 } },
      { name: 'Dark chocolate', time: '22:00', kcal: 380, macros: { protein: 6, carbs: 38, fat: 22 } },
    ],
    sleepHours: 8.6,
    hydrationL: 2.8,
    bodyMassKg: 71.5,
    rhrBpm: 46,
    notes: 'Full rest. RHR back to baseline.',
  },
  {
    slug: '2026-05-09',
    date: '2026-05-09',
    weekday: 'Sat',
    run: {
      title: 'Long Run — Foothills',
      distanceKm: 22.0,
      durationMin: 108,
      pace: '4:55',
      avgHr: 154,
      maxHr: 170,
      elevationM: 320,
      perceivedEffort: 7,
      surface: 'Asphalt + dirt',
      route: 'Foothill rollers, climbing first half',
      weather: '57°F, low fog',
      splits: [
        { km: 1, pace: '5:15', hr: 138 }, { km: 2, pace: '5:08', hr: 144 },
        { km: 3, pace: '5:02', hr: 148 }, { km: 4, pace: '5:00', hr: 150 },
        { km: 5, pace: '4:58', hr: 152 }, { km: 6, pace: '4:56', hr: 153 },
        { km: 7, pace: '4:54', hr: 155 }, { km: 8, pace: '4:55', hr: 156 },
        { km: 9, pace: '4:57', hr: 157 }, { km: 10, pace: '4:58', hr: 158 },
        { km: 11, pace: '4:56', hr: 159 }, { km: 12, pace: '4:54', hr: 160 },
        { km: 13, pace: '4:52', hr: 162 }, { km: 14, pace: '4:50', hr: 163 },
        { km: 15, pace: '4:48', hr: 165 }, { km: 16, pace: '4:48', hr: 166 },
        { km: 17, pace: '4:50', hr: 167 }, { km: 18, pace: '4:52', hr: 168 },
        { km: 19, pace: '4:54', hr: 168 }, { km: 20, pace: '4:55', hr: 169 },
        { km: 21, pace: '4:52', hr: 170 }, { km: 22, pace: '4:46', hr: 170 },
      ],
    },
    totalKcal: 3120,
    targetKcal: 3150,
    macros: { protein: 170, carbs: 440, fat: 82 },
    macroTargets: { protein: 175, carbs: 445, fat: 85 },
    meals: [
      { name: 'Oats + banana + maple', time: '05:30', kcal: 440, macros: { protein: 12, carbs: 88, fat: 6 } },
      { name: 'Recovery shake + bagel', time: '08:00', kcal: 580, macros: { protein: 42, carbs: 78, fat: 10 } },
      { name: 'Brunch tacos + black beans', time: '10:30', kcal: 720, macros: { protein: 38, carbs: 82, fat: 22 } },
      { name: 'Yogurt parfait', time: '14:30', kcal: 360, macros: { protein: 24, carbs: 48, fat: 8 } },
      { name: 'Pesto chicken pasta', time: '19:00', kcal: 740, macros: { protein: 44, carbs: 90, fat: 22 } },
      { name: 'Dark chocolate + warm milk', time: '21:30', kcal: 280, macros: { protein: 10, carbs: 36, fat: 12 } },
    ],
    sleepHours: 8.0,
    hydrationL: 4.0,
    bodyMassKg: 71.6,
    rhrBpm: 48,
    notes: 'Climbing legs improving — last 6 km pace was the fastest.',
  },
];

export const weekly = (() => {
  const last7 = logs.slice(0, 7);
  const totalKm = last7.reduce((s, l) => s + l.run.distanceKm, 0);
  const totalMin = last7.reduce((s, l) => s + l.run.durationMin, 0);
  const totalKcal = last7.reduce((s, l) => s + l.totalKcal, 0);
  const totalProtein = last7.reduce((s, l) => s + l.macros.protein, 0);
  const totalCarbs = last7.reduce((s, l) => s + l.macros.carbs, 0);
  const totalFat = last7.reduce((s, l) => s + l.macros.fat, 0);
  const avgSleep = last7.reduce((s, l) => s + l.sleepHours, 0) / last7.length;
  const avgRHR = last7.reduce((s, l) => s + l.rhrBpm, 0) / last7.length;
  return {
    totalKm: +totalKm.toFixed(1),
    totalMin,
    avgPaceSecPerKm: totalKm ? Math.round((totalMin * 60) / totalKm) : 0,
    totalKcal,
    totalProtein,
    totalCarbs,
    totalFat,
    avgSleep: +avgSleep.toFixed(1),
    avgRHR: Math.round(avgRHR),
  };
})();

export const paceFromSecPerKm = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};
