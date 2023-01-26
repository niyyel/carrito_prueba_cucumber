$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/web/Juntoz.feature");
formatter.feature({
  "name": "Validación del filtro de la página Juntoz",
  "description": "  Como usuario de juntoz abro la pagina\n  Quiero hacer la busqueda de un producto\n  Para validar el funcionamiento del filtros",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@FEATURE_JUNTOZ"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validar Filtro parametros",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@ESCENARIO02_JUNTOZ_PARAMETROS"
    }
  ]
});
formatter.step({
  "name": "Abrir la pagina Juntoz en el navegador \"\u003cNavegador\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "name": "Escribir \"\u003cProducto\u003e\" en el cuadro de busqueda",
  "keyword": "Y "
});
formatter.step({
  "name": "Hacer click en el botón buscar",
  "keyword": "Y "
});
formatter.step({
  "name": "Validar que se encuentren resultados",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "Navegador",
        "Producto"
      ]
    },
    {
      "cells": [
        "chrome",
        "laptop"
      ]
    },
    {
      "cells": [
        "chrome",
        "asdasda"
      ]
    }
  ]
});
formatter.background({
  "name": "descripcion antecedente",
  "description": "    Como usuario xxxxxxx",
  "keyword": "Antecedentes"
});
formatter.scenario({
  "name": "Validar Filtro parametros",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@FEATURE_JUNTOZ"
    },
    {
      "name": "@ESCENARIO02_JUNTOZ_PARAMETROS"
    }
  ]
});
formatter.step({
  "name": "Abrir la pagina Juntoz en el navegador \"chrome\"",
  "keyword": "Dado "
});
});