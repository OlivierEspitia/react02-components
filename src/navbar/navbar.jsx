//snippet traido como rafc
// const pages = ["home", "Users", "About", "Register"]
const pages = [
    {name: "Home", url: "/"},
    {name: "Users", url: "/"},
    {name: "Counter", url: "/"},
    {name: "About", url: "/"},
    {name: "register", url: "/"}
];
/*
Cuando se renderiza una lista de elemtnos, es importante 
proporcionar una prop "key"  única a cada elemento de la lista
esto permite a React realizar una actualización eficiente 
y optimizada de la interfaz de usuario 


*/



export const Navbar = () => {
    return(
        <>
        <div> CH30</div>
        <ul>
{pages.map(page => <li key={page.name}>{page.name}</li>)}
        </ul>
        </>
    )
}
export const Footer = () => {
    return (
        <>
        <p> Derechos no reservados.</p>
        <p> lo que esta en mexico pertenece a los mexicanos</p>
        
        
        </>
    )
}