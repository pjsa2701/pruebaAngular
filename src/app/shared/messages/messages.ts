/**
 * Clase estática para manejar mensajes relacionados con códigos de respuesta HTTP.
 */
export class Messages {
  /**
   * Objeto que contiene mensajes asociados a códigos de respuesta HTTP.
   */
  static RESPONSES = Object.freeze({
    OK: 'STATUS 200 OK: SE RECIBIÓ, PROCESÓ Y SE REALIZÓ UNA SOLICITUD CORRECTAMENTE.',
    BAD_REQUEST:
      'ERROR 400 BAD_REQUEST: LA SOLICITUD NO PUEDE REALIZARSE DEBIDO A UNA SINTAXIS INCORRECTA.',
    NOT_FOUND:
      'ERROR 404 NOT_FOUND: NO SE HA PODIDO ENCONTRAR EL RECURSO SOLICITADO. PRUEBE CON OTRO NOMBRE.',
    ERROR_SERVER:
      'ERROR 500 ERROR_SERVER: SE HA AGOTADO EL TIEMPO DE ESPERA ENTRE EL SERVIDOR Y EL NAVEGADOR.',
  });

  /**
   * Método estático que devuelve un mensaje asociado a un código de respuesta HTTP dado.
   * @param status Código de respuesta HTTP.
   * @returns Mensaje asociado al código de respuesta.
   */
  static handleResponse(status: number): string {
    switch (status) {
      case 200:
        return Messages.RESPONSES.OK;
      case 400:
        return Messages.RESPONSES.BAD_REQUEST;
      case 404:
        return Messages.RESPONSES.NOT_FOUND;
      case 500:
        return Messages.RESPONSES.ERROR_SERVER;
      default:
        return 'DESCONOCIDO';
    }
  }
}
