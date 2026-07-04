/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Home,
  Wrench,
  Building2,
  Phone,
  Shield,
  Clock,
  Star,
  MapPin,
  Droplets,
  Flame,
  HardHat,
  Car,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Award,
  ThumbsUp,
  AlertTriangle,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';

const iconMap = {
  Home,
  Wrench,
  Building2,
  Phone,
  Shield,
  Clock,
  Star,
  MapPin,
  Droplets,
  Flame,
  HardHat,
  Car,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Award,
  ThumbsUp,
  AlertTriangle,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Mail
};

export type IconType = keyof typeof iconMap;

interface LucideIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: IconType | string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className = '', size = 24, ...props }: LucideIconProps) {
  const IconComponent = iconMap[name as IconType] || Wrench;
  return <IconComponent className={className} size={size} {...props} />;
}
