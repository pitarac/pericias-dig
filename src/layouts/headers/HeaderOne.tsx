'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface DataType {
  id: number
  title: string
  link: string
  has_dropdown: boolean
  sub_menus?: {
    title: string
    link: string
  }[]
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: 'Início',
    link: '/',
    has_dropdown: false
  },
  {
    id: 2,
    title: 'Sobre',
    link: '/about',
    has_dropdown: false
  },
  {
    id: 3,
    title: 'Serviços',
    link: '/service',
    has_dropdown: true,
    sub_menus: [
      { title: 'Projetos', link: '/project' },
      { title: 'Perguntas e respostas', link: '/faq' }
    ]
  },
  {
    id: 4,
    title: 'Conheça',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { title: 'Projetos', link: '/project' },
      { title: 'Detalhe de projetos', link: '/project-details' },

      { title: 'Quem Somos', link: '/team' },
      { title: 'Perguntas e respostas', link: '/faq' }
    ]
  },
  {
    id: 5,
    title: 'Artigos',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { title: 'Blog', link: '/blog' },
      { title: 'Artigos', link: '/blog-details' }
    ]
  },
  {
    id: 5,
    title: 'Contato',
    link: '/contact',
    has_dropdown: false
  }
]

const HeaderOne = () => {
  const [open, setOpen] = useState<Boolean>(false)
  const handleActive = () => setOpen(!open)

  const [navTitle, setNavTitle] = useState<string>('')

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle('')
    } else {
      setNavTitle(menu)
    }
  }

  return (
    <>
      <div id="navigation" className="navbar-light bg-faded site-navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-20 align-self-center">
              <div className="site-logo">
                <Link href="/">
                  <img src="assets/img/logo-top.png" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-60 d-flex justify-content-center">
              <nav id="main-menu">
                <ul>
                  {menu_data.map((item, i) => (
                    <li
                      key={i}
                      className={`${
                        item.has_dropdown ? 'menu-item-has-children' : ''
                      }`}
                    >
                      <Link href={item.link}>{item.title}</Link>
                      {item.has_dropdown && (
                        <ul>
                          {item?.sub_menus?.map((sub_item, index) => (
                            <li key={index}>
                              <Link href={sub_item.link}>{sub_item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-20 d-none d-xl-block text-end align-self-center">
              <Link href="/contact" className="btn_one">
                Envie seu caso
              </Link>
            </div>

            <div
              id="sm_menu_ham"
              onClick={handleActive}
              className={`${open ? 'open' : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`sm_menu_outer slide ${open ? 'active' : ''}`}>
              <ul className="mobile_menu">
                {menu_data.map((item, i) => (
                  <li
                    key={i}
                    className={`${item.has_dropdown ? 'hasChild' : ''} ${
                      navTitle === item.title ? 'active' : ''
                    }`}
                    onClick={() => openMobileMenu(item.title)}
                  >
                    <Link href={item.link}>{item.title}</Link>
                    {item.has_dropdown && (
                      <ul className="sub-menu">
                        {item?.sub_menus?.map((sub_item, index) => (
                          <li
                            key={index}
                            className="back"
                            onClick={() => openMobileMenu(item.title)}
                          >
                            <Link href={sub_item.link}>{sub_item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderOne
