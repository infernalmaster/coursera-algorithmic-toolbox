export function calculateSequences(m: number) {
  const reminders = [0, 1]

  let i = 2
  while (true) {
    reminders[i] = (reminders[i - 2] + reminders[i - 1]) % m

    if (reminders[i] === 1 && reminders[i - 1] === 0) {
      break;
    }
    i++
  }

  reminders.pop()
  reminders.pop()

  return reminders
}


export default function fibReminder(n, m) {
  const sequences = calculateSequences(m);
  return calculateSequences(m)[n % sequences.length];
}