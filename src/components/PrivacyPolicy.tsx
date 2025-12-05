import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrivacyPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
        >
          Política de Privacidad
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            POLÍTICA DE PRIVACIDAD — CLICKA STUDIO
          </DialogTitle>
          <DialogDescription>
            Última actualización: 2025
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">
              1. Responsable del Tratamiento de Datos
            </h3>
            <p>
              Clicka Studio
              <br />
              Email: clickastudioc@gmail.com
              <br />
              WhatsApp: +57 312 2644682
              <br />
              Ubicación: Medellín, Colombia (operación remota)
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">2. Datos que Recopilamos</h3>
            <p>
              Clicka Studio recopila únicamente los datos que el usuario
              proporciona voluntariamente mediante:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Formulario de contacto:</strong> Nombre completo, Email,
                Tipo de proyecto, Presupuesto, Mensaje.
              </li>
              <li>
                <strong>Comunicación directa:</strong> Mensajes enviados por
                WhatsApp o correo electrónico.
              </li>
            </ul>
            <p>
              No recopilamos datos sensibles, cookies personalizadas ni
              información de navegación para identificación.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              3. Finalidades del Tratamiento
            </h3>
            <p>
              Los datos se utilizan exclusivamente para: Responder consultas,
              Elaborar cotizaciones, Brindar asesoría relacionada con los
              servicios solicitados, Establecer comunicación comercial. No
              vendemos ni compartimos datos con terceros.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">4. Base Legal</h3>
            <p>
              Tratamiento realizado conforme a la Ley 1581 de 2012, el Decreto
              1377 de 2013 y estándares internacionales de privacidad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">5. Derechos del Titular</h3>
            <p>
              El usuario puede solicitar en cualquier momento: Acceso a sus
              datos, Rectificación, Actualización, Supresión, Revocatoria de
              autorización. Solicitud vía email: clickastudioc@gmail.com
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              6. Seguridad de la Información
            </h3>
            <p>
              Los datos enviados se almacenan únicamente en los canales de
              comunicación utilizados (correo y WhatsApp), con acceso
              restringido. Vercel proporciona cifrado HTTPS de forma
              predeterminada.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">7. Conservación de Datos</h3>
            <p>
              Los datos se conservarán mientras: Se gestiona la consulta, Exista
              interés comercial. El usuario puede solicitar eliminación
              inmediata.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              8. Transferencias Internacionales
            </h3>
            <p>
              Clicka Studio no realiza transferencias internacionales de datos.
              El hosting utilizado (Vercel) puede procesar información técnica
              no identificable en sus servidores externos, bajo sus propias
políticas de seguridad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              9. Contacto para Ejercicio de Derechos
            </h3>
            <p>
              Email: clickastudioc@gmail.com
              <br />
              Asunto: “Protección de Datos – Solicitud”
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
