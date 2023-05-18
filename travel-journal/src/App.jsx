import Header from "./components/Header"
import List from "./components/List"
import data from './data'

export default function App() {
  const list = data.map(info => {
    return (
      <List
        key={info.key}
        {...info}
      />
    )
  })

  return (
    <>
      <Header />
      {list}
    </>
  )
}