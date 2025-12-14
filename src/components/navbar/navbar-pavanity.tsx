import { useEffect, useState } from 'react'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { Link } from 'react-router-dom'
import NavMenuPavanity from './nav-menu-pavanity'
import { divisions } from '../../data/pavanity-data'

export default function NavbarPavanity() {
    const [toggle , setToggle] = useState<boolean>(false)
    const [current , setCurrent] = useState<string>('')
    const [scroll,setScroll] = useState<boolean>(false)

        useEffect(()=>{
            window.scrollTo(0,0)
            setCurrent(window.location.pathname)

            const handlerScroll=()=>{
                if(window.scrollY > 50){
                    setScroll(true)
                }else{setScroll(false)}
            }

            window.addEventListener('scroll',handlerScroll)

            return () => {
                window.removeEventListener('scroll',handlerScroll)
              };
        },[])

  return (
    <div className={`header-area header-v3-area header-v4 absolute z-50 left-0 right-0 top-[10px] sm:top-5 lg:top-7 ${scroll ? 'sticky-header bg-white dark:bg-title' : 'lg:bg-transparent'}`}>
        <div className="container">
            <div className="header-v4-wrapper relative flex items-center justify-between gap-5 bg-white lg:bg-opacity-80 rounded-[10px] dark:bg-title lg:dark:bg-opacity-80 px-5 py-3 md:py-5 lg:py-0">
                <Link to="/" aria-label="Pavanity Global">
                    <img src={logo} alt="Pavanity Global" className='dark:hidden w-[120px] sm:w-[200px]'/>
                    <img src={logoLight} alt="Pavanity Global" className='dark:block hidden w-[120px] sm:w-[200px]'/>
                </Link>
                <div className="flex items-center gap-6 lg:gap-8 2xl:gap-12">
                    <div className={`main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0 ${toggle ? 'active' : ''}`}>
                        <ul className="text-base lg:text-lg leading-none text-title dark:text-white lg:flex lg:gap-[20px] xl:gap-[30px]">

                            {/* Product Divisions Dropdown */}
                            <li className={`relative ${['/product-divisions'].includes(current) || current.startsWith('/product-divisions/') ? 'active' : ''}`}>
                                <Link to="#">Product Divisions<span></span></Link>
                                <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[280px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                    {divisions.map((division) => (
                                        <li key={division.id} className={`${current === `/product-divisions/${division.slug}` ? 'active' : ''}`}>
                                            <Link to={`/product-divisions/${division.slug}`} className="menu-item">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{division.name}</span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{division.tagline}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                                        <Link to="/product-divisions" className="menu-item text-primary font-medium">
                                            View All Products →
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Quality & Compliance */}
                            <li className={`${current === '/quality-compliance' ? 'active' : ''}`}>
                                <Link to="/quality-compliance">Quality & Compliance</Link>
                            </li>

                            {/* Private Label & OEM */}
                            <li className={`${current === '/private-label' ? 'active' : ''}`}>
                                <Link to="/private-label">Private Label & OEM</Link>
                            </li>

                            {/* Global Markets */}
                            <li className={`${current === '/global-markets' ? 'active' : ''}`}>
                                <Link to="/global-markets">Global Markets</Link>
                            </li>

                            {/* About */}
                            <li className={`${current === '/about' ? 'active' : ''}`}>
                                <Link to="/about">About</Link>
                            </li>

                            {/* Contact */}
                            <li className={`${current === '/contact' ? 'active' : ''}`}>
                                <Link to="/contact">Contact</Link>
                            </li>

                            {/* Mobile RFQ Button */}
                            <li className="lg:hidden mt-4">
                                <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-[5px] hover:bg-opacity-90 duration-300 w-full text-center">
                                    Request RFQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop RFQ Button */}
                    <Link to="/contact" className="hidden lg:inline-block bg-primary text-white px-5 xl:px-7 py-3 xl:py-4 rounded-[5px] text-sm xl:text-base font-medium hover:bg-opacity-90 duration-300 whitespace-nowrap">
                        Request RFQ
                    </Link>

                    <NavMenuPavanity toggle={toggle} setToggle={setToggle}/>
                </div>
            </div>
        </div>
    </div>
  )
}
