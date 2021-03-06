export function useDates() {
  let now = new Date();

  let d = now.getDate();
  let m = now.getMonth() + 1;
  let y = now.getFullYear();

  let DoW = now.getDay();
  let weekday =
    DoW === 0
      ? 'sunday'
      : DoW === 1
      ? 'monday'
      : DoW === 2
      ? 'tuesday'
      : DoW === 3
      ? 'wednesday'
      : DoW === 4
      ? 'thursday'
      : DoW === 5
      ? 'friday'
      : DoW === 6
      ? 'saturday'
      : 'sunday';

  return { y: y, m: m, d: d, weekday: weekday };
}
