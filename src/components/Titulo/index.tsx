import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png'
import styled from 'styled-components';

interface Props {
    imagem?: string,
    children?: React.ReactNode
}

interface IImagens {
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanEstilizado = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    backuground-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`

const ContainerEstilizado = styled.div`
    display: flex;
    align-itens: center;
`

function Titulo({ imagem, children }: Props) {

    const listaDeImagem: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return (
        <ContainerEstilizado>
            {imagem && <SpanEstilizado imagem={listaDeImagem[imagem as keyof IImagens]} />}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo;