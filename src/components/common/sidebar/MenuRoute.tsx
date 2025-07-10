import {
  HomeDefault,
  HomeActive,
  SummaryDefault,
  SummaryActive,
  ClipDefault,
  ClipActive,
  ExploreDefault,
  ExploreActive,
  MyDefault,
  MyActive,
} from '@/components/icon'

import { type ReaditButtonProps } from '@/components/ui/Button'

interface MenuRouteType extends ReaditButtonProps {
  title: string
  route?: string
  drop?: MenuRouteType[]
}

export const MenuRoute: MenuRouteType[] = [
  {
    title: 'Home',
    route: '/',
    variant: 'MAIN_SIDE_BUTTON',
    defaultIcon: <HomeDefault />,
    activeIcon: <HomeActive />,
  },
  {
    title: '요약',
    route: '/summary',
    variant: 'MAIN_SIDE_BUTTON',
    defaultIcon: <SummaryDefault />,
    activeIcon: <SummaryActive />,
  },
  {
    title: '스크랩',
    route: '/clip',
    variant: 'MAIN_SIDE_BUTTON',
    defaultIcon: <ClipDefault />,
    activeIcon: <ClipActive />,
  },
  {
    title: '탐색',
    route: '/explore',
    variant: 'MAIN_SIDE_BUTTON',
    defaultIcon: <ExploreDefault />,
    activeIcon: <ExploreActive />,
  },
  {
    title: '마이페이지',
    variant: 'MAIN_SIDE_BUTTON',
    defaultIcon: <MyDefault />,
    activeIcon: <MyActive />,
    isActive: true,
    directionIcon: true,
    drop: [
      {
        title: '내가 만든 요약 리스트',
        route: '/mypage/summary',
        variant: 'MAIN_SIDE_BUTTON',
      },
      {
        title: '카테고리별 보기',
        route: '/mypage/category',
        variant: 'MAIN_SIDE_BUTTON',
      },
      {
        title: '계정',
        route: '/mypage/account',
        variant: 'MAIN_SIDE_BUTTON',
      },
    ],
  },
]
