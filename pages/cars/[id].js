import { useRouter } from 'next/router'

export default function Car() {
  const router = useRouter()
  const { id } = router.query

  // renders the id value passed in by the url to the website
  // dynamic component
  return <h1> Hello {id} </h1>
}
