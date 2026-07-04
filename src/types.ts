/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  path: string;
  detailedServices: string[];
}

export interface TrustSignal {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  iconName: string;
}
