import Header from "./Header"

function MainContent() {
    return (
        <main>
            <h1>Razões pelo qual quero aprender React</h1>
            <ol>
                <li>É um framework popular, extremamente customizável e capaz de fazer coisas incríveis!</li>
                <li>Com React, você possui um diferencial e um destaque em relação aos outros</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <p>&copy;2023 Caio. Todos os direitos reservados</p>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))