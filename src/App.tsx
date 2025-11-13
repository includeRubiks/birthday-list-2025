import ListItem from "./components/Item.tsx"

function App() {
  return (
    <div className="text-center">
      <h1>Doug's christmas list</h1>
      <ol>
        <ListItem name="Filament!" url="https://www.amazon.com/dp/B0991P3Q25"/>
        <ListItem name="Nozzles for my Ender 3!" url="https://www.amazon.com/Creality-Nozzles-3D-Printer-Extruder/dp/B093SKXHL3"/>
        <ListItem name="Thing so my printer can print multicolor!" url="https://www.microcenter.com/product/685299/bambu-lab-ams-lite"/>
        <ListItem name="Another printer (I guess...)" url="https://www.amazon.com/Comgrow-Creality-Ender-Aluminum-220x220x250mm/dp/B07BR3F9N6"/>      
      </ol>
    </div>
  )
}

export default App;