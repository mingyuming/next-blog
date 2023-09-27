import '@/styles/globals.css';
import '@/styles/normalize.css';
import '../../public/iconfont/iconfont.css';

import {Inter, Roboto, Poppins} from 'next/font/google';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: '雨滴',
    description: '雨滴的博客',
};

export default function RootLayout({children}) {
    return (
        <html lang="zh">
            <body className={inter.className}>
                <div className="container">
                    <Nav />
                    <div className="content-wrapper">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
