import React from 'react'
import Togglable from './Togglable'

export default function LoginForm ({handleSubmit, handleUsernameChange, handlePasswordChange, username, password}) {
    return (
        <Togglable buttonLabel = 'Show login'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input
                        type='text'
                        value={username}
                        name='Username'
                        placeholder='Username'
                        onChange={handleUsernameChange}
                    />
                    </div>
                    <div>
                    <input
                        type='password'
                        value={password}
                        name='Password'
                        placeholder='Password'
                        onChange={handlePasswordChange}
                    />
                    </div>
                    <div>
                    <button type='submit'>Login</button>
                    </div>
                </form>
            </div> 
        </Togglable>
    )
}