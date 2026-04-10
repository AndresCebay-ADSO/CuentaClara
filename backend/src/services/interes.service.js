/**
 * Calcula la cuota fija usando amortizacion francesa
 * @param {number} monto - Capital prestado
 * @param {number} tasaAnual - Tasa anual en % (ej: 24 = 24%)
 * @param {number} numeroCuotas
 * @returns {number} Cuota mensual redondeada
 */
const calcularCuota = (monto, tasaAnual, numeroCuotas) => {
  const tasaMensual = tasaAnual / 100 / 12
  if (tasaMensual === 0) return Math.round(monto / numeroCuotas)

  const cuota =
    (monto * tasaMensual * Math.pow(1 + tasaMensual, numeroCuotas)) /
    (Math.pow(1 + tasaMensual, numeroCuotas) - 1)

  return Math.round(cuota)
}

/**
 * Genera la tabla de amortizacion completa
 */
const tablaAmortizacion = (monto, tasaAnual, numeroCuotas) => {
  const tasaMensual = tasaAnual / 100 / 12
  const cuota = calcularCuota(monto, tasaAnual, numeroCuotas)
  let saldo = monto
  const tabla = []

  for (let i = 1; i <= numeroCuotas; i++) {
    const interes = Math.round(saldo * tasaMensual)
    const capital = cuota - interes
    saldo -= capital

    tabla.push({
      cuota: i,
      pagoTotal: cuota,
      capital,
      interes,
      saldoRestante: saldo < 0 ? 0 : Math.round(saldo)
    })
  }

  return tabla
}

module.exports = { calcularCuota, tablaAmortizacion }
