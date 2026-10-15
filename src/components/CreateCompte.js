import {useState} from 'react';import {useMutation} from '@apollo/client';import {SAVE_COMPTE} from '../graphql/mutations';import {TypeCompte} from '../graphql/types';
export default function CreateCompte({onSaved}) {
 const [solde,setSolde]=useState('');const [type,setType]=useState(TypeCompte.COURANT);const [message,setMessage]=useState('');
 const [save,{loading,error}]=useMutation(SAVE_COMPTE);
 async function submit(e){e.preventDefault();setMessage('');const amount=Number(solde);if(solde===''||!Number.isFinite(amount)||amount<0)return;
  try{await save({variables:{compte:{solde:amount,type}}});setSolde('');await onSaved();setMessage('Compte ajouté.');}catch{}}
 return <section><h2>Nouveau compte</h2><form onSubmit={submit}><label htmlFor="solde">Solde initial</label><input id="solde" type="number" min="0" step="0.01" required value={solde} onChange={e=>setSolde(e.target.value)}/><label htmlFor="typeCompte">Type de compte</label><select id="typeCompte" value={type} onChange={e=>setType(e.target.value)}>{Object.values(TypeCompte).map(t=><option key={t}>{t}</option>)}</select><button className="primary" disabled={loading}>Créer le compte</button></form>{error&&<p role="alert" className="error">{error.message}</p>}{message&&<p role="status" className="mt-3">{message}</p>}</section>;
}
