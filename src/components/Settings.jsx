import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../firebase'
import { Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import LoginStatement from "./LoginStatement"
import { useAuth } from "../contexts/AuthContext"

function Settings() {
  const currentUser = useAuth().currentUser
  const history = useHistory();

  const [display, setDisplay] = useState(false)
  const [error, setError] = useState("")

  const toggleSetting = () => {
    setDisplay(!display)
  }

  const handleLogout = async (e) => {
    setError("")
    try {
      await auth.signOut()
      history.push("/login")
    } catch {
      setError("ログアウトに失敗しました。")
    }
  }
  
  return (
    <div className="settings">
      <button onClick={() => toggleSetting()}><FontAwesomeIcon icon={faBars} /></button>
      <div className={display ? null : 'display_none'} >
        <h5>アカウント設定</h5>
        {error && <Alert variant="danger">{error}</Alert>}
        {currentUser ? (
          <div>
            <p>Email:{currentUser.email}</p>
            <div>
              <Link to="/update-profile">
                アカウント設定の変更
              </Link>
            </div>
            <div>
              <button onClick={handleLogout}>
                ログアウト
              </button>
            </div>
          </div> 
        ) : (
          <LoginStatement/>
        )}
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfi_VBq8nOqhkknxDfTCn3gUdzRD32rJtexpW9wjSzaIKQ3Pw/viewform?usp=sf_link">お問い合わせ</a>
      </div>
    </div>
  )
}

export default Settings