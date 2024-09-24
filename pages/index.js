import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Botao from "@/componentes/botao";
import { UploadImagem } from "@/componentes/uploadImagem";
import { useRef, useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);
  return (
    <>
      <h1>Ola Mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abrir seletor de arquvos</button>
      
      <UploadImagem 
      setImagem={setImagem}
      imagemPreview={imagem?.preview}
      aoSetarAReferencia={(ref) => referenciaInput.current = ref}
       />
      <div style={{width: 200}}>
        <Avatar />    
      <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('botao clicado')} />
        </div>
    </>
  )
}
