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
interface Idados {
    id: number,
    titulo: string,
    tipo: string,
    categoria: string,
    valor: number,
  }

export const add = (titulo: string, tipo: string, categoria: string, valor: number, id: number): string => {
    
    let data: Idados = {
        id,
        titulo,
        tipo,
        categoria,
        valor,
    }
    if(!localStorage.getItem('transactions')){
        localStorage.setItem('transactions',JSON.stringify([]))
    } 
    let itens: object[] = JSON.parse(localStorage.getItem('transactions') || '[]')
    console.log(itens)
    itens.push(data)
    localStorage.setItem('transactions',JSON.stringify(itens))
    return localStorage.getItem('transactions') || '[]'
}
export const sum = (data: Idados[]): number => {
    let sum:number = 0
    for(let i:number = 0;i<data.length; i++){
        if(data[i].tipo === "Entrada"){
           sum  += data[i].valor
        } else {
            sum  -= data[i].valor
        }
    }
    return sum
}
