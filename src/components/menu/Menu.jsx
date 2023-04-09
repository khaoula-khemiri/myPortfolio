import "./menu.scss"

export const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={() => setMenuOpen(!menuOpen)}>Home</a>
                </li>

                <li>
                    <a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>Experience</a>
                </li>

                <li>
                    <a href="#skills" onClick={() => setMenuOpen(!menuOpen)}>Skills</a>
                </li>

                <li>
                    <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>Portfolio</a>
                </li>


                <li>
                    <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}
