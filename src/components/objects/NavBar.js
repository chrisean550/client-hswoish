import React from 'react'
import HomeLink from './HomeLink'
import Navigation from './Navigation'
export default function NavBar() {
    return (
        <div className=" cust-navbar sticky-top d-flex flex-row justify-content-between align-items-center under-shadow">
            <HomeLink />
            <Navigation turnButton={true} />
        </div>
    )
}
