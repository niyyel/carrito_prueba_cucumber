$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/web/DemoBlaze .feature");
formatter.feature({
  "name": "Validar el funcionamiento de la creacion de una cuenta en la pagina demoblaze",
  "description": "  Como usuario nuevo de la pagina demoblaze\n  Quiero crear una cuenta\n  para validad el funcionamiento de la creacion de una cuenta",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@DEMOBLAZE_FEATURE"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validar el funcionamiento de la creacion de una cuenta",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@DEMO_SCENARIO_CASO2_VALIDAR-MENSAJE"
    }
  ]
});
formatter.step({
  "name": "que el usuario ingresa a la pagina demoblaze en el navegador de \"\u003cNavegador\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "name": "el usuario hace click en el boton Singn up",
  "keyword": "Cuando "
});
formatter.step({
  "name": "ingresa el nombre del usuario \"\u003c$Username\u003e\" y la clave \"\u003c$Password\u003e\"",
  "keyword": "Y "
});
formatter.step({
  "name": "hace click en el boton Singn up",
  "keyword": "Y "
});
formatter.step({
  "name": "Valida la creacion de la cuenta mostrando un mensaje y hace click en Aceptar",
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
        "$Username",
        "$Password"
      ]
    },
    {
      "cells": [
        "chrome",
        "Eitanzdf14",
        "eitanqi15"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar el funcionamiento de la creacion de una cuenta",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@DEMOBLAZE_FEATURE"
    },
    {
      "name": "@DEMO_SCENARIO_CASO2_VALIDAR-MENSAJE"
    }
  ]
});
formatter.step({
  "name": "que el usuario ingresa a la pagina demoblaze en el navegador de \"chrome\"",
  "keyword": "Dado "
});
});