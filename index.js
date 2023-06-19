function conversion(temperatura) {
    if (temperatura.includes("C")) {
      let calculo = Math.round(1.8 * parseInt(temperatura) + 32);
      if (calculo >= 14 && calculo <= 32) {
        return `${calculo}°F, Temperatura baja`;
      } else if (calculo >= 33 && calculo <= 68) {
        return `${calculo}°F, Temperatura adecuada`;
      } else if (calculo >= 69 && calculo <= 95) {
        return `${calculo}°F, Temperatura alta`;
      } else {
        return "Temperatura desconocida";
      }
    } else {
      let calculo = Math.round((parseInt(temperatura) - 32) / 1.8);
      if (calculo >= -10 && calculo <= 0) {
        return `${calculo}°C, Temperatura baja`;
      } else if (calculo >= 1 && calculo <= 20) {
        return `${calculo}°C, Temperatura adecuada`;
      } else if (calculo >= 21 && calculo <= 35) {
        return `${calculo}°C, Temperatura alta`;
      } else {
        return "Temperatura desconocida";
      }
    }
  }