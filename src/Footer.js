const Footer = () => {
    var cal = new Date();
    return(
        <footer>
            <p>Copyright &copy; {cal.getFullYear()}</p>
        </footer>
    );
}

export default Footer