import ListItem from "./components/Item.tsx"

function App() {
  return (
    <div className="text-center bg-dark text-light">
      <h1>Doug's christmas list</h1>
      <ol>
        <ListItem name="Filament!" url="https://www.amazon.com/dp/B0991P3Q25"/>
        <ListItem name="Flexible Filament" url="https://www.microcenter.com/product/626659/inland-175mm-translucent-blue-tpu-95a-3d-printer-filament-1kg-spool-(22-lbs)"/>
        <ListItem name="Adapter for radio" url="https://www.digikey.com/en/products/detail/te-connectivity-linx/ADP-SMAF-SMAF/1577233"/>
        <ListItem name="Motors (Get 4), for a robot" url="https://www.sparkfun.com/hobby-motor-gear.html"/>
        <ListItem name="The newest Raspberry Pi Zero" url="https://www.digikey.com/en/products/detail/raspberry-pi/SC1176/15298147"/>
        <ListItem name="Nozzles for my Ender 3!" url="https://www.amazon.com/Creality-Nozzles-3D-Printer-Extruder/dp/B093SKXHL3"/>
        <ListItem name="Thing so my printer can print multicolor! (Get soon or the price will go up $100)" url="https://www.microcenter.com/product/685299/bambu-lab-ams-lite"/>
        <ListItem name="Tiny computer!" url="https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K132-V11/26267927"/>
        <ListItem name="Cute synthesizer music thingy" url="https://www.digikey.com/en/products/detail/seeed-technology-co-ltd/107990333/26834485"/>
        <ListItem name="Switches for my mechanical keyboard" url="https://www.microcenter.com/product/649443/glorious-kailh-mechanical-keyboard-switches-(120-piece)"/>
        <ListItem name="Filament dehydrator so my prints don't suck" url="https://www.amazon.com/eSUN-Upgraded-Printing-Filaments-Dehydrating/dp/B0969L64TT/ref=sr_1_1?dib=eyJ2IjoiMSJ9.pODeeBdJ7M_Z6lIkJ-cleAXDLmHTFGqECyMCfzWn392fOxdSPH3iwxrgrLQvZ0He_s3MDkoTgey6BhwPSUqx-RbJEgj_lbpYDCThvfLmCLF4EVBhj5tJ4vN16IxN0REI1-Lpu61nG1PHT5XG4NgNt75FBdgB6mk_M_M86h7BmnwQgKnRd9uVm9YkBZlRJhXE8DmPLeNlQOdLURXVDF0TGZqmBBDpB6eW6h_OGI3OZcI.Lh__K-cNFzxVZeJbn8MAN8ZsAtv5-n_Iu4m-xp2rOFk&dib_tag=se&keywords=eSUN+eBox+3D+Printer+Filament+Dryer+Box%2C+Filament+Dryer+Storage+Enclosure%2C+eSUN+Filament+Dehydrator+Dry+Box+Keep+Filament+Dry+During+Printing+Filament+Holder+for+1.75mm+3.00mm+SUNLU+PLA+PLA%2B+ABS&qid=1763298859&sr=8-1"/>
        <ListItem name="Ham Radio" url="https://www.dxengineering.com/parts/ysu-ft-891"/>
        <ListItem name="Another printer (I guess...)" url="https://www.amazon.com/Comgrow-Creality-Ender-Aluminum-220x220x250mm/dp/B07BR3F9N6"/>      
      </ol>
    </div>
  )
}

export default App;