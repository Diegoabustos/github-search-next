import React, { useContext } from 'react';
import Link from "next/link";
import profileContext from '../context/profileContext'



const Header = () => {

  const profilesContext = useContext(profileContext);
    const { profileInfoFn, repositoriesInfoFn, enterProfileFn } = profilesContext

    const clearProfile = () => {
      enterProfileFn('')
      profileInfoFn('')
    }
    const clearRepos = () => {
      enterProfileFn('')
      repositoriesInfoFn('')
    }
    const clearAll = () => {
      enterProfileFn('')
      profileInfoFn('')
      repositoriesInfoFn('')
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

      <Link href="/">
        <a onClick={clearAll} className="navbar-brand" href="#">Home</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <Link href="/profilepage">
              <a  onClick={clearRepos} className="nav-link js-scroll-trigger">Profile</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/repositoriespage">
              <a onClick={clearProfile} className="nav-link">Repositories</a>
            </Link>
          </li>

        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Header;