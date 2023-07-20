import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Header from "../components/Header"
import Avatar from "../components/Avatar"
import Main from "../components/Main"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Avatar NFT me</title>
                <meta
                    name="description"
                    content="A personalized Avatar NFT generator"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Avatar />
            <Main />
        </div>
    )
}
