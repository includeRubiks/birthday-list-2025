import ListItem from "./components/Item.tsx"

function App() {
  return (
    <div className="text-center bg-dark text-light">
      <h1>Doug's christmas list</h1>
      <ol>
        <ListItem name="Filament!" url="https://www.amazon.com/dp/B0991P3Q25"/>
        <ListItem name="Motors (Get 4), for a robot" url="https://www.sparkfun.com/hobby-motor-gear.html"/>
        <ListItem name="The newest Raspberry Pi Zero" url="https://www.digikey.com/en/products/detail/raspberry-pi/SC1176/15298147"/>
        <ListItem name="Nozzles for my Ender 3!" url="https://www.amazon.com/Creality-Nozzles-3D-Printer-Extruder/dp/B093SKXHL3"/>
        <ListItem name="Thing so my printer can print multicolor!" url="https://www.microcenter.com/product/685299/bambu-lab-ams-lite"/>
        <ListItem name="Tiny computer!" url="https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K132-V11/26267927"/>
        <ListItem name="Cute synthesizer music thingy" url="https://www.digikey.com/en/products/detail/seeed-technology-co-ltd/107990333/26834485"/>
        <ListItem name="Ham Radio" url="https://www.dxengineering.com/parts/ysu-ft-891"/>
        <ListItem name="Another printer (I guess...)" url="https://www.amazon.com/Comgrow-Creality-Ender-Aluminum-220x220x250mm/dp/B07BR3F9N6"/>      
      </ol>
    </div>
  )
}

export default App;