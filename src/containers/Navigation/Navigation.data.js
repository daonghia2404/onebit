import { EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';

export const dataNavigationMenu = [
  {
    icon: EIconName.Home,
    link: Paths.Home,
    title: 'Home',
  },
  {
    icon: EIconName.Launch,
    link: Paths.Launchpad,
    title: 'Lauch',
  },
  {
    icon: EIconName.Incubator,
    link: Paths.Incubator,
    title: 'Incubator',
  },
  {
    icon: EIconName.Advertising,
    link: Paths.Advertising,
    title: 'Advertising',
  },
  {
    icon: EIconName.Insurange,
    link: ' ',
    title: 'Insurance',
  },
  {
    icon: EIconName.Stake,
    link: Paths.Stake,
    title: 'Stake',
  },
  {
    icon: EIconName.User,
    link: Paths.User,
    title: 'User',
  },
];
