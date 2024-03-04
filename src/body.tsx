
function Body() {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <h1>Samira</h1>
                    <h2>Die Zukunft der SAP-Entwicklung</h2>
                </div>
            </div>
            <div className="header-small">
                <img className="side-image-left" src="https://i.pinimg.com/736x/c9/31/75/c931759334468392751dfa59b0425cea.jpg" />
                <h2> About me </h2>
                <img className="side-image-right" src="https://i.pinimg.com/736x/c9/31/75/c931759334468392751dfa59b0425cea.jpg" />
            </div>

            <div className="column-unterseite">
                <a href="/Steckbrief.html" className="column bg-img-steckbrief button">
                    <div>
                        <span>Steckbrief</span>
                    </div>
                </a>

                <a href="/Hobbies.html" className="column bg-img-hobbies button">
                    <div>
                        <span>Hobbies</span>
                    </div>
                </a>

                <a href="/Leistungen.html" className="column bg-img-leistungen button">
                    <div>
                        <span>Leistungen</span>
                    </div>
                </a>

                <a href="/Kontakt.html" className="column bg-img-kontakt button">
                    <div>
                        <span>Kontakt</span>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Body;




