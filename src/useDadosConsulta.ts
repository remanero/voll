import IConsulta from "./types/IConsulta"
import userFetch from "./useFetch"

const useDadosConsulta = () => {
    return userFetch<IConsulta[]>({url : 'consultas'})
}

export default useDadosConsulta;