export const DateFormatter = (
  dataISO: string,
  withHour?: boolean,
  onlyHour?: boolean,
) => {
  const data = new Date(dataISO);

  const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
  const dia = data.getDate();
  const mes = data.toLocaleDateString("pt-BR", { month: "long" });
  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (onlyHour) {
    return hora;
  }

  return withHour
    ? `${capitalize(diaSemana).replace('-feira', '')}, ${dia} de ${mes} às ${hora}h`
    : `${capitalize(diaSemana).replace('-feira', '')}, ${dia} de ${mes}`;
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);