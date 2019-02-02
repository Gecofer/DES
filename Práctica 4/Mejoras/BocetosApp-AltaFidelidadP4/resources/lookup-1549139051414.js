(function(window, undefined) {
  var dictionary = {
    "087e4834-548c-474f-b3e7-1a1ff110cada": "Q-Promociones",
    "d395f1a8-fa71-4d99-b4be-6e901ef88330": "O-MisReservas",
    "e439b602-2167-465e-bbf7-228085c583c5": "F-ReservarProducto",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "A-Inicio",
    "e8718586-eaef-4046-9c78-d5ab0280210d": "T-DetalleProductoMisReservas",
    "c5097adc-59ed-474f-a2c1-29dc8dd7718d": "K-DetalleBusqueda",
    "63555ada-3da9-43a7-9a41-e255fbf4dfff": "U-Ayuda",
    "bb103378-da3f-440d-9403-9c2e5c7cb33e": "N-OpinionesClientes",
    "4ef22588-b0be-43e9-808b-c22347478e9f": "J-BusquedaIncial",
    "a25a10ac-d2a5-4985-932d-af27c6e35c28": "J-BusquedaZapatillas",
    "0ca1397a-b88e-4727-b08c-87def55e9640": "S-GPS",
    "bbd174ac-156a-40dc-b95a-c16175d9549c": "P-MiPerfil",
    "4058a42e-01c4-4ce3-887b-7da9fe9bc887": "F-IniciarSesion",
    "6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152": "E-Inicial-SesionSinIniciar",
    "64617f29-488a-4859-beb4-92dc3e2f1452": "S-GPSTiendas",
    "ff4bcc87-edd3-44a5-8efa-50099549f029": "D-Inicial-SesionIniciada",
    "70568740-0d91-4aa2-b0a8-2e24b687cf73": "R-RedesSociales",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "37a752b5-d8ec-4637-b4a5-bdb06e116f4f": "user",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);