'use client'

import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import { Button } from '../../ui/Button'
import { Alarm } from '@/components/icon'
import { MenuRoute } from './MenuRoute'
import { useRouter, usePathname } from 'next/navigation'
import { Collapse } from '@/components/motion'

const Sidebar = () => {
  const router = useRouter()
  const path = usePathname()

  const [openMyMenu, setOpenMyMenu] = useState(false)

  return (
    <main className="flex h-full min-w-[272px] flex-col justify-between rounded-xl bg-white p-5">
      <section className="flex flex-col items-center gap-5 pt-2">
        <Image width={114} height={50} src={'/assets/logo.png'} alt="logo" />
        <section className="flex w-full flex-col gap-2">
          {MenuRoute.map((buttonProps, i) => {
            //TODO: openMyMenu부분 로직 훅으로 분리 필요

            const hasChildren = buttonProps.drop?.length

            return (
              <Fragment key={`SidebarButton_${i}`}>
                <Button
                  {...buttonProps}
                  isActive={hasChildren ? openMyMenu : path === buttonProps.route}
                  onClick={() => {
                    if (hasChildren) {
                      setOpenMyMenu(prev => !prev)
                    } else {
                      router.push(buttonProps.route!)
                    }
                  }}
                >
                  {buttonProps.title}
                </Button>
                <Collapse isOpen={buttonProps.drop! && openMyMenu}>
                  <div className="flex flex-col gap-1">
                    {buttonProps.drop?.map((childButtonProps, j) => (
                      <Button
                        key={`SidebarButton_SubItem_${j}`}
                        {...childButtonProps}
                        isActive={path === childButtonProps.route}
                        onClick={() => {
                          router.push(childButtonProps.route!)
                        }}
                      >
                        {childButtonProps.title}
                      </Button>
                    ))}
                  </div>
                </Collapse>
              </Fragment>
            )
          })}
          <hr className="text-gray-medium mt-2" />
        </section>
      </section>
      <section className="flex">
        <Alarm />
      </section>
    </main>
  )
}

export default Sidebar
