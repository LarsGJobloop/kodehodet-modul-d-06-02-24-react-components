import './Layout.css'

export function Layout(properties) {
  return (
    <div className='layout'>
      <header className='navbar'>
        <a href="">Logo</a>

        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className='main'>
        {properties.children}
      </main>

      <footer className='footer'>
        <p>Kodehode Modul D</p>
        <p>{new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}
