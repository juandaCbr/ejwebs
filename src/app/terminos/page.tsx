import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos de uso del sitio y de los servicios de ${siteConfig.name}.`,
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y Condiciones" updatedAt="TODO: fecha">
      <p>
        El uso de este sitio y la contratación de los servicios de {siteConfig.name} implican la
        aceptación de los siguientes términos.
      </p>

      <h2>1. Uso del sitio</h2>
      <p>
        El contenido de este sitio es informativo. Las métricas, casos y testimonios mostrados son
        ilustrativos y pueden corresponder a proyectos de demostración.
      </p>

      <h2>2. Propuestas y cotizaciones</h2>
      <p>
        Los precios de los paquetes son valores de referencia y no constituyen una oferta
        vinculante. El precio y el alcance finales se acuerdan por escrito antes de iniciar.
        La conversión a dólares es aproximada y depende de la tasa de cambio vigente.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Salvo pacto en contrario, al completarse el pago total el cliente recibe la titularidad del
        código fuente y los entregables del proyecto. Las marcas y el contenido de este sitio
        pertenecen a {siteConfig.name}.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        {siteConfig.name} no se responsabiliza por daños indirectos derivados del uso del sitio.
        Los servicios se prestan según el alcance y las condiciones acordadas en cada contrato.
      </p>

      <h2>5. Modificaciones</h2>
      <p>
        Podemos actualizar estos términos. La versión vigente es la publicada en esta página.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Consultas sobre estos términos:{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
