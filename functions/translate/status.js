export function translateStatus(status) {
    switch (status) {
      case "":
        return "Pendiente";
      case "Postponed":
        return "Aplazado";
      case "Abandoned":
        return "Suspendido";
      case "Cancelled":
        return "Cancelado";
      case "Half Time":
        return "Descanso";
      case "Finished":
      case "After ET":
      case "After Pen.":
        return "Finalizado";
      default:
        return `${status}'`;
    }
  }