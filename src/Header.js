import React from 'react'

function Header(props) {
    return (
        <div>
            <ul>
                <li><a href="#">Gmail</a></li>
                <li><a href="#">Images</a></li>
                <li>
                    <a href="#">
                        <img src="/profile.jpg" alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header
