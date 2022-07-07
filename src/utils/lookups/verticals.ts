export const AllowedVerticalGroups = {
  health: 'Health',
  essentials: 'Essentials',
  extracoverage: 'Extra Coverage',
} as const;

export type TAllowedVerticalGroups = keyof typeof AllowedVerticalGroups;

export type TVerticalGroupLookup = {
  title: string;
  key: TAllowedVerticalGroups;
  icon: string;
  items: TVerticalLookup[];
}

export type VerticalType =
  | 'PUBLIC_HEALTH'
  | 'PRIVATE_HEALTH'
  | 'EXPAT_HEALTH'
  | 'LIABILITY'
  | 'DENTAL'
  | 'LIFE'
  | 'HOUSEHOLD'
  | 'LEGAL'
  | 'BIKE'
  | 'DISABILITY'
  | 'IT_LIABILITY';

export type TVerticalLookup = {
  group: TAllowedVerticalGroups;
  title: string;
  shortTitle?: string;
  description: string;
  excerpt: string;
  icon: string;
  icon2x?: string;
  icon3x?: string;
  banner?: string;
  banner2x?: string;
  banner3x?: string;
};

import * as banners from 'static/verticals/banners';
import * as img from 'static/verticals/img';
import * as icons from 'static/verticals/icons'

const iconList: Record<TAllowedVerticalGroups, string> = icons

export const verticalsLookup: Record<VerticalType, TVerticalLookup> = {
  PUBLIC_HEALTH: {
    group: 'health',
    title: 'Public health',
    shortTitle: 'Public health',
    excerpt: 'Choose from one of the four biggest public health providers',
    description: '',
    icon: img.publicHealth,
    icon2x: img.publicHealth2x,
    icon3x: img.publicHealth3x,
  },
  PRIVATE_HEALTH: {
    group: 'health',
    title: 'Private health',
    shortTitle: 'Private health',
    description: '',
    excerpt: 'Comprehensive coverage for those who want a little extra',
    icon: img.privateHealth,
    icon2x: img.privateHealth2x,
    icon3x: img.privateHealth3x,
    banner: undefined,
    banner2x: undefined,
    banner3x: undefined,
  },
  EXPAT_HEALTH: {
    group: 'health',
    title: 'Expat health',
    shortTitle: 'Expat health',
    description: '',
    excerpt: 'Health insurance for those new to Germany',
    icon: img.expat,
    icon2x: img.expat2x,
    icon3x: img.expat3x,
    banner: undefined,
    banner2x: undefined,
    banner3x: undefined,
  },
  DENTAL: {
    group: 'health',
    title: 'Dental insurance',
    shortTitle: 'Dental',
    excerpt: 'Comprehensive dental coverage with unlimited cleanings',
    description:
      'Dental insurance is an extension for public health insurance and covers the additional needs you might have for your teeth (with no waiting times). This includes high-quality fillings, surgeries for root canals, and unlimited professional cleanings. We also offer an advanced plan that covers teeth replacement surgeries, and has a whitening allowance.',
    icon: img.dental,
    icon2x: img.dental2x,
    icon3x: img.dental3x,
    banner: banners.dental,
    banner2x: banners.dental2x,
    banner3x: banners.dental3x,
  },
  LIABILITY: {
    group: 'essentials',
    title: 'Personal liability insurance',
    shortTitle: 'Personal liability',
    excerpt: 'Protection for damage you cause to people or their belongings',
    description:
      "Liability insurance covers any damage you do to other people’s belongings or if you injure someone. That includes the injured person's hospital bills and any missed wages from being unable to work. Because of how costly this can get, around 80% of all Germans have liability insurance. Additionally, liability insurance will cover damages you’ve done to a flat you’re renting, like scratches on the floor from small animals as well as the cost to replace lost keys.",
    icon: img.liability,
    icon2x: img.liability2x,
    icon3x: img.liability3x,
    banner: banners.liability,
    banner2x: banners.liability2x,
    banner3x: banners.liability3x,
  },
  LIFE: {
    group: 'essentials',
    shortTitle: 'Life',
    title: 'Life insurance',
    excerpt: 'Support for your loved ones in the event of your passing',
    description:
      'Life insurance is a policy that pays out a fixed sum (of your choosing) if you pass away. Coverage is generally used by dependents and loved ones to pay for the cost of living until they regain financial stability, and includes a spouse, child, or even a business partner.',
    icon: img.life,
    icon2x: img.life2x,
    icon3x: img.life3x,
    banner: banners.life,
    banner2x: banners.life2x,
    banner3x: banners.life3x,
  },
  HOUSEHOLD: {
    group: 'extracoverage',
    shortTitle: 'Household',
    title: 'Household contents insurance',
    excerpt: 'Protection for your home and your belongings',
    description:
      'Household contents insurance covers any belongings in your home that aren’t attached in some way to the building. This can include things like furniture, dishes, electronics, clothing, books, and other belongings. You’re covered in case of a break-in, fire, water damage, or other unexpected events where your belongings might be damaged or stolen.',
    icon: img.household,
    icon2x: img.household2x,
    icon3x: img.household3x,
    banner: banners.household,
    banner2x: banners.household2x,
    banner3x: banners.household3x,
  },
  BIKE: {
    group: 'extracoverage',
    shortTitle: 'Bike',
    title: 'Bike insurance',
    excerpt: 'Coverage for bikes in the case of theft, damages, and more',
    description:
      'Bike insurance offers protection for newly purchased bikes less than 6 months old. Our coverage protects both e-bikes and normal bikes against theft (including parts and battery). You can extend your coverage to include vandalism, production errors, and even wear and tear.',
    icon: img.bike,
    icon2x: img.bike2x,
    icon3x: img.bike3x,
    banner: banners.bike,
    banner2x: banners.bike2x,
    banner3x: banners.bike3x,
  },
  LEGAL: {
    group: 'extracoverage',
    shortTitle: 'Legal',
    title: 'Legal insurance',
    excerpt: 'Protection for your legal rights',
    description:
      'Legal insurance offers protection in five areas: disorderly conduct, automotive, professional, private life, and real estate disputes. This provides you with comprehensive legal coverage for most situations from disturbing the neighbors with loud music (disorderly conduct), getting into a car accident (automotive), disputing an unlawful termination (professional), identity theft (private life), and illegal increases in rent (real estate).',
    icon: img.legal,
    icon2x: img.legal2x,
    icon3x: img.legal3x,
    banner: banners.legal,
    banner2x: banners.legal2x,
    banner3x: banners.legal3x,
  },
  DISABILITY: {
    group: 'essentials',
    shortTitle: 'Disability',
    title: 'Disability insurance',
    excerpt: 'Replaces lost income if you’re unable to work',
    description: 'Disability insurance description',
    icon: img.disability,
    icon2x: img.disability2x,
    icon3x: img.disability3x,
  },
  IT_LIABILITY: {
    group: 'extracoverage',
    shortTitle: 'Professional IT liability',
    title: 'Professional IT liability',
    excerpt: 'Cover mistakes made as an IT freelancer',
    description: '',
    icon: img.itliability,
    icon2x: img.itliability2x,
    icon3x: img.itliability3x
  }
};

export const groupedVerticals: TVerticalGroupLookup[] = (Object.keys(AllowedVerticalGroups) as Array<TAllowedVerticalGroups>).map(
  (verticalGroupKey) => ({
    title: AllowedVerticalGroups[verticalGroupKey],
    key: verticalGroupKey,
    icon: iconList[verticalGroupKey],
    items: Object.values(verticalsLookup)
      .filter((vertical) => vertical.group === verticalGroupKey)
      .map((v) => v),
  })
);
