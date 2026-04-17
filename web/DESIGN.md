🎨 DESIGN.md: Aidglobe Design System (SaaS Edition)
Este documento define la identidad visual de Aidglobe. Debe usarse como referencia para generar código UI, componentes y activos visuales.

1. El ADN Visual (The Core)
Estilo: "SaaS Operativo Premium".

Filosofía: "Compacto pero aireado". Evitar el gigantismo de las landing pages; priorizar la densidad de información profesional.

Geometría: Uso de bordes suaves. Rounded-xl (12px) para inputs y tablas; Rounded-2xl (16px) o Rounded-3xl (24px) para contenedores principales y perfiles.

2. Paleta de Colores (Tokens)
Primary (Impact): #14B8A6 (Teal-500) - Representa acción y esperanza.

Background: #F8FAFC (Slate-50) - Gris ultra claro para fondos de dashboard.

Surface: #FFFFFF (White) - Todas las tarjetas y el sidebar deben ser blancos puros.

Text (Main): #0F172A (Slate-900) - Casi negro para máxima legibilidad.

Text (Muted): #64748B (Slate-500) - Para descripciones y metadatos.

Status Colors: * Success: #10B981 (Emerald-500)

Warning: #F59E0B (Amber-500)

Danger: #EF4444 (Red-500)

3. Tipografía y Escala
Títulos: Font-weight 900 (Black) o 800 (Extrabold). Tracking tight (-0.025em).

Labels/Metadatos: Uso frecuente de Uppercase con tracking wideste (0.1em o 0.2em) en tamaño text-[10px] o text-xs.

Cuerpo: Interlineado leading-relaxed para párrafos, leading-none para números de impacto.

4. Componentes UI (Reglas para la IA)
Cards: Fondo blanco, borde fino de 1px sólido en #F1F5F9 (Gray-100), sombra sutil (shadow-sm). Al hacer hover, aumentar sombra y mostrar un borde suave de color Teal.

Inputs: Fondo #F8FAFC, sin borde o borde muy fino. Al hacer foco, usar un halo de luz (ring) en Teal-500/20.

Botones:

Primary: Fondo negro o Teal, texto blanco, esquinas redondeadas (Full o 2xl).

Ghost: Iconos con fondo gris muy suave que cambian al color de la marca en hover.

5. Guía para Generación de Imágenes (Prompts)
Si pides a una IA (como Midjourney o DALL-E) imágenes para el "Muro" o el Login, usa estos parámetros:

Keywords: "Modern social impact", "Authentic volunteering", "High-quality photography", "Natural lighting", "Candid moments".

Style: Clean, professional, minimal color grading.

Avoid: Fotos de stock exageradas, personas posando falsamente, colores neón saturados.

6. Iconografía
Librería: Lucide-React.

Grosor: Stroke de 2px (default) o 1.5px para un look más refinado.

Uso: Siempre acompañados de texto o tooltips. Nunca dejar iconos "huérfanos" en áreas críticas.