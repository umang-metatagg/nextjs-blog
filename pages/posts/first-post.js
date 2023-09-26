import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost()
{
    return  (
    <Layout>
    <Head>
        <title>My First Post</title>
    </Head>
    <Script src="https://connect.facebook.net/en_US/sdk.js"
    strategy="lazyOnload"
    onLoad={ () => console.log(`script is loaded`)  }
    />
    <h1>Welcome to First Post</h1>
    <Link href='/'>Back to Home</Link>
    <Image src='/images/profile.jpg' width='300' height='300' alt='profile' />
    </Layout>
    )
}