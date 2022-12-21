/*export const add = async (titulo: string, tipo: string,categoria: string, valor: number): Promise<boolean> => {

   if(email !== data.email) {
        console.log(email)
        return false
    }
    if(senha !== data.password) {
        console.log(senha)
        console.log(data.password)
        return false
    }

    return true
}*/

import { json } from "stream/consumers"

export const add = (titulo: string, tipo: string, categoria: string, valor: number): string => {
    
    let data: Object = {
        titulo,
        tipo,
        categoria,
        valor,
        data: Date.now()
    }
    if(!localStorage.getItem('transactions')){
        console.log(JSON.stringify([data]))
        localStorage.setItem('transactions',JSON.stringify([data]))
    } 
    let itens: object[] = JSON.parse(localStorage.getItem('transactions') || '[]')
    itens.push(data)
    localStorage.setItem('transactions',JSON.stringify(itens))
    return localStorage.getItem('transactions') || '{}'
}
