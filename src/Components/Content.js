import logo from '../images/logo.svg'

export default function Content() {
    return (
        <>  
        <div className="content">
                <nav>
                <   h1 className="react-fact">Fun facts about React</h1>
                </nav>
                
                <main>
                    <ul className="react-facts-li">
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordon Walke</li>
                        <li>Has well over 100K stars on GitHub</li>
                    </ul>
                    <img className="react-logo-content" src={logo} width="500" alt="" /> 
                </main>
              
        </div>
        </>
    )
}