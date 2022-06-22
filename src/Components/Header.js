import logo from '../logo.svg'

export default function Header() {
    return (
        <header>
            <nav className="nav-header">
                <div className="sub-nav">
                    <div>
                        <img className="react-logo" src={logo} width="70" alt="" /> 
                        <span className="react-facts">ReactFacts</span>
                    </div>
                    
                    <ul className="ul-li-header">
                        <li className="li-items-header"><a href="#">React Course - Project 1</a></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}