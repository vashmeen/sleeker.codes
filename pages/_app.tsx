import 'sleeker/reset.css';
import '../styles/base.css';
import 'sleeker/variables.css';
import 'sleeker/utility-classes.css';
import LogoSvg from '../public/sleeker-logo.svg';
import type { AppProps } from 'next/app'
import Link from '../component/uikit/Link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='d:grid h:100% max-w:page mg-inl:auto' style={{ gridTemplateRows: "auto 1fr auto" }}>
      <header className='pos:sticky top:0 bg:gray12 clr:green9 w:100% mg-inl:auto pd-bl:s d:flex jc:space-between gap ai:center' style={{ top: 0 }}>
        <Link href="/">
          <LogoSvg className="max-w:--s1 --s1:8rem"/>
          {/* <img src='/sleeker-logo.svg' alt='sleeker logo' width='100px' /> */}
        </Link>
        {/* <nav className='d:flex gap '>
              <a href="/docs">Docs</a>
              <a href="https://github.com">GitHub</a>
            </nav> */}
        <div className='d:flex gap ai:center'>
          <a href="https://github.com">GitHub</a>
          {/* <a href="/css-gems">CSS Gems</a> */}
          <button onClick={() => {
            if (document.documentElement.classList.contains('slk-color-scheme:light')) {
              document.documentElement.classList.remove('slk-color-scheme:light');
              document.documentElement.classList.add('slk-color-scheme:dark');
            } else {
              document.documentElement.classList.remove('slk-color-scheme:dark');
              document.documentElement.classList.add('slk-color-scheme:light');
            }
          }} >dark/light</button>
        </div>
      </header>
      <div className='w:100% d:flex gap'>
        <aside className='min-w:--s1 --s1:10rem '>
          <nav className="d:flex column gap:xs pd-bl:s">
            <Link href="/docs/getting-started" className=''>Getting Started</Link>
            {/* <span className=''> Classes</span> */}
            <Link href="/docs/classes" className=''>Classes</Link>
            {/* <span className=' clr:gray10'> Other</span> */}
            <Link href="/docs/reset" className=''>CSS Reset</Link>
            {/* <a href="/docs/compact-words">Compact words</a> */}
            {/* <a href="/docs/one-part-classes">One-part Classes</a> */}
            {/* <a href="/docs/colors">Colors</a> */}
            {/* <a href="/docs/sizes">Sizes</a> */}
            {/* <a href="/docs/layout-utility-classes">Layout Patterns</a> */}
            {/* <span>Examples</span> */}
          </nav>
        </aside >
        <main className='w:100%'>
          <Component {...pageProps} />
        </main>
      </div >
      <footer className='pd d:flex jc:center ai:center' >
        styled with love and sleeker
      </footer >
    </div >
  );
}

export default MyApp
