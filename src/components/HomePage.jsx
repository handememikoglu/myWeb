export default function HomePage({navigate}){
    const handleChangeMenu = (e) =>{
        e.preventDefault();
        const path = new URL(e.target.href).pathname;
        navigate(path);
    }
    return(
        <div className="container">
            <img src="/public/img/myweb-bg.svg" alt="" />
            <div className="container-btn">
                <a href="/Projeler" className="project-btn" onClick={handleChangeMenu}>Projeler</a>
                <a href="/İletisim" className="contact-btn" onClick={handleChangeMenu}>İletişim</a>
            </div>
            <div class="textInfo">
                <div className="stars"></div>
                    <h1>Merhaba! Ben Hande Eylül Memikoğlu</h1>
                    <p>Web arayüzleri tasarlamak ve onları hayata geçirmek benim için hem bir iş hem de bir tutku. Modern, kullanıcı dostu ve şık tasarımlar yapmak için kodlarla ve tasarımla oynamayı çok seviyorum. Her gün yeni şeyler öğrenmek ve projeler üretmek beni heyecanlandırıyor. Teknolojiyi estetikle birleştirerek herkesin keyifle kullanacağı dijital deneyimler yaratmak benim hedefim!</p>
            </div>
        </div>
    )
}