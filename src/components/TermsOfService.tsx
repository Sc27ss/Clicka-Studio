import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TermsOfService = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
        >
          Términos de Servicio
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            TÉRMINOS DE SERVICIO — CLICKA STUDIO
          </DialogTitle>
          <DialogDescription>
            Última actualización: 2025
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">
              1. Aceptación de los Términos
            </h3>
            <p>
              Al acceder al sitio de Clicka Studio, el usuario acepta estos
              Términos de Servicio.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">2. Objeto del Sitio</h3>
            <p>
              El sitio web ofrece información sobre servicios de diseño web,
              desarrollo front-end, branding y materiales visuales, además de un
              formulario de contacto para clientes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">3. Uso Permitido</h3>
            <p>El usuario se compromete a:</p>
            <ul className="list-disc list-inside ml-4">
              <li>No utilizar el sitio con fines ilícitos</li>
              <li>No intentar vulnerar la seguridad del sitio</li>
              <li>No enviar información falsa o engañosa</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">4. Propiedad Intelectual</h3>
            <p>
              Todo el contenido del sitio (diseños, textos, imágenes,
              portafolio, estructura web) pertenece a Clicka Studio o a sus
              respectivos autores. Está prohibida la reproducción sin
              autorización.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">5. Responsabilidad</h3>
            <p>Clicka Studio no se hace responsable por:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Fallos técnicos temporales del sitio</li>
              <li>
                Interrupciones generadas por proveedores externos como Vercel
              </li>
              <li>Información incorrecta proporcionada por el usuario</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              6. Formularios y Contacto
            </h3>
            <p>
              Al enviar información mediante el formulario o por correo, el
              usuario autoriza a Clicka Studio a contactarlo para fines
              comerciales y de seguimiento del proyecto.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">7. Enlaces Externos</h3>
            <p>
              El sitio puede contener enlaces a terceros. Clicka Studio no
              controla ni se responsabiliza por el contenido de dichos sitios
              externos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">8. Modificaciones</h3>
            <p>
              Clicka Studio puede actualizar estos términos en cualquier
              momento. La versión vigente será publicada en esta página.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">9. Datos de Contacto</h3>
            <p>
              Email: clickastudioc@gmail.com
              <br />
              WhatsApp: +57 312 2644682
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfService;
