import { useGhostSettings } from '@/hooks/useGhostSetting';
import Head from 'next/head';
import { useRouter } from 'next/router';

// !STARTERCONF Change these default meta
const defaultMeta = {
  meta_title: 'Hanacare App',
  meta_description:
    'HanaCare chăm sóc sức khỏe và hạnh phúc của mọi người',
};
type SeoProps = {
  metaData?: any
}

export default function Seo({ metaData }: SeoProps) {
  const router = useRouter();
  const { data } = useGhostSettings();

  const meta = metaData || data?.settings || defaultMeta

  return (
    <Head>
      <title>{meta.meta_title}</title>
      <meta content={meta.meta_description} name='description' />
      <link rel='canonical' href={`https://hanacare.vn${router.asPath}`} />
      <meta property='og:description' content={meta.og_description} />
      <meta property='og:title' content={meta.og_title} />
      <meta name='image' property='og:image' content={meta.og_image} />
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
    </Head>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
