import {
  Home_default,
  Home_active,
  Summary_default,
  Summary_active,
  Clip_default,
  Clip_active,
  Explore_default,
  Explore_active,
  My_default,
  My_active,
} from "@/components/icon";

import { type ReaditButtonProps } from "@/components/ui/button";

interface MenuRouteType extends ReaditButtonProps {
  title: string;
  route: string;
  drop?: MenuRouteType[];
}

export const MenuRoute: MenuRouteType[] = [
  {
    title: "Home",
    route: "/",
    variant: "MAIN_SIDE_BUTTON",
    defaultIcon: <Home_default />,
    activeIcon: <Home_active />,
  },
  {
    title: "요약",
    route: "/",
    variant: "MAIN_SIDE_BUTTON",
    defaultIcon: <Summary_default />,
    activeIcon: <Summary_active />,
  },
  {
    title: "스크랩",
    route: "/",
    variant: "MAIN_SIDE_BUTTON",
    defaultIcon: <Clip_default />,
    activeIcon: <Clip_active />,
  },
  {
    title: "탐색",
    route: "/",
    variant: "MAIN_SIDE_BUTTON",
    defaultIcon: <Explore_default />,
    activeIcon: <Explore_active />,
  },
  {
    title: "마이페이지",
    route: "/",
    variant: "MAIN_SIDE_BUTTON",
    defaultIcon: <My_default />,
    activeIcon: <My_active />,
    isActive: true,
    directionIcon: true,
    drop: [
      {
        title: "내가 만든 요약 리스트",
        route: "/mypage/my-summary",
        variant: "MAIN_SIDE_BUTTON",
      },
      {
        title: "카테고리별 보기",
        route: "/mypage/category",
        variant: "MAIN_SIDE_BUTTON",
      },
      {
        title: "계정",
        route: "/mypage/account",
        variant: "MAIN_SIDE_BUTTON",
      },
    ],
  },
];
