const Animation = () => {
    const [background, setBackground] =  useState('green');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    
    
    
    return (
        <div>
            <div style={{height: '180 vh', background: 'green'}}>
                <h1>
                    Scrollear para cambiar el color de fondo
                </h1>
            </div>
        </div>
    )
}