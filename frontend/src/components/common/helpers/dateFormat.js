export const dateFormat = () => {
  const today = new Intl.DateTimeFormat( navigator.language, { month: "long", day: "2-digit", year: "numeric" }).format( new Date() )
  return today;
}