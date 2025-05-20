import { useEffect, useState } from "react"

const Navbar = () => {
    type NavbarList = {
        id: number;
        name: string;
        link: string
    }
    const [navbarLists, setNavbarLists] = useState<NavbarList[]>([])
    useEffect(() => {
        const getNarBarList = async () => {
            const url = '/navbar.json'
            try {
                const res = await fetch(url)
                const data = await res.json()
                setNavbarLists(data.navbarList)
            } catch (error) {
                console.error(error)
            }
        }
        getNarBarList()
    }, [])

    return (
        <nav>
            <ul>
                {navbarLists.map((navbarList) => (
                    <li key={(navbarList.id)}>{navbarList.name}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
