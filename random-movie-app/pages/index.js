import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//components to import
import Banner from '../components/Banner/index'
import RandomMovie from '../components/RandomMovie/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <RandomMovie />
    </div>
  )
}
