import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import Plus from './Plus';
import Launch from './Launch';
import Advertising from './Advertising';
import Insurange from './Insurange';
import Stake from './Stake';
import User from './User';
import Incubator from './Incubator';
import Home from './Home';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Instagram from './Instagram';
import ThreeDots from './ThreeDots';
import Telegram from './Telegram';
import Youtube from './Youtube';
import LinkedIn from './LinkedIn';
import ArrowUp from './ArrowUp';
import Menu from './Menu';
import Flag from './Flag';
import Dollar from './Dollar';
import Figma from './Figma';
import Clock from './Clock';
import Code from './Code';
import TrendingUp from './TrendingUp';
import Layout from './Layout';
import Zap from './Zap';
import PhoneCall from './PhoneCall';
import Mail from './Mail';

const Icon = ({ name, className, color, onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.Plus:
        return <Plus color={color} />;
      case EIconName.Launch:
        return <Launch color={color} />;
      case EIconName.Advertising:
        return <Advertising color={color} />;
      case EIconName.Insurange:
        return <Insurange color={color} />;
      case EIconName.Stake:
        return <Stake color={color} />;
      case EIconName.User:
        return <User color={color} />;
      case EIconName.Incubator:
        return <Incubator color={color} />;
      case EIconName.Home:
        return <Home color={color} />;
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.Twitter:
        return <Twitter color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.Instagram:
        return <Instagram color={color} />;
      case EIconName.ThreeDots:
        return <ThreeDots color={color} />;
      case EIconName.Telegram:
        return <Telegram color={color} />;
      case EIconName.Youtube:
        return <Youtube color={color} />;
      case EIconName.LinkedIn:
        return <LinkedIn color={color} />;
      case EIconName.ArrowUp:
        return <ArrowUp color={color} />;
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.Flag:
        return <Flag color={color} />;
      case EIconName.Dollar:
        return <Dollar color={color} />;
      case EIconName.Figma:
        return <Figma color={color} />;
      case EIconName.Clock:
        return <Clock color={color} />;
      case EIconName.Code:
        return <Code color={color} />;
      case EIconName.TrendingUp:
        return <TrendingUp color={color} />;
      case EIconName.Layout:
        return <Layout color={color} />;
      case EIconName.Zap:
        return <Zap color={color} />;
      case EIconName.PhoneCall:
        return <PhoneCall color={color} />;
      case EIconName.Mail:
        return <Mail color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
