import { useColors } from "customHooks/ColorsHook";
import { ThemeStore } from "store/theme/colorStore"
import Switch from "./Switch";
import 'styles/header.css'
import Hover from "./styleComponent/Hover";
import { Para } from "./Typography";

export default function Header() {
    const { isDark } = ThemeStore.useState();
    const { colors, toggleTheme } = useColors();


    return (
        <nav class={`navbar navbar-expand-lg fixed-top ${isDark ? "navbar-dark bg-dark " : "navbar-light bg-light"}`} style={{ boxShadow: `0.1px 0.1px 2px ${colors?.textSecondary}` }}>
            <div class="container-fluid">
                <Hover color className="navbar-brand p-1 br-2 cp" >Navbar</Hover>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                        <Hover color className="nav-item br-2 nav-link cp" >
                            Home
                        </Hover>
                        <Hover color className="nav-item nav-link br-2 cp">
                            Link
                        </Hover>
                        <li class="nav-item dropdown">
                            <Hover color className="nav-link dropdown-toggle br-2 cp" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Hover>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <Switch handleChange={toggleTheme} value={isDark} className="light-dark-switch" />
                    <form class="d-flex">
                        <input class={`form-control me-2 ${isDark ? "bg-dark" : "bg-light"}`} type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}