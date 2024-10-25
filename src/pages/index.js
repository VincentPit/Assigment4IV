// src/pages/index.js
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My Site!</h1>
            <nav>
                <Link href="/assignment4_Junyi">Assignment 4</Link>
            </nav>
        </div>
    );
};

export default HomePage;
