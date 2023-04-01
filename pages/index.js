import Head from "next/head"
import ManualHeader from "../components/ManualHeader.jsx"

export default function Home() {
    return (
        <>  
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ManualHeader />
        </>
    )
}
