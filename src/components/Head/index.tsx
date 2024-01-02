interface HeadProps {
  title: string,
  description?: string
}

export default function Head({ title, description = '' }: HeadProps){
  document.title = `Food Comerce | ${title}`
}
