export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(number: any): string {
  return number
    .toString()
    .replace(/\D+/g, "")
    .replace(/(\d)(\d{3})(\d{3})(\d{4})/, "+$1 ($2) $3-$4");
}
