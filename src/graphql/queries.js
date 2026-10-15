import {gql} from '@apollo/client';
export const GET_ALL_COMPTES=gql`query AllComptes {allComptes{id solde dateCreation type}}`;
export const GET_COMPTE_BY_ID=gql`query CompteById($id:ID!){compteById(id:$id){id solde dateCreation type}}`;
export const GET_TOTAL_SOLDE=gql`query TotalSolde {totalSolde{count sum average}}`;
export const GET_COMPTE_BY_TYPE=gql`query CompteByType($type:TypeCompte!){findCompteByType(type:$type){id solde dateCreation type}}`;
export const GET_ALL_TRANSACTIONS=gql`query AllTransactions {allTransactions{id type montant date compte{id solde type}}}`;
export const GET_COMPTE_TRANSACTIONS=gql`query CompteTransactions($id:ID!){compteTransactions(id:$id){id type montant date compte{id solde type}}}`;
export const GET_TRANSACTION_STATS=gql`query TransactionStats {transactionStats{count sumDepots sumRetraits}}`;
