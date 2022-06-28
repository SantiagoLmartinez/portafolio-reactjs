import '../Components/portada.style.css'
export const Portada = () => {

    return (
        <div className='portada-container'>
            <div className="portada">
            <div>
                <h2>Hola mi nombre es Sam</h2>
                <p className='text-center'>Bienvenido<span>&#160;</span></p>
            </div>
            <div>
                
            </div>
            <div>
                <img src="/img/foto1.jpg" alt="" />
            </div>
            

        </div>
            <div className='portada-btn-container mt-4'>
                <button className='btn btn-primary mx-2'>Curriculum</button>
                <button className='btn btn-primary mx-2'>Portafolio</button>
                <button className='btn btn-primary mx-2'>Certificados</button>
            </div>
        </div>
    )
}