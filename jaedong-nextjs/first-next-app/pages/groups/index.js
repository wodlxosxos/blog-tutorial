import Link from 'next/link'
import styles from '../../components/layout.module.css'

export default () => <>
    <div className={styles.backToHome}>
        <Link href="/">
            <a>← Back to home</a>
        </Link>
    </div>

    <h1>Groups</h1>
</>

// http://localhost:3000/groups