const Content = () => {
    const handleNameChanges = () => {
    var Name = ['Kevin','David','Bob'];
    var randomNum = Math.floor(Math.random() * 3);
    return Name[randomNum];
}
    return(
        <main>

        <span><h3>{handleNameChanges()}</h3><a>Your list is below</a></span>
        <list>
            <ol>Apple</ol>
            <ol>Milk</ol>
            <ol>Bread</ol>
            <ol>Eggs</ol>
        </list>
        </main>
    );
}

export default Content