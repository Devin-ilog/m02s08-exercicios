import { Card } from '../../components/Card'
import { useProdutos } from '../../hooks/useProdutos'
import './Produtos.css'

export const Produtos = () => {
    const {error, isLoading, produtos} = useProdutos();

    if(isLoading) {
        return <p>Carregando...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    return (
        <>
            {!!produtos && Object.keys(produtos).map((secao) =>(
                <section key={secao} className='secao'>
                    <h2 className='secao-titulo'>{secao}</h2>
                    <hr/>
                    <div className='lista'>
                        {produtos[secao].map((item)=> (
                            <Card key={item.id}
                                imagem={item.imagem}
                                nome={item.nome} 
                                descricao={item.descricao}
                                valor={item.valor}
                                tempoPreparo={item.tempoPreparo}/>
                        ))}
                    </div>
                </section>
            ))}
                
        </>
    )
}