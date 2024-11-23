export type TypeWithKey<T> = { [key: string]: T };

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Se rompió la red',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_BAD_REQUEST: 'Error al realizar la petición',
    ERR_BAD_RESPONSE: 'Error interno del servidor',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
  };

  return codeMatcher[errorCode];
};

export const obtainErrors = (error: Error) => {
  let html = '<ul>';
  Object.keys(error).map((i:string) => {
      html += `<li style="list-style: none;">${error[i]}</li>`;
  })
  html += '</ul>'
  return html
}