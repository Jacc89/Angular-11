import { Respuesta } from "./respuesta";

export class Pregunta{
    decripcionPregunta: string;
    respuestas: Respuesta[];
  
   public constructor(decripcionPregunta: string,  respuestas: Respuesta[]){
      this.decripcionPregunta = decripcionPregunta;
      this.respuestas =  respuestas;
    }
  
  }
  