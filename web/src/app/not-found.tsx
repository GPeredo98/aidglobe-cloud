import { notFound } from "next/navigation";

export default function CatchAllPage() {
  // Esta función simplemente le dice a Next: 
  // "Si llegaste aquí, es que no hay una página real, así que dispara el 404 de Next"
  notFound();
}