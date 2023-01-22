import NavBar from './navbar.js'

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
}