import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Cómo ${siteConfig.name} recolecta, usa y protege tus datos personales.`,
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad" updatedAt="TODO: fecha">
      <p>
        En {siteConfig.name} respetamos tu privacidad. Esta política describe qué datos personales
        recolectamos, con qué finalidad y qué derechos tenés sobre ellos.
      </p>

      <h2>1. Datos que recolectamos</h2>
      <ul>
        <li>Datos que nos envías por el formulario de contacto: nombre, correo, teléfono, empresa y el contenido de tu mensaje.</li>
        <li>Datos técnicos de navegación agregados y anónimos (páginas visitadas, tipo de dispositivo).</li>
      </ul>

      <h2>2. Finalidad</h2>
      <ul>
        <li>Responder tus consultas y elaborar propuestas comerciales.</li>
        <li>Mejorar el sitio y nuestros servicios.</li>
      </ul>

      <h2>3. Conservación</h2>
      <p>
        Conservamos tus datos únicamente durante el tiempo necesario para gestionar tu solicitud o
        la relación comercial, y luego los eliminamos o anonimizamos.
      </p>

      <h2>4. Terceros</h2>
      <p>
        No vendemos tus datos. Podemos usar proveedores de infraestructura y correo (por ejemplo,
        el servicio de despliegue y el proveedor de envío de correo) que procesan datos por cuenta
        nuestra bajo acuerdos de confidencialidad.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Podés solicitar acceso, rectificación o eliminación de tus datos escribiendo a{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para cualquier duda sobre esta política, escribinos a{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
