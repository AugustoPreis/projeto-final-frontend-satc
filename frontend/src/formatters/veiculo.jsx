export function formatVeiculo(veiculo) {
  if (!veiculo) {
    return '';
  }

  return [
    veiculo.marca,
    veiculo.modelo,
    veiculo.ano,
  ].filter(el => el).join(' ');
}