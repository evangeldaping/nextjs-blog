import React from 'react'
import Head from 'next/head'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
        return (
            <footer style={{ textAlign: 'center' }}>
                <p>&copy; Evangel {new Date().getFullYear()} </p>
            </footer>
    )
}

export default Footer
