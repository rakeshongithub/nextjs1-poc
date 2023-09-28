
export default function Home({params: {locale}}: {params: {locale: string}}) {
  console.log({home: locale});
  return (
    <main>
      Landing Page {locale}
    </main>
  )
}
