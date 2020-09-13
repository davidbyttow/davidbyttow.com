import styles from './header.module.scss'

const Header = () => {
  return (
    <div className="header">
      <span className="circle" />
      David Byttow
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: 'DINPro Medium';
          text-transform: uppercase;
          margin: 1rem 0;
        }

        .circle {
          height: 2rem;
          width: 2rem;
          background-color: #003;
          border-radius: 50%;
          display: inline-block;
          margin-right: 1em;
        }
      `}</style>
    </div>
  )
}

export default Header
