import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="mx-auto  px-10">{children}</section>
}
