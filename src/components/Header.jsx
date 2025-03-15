export default function Header({navigate}){

    const handleChangeMenu = (e) =>{
        e.preventDefault();
        const path = new URL(e.target.href).pathname;
        navigate(path);
    }
    return(

        <div className="header-container">
            <h3>Hande Eylül Memikoğlu</h3>
            <div className="header-content">
                <a href="/" onClick={handleChangeMenu}>Hakkımda</a>
                <a href="/Projeler" onClick={handleChangeMenu}>Projeler</a>
                <a href="/iletisim" onClick={handleChangeMenu}>İletişim</a>
            </div>
        </div>
        
    )
}