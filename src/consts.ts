import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'ctrl-shift-y',
  description:
    'ctrl-shift-y is a blog for all the things I code',
  href: '#',
  author: 'Yehan Kaushik',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'author',
  },
  {
    href: '/projects',
    label: 'projects',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/yeshan-k',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/yeshan-kaushik-0459bb226/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:yeshankaushikyk@gmail.com',
    label: 'Email',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
