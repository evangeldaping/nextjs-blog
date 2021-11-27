import React from 'react'
import Layout from '../components/Layout'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
        return (
            <Layout pageTitle="About">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus distinctio ipsum quisquam, alias numquam asperiores, aperiam et corporis sed dolor illo saepe eveniet minima reprehenderit incidunt ut doloremque. Nisi.
                    Recusandae eos nam corrupti nulla repellendus sed dolore earum exercitationem dolor? Sed ex accusamus quam, voluptas doloremque porro alias. Et delectus qui voluptatem facere atque iure totam sint earum harum.
                </p>
            </Layout>
    )
}

export default about
