import ListItem from "./components/Item.tsx"

function App() {
  return (
    <div className="text-center">
      <h1>Doug's birthday list</h1>
      <ol>
        <ListItem name="Filament!" url="https://www.amazon.com/dp/B0991P3Q25"/>
      </ol>
    </div>
  )
}

export default App;