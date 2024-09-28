export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'មន្ទីរពេទ្យបង្អែកខេត្តកំពង់ចាម',
    subtitle: 'Official blog page',
    description: 'Cambodia Kampong Cham provincial hospital blog page',
    image: {
        src: '/front-page-image.jpg',
        alt: 'KPC hospital'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About us',
            href: '/about'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://facebook.com/'
        },
    ],
    hero: {
        title: 'Welcome Kampong Cham Provincial Hospital blog page',
        text: "Some info about KPC Hospital and this page",
        image: {
            src: '/front-page-image.jpg',
            alt: 'kpc hospital won 1st for the best provincial hospital in cambodia'
        },
        actions: [
            {
                text: 'Contact',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
