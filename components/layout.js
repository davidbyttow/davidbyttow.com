import Meta from '../components/meta'

import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    </>
  )
}
