/** @typedef {{id:string,solde:number,dateCreation:string,type:'COURANT'|'EPARGNE'}} Compte */
/** @typedef {{id:string,montant:number,date:string,type:'DEPOT'|'RETRAIT',compte:Compte}} Transaction */
/** @typedef {{solde:number,type:'COURANT'|'EPARGNE'}} CompteRequest */
/** @typedef {{compteId:string,montant:number,type:'DEPOT'|'RETRAIT'}} TransactionRequest */
export {};
