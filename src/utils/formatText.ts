export const formatText = (text:string)=> {
  // Detecta palabras clave como moneda y horas y las envuelve en etiquetas span
  return text.replace(
    /(\$[\d,]+(?:\.\d{2})?|(\d+\s+horas?))/g,
    '<span className="bg-green-400">$1</span>'
  );
}
