# Carousel Component

Un componente de carrusel reutilizable y responsive para Angular con navegación automática y controles manuales.

## Características

- ✅ Navegación automática configurable
- ✅ Controles de navegación (anterior/siguiente)
- ✅ Indicadores de posición
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Soporte para botones de acción
- ✅ Accesibilidad (ARIA labels)
- ✅ Componente standalone

## Uso Básico

```typescript
import { CarouselComponent } from './carousel.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <app-carousel 
      [slides]="slides" 
      [autoRotate]="true" 
      [rotationInterval]="5000"
    ></app-carousel>
  `
})
export class ExampleComponent {
  slides = [
    {
      image: 'https://example.com/image1.jpg',
      title: 'Título del Slide',
      description: 'Descripción del slide',
      buttonText: 'Ver Más',
      buttonLink: '/ruta'
    }
    // ... más slides
  ];
}
```

## Propiedades de Entrada (Inputs)

| Propiedad | Tipo | Por Defecto | Descripción |
|-----------|------|-------------|-------------|
| `slides` | `any[]` | `[]` | Array de objetos con la información de cada slide |
| `autoRotate` | `boolean` | `true` | Habilita/deshabilita la rotación automática |
| `rotationInterval` | `number` | `5000` | Intervalo en milisegundos para la rotación automática |

## Estructura del Objeto Slide

```typescript
interface Slide {
  image: string;        // URL de la imagen de fondo
  title: string;        // Título del slide
  description: string;  // Descripción del slide
  buttonText?: string;  // Texto del botón (opcional)
  buttonLink?: string;  // Enlace del botón (opcional)
}
```

## Métodos Públicos

| Método | Descripción |
|--------|-------------|
| `nextSlide()` | Avanza al siguiente slide |
| `prevSlide()` | Retrocede al slide anterior |
| `goToSlide(index: number)` | Va directamente al slide especificado |

## Estilos Personalizables

El componente incluye estilos CSS completos que puedes personalizar:

- `.carousel-container` - Contenedor principal
- `.slide` - Estilos de cada slide
- `.slide-content` - Contenido del slide (título, descripción, botón)
- `.carousel-controls` - Controles de navegación
- `.indicators` - Indicadores de posición

## Responsive

El componente es completamente responsive y se adapta a diferentes tamaños de pantalla:

- **Desktop**: Altura de 500px
- **Tablet (≤768px)**: Altura de 400px
- **Mobile (≤480px)**: Altura de 300px

## Accesibilidad

- Controles con `aria-label` para lectores de pantalla
- Navegación por teclado
- Indicadores semánticos

## Ejemplo Completo

```typescript
// En tu componente
slides = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop',
    title: 'Bienvenido a Nuestra Plataforma',
    description: 'Descubre las mejores ofertas y productos de calidad.',
    buttonText: 'Explorar Ahora',
    buttonLink: '/products'
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop',
    title: 'Ofertas Especiales',
    description: 'Aprovecha nuestros descuentos exclusivos.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/offers'
  }
];
```

## Notas

- El componente maneja automáticamente el ciclo de vida (OnInit, OnDestroy)
- La rotación automática se reinicia cuando el usuario interactúa manualmente
- Los controles e indicadores solo se muestran si hay más de un slide 