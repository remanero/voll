import IProfissional from "./types/IProfissional"
import userFetch from "./useFetch"

const useDadosProfissionais = () => {
    return userFetch<IProfissional[]>({url: 'profissionais'})
}

export default useDadosProfissionais;