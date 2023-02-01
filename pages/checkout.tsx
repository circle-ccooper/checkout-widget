import styles from '../styles/Home.module.css'
import '@circle-fin/circle-widgets-sdk/lib/dist/base.css';
import '@circle-fin/circle-widgets-sdk/lib/dist/components.css';
import '@circle-fin/circle-widgets-sdk/lib/dist/fonts.css';
import { CircleCheckout } from '@circle-fin/circle-widgets-sdk'
import checkoutData from "../data/checkout-session.json"
import Link from 'next/link';

export default function Checkout() {
    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
            <Link href="/" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back
            </Link>
            </div>
        <main className={styles.main}>
        <div style={{height: '800px', width: '800px'}}>
        <CircleCheckout
        sessionId={checkoutData[0].checkoutId}
        environment="sandbox"
        clientKey={checkoutData[0].checkoutKey}
        options={{
          merchantName: 'OurSong',
          theme: {
            themeType: 'dark',
             backgroundPrimary: '#3D3652',
             backgroundSecondary: '#8656EF',
             backgroundTertiary: '#5acd00',
             textPrimaryColor: '#FCFAFF',
             textSecondaryColor: '#FCFAFF',
             textTertiaryColor: '#fff',
             borderPrimaryColor: '#8656EF',
             buttonBackgroundPrimary: '#5FBFFF',
             loadingSpinnerColor: '#007ACD',
             borderRadius: '24px'
          }
        }}
        />
      </div>
       </main>
       </div>
    )
}
