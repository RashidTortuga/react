function Header(){
    return( <header className="d-flex justify-between">
        <div className="headerLeft d-flex">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Remove"
          />
          <div>
            <h2 className="logoHeader">REACT SNEAKERS</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="headerRight">
          <ul className="userMenu d-flex">
            <li className="d-flex">
              <img src="/img/cart.svg" alt="Remove" />
              <p>1205 руб.</p>
            </li>
            <li className="d-flex">
              <img src="/img/fav.svg" alt="Remove" />
              <p>Закладки</p>
            </li>
            <li className="d-flex">
              <img src="/img/profile.svg" alt="Remove" />
              <p>Профиль</p>
            </li>
          </ul>
        </div>
      </header>)
}
export default Header