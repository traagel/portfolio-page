import Head from 'next/head'

interface MetaTagsProps {
  title: string
  description: string
  ogImage?: string
  ogType?: string
}

export function MetaTags({ title, description, ogImage, ogType = 'website' }: MetaTagsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://traagel.dev'
  const fullTitle = `${title} | Mart Traagel`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}
    </Head>
  )
}

