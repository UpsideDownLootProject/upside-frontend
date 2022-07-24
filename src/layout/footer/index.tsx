const Footer = () => {
    return (
        <footer className="footer">
            {'This website is '}
            <a href="https://github.com/UpsideDownLootProject/upside-frontend" target="_blank" rel="noreferrer">
                open-source
            </a>{'. '}
            <br />
            {new Date().getFullYear()}
        </footer>
    );
}

export default Footer