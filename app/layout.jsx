import Header from '@/components/Header.jsx'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: "Shared-Prompts",
    date: "2020-01-01T00:00:00Z",
    description: "Discover & Share Prmopts",
    tags: ["Prompts", "AI", "GPT-3", "OpenAI"],
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en' >
            <body>
                <Provider>

                    <div className="main">
                        <div className='gradient'></div>
                    </div>
                    <main className='app'>
                        <Header />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )

}

export default RootLayout